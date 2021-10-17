const API_KEY ='3c7844e5f1c003adb7e62ecf0d6885b7'
const baseUrl = 'https://api.themoviedb.org/3'
const pathTrending = '/trending/all/week'
const pathUpcoming = '/movie/upcoming'
const queryParam = `?api_key=${API_KEY}`
const language = '&language=en-US'
const page1 = '&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


const cardTrending = document.getElementById('card-trending');
const cardUpcoming = document.getElementById('card-upcoming');


//-------------------------------------------------//
const fetchTrendingMovie = async() => {
    try{
        // const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=3c7844e5f1c003adb7e62ecf0d6885b7'
        const url = baseUrl + pathTrending + queryParam;
        let response = await fetch(url);
        let dataTrending = await response.json();
   
        console.log("data trending", dataTrending);
        showMoviesTrending(dataTrending.results)
    
        // console.log("data trending", dataTrending);
        // showMoviesTrending(dataTrending.results)
    }
    catch (error) {
        console.log("ERROR : fetch trending movie error", error);
      }
}
fetchTrendingMovie();
//-------------------------------------------------//
const fetchUpcomingMovie = async () => {
    try{
        // const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&page=1'
        const url = baseUrl + pathUpcoming + queryParam + page1;
        let response = await fetch(url);
        dataUpcoming = await response.json();
        console.log("data upcoming", dataUpcoming);
        showMoviesUpcoming(dataUpcoming.results);
    }
    catch(error){
        console.log("ERROR : fetch upcoming movie error", error);
    }
}
fetchUpcomingMovie();
//-------------------------------------------------//

const fetchGenre = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=3c7844e5f1c003adb7e62ecf0d6885b7&language=en-US'
    let response = await fetch(url);
    let dataGenre = await response.json();
    console.log("List of Genre", dataGenre);
}
fetchGenre();
//-------------------------------------------------//

// const cardUpcoming = document.getElementsByClassName("card-upcoming");
//-------------------------------------------------//
// const renderMovieUpcoming = async (movieUpcoming) => {

//     const cardUpcomingHTML = movieUpcoming.map((e) =>{
//         return`
//             <h1>${e.name}></h1>
//         `
//     })
//     cardUpcoming.innerHTML = cardUpcomingHTML.join("");
 

// }

function showMoviesTrending(dataTrending) {
    cardTrending.innerHTML = '';

    dataTrending.forEach(movie => {

            const {title, poster_path, vote_average, overview, id} = movie;
            const movieTrending = document.createElement('div');
            movieTrending.classList.add('movie');
            movieTrending.innerHTML = `
                <div class="content-row content-trending">
                    <h3>${title}</h3>
                    <div id="card-trending">    
                    <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        
                    </div>
                    <div class="overview">
                              <button class="know-more" id="${id}">Watch now</button>
                    </div>
            </div>
                </div>
             
            
            `
    
            cardTrending.appendChild(movieTrending);

        

        // document.getElementById(id).addEventListener('click', () => {
        //   console.log(id)
        // //   openNav(movie)
        // })
    })
}

function showMoviesUpcoming(dataUpcoming) {
    cardUpcoming.innerHTML = '';

    dataUpcoming.forEach(movie => {

            const {title, poster_path, vote_average, overview, id} = movie;
            const movieUpcoming = document.createElement('div');
            movieUpcoming.classList.add('movie');
            movieUpcoming.innerHTML = `
                <div class="content-row content-upcoming">
                    <h3>${title}</h3>
                    <div id="card-upcoming">    
                    <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        
                    </div>
                    <div class="overview">

                        <button class="know-more" id="${id}">Watch now</button>
                    </div>
            </div>
            </div>
            
            `
    
            cardUpcoming.appendChild(movieUpcoming);

        

        // document.getElementById(id).addEventListener('click', () => {
        //   console.log(id)
        // //   openNav(movie)
        // })
    })
}




var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

                        // <h3>Overview</h3>
                        // ${overview}
                        // <br/> 
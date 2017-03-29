//Module pattern
//Genom att implementera module pattern kan man skydda metoder och variabler från att 
//hamna i det globala scope’t där det finns möjlighet att de skulle kunna skrivas över.
//Koden befinner sig i en closure och det vi returnerar är det som vi kan komma åt

//Object
var movieDatabase = (function(){

//Array with objects and arrays
var moviesArray = [

{
// Dope har ingen rating/average-rating och ska INTE bli worst rated movie = fixat.
    title: "Dope",
    year: 2015,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MjYyNTk0Nl5BMl5BanBnXkFtZTgwODc1NzQ1NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    genres: ["Comedy", "Crime", "Drama"],
    ratings: [],
    average: [],
    id: "dope",
    actors: [
    {
        name: "Shameik Moore"
    },
    {
        name: "Tony Revolori"
    }
    ]
},
{
    title: "Ex Machina",
    year: 2014,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    genres: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    ratings: [10, 9, 8],
    average: [],
    id: "ex-machina",
    actors: [
    {
        name: "Alicia Vikander"
    },
    {
        name: "Domhnall Gleeson"
    }
    ]
},
{
    title: "The Goonies",
    year: 1985,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTlmMWU5YTQtOWMxMi00OWE0LTg2MDItMjEyZDBjNWY0NDdhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genres: ["Adventure", "Comedy", "Family"],
    ratings: [8, 9, 10],
    average: [],
    id: "the-goonies",
    actors: [
    {
        name: "Sean Astin"
    },
    {
        name: "Josh Brolin"
    }
    ]
},

{
    title: "The Lobster",
    year: 2015,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg",
    genres: ["Comedy", "Drama", "Romance", "Sci-Fi"],
    ratings: [4, 5, 6, 7, 8, 10],
    average: [],
    id: "the-lobster",
    actors: [
    {
        name: "Colin Farrell"
    },
    {
        name: "Rachel Weisz"
    }
    ]
},

{
    title: "Love Actually",
    year: 2003,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [4, 7],
    average: [],
    id: "love-actually",
    actors: [
    {
        name: "Hugh Grant"
    },
    {
        name: "Emma Thompson"
    }
    ]
},

{
    title: "Moonlight",
    year: 2016,
    cover: "http://cdn.a24films.com/assets/MOONLIGHT-QUOTEPOSTER-WEB.jpg",
    genres: ["Drama"],
    ratings: [10, 9, 10],
    average: [],
    id: "moonlight",
    actors: [
    {
        name: "Mahershala Ali"
    },
    {
        name: "Shariff Earp"
    }
    ]
},

{
    title: "Sameblod",
    year: 2016,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM4NmZjNWItM2JjNS00Y2Q3LWI0NzUtZDRjZjZlYWJlNjhhXkEyXkFqcGdeQXVyMzM0MjEwNzQ@._V1_SY1000_CR0,0,699,1000_AL_.jpg",
    genres: ["Drama"],
    ratings: [10,8,5],
    average: [],
    id: "sameblod",
    actors: [
    {
        name: "Lene Cecilia Sparrok"
    },
    {
        name: "SMia Erika Sparrok"
    }
    ]
},

{
    title: "The Shining",
    year: 1980,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genres: ["Drama", "Horror"],
    ratings: [8, 10, 10, 5],
    average: [],
    id: "the-shining",
    actors: [
    {
        name: "Hugh Grant"
    },
    {
        name: "Emma Thompson"
    }
    ]
},
{
    title: "Spirited Away",
    year: 2001,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_.jpg",
    genres: ["Adventure", "Anime", "Family"],
    ratings: [10, 10, 8, 9],
    average: [],
    id: "spirited-away",
    actors: [
    {
        name: "Rumi Hiiragi"
    },
    {
        name: "Miyu Irino"
    }
    ]
},
{
    title: "The SpongeBob Movie: Sponge Out of Water",
    year: 2015,
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYyNDczNTE0MF5BMl5BanBnXkFtZTgwNjkzNDYxMzE@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
    genres: ["Adventure", "Comedy", "Family", "Kids"],
    ratings: [8, 7, 8],
    average: [],
    id: "spongebob",
    actors: [
    {
        name: "Antonio Banderas"
    },
    {
        name: "Eric Bauza"
    }
    ]
}

];

    return {

        //return the moviesArray
        returnMoviesArray: (moviesArray) => {
            return moviesArray;
        },

        //DOM-manipulationsfunktion som printar ut arrayer som skickas in 
        showAllMovies: (moviesArray) => {
            console.log("hela Listan")
        //en tom sträng som ska fyllas med värdet som sparas i showHTML (template literals)
        //for-loopen går igenom varje objekt i arrayen och plussar på showHTML
        var movieList = document.getElementById("movieList");
        let showHTML = "";
            for (var i = 0; i < moviesArray.length ;i++){
                showHTML += `
                <div class="items">
           
                <div class="movies-html-left">
                    <p><img src="${moviesArray[i].cover}" class="img"> </p>
                </div>
                
                <div class="movies-html-right">
                    <h1>${moviesArray[i].title}</h1>
                    <p>Release Year: ${moviesArray[i].year} </p>
                    <p>Genres: ${moviesArray[i].genres.join(", ")} </p>
                    <p>Ratings: ${moviesArray[i].ratings} </p>
                    <p>Avrage rating: ${moviesArray[i].average} </p>
                
                </div>
                
                </div>`;

            // showHTML läggs till på id movielist och visas på indexsidan genom innerHTML
            movieList.innerHTML = showHTML;
            }
        },
/*--------------------------*/      
        // MOVIE CONSTRUCTOR 

        //konstruktorfunktion som skapar objekt 
        //parametrarna sparas när nya objekt skapas utifrån konstruktorn
        movieConstructor: function (title, year, cover, genres, ratings) {
            this.title = title;
            this.year = year;
            this.cover = cover;
            this.genres = genres.split(", ");
            this.ratings = ratings;
        },

        //hämtar värden från inputfältet på indexsidan, value kopplas till variablerna
        getUserInput: () => {
            var title = document.getElementById('title').value
            var year = document.getElementById('year').value
            var cover = document.getElementById('cover').value
            var genres = document.getElementById('genres').value
            var ratings = document.getElementById('ratings').value
            // var actors = document.getElementById('actors').value

            //ett nytt konstruktorobjekt skapas genom new, och värdena binds 
            //till det nya objektet som skapas (newMovie)
            var newMovie = new movieDatabase.movieConstructor(title, year, cover, genres, ratings);
            //skickar vidare det nya objektet till pushMovie-funktionen
            movieDatabase.pushMovieToDatabase(newMovie); 
            // movieDatabase.averageRating(); 
        },

        pushMovieToDatabase: (movie) => {
            //pushes the input from the user/from the getUserInput function to the moviesArray.
            //creates a new array and push it into the moviesArray
            let newMoviesArray = moviesArray;
            newMoviesArray.push(movie);
            moviesArray = newMoviesArray;

            // movieDatabase.averageRating();
        },


        inputAllMovies: () => { 
            //sends moviesArray to the showAllMovies function (to display it on index.html)
            movieDatabase.showAllMovies(moviesArray); 
        },

        inputGenre: (choice) => { 
            //we send the users choice (value) to the filterGenre function and then we send the result
            //from that function to the showAllMovies function. (to display it on index.html)
            const userChoice = movieDatabase.filterGenre(choice.target.value);
            movieDatabase.showAllMovies(userChoice);    
        },
        
        filterGenre: (genre) => { 
            const filteredGenres = [];
            //loopar igenom moviesArrayen 
                for (let i = 0; i < moviesArray.length; i++) {
            //sparar movieArrayens genres i en variabel för att kunna loopa igenom
            //den för att hitta de genres som motsvarar användarens input som
            //har skcikats in i funktionen, därefter pushas de in en efter en i en ny array
                    let genresArray = moviesArray[i].genres;
                        for (let j = 0; j < genresArray.length; j++) {
                            if (genresArray[j] == genre) {
                            filteredGenres.push(moviesArray[i]);
                   }
               }
           }
           return filteredGenres;
        },

        inputYear: function (choice) { 
            //we send the users choice (value) to the sortMovieByYear function and then we send the 
            //result from that function to the showAllMovies function. (to display it on index.html)
            let userYear = movieDatabase.sortMovieByYear(choice.target.value);
            

            movieDatabase.showAllMovies(userYear); 
        },

        //filter är en funktion som tar en funktion som argument och returnerar en ny filtrerad 
        //version av arrayen. här filtreras en ny array ut dvs movie och property year 
        //de värdena jämförs sedan med den parametern som skickades in 
        sortMovieByYear: (userYear) => {
            return moviesArray.filter((movie) => {
            return movie.year == userYear;
            });
        }, 

            //ett knapptryck på index-sidan aktiverar denna funktion
            //den kickar i sin tur igång showMaxRating-funktionen som sedan
            //skickar resultatet från funktionen vidare till showAllMovies
        inputMaxRatings: () => {
            let maxRating = movieDatabase.showMaxRating();
            movieDatabase.showAllMovies(maxRating);  
            },

        showMaxRating: () => {
            var averageRatings = [];
            var allAverageRatings = [];
                for (let i = 0; i < moviesArray.length; i++) {
            //tar ut alla average ur moviesArray
                    averageRatings = moviesArray[i].average;
       //säkerställa att arrayen inte är tom
                if (moviesArray[i].average.length !== 0){
            //pushar in dem i en array
                    allAverageRatings.push(averageRatings);
                }
            }    
            //math.max går igenom total-arrayen och tar ut det högsta värdet
            var max = Math.max(...allAverageRatings);
            //hämtar ut avrage ur moviesArray genom filter och jämför
            //average med max-värdet. pushar in det i en ny aray och returnerar.
            var finalAverageRatings=[];
            return moviesArray.filter((movie) => {
                if(movie.average == max){
                    finalAverageRatings.push(movie) 
                    console.log(finalAverageRatings)     
                    return finalAverageRatings;}
            });
        },

        //the same functions as above (minimum average rating)
        inputMinRatings: () => {
            const minRating = movieDatabase.showMinRating();
            movieDatabase.showAllMovies(minRating);   
            },
        //the same functions as above (minimum average rating)
        showMinRating: () => {
            var averageRatings = [];
            var allAverageRatings = [];
                for (let i = 0; i < moviesArray.length; i++) {
                    averageRatings = moviesArray[i].average;
                if (moviesArray[i].average.length !== 0){
                    //pushar in dem i en array en efter en
                    allAverageRatings.push(averageRatings)
                }
            }
            var min = Math.min(...allAverageRatings);
            var finalAverageRatings=[];
            return moviesArray.filter((movie) => {
                if(movie.average == min){
                    finalAverageRatings.push(movie)
                         console.log(finalAverageRatings)     
                    return finalAverageRatings;}
            });
        },

        inputGetTitle: function (choice) {
            console.log("click")
            var getMovieFromUser = movieDatabase.addGenre(choice.target.value);
            movieDatabase.showAllMovies(getMovieFromUser);
            },

        addGenre: function () {
            //get user input
            let getTitle = document.getElementById("getTitle").value;
            let addGenre = document.getElementById("addGenre").value;  

            let addGenreObj = {};
            var addedToMovieArray= [];
            //loops through moviesArray to check if title matches the user input value
            for (var i = 0; i < moviesArray.length; i++) {
                if (moviesArray[i].title === getTitle) {
                    addGenreObj = moviesArray[i];
                }
            } 
            //loops through moviesArray/genres to check if user input value matches
            //indexOf checks the array 
            for (var j = 0; j < addGenreObj.genres.length; j++) {
                    if(addGenreObj.genres.indexOf(addGenre) === -1){
                        //I added an if-statement - since the selectors first value is empty ("")
                        if(addGenre === ""){
                            console.log("space")
                        }
                        else{
                            addGenreObj.genres.push(addGenre); 
                            console.log(addGenreObj)  
                        } 
                    }
            }
                addedToMovieArray.push(addGenreObj);
                movieDatabase.showAllMovies(addedToMovieArray); 
                return addedToMovieArray;
        },

        removeGenre: function () {
            let getTitle = document.getElementById("getTitle").value;
            let removeGenre = document.getElementById("removeGenre").value;
       
            var removedIt ={};
            var finalRemoved = [];
            //loops through moviesArray to check if title matches the user input value
            for (var i = 0; i < moviesArray.length; i++) {

                if (moviesArray[i].title === getTitle) {
                    removedIt = moviesArray[i];
                }
            } 
            for (var j = 0; j < removedIt.genres.length; j++) {
                if (removedIt.genres[j] == removeGenre){
                    //checks if removeGenre is in the array
                    //then splice it off the array
                    removedIt.genres.splice(j, 1);
                    finalRemoved.push(removedIt);
                    movieDatabase.showAllMovies(finalRemoved); 
                    return finalRemoved;
                }  
            }
        },

        addRating: function () {
                        //get user input
            let getTitle = document.getElementById("getTitle").value;
            let ratingFromUser = document.getElementById("addRating").value;
            
            let addRating ={};
            let finalAdd = [];
            //loops through moviesArray to check if title matches the user input value
            for (var i = 0; i < moviesArray.length; i++) {
                if (moviesArray[i].title === getTitle) {
                    addRating = moviesArray[i];
                }
            }          
            //adds the rating and turns it in to a number(parseInt)     
                addRating.ratings.push(parseInt(ratingFromUser));
                finalAdd.push(addRating)
                movieDatabase.showAllMovies(finalAdd); 
                
                return finalAdd
        },

        averageRating: () => {
            //en for loop för att gå igenom moviesArrayen
            for (let i = 0; i < moviesArray.length; i++) {
                //tar ut ratings för att kunna använda reduce
                let ratingList = moviesArray[i].ratings;
                //tar ut average för att kunna pusha in det uträknade medelvärdet
                let averageList = moviesArray[i].average;
                //om det inte finns någon rating
                if (isNaN(ratingList) === true){
                //reduce slår ihop det totala värdet i ratings-arrayerna
                let reduceRating = ratingList.reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0);
                    var averageRating = reduceRating/ratingList.length;
                    //det uträknade medelvärdet sparas i en variabel
                    //värdet avrundas till en decimal med toFixed
                    var fixedAverageRating = averageRating.toFixed(1);
                    //pushas sedan in i moviesArray[i]average
                    averageList.push(fixedAverageRating);
                }
            }
               return fixedAverageRating;
        },


addEvent: () => { 
document.getElementById('add').addEventListener('click', movieDatabase.getUserInput);
document.getElementById('showMovies').addEventListener('click', movieDatabase.inputAllMovies);
document.getElementById('getGenre').addEventListener('change', movieDatabase.inputGenre);
document.getElementById('getYear').addEventListener('change', movieDatabase.inputYear);
document.getElementById('showMinRating').addEventListener('click', movieDatabase.inputMinRatings);
document.getElementById('showMaxRating').addEventListener('click', movieDatabase.inputMaxRatings);
document.getElementById('getTitle').addEventListener('change', movieDatabase.inputGetTitle);
document.getElementById('addGenre').addEventListener('change', movieDatabase.inputGetTitle);
document.getElementById('removeGenre').addEventListener('change', movieDatabase.removeGenre);
document.getElementById('addRating').addEventListener('change', movieDatabase.addRating);
}

};
})(); //här tar module pattern objektet slut

movieDatabase.averageRating();
movieDatabase.addEvent();

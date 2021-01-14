// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr){
    //moviesArr => movies
    let directorArr = moviesArr.map((movies => {
      return movies.director
    }))
    // always need to return
    return directorArr
    
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    if (arr.length === 0) {
        return 0
      }
    let filteredArr = arr.filter(function(elem){
       return elem.director == "Steven Spielberg" && elem.genre.includes("Drama")
       })
    return filteredArr 
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if (arr.length === 0){
      return 0
    }
      let allRate = arr.reduce((acc, elem) =>{
           return acc + elem.rate;
      }, 0)
      let average = allRate / arr.length.toFixed(2)
      
  }    
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

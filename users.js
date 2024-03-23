//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//User data link: https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json
import axios from 'axios';
import { getMovies } from './movies.js';
// Function to fetch users data
export async function getUsers(){
    const { data } = await axios.get('https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json')
    return data // this will be the array of user objects
  }

// Function to get user by ID
export const getUserById = async (id) => {
    if(typeof(id)!=="string" || !id){ throw 'id parameter should exist and must be of type (string)'}
    id=id.trim();
    if(id.length==0){ throw 'the id parameter should not be just empty spaces'}
    let users=await getUsers() 
    // Find user with the specified ID
    for(let i in users){
        if(users[i].id==id){
            return users[i];
        }
    }
    throw 'user not found'
};

// Function to find users with the same favorite genre
export const sameGenre = async (genre) => {
    if(typeof(genre)!=="string" || !genre){ throw 'genre parameter should exist and must be of type (string)'}
    genre=genre.trim()
    let users=await getUsers()
    let arr=[]
    // Filter users by favorite genre
    for(let i in users){
        if(users[i].favorite_genre.toLowerCase()==genre.toLowerCase()){
            if (arr.length<50){
            arr.push(users[i].first_name + " " + users[i].last_name)
            }
        }
    }
    // Throw error if less than 2 users found with the same favorite genre
    if(arr.length<2){ throw ' there are less than 2 users that have the same favorite genre for the genre provided '}
    //https://stackoverflow.com/questions/24173245/javascript-array-sort-by-last-name-first-name
    let getorder = (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        else return 0;
      } 

    // Sort users by last name  
    let sortbylast = (a, b) => {
        let WordA = a.split(" ");
        let WordB = b.split(" ");
        let lname_a = WordA[WordA.length - 1];
        let lname_b = WordB[WordB.length - 1];
        return lname_a === lname_b ? getorder(WordA[0], WordB[0]) : getorder(lname_a, lname_b);
      }
    return arr.sort(sortbylast);
};

// Function to get movies reviewed by a user
export const moviesReviewed = async (id) => {
    if(typeof(id)!=="string" || !id){ throw 'id parameter should exist and must be of type (string)'}
    id=id.trim();
    if(id.length==0){ throw 'the id parameter should not be just empty spaces'}
    let temp=0;
    let arr=[];

    // Fetch users and movies data
    let users=await getUsers()
    let movies=await getMovies()

    // Find username of the user with the specified ID
    for(let i in users){
        if(users[i].id==id){
            temp=users[i].username
        }
    }
    // Throw error if user not found
    if(temp==0){ throw 'user not found'}

    // Find movies reviewed by the user
    for(let i in movies){
        for(let j in movies[i].reviews){
            let obj={}
            if(movies[i].reviews[j].username==temp){
                obj[movies[i].title]=movies[i].reviews[j]
                arr.push(obj)
            }
        }
    }
    return arr;
};

// Function to recommend movies to a user based on their favorite genre and reviews
export const referMovies = async (id) => {
    if(!id || typeof id !== "string"){
        throw 'id parameter must exist and be of type (string)';
    }
    id = id.trim();
    let users = await getUsers();
    let movies = await getMovies();

    // Find favorite genre and username of the user with the specified ID
    let user = users.find(user => user.id === id);
    let favoriteGenre = user?.favorite_genre;
    let username = user?.username;

    // Throw error if user not found
    if(!user){
        throw 'user not found';
    }

    // Find movies with the same genre as the user's favorite genre
    let genreMovies = movies.filter(movie => movie.genre.includes(favoriteGenre));

    // Find movies reviewed by the user
    let reviewedMovies = [];
    for(let movie of movies){
        for(let review of movie.reviews){
            if(review.username === username){
                reviewedMovies.push(movie.title);
            }
        }
    }

    // Filter out movies already reviewed by the user
    let recommendedMovies = genreMovies.filter(movie => !reviewedMovies.includes(movie.title));

    return recommendedMovies.map(movie => movie.title);
};
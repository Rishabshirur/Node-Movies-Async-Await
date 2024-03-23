//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Movie data link: https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json
import axios from 'axios';

export async function getMovies(){
    const { data } = await axios.get('https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json')
    // return data // this will be the array of user objects
    return data;
  }

// Function to find movies by director name
export const findMoviesByDirector = async (directorName) => {
    let movies=await getMovies() 
    // validation
    if(!directorName || typeof directorName!=='string'){ throw 'directorname parameter should exist and must be of type (string)'}
    directorName=directorName.trim();
    if(directorName.length==0){ throw 'directorname parameter must not be just empty spaces'}
    // Filter movies by director name
    let arr=[];
    for(let i in movies){
        if(movies[i].director.toLowerCase()==directorName.toLowerCase()){
            arr.push(movies[i]);
        }
    }
    // Throw error if no movies found for the director
    if(arr.length==0){ throw 'no movies found that were directed by directorName provided'}

    return arr;
};

// Function to find movies by cast member name
export const findMoviesByCastMember = async (castMemberName) => {
    if(!castMemberName || typeof castMemberName!=='string'){ throw 'castMemberName parameter should exist and must be of type (string)'}
    castMemberName=castMemberName.trim()
    if(castMemberName.length==0){ throw 'castMemberName parameter must not be just empty spaces'}
    // Fetch movies data
    let movies=await getMovies() 
    // Filter movies by cast member name
    let arr=[];    
    for(let i in movies){
        for(let j in movies[i].cast)
        if(movies[i].cast[j].toLowerCase()==castMemberName.toLowerCase()){
            arr.push(movies[i]);
        }
    }
    if(arr.length==0){ throw 'no movies found where the castMemberName provided has starred in'}
    return arr;
};

// Function to get overall rating of a movie by title
export const getOverallRating = async (title) => {
    if(!title || typeof title!=='string'){ throw 'title parameter should exist and must be of type (string)'}
    title=title.trim();
    if(title.length==0){ throw 'title parameter must not be just empty spaces'}
    let j=0;
    let movies=await getMovies()
    // Find reviews for the specified movie title and calculate overall rating
    let sum=[];
    for(let i in movies){
        for(let j in movies[i].reviews){
            if(movies[i].title.toLowerCase()==title.toLowerCase()){
                sum.push(movies[i].reviews[j].rating)
                }
            }
        }
    // Throw error if no movie found with the given title
    if(sum.length==0){ throw 'No movie with that title'}
    let res=0;    
    for (let i in sum)  {
        res +=sum[i]
    }  
    // Return overall rating rounded to one decimal place
    return Math.floor((res/(sum.length))*10)/10
    
};

// Function to get movie by ID
export const getMovieById = async (id) => {
    if(typeof(id)!=="string" || !id){ throw 'id parameter should exist and must be of type (string)'}
    id=id.trim();
    if(id.length==0){ throw 'the id  parameter should not be just empty spaces'}
    let movies=await getMovies() 
    let foundMovie = movies.find(movie => movie.id === id);

    // Throw error if movie not found
    if(!foundMovie){
        throw 'movie not found';
    }

    return foundMovie;
};
/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need an async function in your app.js file that awaits the calls to your function like the example below. You put all of your function calls within main each in its own try/catch block. and then you just call main().
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.
*/
import * as movies from "./movies.js";
import * as users from "./users.js";
async function main(){
    try { console.log(await users.getUserById("62bff5b1-e4a0-4a73-b75e-0635231de535"))
    }catch(e){ console.log (e);}
    try { console.log(await users.getUserById("dgcbduajcndaj"))
    }catch(e){ console.log (e);}

    try { console.log(await users.moviesReviewed("9e2c5ce4-6213-4592-8dc9-38fb0270b48f"))
    }catch(e){ console.log (e);}
    try { console.log(await users.moviesReviewed("232322"))
    }catch(e){ console.log (e);}

    try { console.log(await users.referMovies("50c94603-42b0-4612-8697-f675cfaa5df9"))
    }catch(e){ console.log (e);}
    try { console.log(await users.referMovies(52682))
    }catch(e){ console.log (e);}
    try { console.log(await users.referMovies("ssfefecfed"))
    }catch(e){ console.log (e);}

    try { console.log(await users.sameGenre("HoRRor  "))
    }catch(e){ console.log (e);}
    try { console.log(await users.sameGenre("  ACtion"))
    }catch(e){ console.log (e);}
    try { console.log(await users.sameGenre(344))
    }catch(e){ console.log (e);}

    try { console.log(await movies.findMoviesByDirector("Viki Simons"))
    }catch(e){ console.log (e);}
    try { console.log(await movies.findMoviesByDirector("kemde"))
    }catch(e){ console.log (e);}

    try { console.log(await movies.findMoviesByCastMember("  HubeRto SnoddoN       "))
    }catch(e){ console.log (e);}
    try { console.log(await movies.findMoviesByCastMember("Dalenna Dineges"))
    }catch(e){ console.log (e);}
    try { console.log(await movies.findMoviesByCastMember("lcmedkf"))
    }catch(e){ console.log (e);}

    try { console.log(await movies.getOverallRating('  AsteRiX and the VikIngs (Astérix et les Vikings)'))
    }catch(e){ console.log (e);}
    try { console.log(await movies.getOverallRating("dkvmsdkvmkv"))
    }catch(e){ console.log (e);}
    try { console.log(await movies.getOverallRating("Mr. & Mrs. Smith"))
    }catch(e){ console.log (e);}
    try { console.log(await movies.getOverallRating(43))
    }catch(e){ console.log (e);}

    try { console.log(await movies.getMovieById("38fd6885-0271-4650-8afd-6d09f3a890a2"))
    }catch(e){ console.log (e);}
    try { console.log(await movies.getMovieById("07906f5e-430b-478e-883e-c2649890e2c9"))
    }catch(e){ console.log (e);} 
    try { console.log(await movies.getMovieById("kdnciwnodecfnld"))
    }catch(e){ console.log (e);}
}

main();


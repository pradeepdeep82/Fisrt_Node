import { movies } from "./movies.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import { Console } from "console";
import { getAllMovies, getMoviesById, AddMovie, updateMovieById, deleteMovieById } from "./helper.js";
import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
import cors from 'cors';
dotenv.config();

// const express= require("express");
// const app= express();

const express = require("express");
// import { express } from "express";
const app = express();

// const PORT=9000;

//  const MONGO_URL = "mongodb://localhost";


console.log(process.env);
export const MONGO_URL= process.env.MONGO_URL;
// const MONGO_URL = 'mongodb+srv://pradeep:12345@cluster0.vmjwh.mongodb.net';
// mongodb+srv://pradeep:<password>@cluster0.vmjwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

  export async function createConnection() {
   const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB Connected");

  // const movie= await client.db("myFirstDatabase")
  //               .collection("movies")
  //               .findOne({id:"2"});
  //         console.log(movie);

  return client;
}
// parse body to JSON 
app.use(express.json());
// Thirdparty middleware
app.use(cors());
// createConnection();

app.get("/", (request, response) => {
  response.send("Hello, 🌎!!!....");
});
// app.listen(PORT,()=>console.log("App is started on "+PORT));


//While putting in heroku give process.env.PORT || 5000   heroku will automatically assign it
const moviesPORT = process.env.PORT || 5000;

// app.get("/movies", (request, response)=>{
//   console.log(request.query);
//   const {language, rating}=request.query;
//   let filterMovies=movies;

//   if(language){
//     filterMovies=filterMovies.filter((mv)=>mv.language==language);
//   }
//   if(rating){
//     filterMovies=filterMovies.filter((mv)=>mv.rating==rating);
//   }

//   response.send(filterMovies);
// });

// app.get("/movies", async (request, response) => {
//   console.log(request.params);
 
//   // const movie=movies.find((data)=>data.id==id);
//   const filter=request.query;
  
//   const client = await createConnection();

//   // const movie = await client
//   //   .db("myFirstDatabase")
//   //   .collection("movies")
//   //   .find(filter).sort({id:1}).toArray();
//     const movie = await getAllMovies(client, filter);

//   console.log(filter);
// console.log(movie);
//   const notFound = { message: "No Matching Movie" };
  
//   movie.length!==0 ? response.send(movie) : response.status(404).send(notFound);
// });

// app.get("/movies/:id", (request, response)=>{
//   console.log(request.params);
//   const {id}=request.params;
//   const movie=movies.find((data)=>data.id==id);

// if(movie==undefined){
//   response.send("No Matching Movie");
// }else{
// response.send(movie);
// console.log(movie);
// }

//   const notFound={message:"No Matching Movie"};
//   movie?response.send(movie):response.status(404).send(notFound);

// })

// app.get("/movies/:id", async (request, response) => {
//   console.log(request.params);
//   const { id } = request.params;
//   // const movie=movies.find((data)=>data.id==id);

//   const client = await createConnection();

//   // const movie = await client
//   //   .db("myFirstDatabase")
//   //   .collection("movies")
//   //   .findOne({ id: id });
//     const movie = await getMoviesById(client, id);

//   console.log(movie);

//   const notFound = { message: "No Matching Movie" };

//   movie ? response.send(movie) : response.status(404).send(notFound);
// });

// app.post("/movies", async (request, response) => {
//   // console.log(request.params);

//   const data = request.body;
//   console.log(data);

//   const client = await createConnection(); 
//   // db.collection.insertMany(data)


//   // const result = await client
//   //   .db("myFirstDatabase")
//   //   .collection("movies")
//   //   .insertMany(data);
//     const result = await AddMovie(client, data);

//   console.log(result);

//   response.send(result);
// });



// app.put("/movies/:id", async (request, response) => {
//   // console.log(request.params);
// const {id}=request.params;

//   const data = request.body;
//   console.log(data);

//   const client = await createConnection();
//   // db.collection.insertMany(data)

//   // const result = await client
//   //   .db("myFirstDatabase")
//   //   .collection("movies")
//   //   .updateOne({id:id}, {$set:data});

//     const result = await updateMovieById(client, id, data);
//   console.log(result);

//   response.send(result);
// });



// app.delete("/movies/:id", async (request, response) => {
//   console.log(request.params);

//  const {id}= request.params;

//   const client = await createConnection(); 
//   // db.collection.insertMany(data)

//   // const result = await client
//   //   .db("myFirstDatabase")
//   //   .collection("movies")
//   //   .deleteOne({id:id});
//     const result = await deleteMovieById(client, id);

//   console.log(result);

//   const notFound = { message: "No Matching Movie" };
  
//   result ? response.send(result) : response.status(404).send(notFound);
// });



app.use("/movies", moviesRouter);

app.use("/users", usersRouter);

app.listen(moviesPORT, () =>{
  console.log("movie app is started with PORT " + moviesPORT)
});




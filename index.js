import { movies } from "./movies.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// const express= require("express");
// const app= express(); 

const express= require("express");
// import { express } from "express";
const app= express();

// const PORT=9000;

app.get("/", (request, response)=>{
  response.send("Hello, 🌎!!!....")
})
// app.listen(PORT,()=>console.log("App is started on "+PORT));

const moviesPORT=5000;

app.get("/movies", (request, response)=>{
  console.log(request.query);
  const {language, rating}=request.query;
  let filterMovies=movies;

  if(language){
    filterMovies=filterMovies.filter((mv)=>mv.language==language);
  }
  if(rating){
    filterMovies=filterMovies.filter((mv)=>mv.rating==rating);
  }

  response.send(filterMovies);
})
app.get("/movies/:id", (request, response)=>{
  console.log(request.params);
  const {id}=request.params;
  const movie=movies.find((data)=>data.id==id);

  // if(movie==undefined){
  //   response.send("No Matching Movie");
  // }else{
  // response.send(movie);
  // console.log(movie);
  // }

  const notFound={message:"No Matching Movie"};
  movie?response.send(movie):response.status(404).send(notFound);

})

app.listen(moviesPORT,()=>console.log("movie app is started with PORT "+moviesPORT));
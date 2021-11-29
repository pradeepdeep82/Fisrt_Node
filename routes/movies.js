import express from 'express';
import { createConnection } from '../index.js';
import { getAllMovies, getMoviesById, AddMovie, updateMovieById, deleteMovieById } from "../helper.js";

const router= express.Router();



//app.get("/movies", async (request, response) => {
  router.get("/", async (request, response) => {
  console.log(request.params);
 
  // const movie=movies.find((data)=>data.id==id);
  const filter=request.query;
  
  const client = await createConnection();

  // const movie = await client
  //   .db("myFirstDatabase")
  //   .collection("movies")
  //   .find(filter).sort({id:1}).toArray();
    const movie = await getAllMovies(client, filter);

  console.log(filter);
console.log(movie);
  const notFound = { message: "No Matching Movie" };
  
  movie.length!==0 ? response.send(movie) : response.status(404).send(notFound);
});

//app.post("/movies", async (request, response) => {
  router.post("/", async (request, response) => {
    // console.log(request.params);
  
    const data = request.body;
    console.log(data);
  
    const client = await createConnection(); 
    // db.collection.insertMany(data)
  
  
    // const result = await client
    //   .db("myFirstDatabase")
    //   .collection("movies")
    //   .insertMany(data);
      const result = await AddMovie(client, data);
  
    console.log(result);
  
    response.send(result);
  });


//app.get("/movies/:id", async (request, response) => {
  router.get("/:id", async (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  // const movie=movies.find((data)=>data.id==id);

  const client = await createConnection();

  // const movie = await client
  //   .db("myFirstDatabase")
  //   .collection("movies")
  //   .findOne({ id: id });
    const movie = await getMoviesById(client, id);

  console.log(movie);

  const notFound = { message: "No Matching Movie" };

  movie ? response.send(movie) : response.status(404).send(notFound);
});





//app.put("/movies/:id", async (request, response) => {
  router.put("/:id", async (request, response) => {
  // console.log(request.params);
const {id}=request.params;

  const data = request.body;
  console.log(data);

  const client = await createConnection();
  // db.collection.insertMany(data)

  // const result = await client
  //   .db("myFirstDatabase")
  //   .collection("movies")
  //   .updateOne({id:id}, {$set:data});

    const result = await updateMovieById(client, id, data);
  console.log(result);

  response.send(result);
});



//app.delete("/movies/:id", async (request, response) => {
  router.delete("/:id", async (request, response) => {
  console.log(request.params);

 const {id}= request.params;

  const client = await createConnection(); 
  // db.collection.insertMany(data)

  // const result = await client
  //   .db("myFirstDatabase")
  //   .collection("movies")
  //   .deleteOne({id:id});
    const result = await deleteMovieById(client, id);

  console.log(result);

  const notFound = { message: "No Matching Movie" };
  
  result ? response.send(result) : response.status(404).send(notFound);
});

export const moviesRouter=router;
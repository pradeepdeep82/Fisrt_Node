import express from 'express';
import { createConnection } from '../index.js';
import { getAllMovies, getMoviesById, AddMovie, updateMovieById, deleteMovieById, createUser, getUserByName } from "../helper.js";
import bcrypt from 'bcrypt';
// import { Jwt } from 'jsonwebtoken';

const router= express.Router(); 





//app.post("/movies", async (request, response) => {
  router.post("/signup", async (request, response) => {
    // console.log(request.params);
  
    // const data = request.body;
    const {username, password} = request.body;

    console.log(username, password);
  
    const hashedPassword = await generatePassword(password);
    console.log(hashedPassword);

    const client = await createConnection();
//   const result= await getUserByName(client, username);
// console.log(result);
const userFromDB= await getUserByName(client, username);
console.log(userFromDB);

// regex = “^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$” 
// where, 
// ^ represents the starting of the string.
// (?=.*[a-z]) represent at least one lowercase character.
// (?=.*[A-Z]) represents at least one uppercase character.
// (?=.*\\d) represents at least one numeric value.
// (?=.*[-+_!@#$%^&*., ?]) represents at least one special character.
// . represents any character except line break.
// + represents one or more times.
//?=.* forward search (?=.*[a-z]) forward search for any character between a and z

var pattern = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
);
// if user already exists, then send a error message
if(isUserExist){
  response.status(400).send({message:"User already exists"});
  return;
}
if(password.length<8){
  response.status(400).send({message:"Password is too short"});
  return;
}else if( pattern.test(password)){

   const result= await createUser(client, {username, password: hashedPassword});
 
    response.send(result);
    return;
}else{
  response.status(400).send({message:"Given password is weak, please give strong password"});
  return;
}
    

    // const client = await createConnection(); 
    // db.collection.insertMany(data)

  
    // const result = await client
    //   .db("myFirstDatabase")
    //   .collection("movies")
    //   .insertMany(data);
      // const result = await AddMovie(client, {username, password});
  

  
    
  });




export const usersRouter=router;



async function generatePassword(password) {
  const no_of_rounds = 10;
  const salt = await bcrypt.genSalt(no_of_rounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// const storedPassword= userFromDB.password;
// const isPasswordMatch= await bcrypt.compare(password, storedPassword);

// if(isPasswordMatch){
//   const token= jwt.sign({id:userFromDB._id}, process.env.SECRET_KEY);
//   response.send({message:"Successfull login", token: token});
// }else{
//   response.send({message:"Invalid credentials"});
// }
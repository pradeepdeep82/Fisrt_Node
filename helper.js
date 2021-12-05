
 
 async function AddMovie(client, data) {
  return await client
    .db("myFirstDatabase")
    .collection("movies")
    .insertMany(data);
}


async function createUser(client, data) {
  return await client
    .db("myFirstDatabase")
    .collection("users")
    .insertOne(data);
}


 async function getAllMovies(client, filter) {
  return await client
    .db("myFirstDatabase")
    .collection("movies")
    .find(filter).sort({ id: 1 }).toArray();
}
 async function updateMovieById(client, id, data) {
  return await client
    .db("myFirstDatabase")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
 async function deleteMovieById(client, id) {
  return await client
    .db("myFirstDatabase")
    .collection("movies")
    .deleteOne({ id: id });
}
 async function getMoviesById(client, id) {
  return await client
    .db("myFirstDatabase")
    .collection("movies")
    .findOne({ id: id });
}

async function getUserByName(client, username) {
  return await client
    .db("myFirstDatabase")
    .collection("users")
    .findOne({ username: username });
}

export { getAllMovies, getMoviesById, AddMovie, createUser, updateMovieById, deleteMovieById, getUserByName };
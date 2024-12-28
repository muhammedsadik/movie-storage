const invalidEntry = "Invalid Entry, Try again.";
const alreadyExist = "Your input already exist.";
const exitMovie = "You exited the movie storage.";
const movieInputMsg = "İptal: Exist\n\nEnter a movie :";
const successfullyAdded = "Successfully added";
let movies = [];

if (localStorage.movies) {
  movies = JSON.parse(localStorage.movies);
}

function movieInput() {
  let value = prompt(movieInputMsg);

  if (value === null) {
    return false;
  }

  value = value.trim();
  if (!value) {
    alert(invalidEntry);
    return movieInput();
  }

  if(movies.includes(value)){
    alert(alreadyExist);
    return movieInput();
  }

  return value;
}


function mainManu() {
  if (movies.length > 0) {
    const moviesList = movies.map((m, index) => `${index + 1} - Movie: ${m}`).join("\n");
    alert(moviesList);
  }

  const result = movieInput();
  if (result === false) {
    alert(exitMovie);
    return;
  }

  movies.push(result);
  localStorage.movies = JSON.stringify(movies);
  alert(successfullyAdded);
}

mainManu();
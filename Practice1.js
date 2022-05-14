"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done!");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: () => {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    } else {
      console.log("Error >> Свойство приватное!");
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === "" || genre === null) {
        console.log(
          "Error >> Вы ввели не корректные данные или не ввели их вовсе."
        );
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }

    personalMovieDB.genres.forEach((el, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${el}`);
    });
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

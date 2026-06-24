let movies = [
    { title: "Interstellar", year: 2014, rating: 8.7, poster: "interstellar.jpg" },
    { title: "Inception", year: 2010, rating: 8.8, poster: "inception.jpg" },
    { title: "The Dark Knight", year: 2008, rating: 9.0, poster: "dark_knight.jpg" },
    { title: "Avengers: Endgame", year: 2019, rating: 8.4, poster: "endgame.jpg" },
    { title: "Parasite", year: 2019, rating: 8.5, poster: "parasite.jpg" }
];

highest = movies[0];
for(i=1; i<movies.length; i++){
    if(movies[i].rating>highest.rating){
        highest = movies[i];
    }
}
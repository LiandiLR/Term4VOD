/*$(function(){
var apiRequest = new XMLHttpRequest();

for (i=0,i<67108863,i++){
}

apiRequest.send('GET','http://www.omdbapi.com/?apikey=c0e1ea77',true);

apiRequest.onload = function(){
var data = JSON.parse(this.response);
}

});*/

var movies = [
    "Guardians of the Galaxy",
    "Avengers: Age of Ultron",
    "Justice League",
    "Captain America: The Winter Soldier",
    "Mission: Impossible - Rogue Nation",
    "Transformers: Age of Extinction",
    "Pirates of the Caribbean: Dead Men Tell No Tales",
    "The Amazing Spider-Man 2",
    "300: Rise of an Empire",
    "Kung Fu Panda 3",
    "Spectre",
    "RoboCop",
    "Sabotage",
    "Godzilla",
    "Teenage Mutant Ninja Turtles",
    "Voyage of Time: Life's Journey",
    "Hercules",
    "Brick Mansions",
    "The Huntsman: Winter's War",
    "The Nut Job",
    "Devil's Due",
    "Paranormal Activity: The Ghost Dimension",
    "Jessabelle",
    "The Nut Job",
    "Ride Along",
    "I, Frankenstein",
    "That Awkward Moment",
    "The Lego Movie",
    "RoboCop",
    "About Last Night",
    "Endless Love",
    "The Maze Runner",
    "Vampire Academy",
    "Pompeii",
    "3 Days to Kill",
    "Project Almanac",
    "Non-Stop",
    "Mr. Peabody & Sherman",
    "Need for Speed",
    "Walk of Shame",
    "Divergent",
    "Muppets Most Wanted",
    "Stretch",
    "A Haunted House 2",
    "Noah",
    "Hercules",
    "Captain America: The Winter Soldier",
    "Rio 2",
    "Heaven Is for Real",
    "Bears",
    "Transcendence",
    "No Good Deed",
    "The Other Woman",
    "The Quiet Ones",
    "Belle",
    "Legends of Oz: Dorothy's Return",
    "Hotel Transylvania 2"
];

var series = [
    "Orphan Black",
    "Game of Thrones",
    "How to Get Away with Murder",
    "Mr. Robot",
    "The Man in the High Castle",
    "The Returned",
    "Deutschland 83",
    "Empire",
    "Orange Is the New Black",
    "Real Humans",
    "Breaking Bad",
    "Jane the Virgin",
    "Mozart in the Jungle",
    "Transparent",
    "Unbreakable Kimmy Schmidt",
    "New Girl",
    "Silicon Valley",
    "The Big Bang Theory",
    "Modern Family",
    "Don't Trust the B---- in Apartment 23",
    "You're the Worst",
    "War & Peace",
    "And Then There Were None",
    "The Flash",
    "Arrow",
    "Friends",
    "True Detective",
    "Pushing Daisies",
    "Casual",
    "Baby Daddy",
    "Freaks and Geeks",
    "Thirteen",
    "Gilmore Girls",
    "Roots",
    "The Night Of",
    "Crazy Ex-Girlfriend",
    "Happy Endings",
    "Stranger Things",
    "Gossip Girl",
    "Marry Me",
    "Sherlock",
    "Better Things",
    "Black-ish",
    "Cougar Town",
    "Younger",
    "One Day at a Time",
    "The Night Manager",
    "Atlanta",
    "Z: The Beginning of Everything",
    "Dear White People",
    "Juana Inés",
    "Sneaky Pete",
    "Girlboss",
    "13 Reasons Why"
];

  var genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];
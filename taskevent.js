// punkt nr 1
let event = {
  title : "Koncert zespołu X",
  date : "2024-06-15",
  location: "Warszawa"
};

console.log(event);

//punkt nr 2
let participant = {};
participant.name = "Kacper";
participant.email = "uT_4011@zsp3zamosc.pl";

console.log(participant.name);
console.log(participant.email);

//punkt nr 3

let events = [
    {
        name : "koncert zespołu Y",
        date : "2024-07-05",
        location: "Krakow"
    },
    {
        name : "Festiwal filmowy",
        date : "2024-08-05",
        location: "Gdańsk"
    },
    {
        name: "Wystawa Sztuki",
        date: "2024-09-10",
        location: "Wrocław"
    }
];

//punkt nr 4
let event4 = {
    name : "Seminarium o JavaScript",
    date : "2024-10-15",
    location:  "Łódź"
};

events.push(event4);
console.log(events)

//punkt nr 5
let newEvents = events.slice(2,4);

console.log(newEvents);

//punkt 6
events.shift()
console.log("Długość tablicy po usunięciu pierwszego elemetnu : " + events.length)
events.forEach( name => console.log("Nazwa Wyderzenia : " + name.name));

//punkt 7
events.forEach( date => console.log("Data Wyderzenia : " + date.date));
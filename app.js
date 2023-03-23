"use strict"

window.addEventListener("load", initApp);

function initApp(){
// Harry Potter
const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg"
};

// Hermione Granger
const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
};

// Ron Weasley
const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg"
};
    console.log()   
    showStudent(harry);
    showStudent(ron);
    showStudent(hermione);

    
}

function showStudent(student) {
    const myHtml = /*html*/ `
    <article class= "grid-item">
        <img src="${student.image}">
        <h2>${student.name}</h2>
        <p>${student.house}</p>
        <p>${student.dateOfBirth}</p>
        <p>${student.actor}</p>
    </article>
    `;
    document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);
}


// function addStudents(student) {
//     const myHtml = /*html*/ `
//     <li>firstName ${student.firstName}</li>
//     <li>middleName ${student.middleName}</li>
//     <li>lastName ${student.lastName}</li>
//     `;
//     document.querySelector("#students").insertAdjacentHTML("beforeend", myHtml);

// }
const reviews = [
    {
       id: 1,
       name: 'Susa  Smith',
       job: 'web developer',
       img: '#',
       text:'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquefaucibus ex sapien vitae pellentesque sem placerat. In id cursusmi pretium tellus duis convallis. Tempus leo eu aenean sed diamurna tempor.',
    },
    {
      id: 2,
     name:'Anna Johnson',
     job: 'web designer',
     img: '#',
     text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquefaucibus ex sapien vitae pellentesque sem placerat. In id cursusmi pretium tellus duis convallis. Tempus leo eu aenean sed diamurna tempor.',
    },
    {
        id: 3,
        name: 'John Doe',
        job: 'mechanic',
        img: '#',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquefaucibus ex sapien vitae pellentesque sem placerat. In id cursusmi pretium tellus duis convallis. Tempus leo eu aenean sed diamurna tempor.',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementsByClassName('job');
const info = document.getElementsByClassName('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

//Load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textcontent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function (){
     currentItem++;
     if (currentItem > reviews.length - 1) {
        currentItem = 0;
     }
     showPerson(currentItem);
});

prevBtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});













/*console.log("Hello World!");

//String has quotes/Number no quotes
let myTest = "123";
console.log(typeof myTest);

console.log(10 + " eggs");
console.log(10 + 8 + " eggs");
console.log("eggs " + 10 + 8);

//Both conditions need to be true
console.log(7>3)&&(5>2);

//Only one condition must be true
console.log(10>3) ||(10>12)

//Logical not
console.log(!5>3);

function introduction(name,age){
    console.log("Hello, my name is "+ name + " and I am "+ age + " years old.");
}

introduction("Josue",15)

const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good morning ☀️";
}else if (hour<18){
    greeting = "Good afternoon ☁️";
}else{
    greeting = "Good evening 🌙";
}

document.getElementById("greeting").innerText =greeting;*/
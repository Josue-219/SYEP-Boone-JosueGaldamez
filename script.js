const reviews = [
    {
       id: 1,
       name: 'Brian Palacios',
       job: 'Algebra 2 High school Teacher',
       img: 'Josue + Palacios.jpg',
       text:'Josue is an outstanding student, but an even better young man. He values high-quality relationships, puts family first, and finds unique ways to bring people together. In June, he helped create one of the most memorable moments of my 20-year teaching career when he served as a "promoter" of a spirited one-on-one basketball game for me and another student. He even crafted a full-fledged contract for us to sign! In class, Josue is intelligent and isnt afraid to ask questions that other students shy away from. Given his maturity and willingness to grow, any teacher would be fortunate to have him as their student.',
    },
    {
      id: 2,
     name:'Nikhil Krishna',
     job: 'Chemistry Highschool Teacher',
     img: 'mr krish.png',
     text: 'Josue is a kind-hearted, consistent student, who always wants to get better. He is honest, reflective, and well-respected by his peers. I was certainly impressed by his overall performance when I taught him last year!',
    },
    {
        id: 3,
        name: 'Karelys Silva',
        job: 'Global 10 History Highschool Teacher',
        img: 'ms silva.jpg',
        text: 'Josue Galdamez is an outstanding student and a remarkable young man. He leads with honor and integrity, consistently giving his best in all that he undertakes. His selfless goals and dedication to helping others are a true reflection of his admirable character. Josues drive, compassion, and strong moral values set him apart as a role model among his peers.',
    },
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
//const img = document.getElementById('person-img');
//const author = document.getElementById('author');
//const job = document.getElementsByClassName('job');
//const info = document.getElementsByClassName('info');

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
    job.textContent = item.job;
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
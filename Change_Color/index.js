'use strict';
const hi = document.querySelector('h1');
const hello = document.querySelector('h2');

console.log(hello);
function color(){
    hello.style.color = "red";
    hello.innerHTML = 'You have clicked h2 tags';
}
function color2(){
    hi.style.backgroundColor = "teal";
}
function ifColor(event){
    color();
    if(event.style.color="red"){
        event.innerHTML='Is it really red?';
        }else{
            event.innerHTML='funcking';
        }
    }

hello.addEventListener('mouseenter', ifColor);
hello.addEventListener('mouseleave', ifColor);



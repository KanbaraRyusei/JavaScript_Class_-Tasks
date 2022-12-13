// const elem = document.querySelector("#msg");
// const greet = "こんにちは！ようこそ〇〇の世界へ。冒険の始まりです";

// const word = greet.split("");
// let i = 0;
// console.log(word[0]);
// const intro = setInterval(function () {
//     elem.textContent += word[i];

//     if (i == word.length - 1) {
//     clearInterval(intro);
//     }
//     i++;
// }, 500);
let isstop = true;

let startbutton = document.getElementById("startbutton");
let stopbutton = document.getElementById("stopbutton");

startbutton.addEventListener("click", start);
stopbutton.addEventListener("click", stop);

const elem = document.querySelector("#msg");
let number = Math.floor( Math.random() * 31 );

function start(){
    if(!isstop)return;// Startボタンを連打すると高速で数字が表示されるので対策
    isstop = false;
    const intro = setInterval(function() {
        elem.textContent = number;
        number = Math.floor(Math.random() * 31);
        if(isstop){
            clearInterval(intro);
        }
    }, 100);
}

function stop(){
    isstop = true;
}
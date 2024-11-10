const head = document.querySelector('.box');
const btn = document.querySelector('.btn');
function randomColorgenertaor(){
    const randomColor = `rgb(($math.floor((Math.random()*256))),($Math.floor((Math.random()*256))),($Math.floor((Math.random()*256))))`;
    box.style.backgroundColor= randomColor;
}
btn.addEventListener('click',  randomColorgenertaor);






// const box = document.querySelector('.box');
// const btn = document.querySelector('.btn');
// function randomColorGenertaor(){
//    const r = Math.floor(Math.random() *256);
//    const g = Math.floor(Math.random() *256);
//    const b = Math.floor(Math.random() *256);
//    const randomColor = `rgb(${r},${g},${b})`;
//    box.style.backgroundColor = randomColor;
// }btn.addEventListener('click',randomColorGenertaor);

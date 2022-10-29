const addIn = document.querySelector('.addIn');
const btn = document.querySelector('.btn');
const doList = document.querySelector('.doList');

btn.addEventListener('click', function(){
    const item = document.createElement('li');
    item.innerText = addIn.value;
    item.classList.add('toDoAdd');
    doList.appendChild(item);
    addIn.value='';

    item.addEventListener('click', function(){
        item.classList.add('toDoCompleted');
    })
    item.addEventListener('dblclick', function(){
        doList.removeChild(item);
    })

}
)
let text = "What I have to do?";
console.log(text.length);
let i = 0;
let speed  = 120;

function type() {
    if(i< text.length){
        document.querySelector("#par").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();
gsap.from("#par", {y : -30, duration: 0.5});
gsap.from("#girl", {opacity:0, y: 10, duration: 2, delay: 1})

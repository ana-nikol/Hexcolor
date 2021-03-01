const button = document.querySelector('#btn'); 
const bgValue = document.querySelector('.bg-color-value')  
const body = document.body; 

// document.body.style.backgroundColor ="red";  

function changeBg () {  
    const bg = generateRandomColor(); 
    body.style.backgroundColor = bg;
    bgValue.innerHTML = bg; 


}


function generateRandomColor() { 
const letters = "0123456789ABCDEF";
let color = "#";   // es aris defolti da amas miemateba rendomad dagenerirebuli ricxi 

for(let i = 0; i < 6; i++) { 
color += letters[Math.floor(Math.random() * letters.length)]; 
} 
return color;

} 

console.log(generateRandomColor());

button.addEventListener('click', changeBg);
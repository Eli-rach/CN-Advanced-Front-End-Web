let input = document.querySelector("#text-input");
console.log(input);
input.addEventListener('change',()=>{
    console.log("Changed");
    console.log(typeof input.value)
});

let inputTypo = document.getElementById('textInput');
inputTypo.addEventListener('change',() =>{
    console.log(typeof inputTypo.value)
})
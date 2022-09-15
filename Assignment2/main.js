let form = document.getElementById("form");
let button = document.getElementById("submitButton");

console.log(button);

button.addEventListener('click', ()=>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    console.log(name);

    let home = document.getElementById('location').value;
    console.log(home);



    let color = document.getElementById('colorInput').value;
    let body = document.querySelector('body');
    body.style.backgroundColor = color;


    let e = document.getElementById("fontFamily");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    console.log(e);
    console.log(value);
    console.log(text);
    // let font = document.getElementsByName('fontFamily').value;
    // console.log(font)

    body.style.fontFamily = value;

    let thing = document.getElementById("thingForThing");
    thing.innerHTML = `Hello ${name} from ${home}!!!`
});

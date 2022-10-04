let button = document.querySelector("#THEBUTTON");
button.addEventListener('click', ()=>{
    //process form here
    const firstTextInput = document.querySelector("#firstTextBoxInput");
    console.log(firstTextInput.value);

    const colorValue = document.querySelector("#colorInput");
    console.log(colorValue.value)

    const form = document.querySelector("form");
    // form.style.backgroundColor = colorValue.value;

    const checkBoxesElement = document.querySelectorAll('checkboxes');
    console.log(checkBoxesElement);
    const checkbox = checkBoxesElement.querySelectorAll('input')
    console.log(checkbox);
});
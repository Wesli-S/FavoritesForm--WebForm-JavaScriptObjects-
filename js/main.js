class Favorites {
}
let myFavs = new Favorites();
myFavs.animal = "hedgehog";
myFavs.color = "dark purple";
myFavs.food = "sundubu-jjigae";
myFavs.hobby = "drawing";
myFavs.number = 7;
window.onload = function(){
    let addFavsBtn = document.querySelector("#submit-favs");
    addFavsBtn.onclick = processFavs;
}
function processFavs () {
    let userFavs = getFavs();
    if(userFavs != null) {
        getFavs();
    }
}
function getFavs (){
    clearAllErrorMessages();
    let animalTextBox = document.querySelector("#animal");
    let colorTextBox = document.querySelector("#color");
    let foodTextBox = document.querySelector("#food");
    let hobbyTextBox = document.querySelector("#hobby");
    let numberTextBox = document.querySelector("#number");
    let isValidData = true;
    let animal = animalTextBox.value;
    if(animal.trim() == "") {
        isValidData = false;
        let animalErrorSpan = animalTextBox.nextElementSibling;
        animalErrorSpan.textContent = "Please do not leave box blank!";
    }
    let color = colorTextBox.value;
    if(color.trim() == "") {
        isValidData = false;
        let colorErrorSpan = colorTextBox.nextElementSibling;
        colorErrorSpan.textContent = "Please do not leave box blank!";
    }
    let food = foodTextBox.value;
    if(food.trim() == "") {
        isValidData = false;
        let foodErrorSpan = foodTextBox.nextElementSibling;
        foodErrorSpan.textContent = "Please do not leave box blank!";
    }
    let hobby = hobbyTextBox.value;
    if(hobby.trim() == "") {
        isValidData = false;
        let hobbyErrorSpan = hobbyTextBox.nextElementSibling;
        hobbyErrorSpan.textContent = "Please do not leave box blank!";
    }
    let number = parseFloat(numberTextBox.value);
    if (isNaN(number) || number < 0) {
        isValidData = false;
        numberTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }
    if(isValidData) {
        let newFavs = new Favorites();
        newFavs.animal = animal;
        newFavs.color = color;
        newFavs.food = food;
        newFavs.hobby = hobby;
        newFavs.number = number;
        return newFavs
    }
    return null; //if any invalid data is present
}
function clearAllErrorMessages(){
    let allSpans = document.querySelectorAll("form span.error-msg");
    for (let i = 0; i < allSpans.length; i++) {
        allSpans[i].textContent = "";
    }
}
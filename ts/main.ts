class Favorites {
    animal: String;
    color: String;
    food: String;
    hobby: String;
    number: number;
}

let myFavs = new Favorites();
myFavs.animal = "hedgehog";
myFavs.color = "dark purple";
myFavs.food = "sundubu-jjigae";
myFavs.hobby = "drawing";
myFavs.number = 7;

window.onload = function(){
    //Set up button click for add book form
    let addFavsBtn = document.querySelector("#submit-favs") as HTMLButtonElement;
    addFavsBtn.onclick = processFavs;
}

function processFavs () {
    //validate
    let userFavs = getFavs();
    if(userFavs != null) {
        getFavs();
    }
}

function getFavs ():Favorites {
    clearAllErrorMessages();

    //get inputs
    let animalTextBox = document.querySelector("#animal") as HTMLInputElement;
    let colorTextBox = document.querySelector("#color") as HTMLInputElement;
    let foodTextBox = document.querySelector("#food") as HTMLInputElement;
    let hobbyTextBox = document.querySelector("#hobby") as HTMLInputElement;
    let numberTextBox = document.querySelector("#number") as HTMLInputElement;

    let isValidData:boolean = true;

    //validate animal
    let animal:string = animalTextBox.value;
    if(animal.trim() == "") {
        isValidData = false;
        let animalErrorSpan = animalTextBox.nextElementSibling;
        animalErrorSpan.textContent = "Please do not leave box blank!";
    }

    //validate color
    let color:string = colorTextBox.value;
    if(color.trim() == "") {
        isValidData = false;
        let colorErrorSpan = colorTextBox.nextElementSibling;
        colorErrorSpan.textContent = "Please do not leave box blank!";
    }

    //validate food
    let food:string = foodTextBox.value;
    if(food.trim() == "") {
        isValidData = false;
        let foodErrorSpan = foodTextBox.nextElementSibling;
        foodErrorSpan.textContent = "Please do not leave box blank!";
    }

    //validate hobby
    let hobby:string = hobbyTextBox.value;
    if(hobby.trim() == "") {
        isValidData = false;
        let hobbyErrorSpan = hobbyTextBox.nextElementSibling;
        hobbyErrorSpan.textContent = "Please do not leave box blank!";
    }


    //validate number
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

//clears all validation  error message spans
function clearAllErrorMessages(){
    //Get all error-spans
    let allSpans = document.querySelectorAll("form span.error-msg");

    //Loop through, and set each span to an empty string
    for (let i = 0; i < allSpans.length; i++) {
        allSpans[i].textContent = "";
    }
}
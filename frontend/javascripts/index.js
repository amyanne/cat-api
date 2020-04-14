const BASE_URL = "http://localhost:3000"
const rightContainer = document.createElement("div")


document.addEventListener('DOMContentLoaded', function() {
    // addSubmitEventToForm();

    createCat();
    Api.getCats();
})

function createData() {
    return {
        cat: {
            name: document.getElementById("name").value
        },
    }
}
function createCat(){
    console.log(document.getElementsByClassName("new-new")[0])
    const newDiv = document.createElement("div")
    document.getElementsByClassName("new-new")[0].innerHTML = 
    `<form action="#" id="cat-form">
        <div class="input-field">
            <input type="text" name="name" id="name"> </input>
            <label for="name">Name </label> 
        </div><br></br>
        <div class="input-field">
            <input type="text" name="age" id="age"> </input>
            <label for="age">Age </label> 
        </div><br></br>
        <input type="submit" value="Cat" class="btn"></input>
        
    </form>`

    
}
            
// function addSubmitEventToForm() {
//     document.getElementById("cat-form").addEventListener('submit', Api.submitCat)
// }


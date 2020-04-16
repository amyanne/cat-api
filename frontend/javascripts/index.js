const BASE_URL = "http://localhost:3000"
const rightContainer = document.createElement("div")



document.addEventListener('DOMContentLoaded', function () {

    Api.getCats();
    addSubmitEventToForm();
    resetForm();
})

function createData() {
    return {
        cat: {
            name: document.getElementById("name").value,
            gender: document.getElementById("gender").value,
            age: document.getElementById("age").value,
            description: document.getElementById("description").value,
        },
    }
}

function resetForm() {
    document.getElementById("name").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("age").value = ""
    document.getElementById("description").value = ""
}
            
function addSubmitEventToForm() {
    document.getElementById("cat-form").addEventListener('submit', Api.submitCat)
}


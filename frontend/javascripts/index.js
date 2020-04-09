const BASE_URL = "http://localhost:3000"
document.addEventListener('DOMContentLoaded', function() {
    addSubmitEventToForm();
    Api.getCats();
})

function createData() {
    return {
        cat: {
            name: document.getElementById("name").value
        },
    }
}

function addSubmitEventToForm() {
    document.getElementById("cat-form").addEventListener('submit', Api.submitCat)
}
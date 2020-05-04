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
            cat_traits: [{name_of_trait_from_frontend: "Social"}]

            // personality_traits = []
            // if checkbox['Social'] = true {
            // personality_traits.append('Social')  
//           
          //  }
            
        }
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


const BASE_URL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', function () {

    Api.getCats();
    addSubmitEventToForm();
    resetForm();
})

function createTraits() {

    let catTraits = []
    
    if (document.getElementById("Social").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Social"})
      }
    if (document.getElementById("Playful").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Playful"})

    }
    if (document.getElementById("Cuddly").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Cuddly"})
    }
    if (document.getElementById("Shy").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Shy"})
    }
    if (document.getElementById("Grumpy").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Grumpy"})
    }
    if (document.getElementById("Lazy").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Lazy"})
    }
    if (document.getElementById("Nervous").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Nervous"})
    }
    if (document.getElementById("Adventurous").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Adventurous"})
    }
    
       
      console.log(catTraits)

    return catTraits
}


function getCatFromForm() {
    
    const traits = createTraits()

    console.log(traits)
    
    return {
        cat: {
            name: document.getElementById("name").value,
            gender: document.getElementById("gender").value,
            age: document.getElementById("age").value,
            description: document.getElementById("description").value,
            status: document.getElementById("status").value,
            cat_personality_traits_attributes: traits
        }
    }
}

function resetForm() {
    console.log("I am gettin ghit")
    document.getElementById("name").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("age").value = ""
    document.getElementById("description").value = ""
}
            
function addSubmitEventToForm() {
    document.getElementById("cat-form").addEventListener('submit', Api.submitCat)
}


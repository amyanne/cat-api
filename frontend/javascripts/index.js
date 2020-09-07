const BASE_URL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', function () {

    Api.getCats();
    addSubmitEventToForm();
    addDeleteEventToCat();
    resetForm();
})


function createTraits() {

    let catTraits = []
    
    if (document.getElementById("Social").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Social"})
      }
    if (document.getElementById("Playful").checked == true) {
        catTraits.push({name_of_trait_from_frontend: "Playful" })

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
    
       return catTraits
}


function getCatFromForm() {
    
    const traits = createTraits()

    
    return {
        cat: {
            name: document.getElementById("name").value,
            gender: document.getElementById("gender").value,
            age: document.getElementById("age").value,
            description: document.getElementById("description").value,
            status: document.getElementById("status").value,
            picture: document.getElementById("picture").value,
            cat_personality_traits_attributes: traits
        }
    }
}

function hideForm() {
    let x = document.getElementById("cat-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function resetForm() {
    document.getElementById("name").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("age").value = ""
    document.getElementById("description").value = ""
}

function addDeleteEventToCat(){
     button.addEventListener('delete', Api.deleteCat)
     
}
    
            
function addSubmitEventToForm() {
    document.getElementById("cat-form").addEventListener('submit', Api.submitCat)
}


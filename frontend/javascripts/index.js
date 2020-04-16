const BASE_URL = "http://localhost:3000"
const rightContainer = document.createElement("div")



document.addEventListener('DOMContentLoaded', function () {

    createCat();
    Api.getCats();
    addSubmitEventToForm();
    resetForm();
})

function createData() {
    return {
        cat: {
            name: document.getElementById("name").value
        },
    }
}
function createCat(){
    const x = document.getElementById("form_sample");
    const createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form
    x.appendChild(createform);

    const heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = "Create Cat";
    createform.appendChild(heading);

    const line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);

    const linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    const namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "Name: "; // Set Field Labels
    createform.appendChild(namelabel);

    const inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);

    createform.appendChild(linebreak);

    const agelabel = document.createElement('label'); // Create Label for E-mail Field
    agelabel.innerHTML = "Age: ";
    createform.appendChild(agelabel);

    const ageelement = document.createElement('input'); // Create Input Field for E-mail
    ageelement.setAttribute("type", "text");
    ageelement.setAttribute("name", "demail");
    createform.appendChild(ageelement);

    const emailbreak = document.createElement('br');
    createform.appendChild(emailbreak);

    const descriptionlabel = document.createElement('label'); // Append Textarea
    descriptionlabel.innerHTML = "Description: ";
    createform.appendChild(descriptionlabel);

    const texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("name", "ddescription");
    createform.appendChild(texareaelement);

    const messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);

    const submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    createform.appendChild(submitelement);

    
}

function resetForm() {
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    document.getElementById("description").value = ""
}
            
function addSubmitEventToForm() {
    document.getElementById("form_sample").addEventListener('submit', Api.submitCat)
}


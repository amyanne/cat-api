class Cat {
    static all = []  

    constructor(name, age, description, status, picture, personality_traits) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.status = status;
        this.picture = picture;
        let i = 0;
        let traits_array = []
        for (i; i < personality_traits.length; i++) {
            let name = personality_traits[i].name
            traits_array.push(name)
            }
        this.traits = traits_array;
        Cat.all.push(this)
    }

    template() {
        return `
    <div class="card"><h2><img src=${this.picture} ></img><br> Name: ${this.name} <br> Age: ${this.age}<br> About:${this.description}<br> Availablilty: ${this.status}<br> Traits: ${this.traits} </h2></div>
         `

    }

    display() {

        document.getElementsByClassName("meow")[0].innerHTML += this.template();
    }

    static renderAll() {


        Cat.all.forEach(cat => cat.display())
    }
}
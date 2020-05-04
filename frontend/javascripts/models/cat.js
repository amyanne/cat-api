class Cat {
    static all = []  

    constructor(name, age, description, status, picture, traits) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.status = status;
        this.picture = picture;
        this.traits = traits;
        Cat.all.push(this)
    }

    template() {
        return `
         <div class="card"><h2>${this.name}, ${this.age}, ${this.description}, ${this.status}, ${this.picture}, </h2></div>
         `

    }

    display() {

        document.getElementsByClassName("meow")[0].innerHTML += this.template();
    }

    static renderAll() {


        Cat.all.forEach(cat => cat.display())
    }
}
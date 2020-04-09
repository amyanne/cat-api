class cat {
    static all = []

    constructor(name, age, description, status, picture) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.status = status;
        this.picture = picture;
        Cat.all.push(this)
    }

    template() {
        return `
         <li> ${this.name}, ${this.age}, ${this.description}, ${this.status}, ${this.picture} </li>
        <br><br>  `
    }

    display() {
        
        document.getElementsByClassName("new-new")[0].innerHTML += this.template();
    }

    static renderAll() {
        
        Cat.all.forEach(cat => cat.display())
    }
}
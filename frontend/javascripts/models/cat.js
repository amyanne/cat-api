class Cat {
    static all = []

    constructor(name, age, description, status, picture, personality_traits) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.status = status;
        this.picture = picture;
        let traitsArray = personality_traits.map(function(trait) {
            return trait.name
        })
        this.traits = traitsArray;
        Cat.all.push(this)
    }

    template() {
        let traitString = this.traits.join(", ")

        return `
         <div.a class="card"><h6><br><br><img src=${this.picture} ></img><br> Name: ${this.name} <br> Age: ${this.age}<br> About: ${this.description}<br> Availablilty: ${this.status}<br> Traits: ${traitString} <br><br> </h6> </div.a>`

    }

    display() {

        document.getElementsByClassName("meow")[0].innerHTML += this.template();
    }

    sortCat() {

        let sortArray = all.sort 

        return sortArray


    }

    

    static renderAll() {
        
         let cats = Cat.all.sort(function (a, b) {
            let catAName = a.name.toUpperCase()
            let catBName = b.name.toUpperCase()
            return (catAName < catBName) ? -1 : (catAName > catBName) ? 1 : 0
        })
         cats.forEach(cat => cat.display())

    }
}
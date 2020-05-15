class Cat {
    static all = []

    constructor(name, age, description, status, picture, personality_traits) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.status = status;
        this.picture = picture;
        let traits_array = personality_traits.map(function(trait) {
            return trait.name
        })
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
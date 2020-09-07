class Api {
    static baseUrl = "http://localhost:3000"
    
    
    
    static getCats() {
        fetch(Api.baseUrl + '/cats')
            .then(response => response.json())
            .then(cats => {
                let catArray = []
                cats.forEach(cat => {
                    
                    let newCat= new Cat(cat.name, cat.age, cat.description, cat.status, cat.picture, cat.personality_traits);
                    
                })
                Cat.renderAll();
            })
            
    }

    // const releasePokemon = (event) => {
    //     event.preventDefault()
    //     const configObj = {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       }
    //     }
    //     fetch(`${POKEMONS_URL}/${event.target.dataset.pokemonId}`, configObj)
    //     event.target.parentElement.remove()
    //   }

    static deleteCat = (event) => {
        event.preventDefault()
        const configObj = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }

        }
            fetch(API.baseUrl + "/${event.target.dataset.catId}", configObj)
        event.target.parentElement.remove()
      }


    static submitCat(event) {
        event.preventDefault(); 
        const catData = getCatFromForm();
        fetch(Api.baseUrl + '/cats', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(catData)
        })
        .then(response => response.json())
            
            .then(data => {
                
                let newCat = new Cat(data.name, data.age, data.description, data.status, data.picture, data.personality_traits);
                newCat.display();
            })
    }

}
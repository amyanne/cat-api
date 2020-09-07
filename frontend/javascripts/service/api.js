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

    static deleteCat(id){
        debugger;

        fetch(Api.baseUrl + '/cats/' + id, {
            method: 'delete'
          })
          .then(response => response.json());
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
class Api {
    static baseUrl = "http://localhost:3000"
    
    static getCats() {
        fetch(Api.baseUrl + '/cats')
            .then(response => response.json())
            .then(cats => {
                cats.forEach(cat => {
                    
                    let newCat= new Cat(cat.name, cat.age, cat.description, cat.status, cat.picture, cat.personality_traits);
                    
                })
                Cat.renderAll();
            })
            
    }



    static submitCat(event) {
        event.preventDefault(); 
        let catData = getCatFromForm();
        fetch(Api.baseUrl + '/cats', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(catData)
        })
        .then(response => response.json())
            
            // console.log("here is the cat response")
            // console.log(response)
            // console.log("here is the cat response2")
            // console.log(response)

            // console.log("here is the cat input" )
            // console.log(JSON.stringify(data)) 
        // })
            .then(data => {
                console.log(data)
                console.log("here is cat resp")
                console.log(data.personality_traits)
                let newCat = new Cat(data.name, data.age, data.description, data.status, data.picture, data.personality_traits);
    
            
                newCat.display();
            })
    }

}
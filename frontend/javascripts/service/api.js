class Api {
    static baseUrl = "http://localhost:3000"
    
    static getCats() {
        fetch(Api.baseUrl + '/cats')
            .then(response => response.json())
            .then(cats => {
                cats.forEach(cat => {
                    
                    let newCat= new Cat(cat.name, cat.age, cat.description, cat.status, cat.picture);
                    
                })
                Cat.renderAll();
            })
            
    }



    static submitCat(event) {
        event.preventDefault(); 
        let data = getCatFromForm();
        fetch(Api.baseUrl + '/cats', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                let newCat = new Cat(data.name, data.age, data.description, data.status, data.picture);
                newCat.display();
            })
    }

}
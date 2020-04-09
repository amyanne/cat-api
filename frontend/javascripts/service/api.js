class Api {
    static baseUrl = "http://localhost:3000"
    
    static getCats() {
        fetch(Api.baseUrl + '/api/cats')
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
        let data = createData();
        fetch(Api.baseUrl + '/api/cats', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                let cat= new Cat(cat.name, cat.age, cat.description, cat.status, cat.picture);;
                cat.display();
            })
    }

}
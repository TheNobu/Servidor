
const {server} = require("./server")

const port = 8080;
server.listen(port,()=> {
    console.log(`Server running on port ${port}`);
});

/*server.get("/",(req,res)=>{
    res.send("Hello World");
});
//Sempre um metodo por vez pois no "/" ja tem um get;
server.get("/",(req,res)=>{
    res.send("Hello World!!!");
});

server.get("/user",(req,res)=>{
    res.send("Usuario")
})

server.post("/",(req,res )=>{
    res.send("Hello Word POST")
})

server.put("/",(req,res)=>{
    res.send("Hello Word PUT");
});

server.delete("/",(req,res)=>{
    res.send("Hello Word DELETE");
});

server.get("*",(req,res)=>{
    res.send("NOT FOUND")
})*/

/*
server.get("/health",(req,res)=>{
    res.json({
        status:"Running"
    })
})

let products =
[
    {
        id:1,
        name: "ps4",
        price: 2500
    },
    {
        id: 1,
        name: "xbox",
        price: 3000
    }

]


server.get("/products",(req,res)=>{
    const moreThan = req.query.more_than ? Number(req.query.more_than): Number(req.query.more_than = 0);
    res.json({
        products: products.filter((product)=>{
            return moreThan < product.price;
        })
    })
})

server.post("/products",(req,res)=>{
    console.log(req.body)
    const newProduct = {
        id:products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.json({
        product:newProduct
    })
})
server.put("/products/:id",(req,res)=>{
    const id =req.params.id; 
    const product = products.find((product)=>{
        return product.id == id;
    })
    if(!product){
        //return serve para parar o codigo
        return res.status(404).send({message: "Product not found"});
        
    }
    product.name = req.body.name;
    product.price = req.body.price;
    res.json({
        product
    })
})

server.get("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find((products)=>{
        return product.id ==id;
    });
    res.json({
        product
    })
})

server.delete("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    products = products.filter((product)=>{
        return product.id != id;
    })
    res.status(204).send();
})*/

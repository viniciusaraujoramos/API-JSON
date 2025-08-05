import express from 'express'
const app = express()

app.use(express.json())

//USAR VETOR COMO BANCO
const usuarios = []

//ROTAS
app.get('/cadastro', (req,res)=>{
    res.status(200).json(usuarios)
    //res.send('DEU BOM COM O GET')
})

app.post('/cadastro', (req,res)=>{
    usuarios.push(req.body)
    //console.log(req.body)
    res.status(201).json(req.body)
    //res.status(201).send('DEU BOM COM O POST')
})

//PORTA LOCAL DO SERVER
app.listen(3000, ()=>{
    console.log("ESTA RODANDO")
})
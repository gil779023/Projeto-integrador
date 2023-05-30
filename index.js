const express = require ("express");
const cadastro = require('./src/table');
var  bodyParser  =  require ( 'body-parser' )
const app = express();
//app.use(express.json());
app.use(express.static('Public'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/pulseira.html", (req, res) => {
  res.sendFile(__dirname +('/pages/pulseira.html'))
});


app.get("/", (req, res) => {
    res.sendFile(__dirname +('/pages/pagina.html'))
});

app.get("/formulario.html", (req, res) => {
  res.sendFile(__dirname +('/pages/formulario.html'))
});

app.get("/home.html", (req, res) => {
  res.sendFile(__dirname +('/pages/home.html'))
});

app.post("/Cadastro", (req, res) => {
    
  
    cadastro.create(
      {nome : req.body.nome,
      sobrenome : req.body.sobrenome,
      municipio :  req.body.municipio,
      estado :req.body.estado,
      nascimento : req.body.nascimento,
      idade : req.body.idade,
      cpf : req.body.cpf,
      email : req.body.email}) 
    
      
});

app.post("/loguin", (req, res) =>{
  cadastro.create({
    nome : req.body.nome,
    senha : req.body.senha
  })
});



app.listen(8000);
let express = require('express');
let app = express();

let path = require('path')
    // seteamos los archivos publicos para poder acceder a esta carpeta con imagenes y hojas de estilo
    // si no lo seteamos el servidor va a tomar public como una carpeta privada y no me lo va a mostrar
let publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.listen(4001, () => console.log("todo ok"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})
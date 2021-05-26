let express = require ('express');
let path = require ('path') 

let app = express ();

let publicPath = path.resolve(__dirname, './public')

app.use (express.static (publicPath))

app.listen (4000, () => console.log ("todo ok"));

app.get ('/', (req, res)=> {
    res.sendFile (path.resolve (__dirname, './views/home.html'))
})
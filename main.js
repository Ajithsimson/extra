const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//CRUD functionality of movies
//c-creating movies

app.get('/movies',()=>{


})

//R-reading movies

app.post('/movies',()=>{


})

//U-updating movie

app.put('/movie/:id',()=>{


})

//D-deleting the movie

app.delete('/movie/:id',()=>{

})
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost: ${port}`)
})
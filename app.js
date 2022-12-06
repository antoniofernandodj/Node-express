const express = require('express')
const app = express()




app.get("/", (request, response) => {
    console.log("User hit the resource")
    response.send(`
<form method="post">
    Isso <input name="isso" /> <br />
    Aquilo <input name="aquilo" /> <br />
    <input type="submit" value="enviar" />
</form>    
`)
})

app.post("/", (request, response) => {
    const form = request.body;
    console.log(form);
    response.send("Home page");
})

app.listen(5000, () => {
    console.log("Listening on port 5000...")
})

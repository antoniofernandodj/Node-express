const home = (request, response) => {

    if (request.method === 'POST') {
        console.log('método post')
    }

    response.render('home.ejs', {
        people: [
            {name: 'Antonio', age: 28}
        ]
    })
}

module.exports = {
    home: home
}
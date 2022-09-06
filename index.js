const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const http = require('http')
const bcrypt = require('bcrypt')
const users = require('./akundata').userDB
const { listGame, biodataGame, historyGame } = require('./models');

const app = express()
const jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './views')))

app.use('/js', express.static(__dirname + '/js'))
app.use('/css', express.static(__dirname + '/css'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})


//REGISTRATION
app.get('/register', (req, res) => {
    res.render('registration')
})

app.post('/register', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email)
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.password, 10)

            let newUser = {
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
            }
            users.push(newUser)
            console.log('User list', users)

            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='/login'>login</a></div><br><br><div align='center'><a href='/register'>Register another user</a></div>")
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='/register'>Register again</a></div>")
        }
    } catch (error) {
        res.send("Internal server error")
    }
})


//LOGIN
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email)
        if (foundUser) {

            let submittedPass = req.body.password
            let storedPass = foundUser.password

            const passwordMatch = await bcrypt.compare(submittedPass, storedPass)
            if (passwordMatch) {
                let usrname = foundUser.username
                res.render('dashboard')
            } else {
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='/login'>login again</a></div>")
            }
        }
        else {

            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`
            await bcrypt.compare(req.body.password, fakePass)

            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='/login'>login again<a><div>")
        }
    } catch (error) {
        res.send("Internal server error")
    }
})


//DASHBOARD GAME
app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

//PAGE GAME LIST//

//READ IN BROWSER
app.get('/dashboard_game', async (req, res) => {
    const listGame = await fetch(`http://localhost:9000/listGame`)
    const data = await listGame.json()
    console.log(data)
    res.render('listgame', { listGames: data })
})

//CREATE
app.post('/listGame', jsonParser, async (req, res) => {
    const data = await listGame.create({
        nameGame: req.body.nameGame
    })

    res.status(201).send(data)
})

//READ
app.get('/listGame', async (req, res) => {
    //SELECT * FROM game
    const data = await listGame.findAll()
    res.send(data)
})

////////////////////////////////////////////////////////////////////////

//PAGE BIODATA//
//READ IN BROWSER
app.get('/dashboard_game_biodata/:id', async (req, res) => {
    const biodatagame = await fetch(`http://localhost:9000/listGame/${req.params.id}/biodata`)
    const data = await biodatagame.json()
    console.log(data)
    res.render('biodatagame', { data: data })
})
//CREATE
app.post('/biodata', jsonParser, async (req, res) => {
    const data = await biodataGame.create({
        username: req.body.username,
        email: req.body.email,
        levelAccount: req.body.levelAccount,
        listGameId: req.body.listGameId
    })
    console.log(data)
    res.status(201).send(data)
})

//READ
app.get('/listGame/:id/biodata', async (req, res) => {
    //SELECT * FROM game
    const data = await listGame.findByPk(req.params.id, {
        include: biodataGame
    })
    console.log(data)
    res.send(data)
})

// UPDATE
app.put('/biodata/:id', jsonParser, async (req, res) => {
    // const menu = await Menu.findOne({
    //   where:{
    //     id: req.params.id
    //   }
    // })

    try {
        data = await biodataGame.findByPk(req.params.id)
        data.username = req.body.username
        data.email = req.body.email
        data.lvlAcc = req.body.levelAccount
        await data.save()

        res.status(202).send(data)
    } catch (error) {
        res.status(422).send('UNABLE TO UPDATE DATA')
    }

})

//DELETE
app.delete('/biodata/:id', async (req, res) => {
    try {
        const data = await biodataGame.findByPk(req.params.id)
        data.destroy()
        res.status(202).send('DELETED')
    } catch (error) {
        res.status(422).send('UNABLE TO DELETE DATA')
    }
})

///////////////////////////////////////////////////////////////////

//PAGE HISTORY GAME//
//READ IN BROWSER
app.get('/dashboard_game_history/:id', async (req, res) => {
    const historygame = await fetch(`http://localhost:9000/listGame/${req.params.id}/history`)
    const data = await historygame.json()
    console.log(data)
    res.render('historygame', { data: data })
})

//CREATE
app.post('/history', jsonParser, async (req, res) => {
    const data = await historyGame.create({
        update: req.body.update,
        version: req.body.version,
        rating: req.body.rating,
        listGameId: req.body.listGameId
    })
    console.log(data)
    res.status(201).send(data)
})

//READ
app.get('/listGame/:id/history', async (req, res) => {
    //SELECT * FROM game
    const data = await listGame.findByPk(req.params.id, {
        include: historyGame
    })
    console.log(data)
    res.send(data)
})

// UPDATE
app.put('/history/:id', jsonParser, async (req, res) => {
    // const menu = await Menu.findOne({
    //   where:{
    //     id: req.params.id
    //   }
    // })

    try {
        data = await historyGame.findByPk(req.params.id)
        data.update = req.body.update
        data.version = req.body.version
        data.rating = req.body.rating
        await data.save()

        res.status(202).send(data)
    } catch (error) {
        res.status(422).send('UNABLE TO UPDATE DATA')
    }

})

//DELETE
app.delete('/history/:id', async (req, res) => {
    try {
        const data = await historyGame.findByPk(req.params.id)
        data.destroy()
        res.status(202).send('DELETED')
    } catch (error) {
        res.status(422).send('UNABLE TO DELETE DATA')
    }
})

app.listen(9000, () => {
    console.log("App is in localhost:9000")
})
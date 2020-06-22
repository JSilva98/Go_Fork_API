const User = require('../Models/user.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let SALT_ROUNDS = 10

async function get(req, res){
    const user = req.query

    try{
        if(user.id) {
            return res.send(await User.find({_id: user.id}))
        } else {
            return res.send(await User.find().lean())
        }
    } catch(err) {
        return res.status(400).send({ error: `Could not get users: ${err}`})
    }
}

async function register(req, res) {
    console.log(req.body)
    let newUser = await new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, SALT_ROUNDS),
        foto: "https://i.imgur.com/6NIOn6z.jpg", 
        points: 0,
        rewards:{
         acheivements: [
            {
              id: 0,
              tittle: "Primeiro Pedido",
              desc: "Faça o seu primeiro pedido para receber 5 pontos!",
              points: 5,
              available: true,
              progress: 0,
            },
            {
              id: 1,
              tittle: "Primeiro Pagamento",
              desc: "Faça o seu primeiro pagamento para receber 5 pontos!",
              points: 5,
              available: true,
              progress: 0,
            },
            {
              id: 2,
              tittle: "Primeira review",
              desc: "Faça a sua primeira avaliação para receber 5 pontos!",
              points: 5,
              available: true,
              progress: 0,
            },
            {
              id: 3,
              tittle: "Fazer 10 pagamentos",
              desc: "Faça 10 pagamentos para receber 50 pontos!",
              points: 50,
              available: true,
              progress: 0,
            },
            {
              id: 4,
              tittle: "Fazer 10 reviews",
              desc: "Faça 10 avaliações para receber 35‬ pontos!",
              points: 35,
              available: true,
              progress: 0,
            }
          ], 
        },
        type: 3
    })
    newUser.save((error) => {
        if (error) {
            console.log(error)
            return
        }
        else {
            res.status(201).send({ success: "Register Sucess" })
        }

    })
}

async function validate(req, res) {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username }).lean()
        if (!user) {
            console.log("user not found")
            return res.status(403).send({ error: "User not found" })
        }

        const passwordValid = await bcrypt.compare(password, user.password)
        
        if (!passwordValid) {
            console.log("invalid password")
            return res.status(403).send({ error: "Password invalid" })
        }
        res.status(200).send({ Yey: "U got it", user, token: jwtSignUser(user) })

       /*  const passwordValid = await bcrypt.compare(password, user.password)
        //const passwordValid = password.equals(user.password)

        if (password != user.password) {
            console.log("invalid password")
            return res.status(403).send({ error: "Password invalid" })
        } else {
            console.log("Logged in")
            return res.status(200).send({ Yey: "Done", user, token: jwtSignUser(user) })
        } */
        
        

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ error: "Something went wrong" })

    }

}

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 1;
    return jwt.sign(user, "baconpancakes", {
        expiresIn: ONE_WEEK
    })
}

async function del(req, res){
    const _id = req.params.id

    try{
        await User.findByIdAndDelete(_id)
        return res.send('Removed')
    } catch(err){
        return res.status(400).send({ error: `Could not remove user: ${err}`})
    }
}

async function post(req, res) {
    try {
        User.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create user: ${err}` })

    }
}

async function put(req, res) {
    try {
        User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, data) => {
                if (err) {
                    return res.status(400).send({ error: `Could not edit user: ${err}` })
                }
            }
        )
        return res.send("edited " + req.params.id)
    }

    catch (err) {
        return res.status(400).send({ error: `Could not edit user: ${err}` })

    }
}

module.exports = {get, del, put, post, validate, register}
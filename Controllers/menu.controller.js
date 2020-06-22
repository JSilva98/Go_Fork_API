const Menu = require('../Models/menu.model.js')

async function get(req, res){
    const menu = req.query

    try{
        if(menu.id) {
            return res.send(await Menu.find({_id: menu.id}))
        } else {
            return res.send(await Menu.find())
        }
    } catch(err) {
        return res.status(400).send({ error: `Could not get menu: ${err}`})
    }
}

async function post(req, res) {
    try {
        Menu.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create menu: ${err}` })

    }
}

async function del(req, res){
    const _id = req.params.id

    try{
        await Menu.findByIdAndDelete(_id)
        return res.send('Removed')
    } catch(err){
        return res.status(400).send({ error: `Could not remove menu: ${err}`})
    }
}


module.exports = {get, post, del}
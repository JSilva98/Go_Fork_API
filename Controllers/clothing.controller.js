const Clothing = require('../Models/clothing.model.js')

async function get(req, res){
    const clothing = req.query

    try{
        if(clothing.id) {
            return res.send(await Clothing.find({_id: clothing.id}))
        } else {
            return res.send(await Clothing.find())
        }
    } catch(err) {
        return res.status(400).send({ error: `Could not get clothing: ${err}`})
    }
}

async function post(req, res) {
    try {
        Clothing.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create clothing: ${err}` })

    }
}

async function del(req, res){
    const _id = req.params.id

    try{
        await Clothing.findByIdAndDelete(_id)
        return res.send('Removed')
    } catch(err){
        return res.status(400).send({ error: `Could not remove clothing: ${err}`})
    }
}


module.exports = {get, post, del}
const Service = require('../Models/service.model.js')

async function get(req, res){
    const service = req.query

    try{
        if(service.id) {
            return res.send(await Service.find({_id: service.id}))
        } else {
            return res.send(await Service.find())
        }
    } catch(err) {
        return res.status(400).send({ error: `Could not get service: ${err}`})
    }
}

async function post(req, res) {
    try {
        Service.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create service: ${err}` })

    }
}

async function del(req, res){
    const _id = req.params.id

    try{
        await Service.findByIdAndDelete(_id)
        return res.send('Removed')
    } catch(err){
        return res.status(400).send({ error: `Could not remove service: ${err}`})
    }
}


module.exports = {get, post, del}
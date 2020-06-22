const Review = require('../Models/review.model.js')

async function get(req, res){
    const review = req.query

    try{
        if(review.id) {
            return res.send(await Review.find({_id: review.id}))
        } else {
            return res.send(await Review.find())
        }
    } catch(err) {
        return res.status(400).send({ error: `Could not get review: ${err}`})
    }
}

async function post(req, res) {
    try {
        Review.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create review: ${err}` })

    }
}


async function del(req, res){
    const _id = req.params.id

    try{
        await Review.findByIdAndDelete(_id)
        return res.send('Removed')
    } catch(err){
        return res.status(400).send({ error: `Could not remove review: ${err}`})
    }
}


module.exports = {get, post, del}
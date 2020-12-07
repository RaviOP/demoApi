const User = require('../models/User')
const fs = require('fs').promises

let APP_URL = 'https://demo-api-node.herokuapp.com';

let readUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200)
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
} 

let readUser = async (req, res) => { 
    try {
        const _id = req.params.id
        const user = await User.findById(_id)
        if (!user) {
            return res.send('No User Found')
        }
        res.send({
            User: user,
            Link: `${APP_URL}/view/${user._id}`
        })
        res.download("user")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

let createUser = async (req, res) => {
    try {
        const { name , phone} = req.body
        const user = new User({name,phone})
        await user.save()
        res.status(201)
        res.send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

let updateUser = async (req, res) => { 
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            phone: req.body.phone
        }, {
            new: true,
            omitUndefined: true
        })
        if (!user) {
            return res.send('No User Found')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

let deleteUser = async (req, res) => { 
    try {
        const _id = req.params.id
        const user = User.findById(_id)
        await user.remove()
        if (!user) {
            res.status(404).send('User Not Found')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

let view = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    readUsers,
    readUser,
    createUser,
    updateUser,
    deleteUser,
    view
}
const router = require('express').Router()
const { readUsers,
    readUser,
    createUser,
    updateUser,
    deleteUser,
    download} = require('../controllers/userController')

//Create Users 
router.post('/users', createUser)
//Read Users 
router.get('/users', readUsers)
//Read User By Id
router.get('/users/:id', readUser)
//Update User By Id
router.put('/users/:id', updateUser)
//Delete User By Id
router.delete('/users/:id', deleteUser)

router.get('/download/:id', download)

module.exports = router
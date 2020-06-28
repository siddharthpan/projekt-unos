const express = require('express')
const router = express.Router()

// @desc    Login Page
// @route   GET

router.get('/', (req, res) => {
    res.send('Login')
})

// @desc    Dashboard Page
// @route   GET

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})


module.exports = router
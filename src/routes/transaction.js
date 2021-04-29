const router = require('express').Router()
const { createTransaction } = require('../controllers/transaction.controller')
const {auth} = require('../utils/auth')

router.route('/').post(auth, createTransaction)

module.exports = router
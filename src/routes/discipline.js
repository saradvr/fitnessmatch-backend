const router = require('express').Router()
const { createDiscipline } = require('../controllers/discipline.controller')

router.route('/createDiscipline').post(createDiscipline)

module.exports = router
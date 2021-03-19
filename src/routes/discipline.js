const router = require('express').Router()
const { createDiscipline, update } = require('../controllers/discipline.controller')

router.route('/createDiscipline').post(createDiscipline)
router.route('/:disciplineId').put(update)

module.exports = router
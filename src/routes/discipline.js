const router = require('express').Router()
const { createDiscipline, update, list } = require('../controllers/discipline.controller')

router.route('/createDiscipline').post(createDiscipline)
router.route('/:disciplineId').put(update)
router.route('/').get(list)

module.exports = router
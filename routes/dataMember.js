const controller = require('../controllers/DataMember');
const router = require('express').Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);

router.post('/', controller.create);

router.patch('/:id', controller.updateOnePatch);
router.put('/:id', controller.updateOnePut);
router.delete('/:id', controller.deleteOne);

module.exports = router;
const controller = require('../controllers/registrations');
const router = require('express').Router();

router.get('/', controller.getUsers);
router.get('/:registrationId', controller.getUser);
router.post('/', controller.createUser);
router.put('/:registrationId', controller.updateUser);
router.delete('/:registrationId', controller.deleteUser);

module.exports = router;

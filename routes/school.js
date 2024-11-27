const express= require('express'),
router = express.Router(),
schoolController= require('../controllers/schoolController');


router.post('/addSchool', schoolController.addSchool);


router.get('/listSchools', schoolController.listSchools);

module.exports = router;
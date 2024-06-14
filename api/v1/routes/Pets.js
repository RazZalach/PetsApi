const router = require('express').Router();

const { getAllPets } = require('../controllers/Pets');


router.get('/all',getAllPets );
module.exports = router;
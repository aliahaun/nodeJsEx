const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.use(express.json());
router.get('/', companyController.showCompanies);
router.post('/', companyController.addCompany);
router.put('/:id', companyController.updateCompany);
router.delete('/:id',companyController.deleteCompany);
module.exports = router;
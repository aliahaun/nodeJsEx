const Joi = require('joi');
const mongoose = require('mongoose');
const Joigoose = require('joigoose')(mongoose, null, {
    _id: false,
    timestamps: false,
  });
const express = require('express');
const router = express.Router();

router.use(express.json());

const type_compteN= 'Type compte';
const tvaN= 'TVA';
const team_sizeN= 'Team size';
const team_nameN= 'Team name';
const sirretN= 'Sirret';
const form_juridiqueN= 'Form juridique';
const email_contactN= 'Email contact';
const description_activityN= 'Description activity';
const adressN= 'Adress';
const zipN= 'Zip';
var companyShema = Joi.object().keys({
        domain: Joi.string().required()
        ,
        email:Joi.string().email().required(),
        name:Joi.string().min(3).required(),
        siren: Joi.number().required(),
        account_plan:Joi.string().uppercase().required(),
        adress: Joi.string().required(),
        description_activity:Joi.string().required(),
        email_contact:Joi.string().required(),
        form_juridique:Joi.string().uppercase().required(),
        sector_activity:Joi.string().required(),
            // enum:['Agroalimentaire', 'Banque / Assurance', 'Bois / Papier / Carton / Imprimerie', 'BTP / Matériaux de construction', 'Chimie / Parachimie', 'Commerce / Négoce / Distribution', 'Autre']
        sirret:Joi.string().required(),
        team_name:Joi.string().required(),
        team_size:Joi.string().required(),
        tva:Joi.number().required(),
        type_compte:Joi.string().required(),
        zip:Joi.number().required()
    });
var ComponiesSchema = new mongoose.Schema(Joigoose.convert(companyShema));
const Companies = mongoose.model('companies', ComponiesSchema);


router.get('/', async (req, res) => {
    const companies = await Companies.find();
    res.send(companies);
} );

router.post('/', async (req, res) => {
    try{
    const {error, value} = companyShema.validate(req.body)
    if(error) {
        return res.status(400).send(error.message);
    }
    
    let companies = new Companies({
        domain: req.body.domain,
        email: req.body.email,
        name: req.body.name,
        siren: req.body.siren,
        account_plan: req.body.account_plan,
        adress: req.body.adress,
        description_activity: req.body.description_activity,
        email_contact: req.body.email_contact,
        form_juridique: req.body.form_juridique,
        sector_activity: req.body.sector_activity,
        sirret: req.body.sirret,
        team_name: req.body.team_name,
        team_size: req.body.team_size,
        tva: req.body.tva,
        type_compte: req.body.type_compte,
        zip: req.body.zip   
     });

    companies = await companies.save();
    res.send(companies);
} catch (err) {
    if(err.isJoi === true){
        err.status = 422;
        console.log(err.message);
    }
    next(err);
}
});

router.put('/:id', async (req, res) => {

    const companies = await Companies.findByIdAndUpdate(req.params.id, { 
        domain: req.body.domain,
        email: req.body.email,
        name: req.body.name,
        siren: req.body.siren,
        account_plan: req.body.account_plan,
        adress: req.body.adress,
        description_activity: req.body.description_activity,
        email_contact: req.body.email_contact,
        form_juridique: req.body.form_juridique,
        sector_activity: req.body.sector_activity,
        sirret: req.body.sirret,
        team_name: req.body.team_name,
        team_size: req.body.team_size,
        tva: req.body.tva,
        type_compte: req.body.type_compte,
        zip: req.body.zip 
     }, {
        new: true
      });
    
      if (!companies) return res.status(404).send('The company  with the given ID was not found.');
    res.send(companies);
});

router.delete('/:id', async (req, res)=> {
    const companies = await Companies.findByIdAndRemove(req.params.id);
    if (!companies) return res.status(404).send('The company  with the given ID was not found.');
    res.send(companies);
    });


module.exports = router;
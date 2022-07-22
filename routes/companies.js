const Joi = require('joi');
const mongoose = require('mongoose');
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




const Companies = mongoose.model('companies', new mongoose.Schema({
    domain:{
        type: String,
        minlength:5,
        maxlength:100,
    },
    email: {
        type: String,
        minlength:10,
        maxlength:100,
    },
    name:{
        type: String,
        minlength:5,
        maxlength:50,
    },
    siren:{
        type: Number
    },
    account_plan:{
        type: String,
        uppercase:true
    },
    adress:{
        type: String,

        minlength:8,
        maxlength:200,
    },
    description_activity:{
        type: String
    },
    email_contact: {
        type: String,

        minlength:10,
        maxlength:100,
    },
    form_juridique:{
        type: String,

        uppercase:true
    },
    sector_activity:{
        type: String,

        enum:['Agroalimentaire', 'Banque / Assurance', 'Bois / Papier / Carton / Imprimerie', 'BTP / Matériaux de construction', 'Chimie / Parachimie', 'Commerce / Négoce / Distribution', 'Autre']
    },
    sirret:{
        type: Number,
        min:14
        },
    team_name:{
        type: String,

        min:3,
        max:10
    },
    team_size:{
        type: String,
        
    },
    tva:{
        type: Number,
        
    },
    type_compte:{
        type: String,
        
    },
    zip:{
        type: Number,
        min:5
    }
}));


router.get('/', async (req, res) => {
    const companies = await Companies.find();
    res.send(companies);
} );

router.post('/', async (req, res) => {
  if (req.body.name===undefined) return res.status(400).send('error');
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
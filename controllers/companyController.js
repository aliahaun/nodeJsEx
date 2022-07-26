var Companies = require('../models/Company');

exports.showCompanies = async (req, res) => {
    const companies = await Companies.find();
    res.send(companies);
};
exports.addCompany = async (req, res) => {
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
};
exports.updateCompany = async (req, res) => {

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
};

exports.deleteCompany = async (req, res)=> {
    const companies = await Companies.findByIdAndRemove(req.params.id);
    if (!companies) return res.status(404).send('The company  with the given ID was not found.');
    res.send(companies);
    };
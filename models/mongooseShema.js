const Joi = require('joi');

const companyShema = Joi.object().keys({
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


module.exports = { companyShema };
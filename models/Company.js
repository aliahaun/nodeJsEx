const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const companyShema =new mongoose.Schema({
    domain:{
        type:String,
        required:'You must supply a domain Name'
    },
    email:{
        type:String,
        required:'You must supply an email Address'
    },
    name:{
        type: String,
        required:'The name is required'
    },
    siren:{
        type: Number,
        required:'The siren number is required'
    }, 
    account_plan:{
        type: String,
        required : 'The account plan is required'
    },
    adress:{
        type: String,
        required : 'The address is required'
    }, 
    description_activity:{
        type: String
    },
    email_contact:{
        type: String,
        required : 'The email contact is required'
    },
    form_juridique:{
        type: String,
        required: 'The form juridique is required'
    },
    sector_activity:{
        type: String,
        enum:['Agroalimentaire', 'Banque / Assurance', 'Bois / Papier / Carton / Imprimerie', 'BTP / Matériaux de construction', 'Chimie / Parachimie', 'Commerce / Négoce / Distribution', 'Autre'],
        required: 'The Sector Activity can only be one of the enum values and is required'
    },
    sirret:{
        type: Number,
        required:'The sirret is required'
    },
    team_name:{
        type: String,
        required:'The team name is required'
    },
    team_size:{
        type: String,
        required:'The team size is required'
    },
    tva:{
        type: Number,
        required: 'You must supply an value for the TVA'
    },
    type_compte:{
        type: String,
        required: 'The type of the account is required'
    },
    zip:{
        type: Number,
        required: 'The zip code is required'
    }
});
module.exports = mongoose.model('componies', companyShema);
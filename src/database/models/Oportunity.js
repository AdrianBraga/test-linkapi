const db = require('../connection.db');

const OportunitySchema = new db.Schema({
  title: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
  value: { 
    type: Number, 
    required: true 
  },
  won_time: {
    type: Date,
    required: true
  }
});

module.exports = db.model('oportunities', OportunitySchema);
const Oportunity = require('../database/models/Oportunity');

module.exports = {
  async index(request, response) {
    const oportunities = await Oportunity.find();
    return response.status(200).json(oportunities)
  }
}
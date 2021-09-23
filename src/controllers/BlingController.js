const { blingApi } = require('../services/connectionApi');

module.exports = {
  async index(request, response) {
    const apiResponse = await blingApi.get();

    return response.json(apiResponse.data)
  }
}
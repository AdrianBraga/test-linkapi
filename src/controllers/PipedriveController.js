const {pipedriveApi} = require('../services/connectionApi');

module.exports = {
  async index(request, response) {
    const apiResponse = await pipedriveApi.get();

    return response.json(apiResponse.data)
  }
}
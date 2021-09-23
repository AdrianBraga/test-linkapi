const axios = require('axios').default;

const pipedriveApi = axios.create({
  baseURL: `https://test-linkapi.pipedrive.com/v1/deals?api_token=${process.env.API_KEY_PIPEDRIVE}`,
});

const blingApi = axios.create({
  baseURL: `https://bling.com.br/Api/v2/produtos/json/&apikey=${process.env.API_KEY_BLING}`,
});

module.exports = { pipedriveApi, blingApi };

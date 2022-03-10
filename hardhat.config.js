require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
require('dotenv').config();
/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
   solidity: "0.8.12",
   defaultNetwork: "ropsten",
   networks: {
        hardhat: {},
      ropsten: {
         url: "https://eth-ropsten.alchemyapi.io/v2/_9JhW9bILfUFpDWEWeVUDYzOHhYx0SuH",
         accounts: PRIVATE_KEY
      }
   },
}

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.21",
  networks: {
  sepolia: {
  url: "https://eth-sepolia.g.alchemy.com/v2/qh6O1_Tof1SIgN__pfanyqWUkYu7SEo1",
  accounts: ['0xc75c8aba6af11b36f17abefdbfffc3b9d83c9f789887ea29ee40b04cb58999e2']
  }
  },
  etherscan: {
  apiKey: "G9ZPPIY5YCWQK3IBVWZAGATSJP54778J6Y",
  },
  };

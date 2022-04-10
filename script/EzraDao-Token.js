import sdk from "./EzraDao.js";
import {ethers } from "ethers"; 


const app = sdk.getAppModule("0xEddd0510F9fF724BF8C55DaFe1C3C6C81eb02E37");

// (async () => {
//     try {
//       // Deploy a standard ERC-20 contract.
//       const tokenModule = await app.deployTokenModule({
//                 name: "EzraDao Governace Token" ,
//                 symbol: "EZRA",
//             });
//             console.log(
//               " Successfully deployed token module, address:",
//               tokenModule.address,
//             );
//           } catch (error) {
//             console.error("failed to deploy token module", error);
//           }
// })();

// This is the address of our ERC-20 contract printed out in the step before.
const tokenModule  = sdk.getTokenModule("0xFE86441B28B9965C223Ae890c24e6A6A05F547D4");

(async () => {
    try {
      const amount = 1000_000_000;

      const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18)
      // Interact with your deployed ERC-20 contract and mint the tokens!
      await tokenModule.mint(amountWith18Decimals);
      const totalSupply = await tokenModule.totalSupply();

            console.log(
              " there is now ",
              ethers.utils.formatUnits(totalSupply, 18),
              "$ERZA in circulation"
            );
          } catch (error) {
            console.error("failed to print money", error);
          }
})();
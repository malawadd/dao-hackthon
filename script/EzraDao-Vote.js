import sdk from "./EzraDao.js";
import {ethers } from "ethers"; 


const app = sdk.getAppModule("0xEddd0510F9fF724BF8C55DaFe1C3C6C81eb02E37");

// ( async () => {
//     try {
//         const voteModule = await app.deployVoteModule({
//             // Give your governance contract a name.
//             name: "Ezra Proposals",
//             // governance token contract, our ERC-20 contract!
//             votingTokenAddress : "0xFE86441B28B9965C223Ae890c24e6A6A05F547D4",
//             proposalStartWaitTimeInSeconds: 0,
//             proposalVotingTimeInSeconds: 24 * 60 * 60,
//             votingQuorumFraction: 0,
//             minimumNumberOfTokensNeededToPropose:"1",
//         });
//         console.log(
//             " Successfully deployed vote module, address:",
//             voteModule.address,
//           );
//     } catch (error) {
//         console.log("Failed to deploy vote  Module", error)
//     }
// })()


const voteModule = sdk.getVoteModule("0xfE9b081f5eaecB44338Bb1bCC4D79D472bffba00");

const tokenModule  = sdk.getTokenModule("0xFE86441B28B9965C223Ae890c24e6A6A05F547D4");

(async () => {
    try {
      // Give our treasury the power to mint additional token if needed.
      await tokenModule.grantRole("minter", voteModule.address);
      
      console.log("Successfully gave vote module permissions to act on token module")
          } catch (error) {
            console.error("failed to grant vote module permissions on token module", error);
            process.exit(1);
          }
    try {
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await tokenModule.balanceOf(
        process.env.WALLET_ADDRESS
    );
    //grab 90% of the supply we hold 
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    //transefer 90% of the supply of our voting contract 
      await tokenModule.transfer(voteModule.address, percent90);
      console.log(" Successfully transferred tokens to vote module")
          } catch (error) {
            console.error("failed to transfer tokens to vote module", error);
          }
})();
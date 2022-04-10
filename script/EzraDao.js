import  {ThirdwebSDK} from '@3rdweb/sdk'
import ethers from "ethers"
import { readFileSync } from "fs";

import dotenv from 'dotenv'
dotenv.config()

// instantiate the 3rdweb sdk
const sdk = new ThirdwebSDK(
    new ethers.Wallet(
    process.env.PRIVATE_KEY,
    ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
);

(async ()=> {
    try{
        const apps = await sdk.getApps();
        console.log("your app address is ", apps[0].address);
    } catch (err) {
        console.error("Failed to get apps from sdk", err);
        process.exit(1);
    }
})()


//deploy collection 
const app = sdk.getAppModule("0xEddd0510F9fF724BF8C55DaFe1C3C6C81eb02E37");


// (async ()=> {
//     try{
//         const bundleDropModule = await app.deployBundleDropModule({
//             //collection name 
//             name: "EzraDao Memebership",
//             description : "Membership for ezra dao initative",
//             image: readFileSync("script/assets/ezraDao.jpg") ,
//              primarySaleRecipientAddress: ethers.constants.AddressZero,
//         });
//         console.log(
//             " Successfully deployed bundleDrop module, address:",
//             bundleDropModule.address,
//             );
//             console.log(
//               " bundleDrop metadata:",
//               await bundleDropModule.getMetadata(),
//             );
  
//       } catch (error) {
//           console.log("Failed to deploy bundleDrop Module", error)
//       }
//   })()


// configure access collection  and set claims conditions 
const bundleDrop = sdk.getBundleDropModule("0x2F022F94ABBDE4a96E170CA3B071E40f7d167793");

// (async () => {
//     try{
//         await bundleDrop.createBatch([
//             {
//                 name: "Ezra V1" ,
//                 description: "Grant Access to Ezra Dao",
//                 image: readFileSync("script/assets/ezraDao.jpg")

//             },
//         ]);
//         console.log("Successfully created a new NFT in the drop!");
//     } catch (error){
//         console.error("Failed to create the new NFT", error);
//     }
// })()

// (async () => {
//     try {
//       const claimConditionFactory = bundleDrop.getClaimConditionFactory();
//       // Specify conditions.
//       claimConditionFactory.newClaimPhase({
//         startTime: new Date(),
//         maxQuantity: 50,
//         maxQuantityPerTransaction: 1,
//       });
      
      
//       await bundleDrop.setClaimCondition(0, claimConditionFactory);
//       console.log(" Sucessfully set claim condition on bundle drop:", bundleDrop.address);
//     } catch (error) {
//       console.error("Failed to set claim condition", error);
//     }
//   })()


 
export default sdk;
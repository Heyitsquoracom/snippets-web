// This snippet file was generated by processing the source file:
// ./storage-next/emulator-suite.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START storage_emulator_connect_modular]
import { getStorage, connectStorageEmulator } from "firebase/storage";

const storage = getStorage();
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectStorageEmulator(storage, "localhost", 9199);
} 
// [END storage_emulator_connect_modular]
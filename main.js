import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

async function testFirestore() {
  try {
    await addDoc(collection(db, "test"), {
      msg: "تجربة ناجحة",
      time: new Date()
    });
    console.log("Firestore works ✅");
  } catch (e) {
    console.error("Error ❌", e);
  }
}

testFirestore();

import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const getAllMugs = async () => {
  let mugs = [];

  const snap = await getDocs(collection(db, "mugs"));

  snap.forEach((mug) => {
    mugs.push(mug.data());
  });

  localStorage.setItem("mugs", JSON.stringify(mugs));

  return mugs;
};

import { db } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";

const useFirebaseData = async (collection: string, document: string) => {
	let data;

	try {
		const docRef = doc(db, collection, document);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			data = docSnap.data();
		} else {
			console.log("No such document!");
		}
	} catch (error) {
		console.log(error);
	}

	return data;
};

export default useFirebaseData;

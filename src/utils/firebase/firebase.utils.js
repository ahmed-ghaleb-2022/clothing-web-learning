import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCHERJwUt08GuEpd519IbCqvWO57RNUDhA",

    authDomain: "crown-clothing-db-dc50f.firebaseapp.com",

    projectId: "crown-clothing-db-dc50f",

    storageBucket: "crown-clothing-db-dc50f.appspot.com",

    messagingSenderId: "134939182438",

    appId: "1:134939182438:web:43d9cd2d46a4677a5ef4a7"

};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid )

    

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth ;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}
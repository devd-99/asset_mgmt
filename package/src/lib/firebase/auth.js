import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
  } from "firebase/auth";

import { auth } from "./clientApp";

export function onAuthStateChanged(cb) {
    return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
const provider = new GoogleAuthProvider();

try {
  const result = await signInWithPopup(auth, provider); // Capture the result
  const user = result.user; // Get the user object from the result

  console.log("Success! Signed in as:", user);
  console.log("User data:", {
    displayName: user.displayName,
    uid: user.uid,
    // ... other properties you want to access
  });
} catch (error) {
console.error("Error signing in with Google", error);
}
}

export async function signOut() {
try {
return auth.signOut();
} catch (error) {
console.error("Error signing out with Google", error);
}
}
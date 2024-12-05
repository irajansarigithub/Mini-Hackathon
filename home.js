import{auth,onAuthStateChanged, signOut, db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
  query,
  orderBy,
  limit,
  doc, deleteDoc} from "./firebase.js"




  onAuthStateChanged(auth , (user)=> {
    console.log(user);
    
  if (user) {
    const profilePicture = document.querySelector(".profile-pict");
    const displayName = document.querySelector(".dp-name-p");
    displayName.innerHTML = user.displayName || "Anonymous"; 
    profilePicture.src = user.photoURL || "default-pic.jpg";
  } else {   
    // window.location.href = " https://aura-posting-web.web.app";
    console.log(error);
    
  }
});






const logoutBtn = document.getElementById('logoutBtn');

let out = ()=>{

 signOut(auth).then(() => {
   alert('Sign-out successfuly!.')
   window.location.href = 'index.html'
 }).catch((error) => {
   alert('error',error)
 });
}

    document.addEventListener('DOMContentLoaded', () => {
      const userDisplayName = document.getElementById('userDisplayName');
      
      // Check for user authentication
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userDisplayName.textContent = user.displayName || 'Anonymous';
        } else {
          window.location.href = './index.html'; 
        }
      });
    });
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser
} from "./firebase.js";


const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User exists:", user);
  } else {
    console.log("User signed out");
  }
});

// Login Function
let login = document.getElementById('loginBtn');
login.addEventListener('click', () => {
  let email = document.getElementById('email');
  let password = document.getElementById('password');

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successfully!");
      localStorage.setItem("user", JSON.stringify({
        email: user.email,
        id: user.uid
      }));
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 3000);
    })
    .catch((error) => {
      alert("Error logging in: " + error.message);
    });
});

// Google Login Function
let googlelogin = document.getElementById('googleBtn');
googlelogin.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("user", JSON.stringify({
        email: user.email,
        id: user.uid,
        name: user.displayName,
        picture: user.photoURL
      }));
      window.location.href = 'home.html';
    })
    .catch((error) => {
      alert("Error signing in with Google: " + error.message);
    });
});

// Email Verification Function
let emailVerify = document.getElementById('sendVerification');
emailVerify.addEventListener('click', () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("Verification email sent! Check your inbox.");
    })
    .catch((error) => {
      alert("Error sending verification email: " + error.message);
    });
});

// Password Reset Function
let Resetemail = document.getElementById('resetPassword');
Resetemail.addEventListener('click', () => {
  let email = document.getElementById('email');
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// Delete Account Function
let delteBtn = document.getElementById('deleteAccount');
delteBtn.addEventListener('click', () => {
  const user = auth.currentUser;
  if (user) {
    deleteUser(user)
      .then(() => {
        alert("Your account has been deleted.");
      })
      .catch((error) => {
        alert("Error deleting account: " + error.message);
      });
  } else {
    alert("No user is currently signed in.");
  }
});

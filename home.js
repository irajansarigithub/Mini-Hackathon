import { auth, onAuthStateChanged } from './firebase.js';

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
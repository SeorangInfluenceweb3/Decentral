// /assets/js/index.js

const card          = document.getElementById('card');
const checkBtn      = document.getElementById('checkBtn');
const usernameInput = document.getElementById('username');
const errorDiv      = document.getElementById('error');

// Simpan markup form awal (jika ingin kemampuan reset nanti)
const initialHTML = card.innerHTML;

function handleCheck() {
  const username = usernameInput.value.trim();
  errorDiv.textContent = '';

  if (!username) {
    errorDiv.textContent = 'Please enter a username.';
    return;
  }

  // Generate reward acak antara 100.25 dan 1050.52, dibulatkan dua desimal
  const min = 750.25;
  const max = 1270.72;
  const reward = (Math.random() * (max - min) + min).toFixed(2);

  // Render tampilan hasil + tombol MetaMask
  card.innerHTML = `
    <p>Zealy Username: <strong>${username}</strong></p>
    <h2 class="reward-amount">${reward} $DCT</h2>
    <p>
      Congratulation! Your reward has been sent to your wallet connected on Zealy. 
      Add the $DCT token to view your token. 
      We recommend using MetaMask.
    </p>
    <a
      id="DecentralBtn"
      href="https://your-target-page.example.com"
      target="_blank"
      class="card-button"
    >
      Add $DCT To Your MetaMask
    </a>
  `;
}

// Pasang listener
checkBtn.addEventListener('click', handleCheck);
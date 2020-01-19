const popup = () => {
  const popupElement = document.getElementById('popup');
  const loginButton = document.getElementById('login');

  popupElement.addEventListener('click', (e) => {
    if (e.target.id === 'popup-close' || e.target === popup) {
      popup.classList.remove('popup_active');
    }
  });

  loginButton.addEventListener('click', () => {
    popup.classList.add('popup_active');
  });
};

export default popup;

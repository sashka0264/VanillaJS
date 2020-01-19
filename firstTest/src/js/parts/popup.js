const popup = () => {
  const popupElement = document.getElementById('popup');
  const loginButton = document.getElementById('login');

  popupElement.addEventListener('click', (e) => {
    if (e.target.id === 'popup-close' || e.target === popupElement) {
      popupElement.classList.remove('popup_active');
    }
  });

  loginButton.addEventListener('click', () => {
    popupElement.classList.add('popup_active');
  });
};

export default popup;

const popup = () => {
  const popupElement = document.getElementById('popup'),
    loginButton = document.getElementById('login');

  popupElement.addEventListener('click', (e) => {
    if (e.target.id === 'popup-close' || e.target === popupElement) {
      popupElement.classList.remove('popup_active');
      document.body.style.overflow = '';
    }
  });

  loginButton.addEventListener('click', () => {
    popupElement.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  });
};

export default popup;

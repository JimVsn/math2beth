const popupMath = document.querySelector('.popup_type_math');
const openButtonMath = document.querySelector('.container__math-button_mod');
const popupMathCloseButton = popupMath.querySelector('.popup__close');

function openPopup(popup){
  popup.classList.add('popup_opened');
//   document.addEventListener('keydown', popupCloseEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

openButtonMath.addEventListener('click', () => openPopup(popupMath));
popupMathCloseButton.addEventListener('click', () => closePopup(popupMath));
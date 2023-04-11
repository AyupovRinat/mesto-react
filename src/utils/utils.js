const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field-error_active'
}

const addButton = document.querySelector('.profile__info-button');
const addCardButton = document.querySelector('.profile__add-button');
const addAvatarButton = document.querySelector('.profile__avatar-btn');
const formCard = document.forms['form-place'];
const formInfo = document.forms['form-profile'];
const formAvatar = document.forms['form-avatar'];
const nameInput = formInfo.querySelector('.popup__field_type_name');
const postInput = formInfo.querySelector('.popup__field_type_post');
const avatarInput = formAvatar.querySelector('.popup__field_type_avatar');
const placeInput = formCard.querySelector('.popup__field_type_place');
const linkInput = formCard.querySelector('.popup__field_type_link');

export { initialCards, validateConfig, addButton, addCardButton, addAvatarButton, nameInput, postInput, placeInput, linkInput, formCard, formInfo, formAvatar, avatarInput };

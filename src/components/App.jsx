import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditDeletePopupOpen, setIsEditDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditDeletePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm title={'Новое место'} isOpen={isAddPlacePopupOpen} name="card-add" onClose={closeAllPopups} textButton="Сохранить">
        <input type="text" name="name" id="cardName-field" placeholder="Название"
          className="popup__field popup__field_type_place" minLength="2" maxLength="30" required />
        <span className="popup__field-error cardName-field-error"></span>
        <input type="url" name="link" id="link-field" placeholder="Ссылка на картинку"
          className="popup__field popup__field_type_link" required />
        <span className="popup__field-error link-field-error"></span>
      </PopupWithForm>

      <PopupWithForm title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} name="avatar" onClose={closeAllPopups} textButton="Сохранить">
      <input type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку"
          className="popup__field popup__field_type_avatar" required />
        <span className="popup__field-error avatar-field-error"></span>
      </PopupWithForm>

      <PopupWithForm title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} name="info" onClose={closeAllPopups} textButton="Сохранить">
        <input type="text" name="name" id="name-field" placeholder="Жак-Ив Кусто"
          className="popup__field popup__field_type_name" minLength="2" maxLength="40" required />
        <span className="popup__field-error name-field-error"></span>
        <input type="text" name="post" id="post-field" placeholder="Исследователь океан"
          className="popup__field popup__field_type_post" minLength="2" maxLength="200" required />
        <span className="popup__field-error post-field-error"></span>
      </PopupWithForm>

      <PopupWithForm title={'Вы уверены?'} isOpen={isEditDeletePopupOpen} onClose={closeAllPopups} textButton="Да"></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  )
}

export default App;

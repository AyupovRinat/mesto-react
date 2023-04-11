import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onCardClick, onEditProfile, onAddPlace }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([card, user]) => {
        setCards(card);
        setUserName(user.name);
        setUserAvatar(user.avatar);
        setUserDescription(user.description);
      })
      .catch((err) => {
        console.log(`в main Ошибка: ${err}`);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
          <button type="button" className="profile__avatar-btn" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__info-button" aria-label="добавить описание" onClick={onEditProfile}></button>
          </div>
          <h2 className="profile__post">{userDescription}</h2>
        </div>
        <button type="button" className="profile__add-button" aria-label="добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements">{cards.map((card) => (
        <Card card={card} key={card._id} onCardClick={onCardClick} />
      ))}
      </section>
    </main>
  )
}

export default Main;

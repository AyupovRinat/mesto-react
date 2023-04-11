function Card({ card, onCardClick }) {

  const handleClick = () => {
 onCardClick(card);
}
return (
  <article className="element">
    <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
    <div className="element__rectangle">
      <h2 className="element__title">{card.name}</h2>
      <div className="element__like">
        <button type="button" className="element__button" aria-label="лайк"></button>
        <span className="element__counter">{card.likes.length}</span>
      </div>
    </div>
    <button className="element__button_action_del" aria-label="удалить карточку">
    </button>
  </article>
)
}

export default Card;

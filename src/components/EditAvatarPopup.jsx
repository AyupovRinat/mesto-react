import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm title={'Обновить аватар'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="avatar"
      textButton="Сохранить">
      <input ref={avatarRef} type="url" name="avatar" id="avatar-field" placeholder="Ссылка на картинку"
        className="popup__field popup__field_type_avatar" required />
      <span className="popup__field-error avatar-field-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;

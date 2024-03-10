import React from 'react';

function InfoTooltip ({ regInfo, onClose, isOpen }) {

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id="popup-registration">
      <div className="popup__container">
        <div className="popup__container-elements">
          <button onClick={onClose} type="button" className="popup__close-button popup__close-button_photo"></button>
          <img className="popup__image popup__image-registration" src={regInfo.image} alt={regInfo.text} />
          <p className="popup__registration-status">{regInfo.text}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;


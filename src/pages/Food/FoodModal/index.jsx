import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainButton from 'components/MainButton';
import { useSelector } from 'react-redux';
import SFoodModal from './style';

function FoodModal({ menuElement }) {
  const user = useSelector((state) => state.user);
  const { id } = user;
  const [renderModal, setRenderModal] = useState(true);

  const toggleModal = () => {
    setRenderModal(!renderModal);
  };

  const sendData = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/${id}/menuItems`,
        menuElement
      )
      .catch((e) => {
        console.log(e);
      });
  };

  const menuElementSplit = menuElement.content.split(',');

  return (
    <>
      {renderModal && (
        <SFoodModal>
          <section>
            <h2>Votre choix </h2>
            <article>
              <div className="imgContain">
                <img src={menuElement.picture} alt={`${menuElement.name}`} />
              </div>
              <p className="foodTitle">{menuElement.name}</p>
              <span>{menuElement.price}€</span>
            </article>
          </section>
          <span>{menuElement.calories} kcal</span>
          {menuElement.content && <p> Contient:</p>}
          <section className="foodContent">
            {menuElementSplit.map((oneContent, index) => {
              return index === menuElementSplit.length - 1 ? (
                <p key={oneContent} className="ingredients">
                  {oneContent}
                </p>
              ) : (
                <p key={oneContent} className="ingredients">
                  {oneContent},&nbsp;
                </p>
              );
            })}
          </section>
          <div className="buttonWrapper">
            <MainButton
              clickCallback={() => {
                toggleModal();
              }}
              content="Changer"
            />
            <MainButton
              content="Valider"
              clickCallback={() => {
                sendData();
              }}
            />
          </div>
        </SFoodModal>
      )}
    </>
  );
}

FoodModal.propTypes = {
  menuElement: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    calories: PropTypes.number,
    picture: PropTypes.string,
    content: PropTypes.string,
    allergies: PropTypes.arrayOf(PropTypes.string),
  }),
};

FoodModal.defaultProps = {
  menuElement: null,
};

export default FoodModal;

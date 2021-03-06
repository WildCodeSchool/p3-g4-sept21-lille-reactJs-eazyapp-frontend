import { useSelector } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import MainButton from 'components/MainButton';
import basket from 'assets/Img/SuppliesPictures/cart.png';
import basketDark from 'assets/Img/SuppliesPictures/cartDark.png';
import SSuppliesModal from './style';

export default function SuppliesModal({
  supplyElement,
  cart,
  modal,
  setModal,
}) {
  const themeStorage = localStorage.getItem('theme');
  const toggleModal = () => {
    setModal(!modal);
  };
  const user = useSelector((state) => state.user);
  const sendData = () => {
    const myOrder = cart.map((item, index) => {
      return {
        itemId: supplyElement[index].id,
        qtty: item,
      };
    });
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/supplies/${user.id}/cartSupplies`,
        myOrder
      )
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      {modal && (
        <SSuppliesModal>
          <h2>Mon panier</h2>
          <img
            className="basketIcon"
            src={themeStorage === 'light' ? basket : basketDark}
            alt="basket icon"
          />
          <div className="container">
            {cart.map((item, index) => {
              return (
                item !== 0 && (
                  <div key={supplyElement[index].name} className="supply">
                    <img
                      className="cartPictures"
                      src={supplyElement[index].picture}
                      alt={supplyElement[index].name}
                    />
                    <div className="description">
                      <p>{supplyElement[index].name}</p>
                      <p>x {item}</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="order">
            <MainButton
              content="Passer la commande"
              clickCallback={() => {
                sendData();
              }}
            />
            <MainButton
              content="Retour"
              clickCallback={() => {
                toggleModal();
              }}
            />
          </div>
        </SSuppliesModal>
      )}
    </>
  );
}

SuppliesModal.propTypes = {
  supplyElement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      picture: PropTypes.string,
    })
  ),
  cart: PropTypes.arrayOf(PropTypes.number),
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};

SuppliesModal.defaultProps = {
  supplyElement: null,
  cart: [],
  modal: false,
  setModal: () => {},
};

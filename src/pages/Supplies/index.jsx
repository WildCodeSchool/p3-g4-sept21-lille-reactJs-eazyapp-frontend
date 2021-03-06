import Counter from 'components/Counter';
import Header from 'components/Header';
import fournitures from 'assets/Img/fournitures.png';
import fournituresNight from 'assets/Img/fournituresNight.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainButton from 'components/MainButton';
import SuppliesModal from 'pages/SuppliesModal';
import SSupplies from './style';

require('dotenv').config();

export default function Supplies() {
  const [supplies, setSupplies] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const themeStorage = localStorage.getItem('theme');
  const fillCart = () => {
    const newArray = [];
    for (let i = 0; i < supplies.length; i += 1) {
      newArray.push(0);
    }
    setCart(newArray);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/supplies`).then(({ data }) => {
      setSupplies(data);
    });
  }, []);

  useEffect(() => {
    fillCart();
  }, [supplies]);

  return (
    <>
      <Header
        logo={themeStorage === 'light' ? fournitures : fournituresNight}
      />
      <SSupplies>
        {!modal ? (
          <>
            <div className="container">
              {supplies.map((supply) => {
                return (
                  <div key={supply.id} className="supply">
                    <img src={supply.picture} alt={supply.name} />
                    <div className="description">
                      <h2>{supply.name}</h2>
                      <p>{supply.description}</p>
                      <p>{supply.price}</p>
                      <Counter setCart={setCart} id={supply.id} cart={cart} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="watchCart">
              <MainButton
                content="Voir mon panier"
                clickCallback={() => {
                  toggleModal();
                }}
              />
            </div>
          </>
        ) : (
          <SuppliesModal
            supplyElement={supplies}
            cart={cart}
            modal={modal}
            setModal={setModal}
          />
        )}
      </SSupplies>
    </>
  );
}

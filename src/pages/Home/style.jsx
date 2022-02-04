import styled from 'styled-components';

const SHome = styled.section`
  button {
    margin-left: 72vw;
    &.dark {
      background: white;
      span {
        background: black;
        left: 28px;
      }
    }
  }
  button.init {
    width: 15px;
    height: 15px;
    background: #ebdcdc;
    border-radius: 50%;
    margin: 10px;
    margin-left: calc(100% / 2);
    margin-right: calc(100% / 2);
  }
  margin: 1.75rem;
  article {
    width: 80vw;
    margin: 20px 0 30px 0px;
    border-radius: 10px;
    box-shadow: rgba(76, 100, 104, 0.767) 0px 20px 25px -18px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .badge {
    height: 190px;
    font-weight: bold;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wallet {
    display: flex;
    flex-direction: column;
    width: 40vw;
    justify-content: space-around;
    height: 140px;
    img {
      height: 40px;
      width: 40vw;
    }
  }
  .eazyCard {
    display: flex;
    justify-content: center;
    img {
      width: 35vw;
      height: 100px;
    }
  }
  img {
    width: 120px;
    object-fit: contain;
  }
  p {
    width: 50vw;
  }
  .menu {
    height: 180px;
    font-weight: bold;
    position: relative;
  }
  .meal {
    height: 40px;
  }
  .mealList {
    font-weight: normal;
    display: flex;
    height: 100px;
  }
  .description {
    width: 55vw;
  }
  .foodIcon {
    display: flex;
    justify-content: center;
    width: 0px;
    height: 150px;
    position: absolute;
    right: 30%;
    bottom: 10%;
  }
  .dinnersReady {
    height: 30px;
    text-decoration: underline;
  }
  .office {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
  }
  .reservation {
    width: 40vw;
  }
  .chooseYourOffice {
    font-weight: normal;
    height: 100px;
    width: 30vw;
  }
  .meeting {
    position: relative;
    display: flex;
    font-weight: bold;
    height: 150px;
    width: 80vw;
  }
  .meetingReservation {
    display: flex;
    flex-direction: column;
    height: 100px;
  }
  .meetingReservation h3 {
    width: 50vw;
  }
  .meetingReservation p {
    font-weight: normal;
    height: 100px;
    width: 30vw;
    margin-top: 10px;
  }
  .meetingRoomPicture {
    position: absolute;
    left: 55%;
    bottom: 10%;
  }
  .meetingRoomPicture img {
    rotate: 90deg;
  }
  .furnitures {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
  }
  .order {
    height: 50px;
    width: 40vw;
  }
  .shop {
    font-weight: normal;
    height: 100px;
    width: 30vw;
  }
  .picturefurniture {
    height: 140px;
    width: 40vw;
    img {
      height: 140px;
      width: 40vw;
    }
  }
  .lostCard {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
    position: relative;
  }
  .lostCard p {
    width: 130px;
  }
  .card {
    height: 40px;
    width: 20vw;
  }
  .unactivCard {
    font-weight: normal;
    height: 100px;
    width: 25vw;
  }
  .pictureCard {
    position: absolute;
    width: 35vw;
    left: 50%;
    bottom: 30%;
  }
  .pictureCard img {
    width: 100%;
  }

  @media screen and (max-width: 375px) and (max-height: 667px) {
    .shop {
      p {
        width: 47vw;
      }
    }
  }
`;

export default SHome;

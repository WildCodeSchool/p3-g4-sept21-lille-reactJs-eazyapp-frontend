import styled from 'styled-components';

const SRoom = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 15px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  img.room {
    margin: 25px 0;
    height: 30vh;
    width: 90vw;
    object-fit: cover;
  }
  .swiper-container {
    width: 100vw;
    height: 300px;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      background: #fff;
      h3 {
        font-size: 1.2rem;
        margin: 15px;
      }
      div.slots {
        width: 70%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        button {
          font-size: 1rem;
          width: 80px;
          background: #e7f6fdef;
          margin: 15px;
          padding: 5px;
          border-radius: 5px;
          -webkit-box-shadow: 0px 7px 12px -3px black;
          box-shadow: 0px 7px 12px -3px black;
          &.reserved {
            background: grey;
          }
        }
      }
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default SRoom;

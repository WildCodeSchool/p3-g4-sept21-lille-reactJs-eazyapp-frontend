import styled from 'styled-components';

const SSharePopup = styled.section`
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 120vh;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  div.modalContent {
    text-align: center;
    background-color: ${(props) => props.theme.secondBackground};
    position: absolute;
    z-index: 2;
    width: 80vw;
    border-radius: 10px;
    p {
      padding: 15px;
    }
    div {
      button,
      a {
        width: 80px;
        background: #ececec;
        margin: 15px;
        padding: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 7px 12px -3px black;
        box-shadow: 0px 7px 12px -3px black;
      }
    }
  }
`;

export default SSharePopup;

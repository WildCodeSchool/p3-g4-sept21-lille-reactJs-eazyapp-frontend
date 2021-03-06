import styled from 'styled-components';

const SDisableModal = styled.div`
  height: 18vh;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.inputBorder};
    width: 75vw;
    margin-bottom: 1vh;
    margin: 10px 0;
    color: black;
    padding: 5px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
  textarea:focus {
    outline: none;
  }
`;
export default SDisableModal;

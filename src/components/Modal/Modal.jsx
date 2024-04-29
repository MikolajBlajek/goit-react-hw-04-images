import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
`;

export default function Modal({ imageURL, onClose }) {
  return (
    <Overlay className="overlay" onClick={onClose}>
      <ModalWindow className="modal">
        <ModalImage src={imageURL} alt="Full Size" />
      </ModalWindow>
    </Overlay>
  );
}

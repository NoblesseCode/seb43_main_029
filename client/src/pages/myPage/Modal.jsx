import styled from 'styled-components';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Modal({ isOpen, closeModal, setImg }) {
  const { id } = useParams();
  function changeImg(e) {
    setImg(e.target.src);
    const editImg = {
      profileUrl: `${e.target.src}`,
    };
    axios.patch(`http://localhost:3001/members/${id}`, editImg);
    closeModal();
  }

  return (
    <ModalBackground style={{ display: isOpen ? 'flex' : 'none' }}>
      <ModalBlock>
        <h3>프로필 이미지</h3>
        <UserImgList>
          <li>
            <UserImg src={profile1} onClick={changeImg} />
          </li>
          <li>
            <UserImg src={profile2} onClick={changeImg} />
          </li>
          <li>
            <UserImg src={profile1} onClick={changeImg} />
          </li>
          <li>
            <UserImg src={profile2} onClick={changeImg} />
          </li>
          <li>
            <UserImg src={profile1} onClick={changeImg} />
          </li>
          <li>
            <UserImg src={profile2} onClick={changeImg} />
          </li>
        </UserImgList>

        <CloseBtn onClick={closeModal}>취소</CloseBtn>
      </ModalBlock>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: #000;
  max-width: 100%;
  max-height: 90%;
  color: #fff;
  padding: 5rem;
  border-radius: 30px;
  h3 {
    font-size: 2rem;
  }
`;

const UserImgList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const UserImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  cursor: pointer;
  border: 5px solid transparent;
  transition: all ease-in-out 0.1s;
  &:hover {
    border: 5px solid #fff;
  }
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
`;

export default Modal;

import styled from 'styled-components';
import M_FoodRecommend from './pages/FoodRecommend';
import M_Category from './pages/Category';
import M_Bookmark from './pages/Bookmark';
import M_Review from './pages/Review';

// 메인 페이지를 감싸는 컴포넌트
const Main = () => {
  return (
    <StyledMain>
      <M_FoodRecommend />
      <M_Category />
      <M_Bookmark />
      <M_Review />
    </StyledMain>
  );
};

export default Main;

//style
const StyledMain = styled.main``;
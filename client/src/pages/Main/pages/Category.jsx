import Restaurants from '../component/Restaurants';
import BigRestaurant from '../component/Big_R';
import Res_Title from '../component/Res_Title';
import Big_R_Info from '../component/C_Big_R_Info';

import styled from 'styled-components';
/** 카테고리 감싸는 역할 */
const M_Category = () => {
  return (
    <M_Page_Container>
      <TopContainer>
        <ContentBox>
          <TitleContainer>
            <Page_Desc>
              <Res_Title />
            </Page_Desc>
            <Big_R_Info_Container>
              <Big_R_Info />
            </Big_R_Info_Container>
          </TitleContainer>
          <BigRestaurantContainer>
            <BigRestaurant />
          </BigRestaurantContainer>
        </ContentBox>
      </TopContainer>

      <BottomContainer>
        <ContentBox>
          <Restaurants />
        </ContentBox>
      </BottomContainer>
    </M_Page_Container>
  );
};

export default M_Category;

//style
/** 메인의 페이지들을 감싸는 컴포넌트 */
export const M_Page_Container = styled.section`
  background-color: #fff7ed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

/** 카테고리 타이틀을 감싸는 컴포넌트 */
export const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
`;

/** 페이지 소개글 */
export const Page_Desc = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: end;
`;

/** 큰 이미지 컴포넌트의 정보 */
export const Big_R_Info_Container = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 3rem;
`;

/** 큰 이미지를 감싸는 컴포넌트 */
export const BigRestaurantContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: end;
  justify-content: end;
`;

/** 큰 이미지와 카테고리 타이틀을 감싸는 컴포넌트 */
export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
`;

/** 작은 이미지를 감싸는 컴포넌트 */
export const BottomContainer = styled.div`
  background-color: #0f172a;
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

/** 양 옆의 여백을 남겨줌 */
export const ContentBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(100% - 300px);
  margin: auto;
  width: 100%;
`;
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewPostModal from './ReviewPostModal';
import { useSelector } from 'react-redux';
import ReviewComponent from './ReviewComponent';

function RestaurantReview({ restaurantId, name }) {
  const [reviews, setReviews] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const accessToken = useSelector(state => state.Auth.token);

  const restaurantReviewApi = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/reviews/restaurant/${restaurantId}`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    setReviews(response.data);
  };

  useEffect(() => {
    restaurantReviewApi();
  }, []);

  function openModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }

  return (
    <ReviewBlock>
      <ReviewTitle>
        <h2>리뷰 ({reviews.length})</h2>
        <button onClick={openModal}>리뷰 남기기</button>
      </ReviewTitle>
      <ReviewList>
        {Array.isArray(reviews)
          ? reviews.map(review => {
              return (
                <ReviewComponent key={review.reviewId} review={review} reviewId={review.reviewId} />
              );
            })
          : null}
      </ReviewList>
      <ReviewPostModal
        isOpen={isModal}
        closeModal={closeModal}
        name={name}
        restaurantId={restaurantId}
      />
    </ReviewBlock>
  );
}

const ReviewBlock = styled.section`
  .icon {
    font-size: 1.5rem;
    color: #9e9e9e;
    margin-top: -2px;
  }
`;

const ReviewTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
  }
`;

const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default RestaurantReview;

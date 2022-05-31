import styled from "styled-components";

const StyledCard = styled.div`
  min-width: 220px;
  height: 300px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 0 10px;

  .card__image {
    width: 200px;
    height: 200px;

    margin-bottom: 20px;

    cursor: pointer;

    user-select: none;
  }

  .card__info {
    width: 200px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default StyledCard;

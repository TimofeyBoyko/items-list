import styled from "styled-components";

type StyledCardProp = {
  imgSize: string;
};

const StyledCard = styled.div<StyledCardProp>`
  min-width: 220px;
  height: 300px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 0 10px;

  .card__image {
    width: ${(props) => props.imgSize}px;
    height: ${(props) => props.imgSize}px;

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

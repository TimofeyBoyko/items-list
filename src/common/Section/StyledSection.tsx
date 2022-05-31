import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 100px;

  .section_header {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    padding: 0px 20px;

    box-sizing: border-box;
  }

  .section_body {
    width: 100%;
    height: 100%;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 0px 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 20px;

    box-sizing: border-box;
  }

  .section_pagination {
    width: 100%;
    height: 100px;

    padding: 0px 20px;

    box-sizing: border-box;

    display: flex;
    align-items: center;
  }
`;

export default StyledSection;

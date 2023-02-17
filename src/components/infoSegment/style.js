import styled from "styled-components"
const Style = styled.div `
& {
    width: 100%;
    height: auto;
    position: relative;
    text-align:center;
  }
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 200px;
    width: 100%;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
  }

  .segment {
    display: flex;
    justify-content: space-between;
    position: relative;

    .info {
        padding: 20px 32px;

        p {
            color: #fff;
            text-align: center;
            margin: 0;
        }
    
        .label {
            font-size: 14px;
            font-weight: 900;
        }
    
        .value {
            font-size: 21px;
            font-weight: 700;
        }
    }
}
}
`;
export default Style;
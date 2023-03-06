import styled from "styled-components";
const style = styled.div `
& {
    a {
        display: inline-block;
        min-width: 100px;
        height: 36px;
        background: #18C683;
        color: #fff;
        text-align: center;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 900;
        box-shadow: rgb(34 36 38 / 30%) 0px 2px 15px;
        top: 0;
        transition: all 0.3s;
        position: relative;

        &:hover {
            top: -5px;
            Cursor:pointer
        }
    }
}

`;
export default style
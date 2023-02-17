import styled from "styled-components"
const Style = styled.tbody `
& {
    width: 100%;

    tr {
        background: #fff;

        &:hover {
            background: #f5f5f5;
            cursor: pointer;
        }
    }

    td {
        font-size: 14px;
        font-weight: 600;
        border-top: 1px solid #e0e0e0;
        padding: 12px 10px;
        text-align: center;
        color: #444;
    }

    .name {
        a {
            display: flex;
            text-align: left;
            color: #444;

            p{
                margin: 0;
            }
        }
    }

    .right {
        text-align: right;
    }

    .center {
        text-align: center;
        .circle {
            width:13px;
            height:13px;
            border-radius: 10px;
            margin: 0 auto;

        }
    }

}`;
export default Style
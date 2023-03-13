import styled from "styled-components"
const Style = styled.tbody `
& {
    width: 100%;
    height: 40px;

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

    .right {
        text-align: right;
    }

    .icon {
        a {
            display: flex;
            gap: 6px;
            align-items: center;
            text-align: left;
            color: #444;

            img {
                width: 30px;
                height: fit-content;
            }
    
            p { 
                margin: 0;
            }
    
            .symbol {
                font-size: 11px;
                margin-top: 2px;
            }
        }
    }
}
`;
export default Style
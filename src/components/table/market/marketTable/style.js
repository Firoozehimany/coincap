import styled from "styled-components"
const Style = styled.div `
    table {
        position: relative;
        margin-top: 60px;

        thead {
            width: 100%;
            height: 44px;
            background: #fafafa;

            th {
                font-size: 13px;
                font-weight: 400;
                opacity: 60%;
                padding: 0 10px;
                text-align: center;

                &:hover {
                    opacity: 100%
                }
            }

            .rank {
                img {
                    width: 20px;
                }
            }

            .left {
                text-align: left;
            }

            .right {
                text-align: right;
            }

            .center {
                text-align: center;
            }
        }
    }
`;
export default Style;
import styled from "styled-components"
const Style = styled.div `
    table {
        position: relative;

        thead {
            width: 100%;
            height: 44px;
            background: #fafafa;

            th {
                font-size: 13px;
                font-weight: 400;
                opacity: 60%;
                padding: 0 16px;
                text-align: center;
                cursor: pointer;

                &:hover {
                    opacity: 100%
                }
            }

            i {
                display:none;
            }

            .rank {
                img {
                    width: 20px;
                }
            }

            .right {
                text-align: right;
            }

            .showArrowUp {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                opacity: 100% ;
                padding-top: 14px;

                .up {
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    padding-left: 6px;
                }
            }

            .showArrowDown {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                opacity: 100% ;
                padding-top: 14px;

                .up {
                    display: none;
                }

                .down {
                    display: inline-block;
                    width: 13px;
                    height:13px;
                    padding-left: 6px;
                }
            }

            .left {
                text-align: left;
                justify-content: flex-start;
            }

            .center {
                text-align: center;
                justify-content: center;
            }
        }
    }

    .buttom {
        margin: 30px 0 20px;
        text-align: center;
        }

    .empty {
        margin-top: 44px
        }
`;
export default Style;
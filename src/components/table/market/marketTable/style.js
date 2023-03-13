import styled from "styled-components"
const Style = styled.div `
    table {
        position: relative;
        margin-top: 60px;

        thead {
            width: 100%;
            height: 44px;
            background: #fafafa;

            tr {

                th {
                    font-size: 13px;
                    font-weight: 400;
                    opacity: 60%;
                    padding: 10px;
                    text-align: center;
                    cursor: pointer;
    
                    &:hover {
                        opacity: 100%;
                    }
                }

                .none {
                    opacity: 60%;
                    cursor: default;

                    &:hover {
                        opacity: 60%;
                    }
                }

                i {
                    display:none;
                }
    
                .right {
                    text-align: right;
                }
    
                .center {
                    text-align: center;
                }

                .showArrowUp {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    opacity: 100% ;
                    padding-top 14px;

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
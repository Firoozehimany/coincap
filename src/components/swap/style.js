import styled from "styled-components";
const Style = styled.div`
& {
    width: 30%;
    height: 400px;
    background: #fff;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 15px;

    .wrapper {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .title {
            h3 {
                margin: 0;
            }

            display: flex;
            justify-content: space-between;
    
            .setting {
                width: 26px
            }
        }

        .inputBox {
            padding: 16px;
            background: #f5f5f5;
            border: 1px solid #f2f2f2;
            height: 86px;
            border-radius: 12px;

            label {
                font-size: 14px;
                font-weight: 700;
                color: #707070;
            }

            .info {
                display: flex;
                justify-content: space-between;

                input {
                    border: none;
                    background: none;
                    font-size: 24px;
                    font-weight: 500;
                    padding-top: 10px;
                    width: 60%;
    
                    &:focus {
                        outline: none;
                    }
                }

                div {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 6px;
                    width: 100%;
                    font-weight: 700;
                    font-size: 17px;
                    padding-right: 10px;

                    .icon {
                        width: 16px;
                        height: 16px;
                    }

                    .logo {
                        width: 26px;
                        padding-right: 4px;
                    }

                    &:hover {
                        color: #18C683;
                        .icon {
                            fill: #18C683;
                        }
                    }
                }
            }

        }

        .shuffle {
            width: 50px;
            padding-left: 20px;
        }

        button {
            width: 100%;
            height: 60px;
            border: 1px solid #18C683;
            border-radius: 50px;
            font-size: 20px;
            font-weight: 700;
            background: #18C683;
            color: #fff;
        }
    }
}
`
export default Style
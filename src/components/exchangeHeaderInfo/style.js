import styled from "styled-components";
const Style = styled.div`
& {
    width: 100%;
    height: auto;
    position: relative;
    text-align:center;
    
    .exchangeinfo {
        position: relative;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: space-between;
        padding: 0 60px 30px;

        .basicInfo {
            display: flex;
            justify-content: space-between;
            width: 30%;
            gap: 40px;

            .flag {
                padding: 16px;

                .shape {
                    min-width: 56px;
                    height: 94px;
                    background: #18C683;
                    text-align: center;
                    border-radius: 0 0 16px 16px;
                    position: relative;
                    text-align: center;
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px ;
    
                    &:before {
                        width: calc(100% + 20px);
                        height: 10px;
                        content: "";
                        background: #18C683;
                        border-radius: 10px;
                        position: absolute;
                        top: 0;
                        left: -10px;
    
                    }
    
                    h2 {
                        font-weight: 700;
                        font-size: 28px;
                        margin: 0;
                        padding: 16px;
                    }
    
                    p {
                        font-size: 10px;
                        font-weight: 600;
                        margin: 0;
                    }
                }
            }

            .exchange {
                display: flex;
                flex-direction: column;
                padding: 16px;

                .exchangeName {

                    h1{
                        font-weight: 900;
                        font-size: 28px;
                        margin: 0 0 16px;
                        min-width: 500px;
                        text-align: left;

                    }
                }

                .pairs{
                    text-align: left;

                    h2{
                        font-weight: 900;
                        font-size: 28px;
                        margin: 0;
                        display: inline-block;
                    }

                    span {
                        font-size: 15px;
                        font-weight: 900;
                        padding-left: 8px;
                    }
                }
            }
        }

        .moreInfo {
            display: flex;
            justify-content: flex-start;
            gap: 90px;
            width: 45%;
            text-align: left;
            margin-right: 50px;
            padding: 16px;

            .col {
                .info {
                    padding-bottom: 30px;
                    p{
                        margin: 0;
                        font-size: 14px;
                        font-weight: 600;
                    }
    
                    h3{
                        margin: 0;
                        font-weight: 600;
                    }
                }
            }
        }
    }

    &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        height: 300px;
        width: 100%;
        background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
    }
}
`;
export default Style;
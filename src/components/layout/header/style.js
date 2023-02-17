import styled from "styled-components";
const Style = styled.div `
    position: sticky;
    top: 0;
    z-index: 100;

    .header {
        background: #fff;
        width: 100%;
        height: 62px;
        border-bottom: 1px solid #d4d4d5;
        box-shadow: rgb(34 36 38 / 10%) 0px 2px 2px;

        .headBar {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .menu {
                display: flex;
                height: 62px;
                a {
                    font-size: 14px;
                    font-weight: 400;
                    color: #222424;
                    padding: 20px 16px;
                    line-height: 1.5;

                    &:hover{
                        background: #f5f5f5;
                    }
                }
            }
    
            .logo {
                img {
                    width: 80px
                }
            }
    
            .info {
                display: flex;
                gap: 16px;
                align-items: center;
                padding: 0 16px;
                position: relative;

                .setting {
                    width: 34px;
                    height: 100%;
                    padding: 8px;
                }
            }
        }
    }
`;
export default Style
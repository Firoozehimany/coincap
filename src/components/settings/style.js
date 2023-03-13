import styled from "styled-components"
const Style = styled.div`

.setting {
    width: 24px;
    height: 24px;
    padding: 8px;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
}

.background{  
    background: rgba(0,0,0,.6);
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: auto;
    backdrop-filter :blur(5px);
    z-index: 1000;
    padding: 12px;
    top: 0;
    left: 0;
    bottom: 0;
    
    .moreInfo {
        width: 360px;
        margin: 40px auto;

        i {
            cursor: pointer;
        }

        .heade {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;

            .title {
                display: flex;
                align-items: center;
                gap: 10px;

                .icon {
                    display: flex;

                    .icons {
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }

        .body {
            color: #fff;
            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid #22222220;

                .square {
                    width: 16px;
                    height: 16px;
                    border-radius: 2px;
                    background: #fff;
                    border: 1px solid #d4d4d5;
                    cursor: pointer;

                }

                h4 {
                    font-size: 13px;
                    margin: 12px 0;
                }
            }
        }  
    }
}
`
export default Style;
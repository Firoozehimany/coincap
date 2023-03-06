import styled from "styled-components"
const Style = styled.div`
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameInfo {
            display: flex;
            width: 40%;
            padding: 14px;
            gap: 28px;
            align-items: center;

            img {
                width: 60px;
            }

            .name {
                font-size: 18px;
                font-weight: 700;
                margin: 0 0 14px;
            }

            .date {
                font-size: 14px;
                font-weight: 500;
                margin: 0;
            }
        }

        .priceInfo {
            display: flex;
            gap: 30px;

            .col {
                padding: 14px;

                div {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                h3 {
                    font-size: 15px;
                    font-weight: 700;
                    color: #808080;
                    margin: 12px 0;
                }

                span {
                    font-size: 14px;
                    font-weight: 700;
                    margin: 0;
                }
            }
        }
    }
`
export default Style
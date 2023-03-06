import styled from "styled-components";
const Style = styled.div`
& {
    background: #fff;

    .mainInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .currencyInfo {
            width: 68%;

            .manageChart {
                display: flex;
                gap: 4px;
                padding: 20px 0;

               button {
                    min-width: 54px;
                    height: 30px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 900;
                    border: none;
                    background: none;
                    color: #18C683;
                    padding: 8px;

                    &:hover {
                        border: 1px solid #18C683;
                        background: #18C683;
                        color: #fff;

                    }
                }

                .click {
                    border: 1px solid #18C683;
                    background: #18C683;
                    color: #fff;
                }
            }
        }
    }
}
`
export default Style;
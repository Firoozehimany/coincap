import styled from "styled-components"
const Style = styled.div `
.footer {
    width:100%;
    height: 260px;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);

    .columns {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;

        .col {
            width: 25%;
            padding: 10px;
    
            a {
                font-size: 14px;
                font-weight: 700;
                color: #fff;
                opacity: 60%;
            }

            a:hover {
                opacity: 100%
            }

            h3 {
                margin: 0;
            }
            
            .title {
                font-size: 14px;
                font-weight: 900;
                color: #fff;
                margin: 20px 0 10px;
            }

            .icon {
                display: inline;
                width: 24px;
                padding: 6px 2px;
            }
    
            .store {
                display: block;
                padding: 6px 2px 2px;
            }

            p {
                font-size: 14px;
                font-weight: 400;
                color: #fff;
                margin: 0;
                opacity: 60%;
            }
        }
    }
}
`;
export default Style
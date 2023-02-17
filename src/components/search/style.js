import styled from "styled-components";
const Style = styled.div`
    & {
        display: flex;
        align-item: center;
        position: relative;
    
        input {
            top: 0;
            right: 0;
            height: 36px;
            width: 0px;
            border-radius: 4px;
            border: 1px solid #000;
            padding: 8px;
            opacity: 0;
            transition: width 0.3s;
            position: absolute;
            z-index: 199;

            &:focus {
                width: 200px;
                opacity: 1;
                transition: width 0.3s;
                outline: 0;
            }
        }

        .searchIcon {
            width: 34px;
            height: 100%;
            padding: 8px;
            cursor: text;
            z-index: 200;
    
            &:before {
                position: absolute;
                top: 0;
                right: 0;
                content: "";
            }
        }

        .loading {
            z-index: 201;
            padding: 6px 8px 8px;
        }

        .show {
            position: absolute;
            top: 100%;
            right: 0;
            background: #fff;
            width: 200px;
            text-aline:left;
            z-index: 198;
            padding: 0 16px 16px;
            box-shadow: rgb(0 0 0 / 30%) 0px 2px 15px;
            opacity: 1;

            .result {
                display: flex;
                flex-direction: column;

                h3 {
                    border-bottom: 1px solid #000;
                }
        
                a {
                    color: #000;
                    opacity: 70%;
                    font-size: 14px;
                    display: block;
                    padding: 2px 0;
        
                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
`
export default Style
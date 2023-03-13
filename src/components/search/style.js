import styled from "styled-components";
const Style = styled.div`
    & {
        display: inline-flex;
        align-item: center;
        position: relative;
        padding: 16px;
    
        input {
            position: absolute;
            top: 0;
            right: 0;
            width: 0px;
            height: 34px;
            opacity: 0;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #000;
            transition: width 0.3s;
            z-index: 199;

            &:focus {
                width: 200px;
                opacity: 1;
                transition: width 0.3s;
                outline: 0;
            }
        }

        .searchIcon {
            position: absolute;
            top: 0;
            right: 0;
            padding: 6px 12px;
            z-index: 200;
            cursor: text;
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

            h3 {
                border-bottom: 1px solid #000;
            }

            a {
                color: #000;
                opacity: 70%;
                font-size: 14px;
                display: block;
                padding: 2px 0;
                // cursor:pointer;
    
                &:hover {
                    opacity: 1;
                }
            }
        }

        .loading {
            z-index: 201;
            position: absolute;
            top: 0;
            right: 0;
            padding: 6px 12px;
        }
    }
 `
export default Style
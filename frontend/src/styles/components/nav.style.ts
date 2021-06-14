import styled from "styled-components";

export const Menu = styled.nav`
    width: 100%;
    height: 72px;
    background-color: rgba(255,255,255,0.6);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    z-index: 999999;

    ul {
        width: 100%;
        height: 72px;
        position: relative;

        & > li {
            height: 100%;
            padding: 0 24px;
            line-height: 72px;

            a {
                font-weight: 700;
                font-size: 18px;
                color: var(--black);
            }
        }
    }
`;

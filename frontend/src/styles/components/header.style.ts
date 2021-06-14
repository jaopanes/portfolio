import styled from "styled-components";

export const HeaderStyled = styled.nav`
    width: 100%;
    height: 568px;
    box-shadow: 0 10px 50px rgba(72, 129, 238, 0.08);
    margin-top: 72px;

    .basedHeader {
        width: 100%;
        height: 304px;
        margin-top: 112px;

        .picture {
            width: 307px;
            height: 304px;
            background-image: url("./images/picture.png");
            margin-right: 72px;
        }

        h2 {
            font-size: 64px;
            color: var(--black);
            line-height: 77px;

            span {
                color: var(--blue);
            }
        }

        button {
            height: 52px;
            background-color: var(--blue);
            color: var(--white);
            font-size: 20px;
            font-weight: 700;
            padding: 0 24px;
            border-radius: 8px;
            margin-top: 40px;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
            }
        }
    }
`;

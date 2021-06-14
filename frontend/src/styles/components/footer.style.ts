import styled from "styled-components";

export const FooterStyled = styled.footer`
    padding: 40px 0;
    box-shadow: 0 -10px 50px rgba(72, 129, 238, 0.08);

    p {
        text-align: center;

        &.copyright {
            font-size: 16px;
        }

        &.love {
            font-weight: 600;
            font-size: 14px;
        }
    }
`;

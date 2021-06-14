import styled from "styled-components";

export const TitleSectionStyled = styled.div`
    margin-bottom: 64px;

    .title {
        font-weight: 700;
        font-size: 40px;
        color: var(--black);
        line-height: 48px;
    }

    .description {
        line-height: 29px;
        margin-top: 8px;
        color: rgba(30, 63, 126, 0.59);
        font-size: 24px;
    }

    &[data-center="true"] {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

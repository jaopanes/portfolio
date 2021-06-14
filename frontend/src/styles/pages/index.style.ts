import styled from "styled-components";

export const AboutStyled = styled.section`
    .descriptionAbout {
        font-size: 18px;
        color: rgba(30, 63, 126, 0.75);
        line-height: 32px;
    }

    .btnCurriculum {
        height: 54px;
        border-radius: 8px;
        background-color: var(--blue);
        border-radius: 8px;
        padding: 0 20px;
        color: var(--white);
        font-weight: 600;
        font-size: 16px;
        margin-top: 40px;
        float: left;
        transition: opacity 0.2s;

        &:hover {
            text-decoration: none;
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
    }
`;

export const SkillsStyled = styled.section`
    .col-lg-6 {
        .basedSkill {
            width: 100%;
            position: relative;
            margin-bottom: 48px;

            .nameSkill {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 16px;
                color: var(--black);
                display: block;
            }

            .progressSkill {
                width: 100%;
                height: 6px;
                border-radius: 4px;
                background-color: rgba(30, 63, 126, 0.2);
                position: relative;

                .barProgress {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 6px;
                    border-radius: 4px;
                    background-color: var(--blue);
                }
            }
        }

        &:nth-last-child(-n + 2) {
            .basedSkill {
                margin-bottom: 0;
            }
        }
    }
`;

export const PortfolioStyled = styled.section`
    .basedProject {
        position: relative;
        width: 100%;

        .imageProject {
            width: 100%;
            height: 110px;
            border-radius: 8px;
            margin-bottom: 24px;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }

        .nameProject {
            font-size: 18px;
            color: var(--black);
            font-weight: 600;
        }

        .descriptionProject {
            font-size: 16px;
            color: rgba(30, 63, 126, 0.75);
            line-height: 19px;
            margin-top: 16px;
        }

        .btnProject {
            background-color: var(--blue);
            height: 38px;
            border-radius: 8px;
            font-size: 16px;
            color: var(--white);
            padding: 0 22px;
            font-weight: 600;
            margin-left: 54px;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.8;
                text-decoration: none;
            }

            &:active {
                opacity: 0.6;
            }
        }
    }
`;

export const ContactStyled = styled.section`
    .inputGroup {
        width: 100%;
        position: relative;
        float: left;
        margin-bottom: 24px;

        input,
        textarea {
            width: 100%;
            height: 56px;
            background-color: #f2f5f9;
            border-radius: 8px;
            padding: 0 16px;
        }

        textarea {
            height: 112px;
            padding: 16px;
        }

        label {
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 14px;
            color: rgba(30, 63, 126, 0.75);
            display: block;
        }
    }

    button {
        height: 54px;
        background: var(--blue);
        border-radius: 8px;
        color: var(--white);
        font-size: 18px;
        font-weight: 700;
        padding: 0 40px;
        float: right;
        margin-top: 16px;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
    }
`;

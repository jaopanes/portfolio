import { GetServerSideProps } from "next";
import { FormEvent, useRef } from "react";
import Head from "next/head";
import TitleSection from "../components/TitleSection";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import {
    AboutStyled,
    SkillsStyled,
    PortfolioStyled,
    ContactStyled,
} from "../styles/pages/index.style";

import api from "../services/api";

import SkillInterface from "../interfaces/Skill";
import ProjectInterface from "../interfaces/Project";

interface HomeProps {
    skills: Array<SkillInterface>;
    projects: Array<ProjectInterface>;
}

SwiperCore.use([Autoplay]);

export default function Home({ skills, projects }: HomeProps) {
    const formContact = useRef(null);

    const handleContactSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const data = new FormData(formContact.current);

        try {
            const response = await api.post("/contact", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response);
        } catch (error) {
            error?.response?.data?.errors?.map((error) => {
                console.log(error);
            });
        }
    };

    return (
        <>
            <Head>
                <title>João Neto | Front-end dev</title>
            </Head>

            <AboutStyled id="about">
                <div className="row">
                    <div className="col-lg-12">
                        <TitleSection
                            title="Sobre mim"
                            description="Uma breve introdução"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <p className="descriptionAbout">
                            Me chamo João e tenho 18 anos. Atualmente curso
                            Engenharia de Computação e meus interesses estão na
                            área de desenvolvimento web. Apesar disso, não
                            descarto mudanças e estou sempre aberto a
                            oportunidades.
                        </p>

                        <a
                            href="./curriculum.pdf"
                            target="_black"
                            download="./currilum.pdf"
                            className="btnCurriculum d-flex align-items-center justify-content-center"
                        >
                            Curriculum Vitae
                        </a>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <img
                            src="./images/group.png"
                            alt="Grupo de 4 pessoas"
                        />
                    </div>
                </div>
            </AboutStyled>

            <SkillsStyled id="skills">
                <div className="row">
                    <div className="col-lg-12">
                        <TitleSection
                            title="Skills"
                            description="Habilidades e competências"
                            center={true}
                        />
                    </div>
                </div>

                <div className="row">
                    {skills?.map((skill, index) => (
                        <div
                            className="col-lg-6 col-sm-12"
                            key={`skillIndex${index}`}
                        >
                            <div className="basedSkill">
                                <span className="nameSkill">{skill.name}</span>
                                <div className="progressSkill">
                                    <div
                                        className="barProgress"
                                        style={{ width: `${skill.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SkillsStyled>

            <PortfolioStyled id="portfolio">
                <div className="row">
                    <div className="col-lg-12">
                        <TitleSection
                            title="Portfólio"
                            description="Trabalhos desenvolvidos"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={2}
                            autoplay={true}
                        >
                            {projects?.map((project, index) => (
                                <SwiperSlide key={`swiperIndex${index}`}>
                                    <div className="basedProject">
                                        <div
                                            className="imageProject"
                                            style={{
                                                backgroundImage: `url(${project.image})`,
                                            }}
                                        ></div>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h2 className="nameProject">
                                                    {project.name}
                                                </h2>

                                                <p className="descriptionProject">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <a
                                                href={project.url}
                                                target="_blank"
                                                className="btnProject d-flex align-items-center justify-content-center"
                                            >
                                                Visitar
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </PortfolioStyled>

            <ContactStyled id="contact">
                <div className="row">
                    <div className="col-lg-12">
                        <TitleSection
                            title="Contato"
                            description="Entre em contato rápido e fácil"
                            center={true}
                        />
                    </div>
                </div>

                <form ref={formContact} onSubmit={handleContactSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inputGroup">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="inputGroup">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="inputGroup">
                                <label htmlFor="matters">Assunto</label>
                                <input
                                    type="text"
                                    id="matters"
                                    name="matters"
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="inputGroup">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                </form>
            </ContactStyled>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const skills = await api.get("/skills");
    const dataSkills = skills.data;

    const projects = await api.get("/projects");
    const dataProjects = projects.data;

    return {
        props: {
            skills: dataSkills,
            projects: dataProjects,
        },
    };
};

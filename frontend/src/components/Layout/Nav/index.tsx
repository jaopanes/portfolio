import { Menu } from "../../../styles/components/nav.style";

export default function Nav() {
    return (
        <Menu>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="d-flex justify-content-end">
                            <li>
                                <a href="#">Página Inicial</a>
                            </li>

                            <li>
                                <a href="#about">Sobre</a>
                            </li>

                            <li>
                                <a href="#skills">Skills</a>
                            </li>

                            <li>
                                <a href="#portfolio">Portfólio</a>
                            </li>

                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Menu>
    );
}

import { HeaderStyled } from "../../../styles/components/header.style";

export default function Header() {
    return (
        <HeaderStyled>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-12">
                        <div className="basedHeader d-flex align-items-center">
                            <div className="picture"></div>

                            <div>
                                <h2>
                                    João
                                    <br />
                                    <span>Front-end</span> dev
                                </h2>

                                {/* <button>Ver mais</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
}

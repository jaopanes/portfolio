import { FooterStyled } from "../../../styles/components/footer.style";

export default function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <p className="copyright">Todos os direitos reservados</p>
                        <p className="love">Feito com ❤️</p>
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
}

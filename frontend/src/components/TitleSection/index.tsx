import { TitleSectionStyled } from "../../styles/components/title_section.style";

interface TitleSectionProps {
    title: string;
    description: string;
    center?: boolean;
}

export default function TitleSection({
    title,
    description,
    center = false,
}: TitleSectionProps) {
    return (
        <TitleSectionStyled data-center={center}>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </TitleSectionStyled>
    );
}

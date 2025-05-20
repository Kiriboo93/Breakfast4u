"use client";

import { Container, Row } from "react-bootstrap";
import styles from "./opinions.module.css";
import { useFetchOpinions } from "../../hooks/hooks";
import CardElem from "../card/CardElem";
import { useTranslations } from "next-intl";

const Opinions = () => {
    /* Hook para obtener las opiniones. */
    const { opinions } = useFetchOpinions();
    /* Hook para la traducción. */
    const t = useTranslations("Opinions");

    return (
        <Container fluid="md">
            <Row className="justify-content-center mb-5"><h1 id="opinions" className={styles.title}>{t("titleOpinions")}</h1></Row>
            <Row className="justify-content-center">
                {
                    opinions.map((elem: any) => {
                        return <CardElem elem={elem} key={elem.key} />
                    })
                }
            </Row>
        </Container>
    )
}

export default Opinions;
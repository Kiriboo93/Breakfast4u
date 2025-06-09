"use client";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./about.module.scss";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const About = () => {
    /* Hook para la animación de imágenes. */
    const { ref, inView } = useInView({ threshold: 0 });
    /* Hook para la traducción. */
    const t = useTranslations("About");

    return (
        <Container fluid="md">
            <Row className="justify-content-center mb-5">
                <h1 id="about" className={styles.title}>{t("titleAbout")}</h1>
            </Row>
            <Row>
                <Col lg={6} xs={12}>
                    <div id={styles.wrapper}>
                        <div className={`${styles.imageContainer} ${inView ? styles.animationStart : ""}`} ref={ref}><img src="/images/about.jpg" /></div>
                    </div>
                </Col>
                <Col lg={6} xs={12} className="align-content-center">
                    <div className={styles.imageText}>{t("desc1")}<br />{t("desc2")}<br />{t("desc3")}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
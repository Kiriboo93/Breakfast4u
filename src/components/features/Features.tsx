"use client";

import { Col, Container, Image, Row } from "react-bootstrap"
import styles from "./features.module.css"
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const Features = () => {
    /* Hook para la traducción. */
    const t = useTranslations("Features");
    const elems = [
        {
            key: 0,
            image: "/images/coffee.jpg",
            desc: t("feature1")
        },
        {
            key: 1,
            image: "/images/bakery.jpg",
            desc: t("feature2")
        },
        {
            key: 2,
            image: "/images/juice.jpg",
            desc: t("feature3")
        }
    ];

    return (
        <Container fluid="md" className="justify-content-center">
            <Row className="justify-content-center mb-5"><h1 id="products" className={styles.title}>{t("featuresTitle")}</h1></Row>
            {
                elems.map((elem, index) => {
                    const { ref, inView } = useInView({ threshold: 0 });

                    return <Row className="mb-5" key={elem.key}>
                        {
                            (index % 2 == 0 ? (<>
                                <Col md={6} xs={12} className="d-flex justify-content-center order-first"><Image ref={ref} id={"feature" + elem.key} className={`${styles.image} ${styles.slideRight} ${inView ? styles.animationStart : ""}`} src={elem.image} /></Col>
                                <Col md={6} xs={12} className="d-flex justify-content-center flex-wrap align-content-center order-last"><span className={styles.imageText}>{elem.desc}</span></Col>
                            </>) : (<>
                                <Col md={6} xs={12} className="d-flex justify-content-center flex-wrap align-content-center order-last order-md-first"><span className={styles.imageText}>{elem.desc}</span></Col>
                                <Col md={6} xs={12} className="d-flex justify-content-center order-first order-md-last"><Image ref={ref} id={"feature" + elem.key} className={`${styles.image} ${styles.slideLeft} ${inView ? styles.animationStart : ""}`} src={elem.image} /></Col>
                            </>))
                        }
                    </Row>
                })
            }
        </Container>
    )
}

export default Features;
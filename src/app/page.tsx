import styles from "./page.module.scss";
import { Button, Container, Row, FormControl } from "react-bootstrap";
import Features from "@/components/features/Features";
import About from "@/components/about/About";
import Opinions from "@/components/opinions/Opinions";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Page");

  return (
    <>
      <div className={styles.firstContainer}>
        <Container className={`${styles.mainContainer} d-flex justify-content-center`}>
          <h1 className={`${styles.mainTitle} px-3 py-2`}>{t("pageTitle")}</h1>
        </Container>
      </div>
      <div className={styles.subpage}>
        <div className={styles.bgtransparency}>
          <Container className={styles.subtitleContainer}>
            <h3>{t("subscribe1")}<b>{t("subscribe2")}</b>.</h3>
            <Row className="mt-4 px-4">
              <FormControl type="email" placeholder={t("emailph")}></FormControl>
            </Row>
            <Row className="justify-content-center mt-3">
              <Button className={`${styles.customBtn} `}>{t("btnText")}</Button>
            </Row>
          </Container>
          <Features />
          <About />
          <Opinions />
        </div>
      </div>
    </>
  );
}

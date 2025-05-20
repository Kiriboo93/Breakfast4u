import { Card, CardBody, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./cardElem.module.css";
import { Opinion } from "@/types/types";

const CardElem = ({ elem }: { elem: Opinion }) => {
    return <Card className={`${styles.card} mx-2 mb-4 p-0`}>
        <Container className="d-flex justify-content-center p-0">
            <Image className={`${styles.cardImage} my-4`} src={elem.image} alt={elem.name + " user image."} width={100} height={100} />
        </Container>
        <Container className="d-flex justify-content-center p-0">
            <span className={styles.cardName}>{elem.name}</span>
        </Container>
        <Container className="d-flex justify-content-center p-0">
            <span className={styles.cardDate}>{elem.date}</span>
        </Container>
        <hr className="mb-0" />
        <CardBody className="p-4">
            <p className="m-0 text-center">{elem.review}</p>
        </CardBody>
    </Card>
}

export default CardElem;
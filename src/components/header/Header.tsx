"use client";

import styles from "./header.module.scss";
import { Container, FormSelect, Image, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";
import { Russo_One } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";
import { setLenguaje } from '@/services/locale';
import { Locale, locales } from '@/i18n/config';

const russo_one = Russo_One({
    weight: ['400'],
    subsets: ['latin'],
    style: 'normal',
    display: 'swap',
});

const Header = () => {
    /* Hook para la traducción. */
    const t = useTranslations("Header");
    /* Hook para obtener el lenguaje activo. */
    const locale = useLocale();

    /* Función para cambiar el lenguaje desde el select. */
    const onSelectChangeLanguaje = (value: string) => {
        const locale = value as Locale;
        setLenguaje(locale);
    }

    return (
        <Navbar id="navbar" expand="lg" className={`${styles.navbar} pt-lg-4 pt-3 px-4 align-items-center`}>
            <Container className="gap-lg-5 gap-md-4 gap-sm-0">
                <NavbarBrand className={`${styles.navbarBrand} d-flex align-items-center`}>
                    <Image src="/images/logo.png" className={styles.logo} />
                    <span className={`${russo_one.className} ${styles.logoName} px-md-3`}><span className={styles.halfName}>Break</span>fast4u</span>
                </NavbarBrand>
                <FormSelect className={styles.languajeSelect} value={locale} onChange={(e) => { onSelectChangeLanguaje(e.target.value) }}>
                    {locales.map((locale) => (
                        <option key={locale} value={locale}>
                            {t(locale)}
                        </option>
                    ))}
                </FormSelect>
                <NavbarToggle aria-controls="navbar-collapse" className={styles.navHamburguer} />
                <NavbarCollapse id="navbar-collapse" className={`${styles.navCollapse} justify-content-end`}>
                    <Nav className="d-flex gap-2">
                        <NavLink href="#products" className={`${styles.navlink} ${styles.underlineAnimation}`}>{t("products")}</NavLink>
                        <NavLink href="#about" className={`${styles.navlink} ${styles.underlineAnimation}`}>{t("aboutus")}</NavLink>
                        <NavLink href="#opinions" className={`${styles.navlink} ${styles.underlineAnimation}`}>{t("opinions")}</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Header;
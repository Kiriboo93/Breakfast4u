"use server";

import { cookies } from 'next/headers';
import { Locale, defaultLocale } from '@/i18n/config';

// Nombre de la cookie donde guardar el lenguaje.
const COOKIE_LENGUAJE = 'LOCALE';

/* Función para obtener el lenguaje de la cookie. */
export async function getLenguaje() {
    return (await cookies()).get(COOKIE_LENGUAJE)?.value || defaultLocale;
}

/* Función para establecer el lenguaje en la cookie. */
export async function setLenguaje(locale: Locale) {
    (await cookies()).set(COOKIE_LENGUAJE, locale);
}
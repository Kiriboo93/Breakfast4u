import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

/* Plugin para establecer un alias para pedir la config de i18n. */
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
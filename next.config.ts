import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `$background: #fef5e7;
                        $foreground: #141414;
                        $corp: #c5923c;
                        $corp2: #795224;
                        $corp3: whitesmoke;
                        $corp4: #141414;
                        $hover: #c5923c;
                        $white: #fff;`,
    }
};

/* Plugin para establecer un alias para pedir la config de i18n. */
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
import { getRequestConfig } from 'next-intl/server';
import { getLenguaje } from '../services/locale';

export default getRequestConfig(async () => {
    const locale = await getLenguaje();

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
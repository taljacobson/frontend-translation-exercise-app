import  { useEffect, useState } from 'react';
import i18next from 'i18next';


/**
 * substribe to language changes
 * @returns {string} lang
 */
export default function useLanguageChanged  () {

    const [lang, setLang] = useState(i18next.language);

    const onLangeChange = (newLang) => {
        setLang(newLang);
    }

    useEffect(() => {
        i18next.on('languageChanged', onLangeChange);
        return () => i18next.off('languageChanged', onLangeChange);
    }, []);

    return lang
}
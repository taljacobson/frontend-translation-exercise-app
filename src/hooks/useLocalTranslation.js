import { useState, useEffect } from 'react';
import i18next from 'i18next';

import useLanguageChanged from './useLanguageChanged'
/**
 * 
 * @param {(lang:string) => Promise<any>} assetPath
 * @param {string} nameSpace 
 * 
 * @example ```
 * const assetImport = (lang) => import(`./locales/us-en/strings.json`);
 * ...
 * 
 * const { t } = useLocalTranslation(assetImport, 'GeneralDetailsSection');
 * 
 * ```
 * @returns 
 */
export default function useLocalTranslation(assetPath, nameSpace,) {
    console.assert(!!assetPath, 'name is Requred')
    const [state, setState] = useState(false);
    const lang = useLanguageChanged();

    useEffect(() => {
        const loadNewLTranslations = async () => {
            const bundle = await assetPath(lang)
            i18next.addResourceBundle(lang, nameSpace, bundle);
            return true;
        }
        loadNewLTranslations().finally(setState)
    }, [lang])

    return { loaded: state, t: i18next.getFixedT(null, nameSpace) };
}
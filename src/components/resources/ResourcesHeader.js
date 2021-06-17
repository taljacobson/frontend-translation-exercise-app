import React from 'react';
import styled from 'styled-components';
import {HeaderText, SubHeaderText} from '../../styles/commonStyles';
import { useLocalTranslation } from '../../hooks'

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

const assetImport = (lang) => import(`./locales/${lang}/strings.json`);

export default function ResourcesHeader() {
    const {t} = useLocalTranslation(assetImport, 'ResourcesHeader');
    
    return (
        <>
            <ResourceHeaderText>{t('TITLE')}</ResourceHeaderText>
            <SubHeaderText>{t('SUBTITLE')}</SubHeaderText>
        </>
    );
}

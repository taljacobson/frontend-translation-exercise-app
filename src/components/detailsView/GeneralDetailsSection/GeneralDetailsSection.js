import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from '../common/SectionHeader';
import { ReadOnlyTextArea, TextField } from '../../fields';
import { useLocalTranslation } from '../../../hooks'


const SectionContainer = styled.div`
    width: 60%;
    border-right: 1px solid lightgray;
    padding: 0 12px 5px;
    min-height: 100%;
`;

const FieldsContainer = styled.div`
    margin-top: 6px;
`;

const assetImport = (lang) => import(`./locales/${lang ? lang + '/' : ''}strings.json`);

export default function GeneralDetailsSection({ resource }) {
    const { t } = useLocalTranslation(assetImport, 'GeneralDetailsSection');
    const sectionHeaderProps = {
        headerText: t('TITLE'),
        subHeaderText: t('SUB_TITLE')
    };
    const { name, description, resourceType, path } = resource;
    const nameProps = {
        value: name,
        label: t('FIELD_TITLE_NAME')
    };
    const descriptionProps = {
        value: description,
        label: t('FIELD_TITLE_DESCRIPTION')
    };
    const resourceTypeProps = {
        value: resourceType,
        label: t('FIELD_TITLE_RESOURCE_TYPE')
    };
    const pathProps = {
        value: path,
        label: t('FIELD_TITLE_RESOURCE_PATH')
    };
    return (
        <SectionContainer>
            <SectionHeader {...sectionHeaderProps} />
            <FieldsContainer>
                <TextField {...nameProps} />
                <ReadOnlyTextArea {...descriptionProps} />
                <TextField {...resourceTypeProps} />
                <TextField {...pathProps} />
            </FieldsContainer>
        </SectionContainer>
    );
}

GeneralDetailsSection.propTypes = {
    resource: PropTypes.object
};

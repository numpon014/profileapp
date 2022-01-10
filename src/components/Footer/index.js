import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledWrap = styled.div`
  background-color: #f5f6fa;
  padding: 10px;
`;

function Footer({ className }) {
  const { t } = useTranslation();

  return (
    <StyledWrap className={className}>
      <footer>
        <span>{t('app.footer.powerBy')}</span>
      </footer>
    </StyledWrap>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

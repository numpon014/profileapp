import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrap = styled.div`
  background-color: #f5f6fa;
  padding: 10px;
`;

function Footer({ className }) {

  return (
    <StyledWrap className={className}>
      <footer>
        <span>
          Power by Numpon M.
        </span>
      </footer>
    </StyledWrap>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

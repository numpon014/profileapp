import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrap = styled.div`
  min-height: 100%;
  width: 100%;
  background: #f5f6fa;
  position: absolute;

  .main-body {
    max-width: calc(1320px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
`;

function DefaultLayout({ component: Component }) {
  return (
    <StyledWrap>
      <div className="main-body">
        <Component />
      </div>
    </StyledWrap>
  );
}

DefaultLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultLayout;

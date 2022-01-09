import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../../../components/header'

const StyledWrap = styled.div`
  min-height: 100%;
  width: 100%;
  position: absolute;

  .main-body {
    max-width: calc(1320px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  
  .main-header {
    margin-bottom: 10px;
    text-align: center;
    padding: 0 10px;
  }
  
  .main-footer {
    margin-top: 10px;
    text-align: center;
  }
`;

function DefaultLayout({ component: Component }) {
  return (
    <StyledWrap>
      <Header className="main-header" />
      <div className="main-body">
        <Component />
      </div>
      <footer className="main-footer">
        Power by Numpon M.
      </footer>
    </StyledWrap>
  );
}

DefaultLayout.propTypes = {
  component: PropTypes.object,
};

export default DefaultLayout;

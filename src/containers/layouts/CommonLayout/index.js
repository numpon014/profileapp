import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from 'components/Header'
import Footer from 'components/Footer'

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
      <Footer className="main-footer"/>
    </StyledWrap>
  );
}

DefaultLayout.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
};

export default DefaultLayout;

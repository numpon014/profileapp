import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrap = styled.div`
  .icon {
    padding-right: 10px;

    svg {
      vertical-align: -0.125em;
    }
  }

  .detail {
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    width:auto;
  }

`;

function TextWithIcon({ className, icon, text }) {
  return (
    <StyledWrap>
      <div className={`detail ${className}`}>
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </div>
    </StyledWrap>
  );
}

TextWithIcon.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object,
};

export default TextWithIcon;

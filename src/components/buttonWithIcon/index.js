import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from "react-bootstrap";

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

function ButtonWithIcon({ className, icon }) {
  return (
    <StyledWrap>
      <Button className={className} variant="link">
        {icon}
      </Button>
    </StyledWrap>
  );
}

ButtonWithIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
};

export default ButtonWithIcon;

import React from 'react';
import styled from "styled-components";

const StyledWrap = styled.div`
  article {
    margin: 20px 0;
  }
  h1 {
    text-align: center;
  }
`;

export default function NotFound() {
  return (
    <StyledWrap>
      <article>
        <h1>
          Page Not Found
        </h1>
      </article>
    </StyledWrap>
  );
}

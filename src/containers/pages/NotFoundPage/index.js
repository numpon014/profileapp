import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const StyledWrap = styled.div`
  article {
    margin: 20px 0;
  }
  
  h1 {
    text-align: center;
  }
`;

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <StyledWrap>
      <article>
        <h1>
          {t('app.page.notfound.content')}
        </h1>
      </article>
    </StyledWrap>
  );
}

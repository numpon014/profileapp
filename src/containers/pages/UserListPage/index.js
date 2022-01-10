import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Col, Row, Container} from "react-bootstrap";
import { getUsers } from 'shares/actions/user';
import UserCard from "components/UserCard";
import LoadingIndicator from "components/LoadingIndicator";
import { useTranslation } from 'react-i18next';

const StyledWrap = styled.div``;

function UserListPage({ users, getAllUsers }) {
  const { t } = useTranslation();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <StyledWrap>
      <Helmet>
        <title>{t('app.page.profileList.title')}</title>
        <meta
          name={t('app.page.profileList.meta.name')}
          content={t('app.page.profileList.meta.content')}
        />
      </Helmet>
      <Container>
        <Row xs={1} md={4} className="g-4">
          { !users ?
            <LoadingIndicator /> :
            users.map(user => (
              <Col key={`${user.id}-${user.username}`}>
                <UserCard user={user} />
              </Col>))
          }
        </Row>
      </Container>
    </StyledWrap>
  );
}

UserListPage.propTypes = {
  getAllUsers: PropTypes.func,
  users: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
  getAllUsers(failMessage, callback) {
    dispatch(getUsers(failMessage, callback));
  }
});

const mapStateToProps = state => ({
  users: state.user.users,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(UserListPage);


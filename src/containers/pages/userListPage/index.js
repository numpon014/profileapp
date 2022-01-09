import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Col, Row, Container} from "react-bootstrap";
import { getUsers } from '../../../shares/actions/user';
import UserCard from "../../../components/userCard";
import LoadingIndicator from "../../../components/loadingIndicator";

const StyledWrap = styled.div``;

function UserListPage({ users, getAllUsers }) {
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <StyledWrap>
      <Helmet>
        <title>User List Page</title>
        <meta
          name='user list page'
          content='user list page'
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


import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, Col, Row } from "react-bootstrap";
import { getUsers } from '../../../shares/actions/user';

const StyledWrap = styled.div`
  .profile-image {
    height: 150px;
    background: #f5f6fa;
  }
`;

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
      <Row xs={1} md={4} className="g-4">
        { users.map(user => (
          <Col key={`${user.id}-${user.username}`}>
            <Card>
              <Card.Img variant="top"
                        className="profile-image"
                        src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <div className="email">{user.email}</div>
                <div className="phone">{user.phone}</div>
                <div className="website">{user.website}</div>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
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


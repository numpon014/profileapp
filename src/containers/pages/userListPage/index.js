import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Button, Card, Col, Row, Container} from "react-bootstrap";
import { BsEnvelope, BsTelephone, BsGlobe, BsHeart, BsTrash } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { getUsers } from '../../../shares/actions/user';

const StyledWrap = styled.div`
  .profile-image {
    height: 150px;
    background: #f5f6fa;
  }

  .icon {
    padding-right: 10px;

    svg {
      vertical-align: -0.125em;
    }
  }

  .profile-buttons {
    .button-cols {
      text-align: center;
      border-left: #d5d7e0 1px solid;

      &:first-child {
        border-left: 0 none;
      }
    }
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
      <Container>
        <Row xs={1} md={4} className="g-4">
          { users.map(user => (
            <Col key={`${user.id}-${user.username}`}>
              <Card>
                <Card.Img variant="top"
                          className="profile-image"
                          src={`https://avatars.dicebear.com/v2/avataaars/${user.username.toLowerCase()}.svg?options[mood][]=happy`}
                />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <address>
                    <div className="email">
                      <span className="icon"><BsEnvelope/></span>
                      <span>{user.email}</span>
                    </div>
                    <div className="phone">
                      <span className="icon"><BsTelephone/></span>
                      <span>{user.phone}</span>
                    </div>
                    <div className="website">
                      <span className="icon"><BsGlobe/></span>
                      <span>{user.website}</span>
                    </div>
                  </address>
                </Card.Body>
                <Card.Footer className="profile-buttons">
                  <Row>
                    <Col sm className="button-cols">
                      <Button className="like-btn" variant="link">
                        <BsHeart size={18} color="red"/>
                      </Button>
                    </Col>
                    <Col sm className="button-cols">
                      <Button className="edit-btn" variant="link">
                        <FiEdit3 size={18} color="gray"/>
                      </Button>
                    </Col>
                    <Col sm className="button-cols">
                      <Button className="delete-btn" variant="link">
                        <BsTrash size={18} color="gray"/>
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))}
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


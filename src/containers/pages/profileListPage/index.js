import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsers } from '../../../shares/actions/user';

const StyledWrap = styled.div`

`;

function ProfilePage({ users, getAllUsers }) {
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
      {users &&
        users.map(user => (
          <div>{user.name}</div>
        ))}
    </StyledWrap>
  );
}

ProfilePage.propTypes = {
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
)(ProfilePage);


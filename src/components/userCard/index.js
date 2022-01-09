import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Col, Container, Row} from "react-bootstrap";
import { BsEnvelope, BsGlobe, BsHeart, BsTelephone, BsTrash } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import TextWithIcon from "../textWithIcon";
import ButtonWithIcon from "../buttonWithIcon";

const StyledWrap = styled.div`
  .profile-image {
    height: 150px;
    background: #f5f6fa;
  }

  .card-title {
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    width:auto;
  }

  .card-body {
    padding: 20px;
  }

  address {
    margin-bottom: 0;
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

function UserCard({ className, user : { username, name, email, phone, website } }) {
  return (
    <StyledWrap>
      <Card className={className}>
        <Card.Img variant="top"
                  className="profile-image"
                  src={`https://avatars.dicebear.com/v2/avataaars/${username.toLowerCase()}.svg?options[mood][]=happy`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <address>
            <TextWithIcon icon={<BsEnvelope/>} className="email" text={email}/>
            <TextWithIcon icon={<BsTelephone/>} className="phone" text={phone}/>
            <TextWithIcon icon={<BsGlobe/>} className="website" text={website}/>
          </address>
        </Card.Body>
        <Card.Footer className="profile-buttons">
          <Container className="p-0">
            <Row>
              <Col sm xs={4} className="button-cols">
                <ButtonWithIcon className="like-btn" icon={<BsHeart size={18} color="red"/>} />
              </Col>
              <Col sm xs={4} className="button-cols">
                <ButtonWithIcon className="edit-btn" icon={<FiEdit3 size={18} color="gray"/>} />
              </Col>
              <Col sm xs={4} className="button-cols">
                <ButtonWithIcon className="delete-btn" icon={<BsTrash size={18} color="gray"/>} />
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </StyledWrap>
  );
}

UserCard.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

export default UserCard;

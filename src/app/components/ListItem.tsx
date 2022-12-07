import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Users } from "../../services/users";

const ListItemStyle: React.FC<React.HTMLAttributes<any>> = styled.div`
  display: flex;
  margin: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &-image {
    border-radius: 50%;
    width: 64px;
  }
  &-content {
    margin-left: 20px;
    h4,
    p {
      margin: 0;
    }
    h4 {
      margin-top: 10px;
      font-size: 18px;
    }
    p {
      margin-top: 5px;
      color: $white-two;
    }
  }
`;

const Image: React.FC<React.ImgHTMLAttributes<any>> = styled.img`
  border-radius: 50%;
  width: 64px;
`;

const ListItemContent: React.FC<React.PropsWithChildren> = styled.div`
  margin-left: 20px;
  h4,
  p {
    margin: 0;
  }
  h4 {
    margin-top: 10px;
    font-size: 18px;
  }
  p {
    margin-top: 5px;
    color: black;
  }
`;

function ListItem({
  first_name: firstName,
  last_name: lastName,
  email,
  id,
  avatar,
}: Users): React.ReactElement<HTMLElement> {
  const navigate = useNavigate();

  const navigateToUserDetail = (): void => {
    navigate(`/users/${id}`);
  };

  return (
    <ListItemStyle key={id} onClick={navigateToUserDetail}>
      <Image src={avatar} />
      <ListItemContent>
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
      </ListItemContent>
    </ListItemStyle>
  );
}

export default ListItem;

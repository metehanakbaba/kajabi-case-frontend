import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import ContainerWrapper from "../../components/ContainerWrapper";
import ListItem from "../../components/ListItem";
import List from "../../components/List";
import { useUserDetailQuery } from "../../../services/users";
import NotFoundUser from "../../components/NotFoundUser";

function UsersScreen(): React.ReactElement {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const { data: user, isLoading } = useUserDetailQuery(id as string);

  if (isLoading) {
    return <NotFoundUser>Loading</NotFoundUser>;
  }

  if (!user?.payload.data) {
    return <NotFoundUser>No User :(</NotFoundUser>;
  }

  const navigateToGoBack = (): void => {
    navigate(-1);
  };

  const {
    first_name: firstName,
    last_name: lastName,
    avatar,
    email,
    id: userId,
  } = user.payload.data;

  return (
    <ContainerWrapper>
      <button
        type="button"
        onClick={navigateToGoBack}>
        Go Back
      </button>
      <List>
        <ListItem
          avatar={avatar}
          email={email}
          first_name={firstName}
          id={userId}
          last_name={lastName}
        />
      </List>
    </ContainerWrapper>
  );
}

export default UsersScreen;

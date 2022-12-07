import React, { useEffect } from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Pagination from "../../components/Pagination";
import { useListUsersQuery, Users } from "../../../services/users";
import ContainerWrapper from "../../components/ContainerWrapper";
import useSearchItem from "../../../hooks/useSearchItem";
import NotFoundUser from "../../components/NotFoundUser";

function UsersDetail(): React.ReactElement {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState<string>("");
  const { data: users, isLoading, isFetching } = useListUsersQuery(page);

  useEffect(() => {
    setSearch("");
  }, [page]);

  if (isLoading) {
    return <NotFoundUser>Loading</NotFoundUser>;
  }

  if (!users?.payload.data) {
    return <NotFoundUser>No Users :(</NotFoundUser>;
  }

  const searchItem: Users[] = useSearchItem(search, users?.payload.data as []);

  return (
    <ContainerWrapper>
      <input
        placeholder="Enter email to filter rows"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchItem.length === 0 && <NotFoundUser>Searched User Not Found</NotFoundUser>}
      <List>
        {searchItem.map((user) => (
          <ListItem
            key={user.id}
            id={user.id}
            email={user.email}
            avatar={user.avatar}
            last_name={user.last_name}
            first_name={user.first_name}
          />
        ))}
      </List>
      <Pagination
        page={page}
        setPage={setPage}
        limit={users.payload.per_page}
        total={users.payload.total}
        disableAction={isFetching}
      />
    </ContainerWrapper>
  );
}

export default UsersDetail;

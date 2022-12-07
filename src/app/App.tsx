import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersScreen from "./screens/users/UsersScreen";
import UsersDetail from "./screens/users/UsersDetail"

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<UsersScreen />} />
      <Route path="/users" element={<UsersScreen />} />
      <Route path="/users/:id" element={<UsersDetail />} />
    </Routes>
  );
}

export default App;

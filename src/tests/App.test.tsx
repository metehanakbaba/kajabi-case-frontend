import React from "react";
import { render, screen } from "@testing-library/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { BrowserRouter } from "react-router-dom"
import App from "../app/App";
import { api } from "../services/users"

test("renders app", () => {
  render(
    <ApiProvider api={api}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>,
  );

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

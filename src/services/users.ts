import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Users {
  id: string;
  email: string;
  avatar: string;
  first_name: string;
  last_name: string;
}

export interface PaginationResponse<T> {
  data: T[];
  page: number;
  total: number;
  per_page: number;
  total_pages: number;
}

export interface ServerResponse<T> {
  payload: T;
  status: number;
  message: string;
}

export interface DataResponse<T> {
  data: T;
}

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:${process.env.BACKEND_PORT || 8000}`,
});

export const api = createApi({
  baseQuery,
  reducerPath: "users",
  endpoints: (build) => ({
    userDetail: build.query<ServerResponse<DataResponse<Users>>, string>({
      query: (id) => `/${id}`,
    }),
    listUsers: build.query<ServerResponse<PaginationResponse<Users>>, number>({
      query: (page = 1) => `?delay=1&page=${page}`,
    }),
  }),
});

export const { useListUsersQuery, useUserDetailQuery } = api;

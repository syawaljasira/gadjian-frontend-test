import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://randomuser.me";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPersonnelList: builder.query({
      // method GET: https://randomuser.me/api/?results=28
      query: () => "/api/?results=28",
    }),
  }),
});

export default apiSlice;

import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getSingleCategory: build.query({
      query: (id) => ({
        url: `/productc/${id}`,
      }),
      providesTags: ["Products"],
    }),
    createCategory: build.mutation({
      query: (body) => ({
        url: "/productc",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/productc/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    updeteCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/productc/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdeteCategoryMutation,
} = categoryApi;

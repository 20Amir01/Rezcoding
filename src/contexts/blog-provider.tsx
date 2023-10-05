"use client";
import React, { useReducer, createContext, useContext } from "react";

interface InitialStateTypes {
  searchQuery: any;
  pageIndex: number;
  postCountPerPage: number;
  mobileMenuToggle: boolean;
  searchBoxToggle: boolean;
  categoryBoxToggle: boolean;
}
const initialState: InitialStateTypes = {
  searchQuery: "",
  pageIndex: 1,
  postCountPerPage: 8,
  mobileMenuToggle: false,
  searchBoxToggle: false,
  categoryBoxToggle: false,
};

type ActionType =
  | { type: "search-query-set"; payload: string }
  | { type: "search-query-clear" }
  | { type: "page-index/increament"; payload: number }
  | { type: "page-index/decreament" }
  | { type: "mobile-menu/open" }
  | { type: "mobile-menu/close" }
  | { type: "search-box-/toggle" }
  | { type: "search-box-/open" }
  | { type: "search-box-/close" }
  | { type: "category-box/toggle" }
  | { type: "category-box/open" }
  | { type: "category-box/close" };

const reducer = (
  state: InitialStateTypes,
  action: ActionType
): InitialStateTypes => {
  switch (action.type) {
    case "search-query-set":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "search-query-clear":
      return {
        ...state,
        searchQuery: "",
      };
    case "page-index/decreament":
      return {
        ...state,
        pageIndex: state.pageIndex === 1 ? 1 : state.pageIndex - 1,
      };
    case "page-index/increament":
      return {
        ...state,
        pageIndex:
          state.pageIndex === action.payload
            ? action.payload
            : state.pageIndex + 1,
      };
    case "mobile-menu/open":
      return {
        ...state,
        mobileMenuToggle: true,
      };
    case "mobile-menu/close":
      return {
        ...state,
        mobileMenuToggle: false,
      };
    case "search-box-/toggle": {
      return {
        ...state,
        searchBoxToggle: !state.searchBoxToggle,
      };
    }
    case "search-box-/open": {
      return {
        ...state,
        searchBoxToggle: true,
      };
    }
    case "search-box-/close": {
      return {
        ...state,
        searchBoxToggle: false,
      };
    }
    case "category-box/toggle": {
      return {
        ...state,
        categoryBoxToggle: !state.categoryBoxToggle,
      };
    }
    case "category-box/open": {
      return {
        ...state,
        categoryBoxToggle: true,
      };
    }
    case "category-box/close": {
      return {
        ...state,
        categoryBoxToggle: false,
      };
    }
    default:
      return state;
  }
};

export const BlogContext = createContext<{
  state: InitialStateTypes;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const { state, dispatch } = useContext(BlogContext);
  if (!state || !dispatch) throw new Error("Context not defined");
  return { state, dispatch };
};

export default BlogProvider;

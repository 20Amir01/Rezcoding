"use client";
import React, { useReducer, createContext, useContext } from "react";

interface InitialStateTypes {
  searchQuery: any;
}
const initialState: InitialStateTypes = {
  searchQuery: "",
};

type ActionType =
  | { type: "search-query-set"; payload: string }
  | { type: "search-query-clear" };

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

'use client'
import React, { useReducer, createContext, useContext } from "react";

interface InitialStateTypes {
  mobileMenuDisplayToggle: boolean;
}

const initialState: InitialStateTypes = {
  mobileMenuDisplayToggle: false,
};

type ActionType =
  | { type: "mobile-menu-display/active" }
  | { type: "mobile-menu-display/deactive" };

const reducer = (
  state: InitialStateTypes,
  action: ActionType
): InitialStateTypes => {
  switch (action.type) {
    case "mobile-menu-display/active":
      return {
        ...state,
        mobileMenuDisplayToggle: true,
      };
    case "mobile-menu-display/deactive":
      return {
        ...state,
        mobileMenuDisplayToggle: false,
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
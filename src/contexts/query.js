import { createContext, useState, useContext } from "react";

const QueryContext = createContext();

export function QueryProvider({ children }) {
  const [query, setQuery] = useState({});

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}

export function useQuery() {
  const context = useContext(QueryContext);
  if (!context) throw new Error("useQuery must be used within a QueryProvider");

  const { query, setQuery } = context;
  return { query, setQuery };
}

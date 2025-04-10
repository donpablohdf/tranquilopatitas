import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export function NavProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <NavContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </NavContext.Provider>
  );
}
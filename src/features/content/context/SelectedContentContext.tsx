import React, { createContext, useContext, useState } from 'react';

type SelectedContentContextType = {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
};

const SelectedContentContext = createContext<SelectedContentContextType | undefined>(undefined);

export const SelectedContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <SelectedContentContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectedContentContext.Provider>
  );
};

export const useSelectedContent = (): SelectedContentContextType => {
  const ctx = useContext(SelectedContentContext);
  if (!ctx) throw new Error('useSelectedContent must be used within SelectedContentProvider');
  return ctx;
};

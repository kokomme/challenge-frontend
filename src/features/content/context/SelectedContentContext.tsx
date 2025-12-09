import React, { useState } from 'react';
import { SelectedContentContext } from './context';


function SelectedContentProviderComponent({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <SelectedContentContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectedContentContext.Provider>
  );
}

export const SelectedContentProvider: React.FC<{ children: React.ReactNode }> = SelectedContentProviderComponent;

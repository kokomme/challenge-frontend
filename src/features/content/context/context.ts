import { createContext } from 'react';

export type SelectedContentContextType = {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
};

export const SelectedContentContext = createContext<SelectedContentContextType | undefined>(undefined);

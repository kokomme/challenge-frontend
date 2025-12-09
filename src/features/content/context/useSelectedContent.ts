import { useContext } from 'react';
import { SelectedContentContext, type SelectedContentContextType } from './context';

export function useSelectedContent(): SelectedContentContextType {
  const ctx = useContext(SelectedContentContext);
  if (!ctx) throw new Error('useSelectedContent must be used within SelectedContentProvider');
  return ctx;
}

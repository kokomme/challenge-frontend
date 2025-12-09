export type EditableTitleListProps<T extends { id: number; title: string | null }> = {
  items: T[];
  selectedId?: number | null;
  onSelect?: (id: number) => void;
};


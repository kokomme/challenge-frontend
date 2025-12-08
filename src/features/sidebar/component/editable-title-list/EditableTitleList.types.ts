export type EditableTitleListProps<T extends { id: string | number; title: string }> = {
  items: T[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  onDelete?: (index: number) => void;
};

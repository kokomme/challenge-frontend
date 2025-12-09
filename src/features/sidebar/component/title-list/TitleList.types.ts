export type TitleListProps<T extends { id: string | number; title: string | null }> = {
  items: T[];
  selectedId?: number | null;
  onSelect?: (id: number) => void;
};

export type TitleListProps<T extends { id: string | number; title: string }> = {
  items: T[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
};

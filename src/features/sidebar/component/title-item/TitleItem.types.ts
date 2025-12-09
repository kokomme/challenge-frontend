export type TitleItemProps<T extends { id: string | number; title: string | null }> = {
  item: T[];
  selected?: boolean;
  onClick?: () => void;
};

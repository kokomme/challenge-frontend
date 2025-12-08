import saveSvg from '../../assets/icon/save.svg?raw';
import editSvg from '../../assets/icon/edit.svg?raw';
import doneSvg from '../../assets/icon/done.svg?raw';
import cancelSvg from '../../assets/icon/cancel.svg?raw';
import logoSvg from '../../assets/icon/logo.svg?raw';
import plusSvg from '../../assets/icon/plus.svg?raw';
import deleteSvg from '../../assets/icon/delete.svg?raw';

type IconProps = {
  className?: string;
  'aria-hidden'?: boolean;
};

function RawSvg({ svg, className = '', ['aria-hidden']: ariaHidden = true }: { svg: string } & IconProps) {
  const injected = svg.replace('<svg', `<svg class="${className}" aria-hidden="${ariaHidden}"`);
  return <span dangerouslySetInnerHTML={{ __html: injected }} />;
}

export function SaveIcon(props: IconProps) {
  return <RawSvg svg={saveSvg} {...props} />;
}

export function EditIcon(props: IconProps) {
  return <RawSvg svg={editSvg} {...props} />;
}

export function DoneIcon(props: IconProps) {
  return <RawSvg svg={doneSvg} {...props} />;
}

export function CancelIcon(props: IconProps) {
  return <RawSvg svg={cancelSvg} {...props} />;
}

export function LogoIcon(props: IconProps) {
  return <RawSvg svg={logoSvg} {...props} />;
}

export function PlusIcon(props: IconProps) {
  return <RawSvg svg={plusSvg} {...props} />;
}

export function DeleteIcon(props: IconProps) {
  return <RawSvg svg={deleteSvg} {...props} />;
}

export default {
  SaveIcon,
  EditIcon,
  DoneIcon,
  CancelIcon,
  LogoIcon,
  PlusIcon,
  DeleteIcon,
};

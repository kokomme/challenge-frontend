import saveSvg from '../../../assets/icon/save.svg?raw';
import editSvg from '../../../assets/icon/edit.svg?raw';
import doneSvg from '../../../assets/icon/done.svg?raw';
import cancelSvg from '../../../assets/icon/cancel.svg?raw';

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

export default {
  SaveIcon,
  EditIcon,
  DoneIcon,
  CancelIcon,
};
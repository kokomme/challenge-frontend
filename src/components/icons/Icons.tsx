import SaveSvg from '../../assets/icon/save.svg?react';
import EditSvg from '../../assets/icon/edit.svg?react';
import DoneSvg from '../../assets/icon/done.svg?react';
import CancelSvg from '../../assets/icon/cancel.svg?react';
import LogoSvg from '../../assets/icon/logo.svg?react';
import PlusSvg from '../../assets/icon/plus.svg?react';
import DeleteSvg from '../../assets/icon/delete.svg?react';

type IconProps = {
  className?: string;
  'aria-hidden'?: boolean;
};

export function SaveIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <SaveSvg className={className} aria-hidden={ariaHidden} />;
}

export function EditIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <EditSvg className={className} aria-hidden={ariaHidden} />;
}

export function DoneIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <DoneSvg className={className} aria-hidden={ariaHidden} />;
}

export function CancelIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <CancelSvg className={className} aria-hidden={ariaHidden} />;
}

export function LogoIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <LogoSvg className={className} aria-hidden={ariaHidden} />;
}

export function PlusIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <PlusSvg className={className} aria-hidden={ariaHidden} />;
}

export function DeleteIcon({ className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return <DeleteSvg className={className} aria-hidden={ariaHidden} />;
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

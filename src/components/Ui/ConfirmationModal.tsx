import { Button } from './Button';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
}

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    //inset-0 --> make full screen
    <div className="fixed inset-0 z-50 flex items-center justify-center shadow-4xl">
      <div className="absolute inset-0 bg-black/50 pointer-events-auto" onClick={onClose} />

      <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4 text-center">{children}</div>
        <div className="flex justify-end gap-2">
          {!!onConfirm && <Button action={onConfirm}>Aceptar</Button>}
          {!!onClose && <Button action={onClose}>Cancelar</Button>}
        </div>
      </div>
    </div>
  );
};

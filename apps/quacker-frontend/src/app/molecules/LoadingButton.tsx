import { Button, Spinner } from '@quacker/ui';
import type { ButtonProps } from '@quacker/ui';

export type LoadingButtonProps = {
  loading?: boolean;
} & ButtonProps<'button'>;

export function LoadingButton({
  loading,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} disabled={loading || disabled}>
      {children} {loading && <Spinner className="ml3" />}
    </Button>
  );
}

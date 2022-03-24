import { Button, Spinner } from 'src/atoms/';
import type { ButtonProps } from 'src/atoms/';

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

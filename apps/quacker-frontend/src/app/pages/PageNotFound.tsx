import { Link } from '@quacker/ui';
import { Placeholder } from 'src/templates/Placeholder';
import { route } from 'src/Routes';

export type PageNotFoundProps = Record<string, never>;

export function PageNotFound(props: PageNotFoundProps) {
  return (
    <Placeholder title="Error 404">
      <p>
        Page not found, please return to <Link to={route.home()}>Home</Link>.
      </p>
    </Placeholder>
  );
}

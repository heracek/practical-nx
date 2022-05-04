import { Heading, Link, MainSection } from '@quacker/ui';
import { TopNavigation } from '@quacker/navigation/ui';
import { SignInForm } from 'src/organisms/';
import type { SignInFormProps } from 'src/organisms/';
import { route } from '@quacker/navigation/utility';

export type SignInTemplateProps = {
  isLoading?: boolean;
  error?: Error | null;
  onSubmit: SignInFormProps['onSubmit'];
};

export function SignInTemplate({
  isLoading,
  error,
  onSubmit,
}: SignInTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Sign In</Heading>

        <SignInForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
          className="mt3"
        >
          <div className="lh-copy">
            or{' '}
            <Link className="f5 dark-green" to={route.signUp()}>
              Sign Up
            </Link>
          </div>
        </SignInForm>
      </MainSection>
    </>
  );
}

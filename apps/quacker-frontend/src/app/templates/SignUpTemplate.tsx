import { Heading, Link, MainSection } from '@quacker/ui';
import { SignUpForm, TopNavigation } from 'src/organisms/';
import type { SignUpFormProps } from 'src/organisms/';
import { route } from '@quacker/navigation/utility';

export type SignUpTemplateProps = {
  isLoading?: boolean;
  error?: Error | null;
  onSubmit: SignUpFormProps['onSubmit'];
};

export function SignUpTemplate({
  isLoading,
  error,
  onSubmit,
}: SignUpTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Sign Up</Heading>

        <SignUpForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
          className="mt3"
        >
          <div className="lh-copy">
            or{' '}
            <Link className="f5 dark-green" to={route.signIn()}>
              Sign In
            </Link>
          </div>
        </SignUpForm>
      </MainSection>
    </>
  );
}

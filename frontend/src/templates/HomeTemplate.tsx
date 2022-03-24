import { gql } from '@apollo/client';

import { Heading, MainSection } from 'src/atoms/';
import { QuackForm, ReloadButton } from 'src/molecules/';
import type { QuackFormProps } from 'src/molecules';
import { QuackList, TopNavigation } from 'src/organisms/';
import type { QuackListProps } from 'src/organisms/';

export type HomeTemplateProps = {
  quacks: QuackListProps['quacks'];
  loading?: boolean;
  error?: Error | null;
  refetchQuacks: () => void;
  quackFormState: QuackFormProps;
  currentUser: {} | null;
};

export function HomeTemplate({
  quacks,
  loading,
  error,
  refetchQuacks = () => {},
  quackFormState,
  currentUser,
}: HomeTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>Home</Heading>

        {currentUser && <QuackForm {...quackFormState} />}

        {quacks && (
          <ReloadButton
            isLoading={loading}
            onClick={() => refetchQuacks()}
            className="fr"
          />
        )}

        <QuackList
          quacks={quacks}
          isLoading={loading}
          error={error}
          refetch={refetchQuacks}
        />
      </MainSection>
    </>
  );
}
HomeTemplate.fragments = {
  quacks: gql`
    fragment HomeTemplate_quacks on Quack {
      ...QuackList_quacks
    }

    ${QuackList.fragments.quacks}
  `,
};

import React from 'react';
import { gql } from '@apollo/client';

import {
  AvatarPhoto,
  Button,
  ErrorBanner,
  Heading,
  Loading,
  MainSection,
} from 'src/atoms/';
import { QuackForm, ReloadButton } from 'src/molecules/';
import { QuackList, TopNavigation } from 'src/organisms/';

export function UserDetailTemplate({
  userName,
  user,
  loading,
  error,
  onReload,
  quackFormState,
  currentUser,
}) {
  const showQuackForm =
    quackFormState && currentUser && currentUser.userName === userName;

  return (
    <>
      <TopNavigation />
      <MainSection>
        {loading && !user && <Loading />}

        {error && (
          <ErrorBanner title={error.message}>
            <Button color="red" onClick={onReload}>
              Reload
            </Button>
          </ErrorBanner>
        )}

        {user && (
          <>
            <header>
              <AvatarPhoto
                src={user.profileImageUrl}
                alt={user.name}
                size="4"
                className="mb2"
              />
              <Heading size="lg">{user.name}</Heading>
              <Heading size="sm" className="fw4 gray">
                @{user.userName}
              </Heading>
            </header>

            {showQuackForm && <QuackForm {...quackFormState} />}

            <ReloadButton
              onClick={onReload}
              isLoading={loading}
              className="fr"
            />

            <QuackList quacks={user.quacks} />
          </>
        )}
      </MainSection>
    </>
  );
}
UserDetailTemplate.fragments = {
  user: gql`
    fragment UserDetailTemplate_user on User {
      id
      name
      userName
      profileImageUrl
      quacks {
        ...QuackList_quacks
      }
    }

    ${QuackList.fragments.quacks}
  `,
};

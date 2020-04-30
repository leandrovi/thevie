import React from 'react';
import Head from 'next/head';
import { useTransition } from 'react-spring';

import { Container, Logo } from './styles';

interface LoaderProps {
  visible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  const transitions = useTransition(visible, null, {
    from: { opacity: 1 },
    enter: { opacity: 1, visibility: 'visible' },
    leave: { opacity: 0 },
    onDestroyed: () => {
      return { visibility: 'hidden' };
    },
  });

  return (
    <div>
      <Head>
        <title>TheVÏe</title>
      </Head>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Container key={key} style={props}>
              <Logo src="/icons/logo.svg" />
            </Container>
          ),
      )}
    </div>
  );
};

export default Loader;

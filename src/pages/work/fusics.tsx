import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer img {
    margin-left: 0.5rem;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Fusics: React.FC<{}> = () => (
  <Container>
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      <h1>Fusics Page</h1>
    </main>

    <footer>
      <a href="https://zeit.co" target="_blank" rel="noopener noreferrer">
        Powered by leandrovi
      </a>

      <Link href="/work">
        <a>Work</a>
      </Link>

      <Link href="/">
        <a>Voltar para home</a>
      </Link>
    </footer>
  </Container>
);

export default Fusics;

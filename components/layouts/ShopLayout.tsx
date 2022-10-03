import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

interface Props {
  title: string;
  pageDescription: string;
  imgFullUrl?: string;
  children?: ReactNode;
}

export const ShopLayout: FC<Props> = ({
  title,
  pageDescription,
  imgFullUrl,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {imgFullUrl && <meta name="og:image" content={imgFullUrl} />}
      </Head>
      <nav>
        <Navbar></Navbar>
      </nav>

      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px',
        }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};

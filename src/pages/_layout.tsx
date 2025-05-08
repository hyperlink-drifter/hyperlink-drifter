import '../styles.css';

import type { ReactNode } from 'react';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <>
      <title>hyperlink-drifter</title>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <main>{children}</main>
    </>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};

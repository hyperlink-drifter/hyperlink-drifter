import '../styles.css';

import type { ReactNode } from 'react';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="h-full">
      <title>hyperlink-drifter</title>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <main className="h-full grid grid-cols-1 grid-rows-1">{children}</main>
    </div>
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

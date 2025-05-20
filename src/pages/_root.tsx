import type { ReactNode } from 'react';

type RootProps = { children: ReactNode };

export default async function RootElement({ children }: RootProps) {
  return (
    <html lang="en" className="overscroll-none overflow-x-clip bg-black">
      <head></head>
      <body data-version="1.0" className="">
        {children}
      </body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};

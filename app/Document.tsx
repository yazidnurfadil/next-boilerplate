'use client';

import { ReactNode } from 'react';
import { Providers } from '@/app/Providers';

export const Document = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang='en'
    >
      <head>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

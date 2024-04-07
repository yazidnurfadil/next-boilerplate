import React, { FC } from 'react';

import '@park-ui/tailwind-plugin/preset.css';

import './globals.css';

export const Providers: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <>{children}</>;
};

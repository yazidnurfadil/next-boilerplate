import React, { FC } from 'react';

import './globals.css';

export const Providers: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <>{children}</>;
};

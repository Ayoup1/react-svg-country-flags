import React, { FC, memo } from 'react';
import * as Flags from './flags/index';

export interface Props {
  country: string;
  className?: string;
}

export const Flag: FC<Props> = ({ className, country }: Props) => {
  const SvgFlag =
    (Flags as any)[country?.toUpperCase()] || (Flags as any)['Fallback'];

  return <SvgFlag className={className} />;
};

export default memo(Flag);

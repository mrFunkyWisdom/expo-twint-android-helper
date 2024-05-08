import * as React from 'react';

import { ExpoTwintViewProps } from './ExpoTwint.types';

export default function ExpoTwintView(props: ExpoTwintViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

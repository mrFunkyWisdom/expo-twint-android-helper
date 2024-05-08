import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoTwintViewProps } from './ExpoTwint.types';

const NativeView: React.ComponentType<ExpoTwintViewProps> =
  requireNativeViewManager('ExpoTwint');

export default function ExpoTwintView(props: ExpoTwintViewProps) {
  return <NativeView {...props} />;
}

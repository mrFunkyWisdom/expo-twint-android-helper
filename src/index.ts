import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoTwint.web.ts
// and on native platforms to ExpoTwint.ts
import ExpoTwintModule from './ExpoTwintModule';
import ExpoTwintView from './ExpoTwintView';
import { ChangeEventPayload, ExpoTwintViewProps } from './ExpoTwint.types';

// Get the native constant value.
export const PI = ExpoTwintModule.PI;

export function hello(): string {
  return ExpoTwintModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoTwintModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoTwintModule ?? NativeModulesProxy.ExpoTwint);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoTwintView, ExpoTwintViewProps, ChangeEventPayload };

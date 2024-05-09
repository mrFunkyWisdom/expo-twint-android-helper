import ExpoTwintModule from './ExpoTwintModule';

export function getActivityDetails(): string {
  return ExpoTwintModule.hello();
}
export function endActivity(): string {
  return ExpoTwintModule.endActivity();
}

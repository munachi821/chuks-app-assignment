/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/email` | `/(auth)/login` | `/(auth)/welcome` | `/(tabs)` | `/(tabs)/` | `/(tabs)/portfolio` | `/(tabs)/profile` | `/(tabs)/rewards` | `/(tabs)/savings` | `/_sitemap` | `/email` | `/login` | `/portfolio` | `/profile` | `/rewards` | `/savings` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

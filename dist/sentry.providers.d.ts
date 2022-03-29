import type { Provider } from '@nestjs/common';
import type { SentryModuleOptions } from './sentry.interfaces';
export declare function createSentryProviders(options: SentryModuleOptions): Provider;

import type { Provider } from '@nestjs/common';

import type { SentryModuleOptions } from './sentry.interfaces';
import { SENTRY_TOKEN } from './sentry.constants';
import { SentryService } from './sentry.service';

export function createSentryProviders(options: SentryModuleOptions): Provider {
  return {
    provide: SENTRY_TOKEN,
    useValue: new SentryService(options),
  };
}

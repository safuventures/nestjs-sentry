import { Module } from '@nestjs/common';
import type { DynamicModule } from '@nestjs/common';

import { SentryCoreModule } from './sentry-core.module';
import {
  SentryModuleOptions,
  SentryModuleAsyncOptions,
} from './sentry.interfaces';

@Module({})
export class SentryModule {
  public static forRoot(options: SentryModuleOptions): DynamicModule {
    return {
      module: SentryModule,
      imports: [SentryCoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: SentryModuleAsyncOptions): DynamicModule {
    return {
      module: SentryModule,
      imports: [SentryCoreModule.forRootAsync(options)],
    };
  }
}

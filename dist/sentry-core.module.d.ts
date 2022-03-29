import type { DynamicModule } from '@nestjs/common';
import type { SentryModuleAsyncOptions, SentryModuleOptions } from './sentry.interfaces';
export declare class SentryCoreModule {
    static forRoot(options: SentryModuleOptions): DynamicModule;
    static forRootAsync(options: SentryModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}

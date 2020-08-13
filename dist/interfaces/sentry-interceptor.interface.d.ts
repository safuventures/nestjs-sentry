import { Severity } from "@sentry/node";
export declare type SentryTransaction = boolean | 'path' | 'methodPath' | 'handler';
export interface SentryFilterFunction {
    (exception: any): boolean;
}
export interface SentryInterceptorOptionsFilter {
    type: any;
    filter?: SentryFilterFunction;
}
export interface SentryInterceptorOptions {
    filters?: SentryInterceptorOptionsFilter[];
    tags?: {
        [key: string]: string;
    };
    extra?: {
        [key: string]: any;
    };
    fingerprint?: string[];
    level?: Severity;
    request?: boolean;
    serverName?: boolean;
    transaction?: boolean | 'path' | 'methodPath' | 'handler';
    user?: boolean | string[];
    version?: boolean;
}

/**
 * Majordomo AI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { VectordbEndpoint } from './vectordbEndpoint';
import { VectordbProviders } from './vectordbProviders';


/**
 * Vector database profile
 */
export interface VectordbProfile { 
    /**
     * Name of the Vectordb profile
     */
    name: string;
    provider: VectordbProviders;
    /**
     * Access Key for accessing the Vectordb
     */
    access_key?: string;
    endpoint: VectordbEndpoint;
    /**
     * If this condition is set to true, then only read operations are permitted to this vector database. This can be used by administrators to restrict users from modifying the contents arbitrarily.
     */
    readonly: boolean;
}
export namespace VectordbProfile {
}



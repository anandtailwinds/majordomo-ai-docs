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
 * Vectordb Profile Information.
 */
export interface VectordbProfileInfo { 
    /**
     * Name of the Vectordb profile.
     */
    name: string;
    provider: VectordbProviders;
    endpoint: VectordbEndpoint;
    /**
     * Access Key for accessing the Vectordb.
     */
    access_key?: string;
    /**
     * If this condition is set to true, then only read operations are permitted to this vector database. This can be used by administrators to restrict users from modifying the contents arbitrarily.
     */
    readonly: boolean;
    /**
     * The name of the user who created this Vectordb profile.
     */
    created_by: string;
    /**
     * Timestamp of the Vectordb profile creation.
     */
    created_at: number;
    /**
     * Timestamp of the last update to the Vectordb profile.
     */
    last_update: number;
}
export namespace VectordbProfileInfo {
}



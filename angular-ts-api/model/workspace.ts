/**
 * Majordomo AI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The user workspace
 */
export interface Workspace { 
    /**
     * Name of the workspace.
     */
    name: string;
    /**
     * Name of the worker associated with the workspace.
     */
    worker_name: string;
    /**
     * The list of model profiles that are enabled for this workspace.
     */
    model_profiles?: Array<string>;
    /**
     * The list of vectordb profiles that are enabled for this workspace.
     */
    vectordb_profiles?: Array<string>;
    /**
     * The monitoring profile enabled for this workspace.
     */
    monitor_profile?: string;
}

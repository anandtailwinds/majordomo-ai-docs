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
 * Run an query pipeline immediately.
 */
export interface QueryPipelineRun { 
    /**
     * The workspace this query pipeline belongs to.
     */
    workspace: string;
    /**
     * Name of the query pipeline.
     */
    name: string;
    /**
     * The query user wants to ask based on the Query Pipeline.
     */
    query_string: string;
}


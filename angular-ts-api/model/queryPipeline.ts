/**
 * Majordomo AI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { QueryTypes } from './queryTypes';
import { QueryParams } from './queryParams';


/**
 * Query Pipeline
 */
export interface QueryPipeline { 
    /**
     * The workspace this query pipeline belongs to.
     */
    workspace: string;
    /**
     * The user who created the ingest pipeline.
     */
    user_name: string;
    /**
     * Name of the query pipeline.
     */
    name: string;
    /**
     * The type of the parent data store.
     */
    data_store_names?: Array<string>;
    /**
     * The embedding model to be used
     */
    embedding_model: string;
    /**
     * The LLM model to be used
     */
    llm_model: string;
    query_type: QueryTypes;
    query_params?: QueryParams;
}
export namespace QueryPipeline {
}



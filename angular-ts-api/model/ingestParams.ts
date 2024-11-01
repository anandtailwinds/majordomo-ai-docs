/**
 * Majordomo AI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FileExtractors } from './fileExtractors';


/**
 * User controlled ingestion parameters
 */
export interface IngestParams { 
    /**
     * The chunk size used to split documents.
     */
    chunk_size?: number;
    /**
     * If not specified, is set to 0.75 value of chunk_size.
     */
    chunk_overlap?: number;
    /**
     * The LLM model to be used in cases of any options that require it such as summarization.
     */
    llm_model?: string;
    /**
     * If this option is set to True, the input document is summarized before storage. This helps in cases where the context of the document is spread across the entire document.
     */
    summarize_doc?: boolean;
    /**
     * The name of the custom script to use while ingesting data into a structured database. Some custom scripts are pre-loaded.
     */
    custom_script?: string;
    /**
     * Specify a file extractor for new file extensions or for a different supported extractor for standard extensions.
     */
    file_extractor?: { [key: string]: FileExtractors; };
    /**
     * Any API keys required while accessing file extractors such as LlamaParse.
     */
    api_key?: string;
    /**
     * Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks.
     */
    doc_metadata?: { [key: string]: string; };
}


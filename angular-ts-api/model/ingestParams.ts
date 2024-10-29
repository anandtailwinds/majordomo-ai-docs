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
 * User controlled ingestion parameters
 */
export interface IngestParams { 
    /**
     * The chunk size used to split documents.
     */
    chunk_size?: number;
    /**
     * The temperature to be used by LLM Model while generating response. The higher the number, the more creative the model is.
     */
    model_temperature?: number;
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
     * Dictionary of file extension to file extractor mapper. Supported file extractors are PyMuPDF, LlamaParse and PDF2Image. The file extension should match the file not the file-type.
     */
    file_extractor?: { [key: string]: string; };
    /**
     * Any API keys required while accessing file extractors such as LlamaParse.
     */
    api_key?: string;
    /**
     * Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks.
     */
    doc_metadata?: { [key: string]: string; };
}


# Query Parameters

This is a non-exhaustive list of parameters that the user can tweak while performing LLM queries to optimize the results.

### Top_K

This parameter determines the number of best matching chunks that are to be retrieved from the vector database. The bigger the number of chunks retrieved the possibility of the answer being more relevant is better. However there is an increased cost in passing a larger context to the LLM and it may also impact latency depending on the model provider. 

### Temperature

The higher the temperature of the query, the more creative the model is with the answers. For queries that are TAG related, it is better to keep a minimum temperature of 0.1 because the answers need to be specific regarding the query operation that needs to be performed on the structured databases.

### DocMetadata

The metadata information for a particular document is already ingested into the supported vector databases during the ingestion process. This option allows a user to only retrieve documents that match a specific metadata value. 

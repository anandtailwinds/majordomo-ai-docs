# IngestParams

User controlled ingestion parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_size** | **int** | The chunk size used to split documents. | [optional] [default to 2048]
**temperature** | **float** | The temperature to be used by LLM Model while generating response. The higher the number, the more creative the model is. | [optional] [default to 1.0]
**chunk_overlap** | **int** | If not specified, is set to 0.75 value of chunk_size. | [optional] 
**llm_model** | **str** | The LLM model to be used in cases of any options that require it such as summarization. | [optional] 
**summarize** | **bool** | If this option is set to True, the input document is summarized before storage. This helps in cases where the context of the document is spread across the entire document. | [optional] 
**custom_script** | **str** | The name of the custom script to use while ingesting data into a structured database. Some custom scripts are pre-loaded. | [optional] 
**file_extractor** | **str** | Dictionary of file extension to file extractor mapper. Supported file extractors are PyMuPDF, LlamaParse and PDF2Image. The file extension should match the file not the file-type. | [optional] 
**api_key** | **str** | Any API keys required while accessing file extractors such as LlamaParse. | [optional] 
**metadata** | **str** | Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks. | [optional] 

## Example

```python
from openapi_client.models.ingest_params import IngestParams

# TODO update the JSON string below
json = "{}"
# create an instance of IngestParams from a JSON string
ingest_params_instance = IngestParams.from_json(json)
# print the JSON string representation of the object
print(IngestParams.to_json())

# convert the object into a dict
ingest_params_dict = ingest_params_instance.to_dict()
# create an instance of IngestParams from a dict
ingest_params_from_dict = IngestParams.from_dict(ingest_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



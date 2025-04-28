# IngestParams

User controlled ingestion parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_size** | **int** | The chunk size used to split documents. | [optional] [default to 2048]
**chunk_overlap** | **int** | If not specified, is set to 0.75 value of chunk_size. | [optional] 
**summarize_doc** | [**SummarizeDoc**](SummarizeDoc.md) |  | [optional] 
**file_extractor** | [**FileExtractor**](FileExtractor.md) |  | [optional] 
**doc_metadata** | [**List[Metadata]**](Metadata.md) | Dictionary of metadata key/value pairs that are to be inserted into the  vector database along with the chunks. This is useful while retrieval to  restrict the relevant chunks.  | [optional] 

## Example

```python
from majordomo_ai.models.ingest_params import IngestParams

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



# IngestPipeline

Ingest Pipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**Credentials**](Credentials.md) |  | 
**name** | **str** | Name of the ingest pipeline. | 
**data_store** | **str** | The type of the parent data store. | 
**input_filter** | [**InputFilter**](InputFilter.md) |  | 
**input_keys** | [**InputKeys**](InputKeys.md) |  | [optional] 
**input_type** | [**InputTypes**](InputTypes.md) |  | 
**ingest_type** | [**IngestTypes**](IngestTypes.md) |  | 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 
**timer_on** | **bool** |  | [optional] 
**timer_interval** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.ingest_pipeline import IngestPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of IngestPipeline from a JSON string
ingest_pipeline_instance = IngestPipeline.from_json(json)
# print the JSON string representation of the object
print(IngestPipeline.to_json())

# convert the object into a dict
ingest_pipeline_dict = ingest_pipeline_instance.to_dict()
# create an instance of IngestPipeline from a dict
ingest_pipeline_from_dict = IngestPipeline.from_dict(ingest_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



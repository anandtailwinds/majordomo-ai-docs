# IngestPipelineInfo

Ingest Pipeline configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Database ID | [optional] 
**name** | **str** | Name of the ingest pipeline. | [optional] 
**input_filter** | [**InputFilter**](InputFilter.md) |  | [optional] 
**input_keys** | [**InputKeys**](InputKeys.md) |  | [optional] 
**input_type** | [**InputTypes**](InputTypes.md) |  | [optional] 
**ingest_type** | [**IngestTypes**](IngestTypes.md) |  | [optional] 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 
**timer_on** | **bool** |  | [optional] 
**timer_interval** | **int** |  | [optional] 
**created_at** | **int** | Timestamp of the ingest pipeline creation. | [optional] 
**last_update** | **int** | Timestamp of the last update to the ingest pipeline. | [optional] 

## Example

```python
from openapi_client.models.ingest_pipeline_info import IngestPipelineInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IngestPipelineInfo from a JSON string
ingest_pipeline_info_instance = IngestPipelineInfo.from_json(json)
# print the JSON string representation of the object
print(IngestPipelineInfo.to_json())

# convert the object into a dict
ingest_pipeline_info_dict = ingest_pipeline_info_instance.to_dict()
# create an instance of IngestPipelineInfo from a dict
ingest_pipeline_info_from_dict = IngestPipelineInfo.from_dict(ingest_pipeline_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



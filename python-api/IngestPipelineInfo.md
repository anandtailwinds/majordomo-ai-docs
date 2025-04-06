# IngestPipelineInfo

Ingest Pipeline configuration and operation information that is returned in GET requests. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | The user who created the ingest pipeline. | 
**config** | [**IngestPipeline**](IngestPipeline.md) |  | 
**created_at** | **int** | Timestamp of the ingest pipeline creation. | 
**last_update** | **int** | Timestamp of the last update to the ingest pipeline. | 

## Example

```python
from majordomo_ai.models.ingest_pipeline_info import IngestPipelineInfo

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



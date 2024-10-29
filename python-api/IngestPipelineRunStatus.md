# IngestPipelineRunStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Status of the operation, true indicates success. | [optional] 
**error** | **str** | Any associated error message in case the status is false. | [optional] 

## Example

```python
from majordomoai.models.ingest_pipeline_run_status import IngestPipelineRunStatus

# TODO update the JSON string below
json = "{}"
# create an instance of IngestPipelineRunStatus from a JSON string
ingest_pipeline_run_status_instance = IngestPipelineRunStatus.from_json(json)
# print the JSON string representation of the object
print(IngestPipelineRunStatus.to_json())

# convert the object into a dict
ingest_pipeline_run_status_dict = ingest_pipeline_run_status_instance.to_dict()
# create an instance of IngestPipelineRunStatus from a dict
ingest_pipeline_run_status_from_dict = IngestPipelineRunStatus.from_dict(ingest_pipeline_run_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



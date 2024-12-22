# IngestPipelineRun

Run an ingest pipeline immediately.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this ingest pipeline belongs to. | 
**name** | **str** | Name of the ingest pipeline. | 
**data_store_name** | **str** | The name of the parent data store in which this ingest pipeline is present. | 

## Example

```python
from majordomo_ai.models.ingest_pipeline_run import IngestPipelineRun

# TODO update the JSON string below
json = "{}"
# create an instance of IngestPipelineRun from a JSON string
ingest_pipeline_run_instance = IngestPipelineRun.from_json(json)
# print the JSON string representation of the object
print(IngestPipelineRun.to_json())

# convert the object into a dict
ingest_pipeline_run_dict = ingest_pipeline_run_instance.to_dict()
# create an instance of IngestPipelineRun from a dict
ingest_pipeline_run_from_dict = IngestPipelineRun.from_dict(ingest_pipeline_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



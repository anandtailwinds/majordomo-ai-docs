# IngestPipelines


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingest_pipelines** | [**List[IngestPipelineInfo]**](IngestPipelineInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.ingest_pipelines import IngestPipelines

# TODO update the JSON string below
json = "{}"
# create an instance of IngestPipelines from a JSON string
ingest_pipelines_instance = IngestPipelines.from_json(json)
# print the JSON string representation of the object
print(IngestPipelines.to_json())

# convert the object into a dict
ingest_pipelines_dict = ingest_pipelines_instance.to_dict()
# create an instance of IngestPipelines from a dict
ingest_pipelines_from_dict = IngestPipelines.from_dict(ingest_pipelines_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



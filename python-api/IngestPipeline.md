# IngestPipeline

Describes the configurable attributes of an ingest pipeline that is to be  created or updated. The ingest pipeline is always a part of a parent data store. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this ingest pipeline belongs to. | 
**name** | **str** | Name of the ingest pipeline. | 
**data_store_name** | **str** | The name of the parent data store in which this ingest pipeline is present. | 
**input_filter** | **Dict[str, object]** | The set of parameters describing the source location and filters for accessing  the input files. The specific parameters vary depending on the type of source,  for example an S3 bucket will require a bucket name to be specified.  | 
**tool_name** | **str** | The name of the application profile from which to download. | [optional] 
**ingest_type** | [**IngestTypes**](IngestTypes.md) |  | 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 
**timer_on** | **bool** | Turn on the ingestion timer, once the timer expires the specified ingestion  action is performed.  | [optional] 
**timer_interval** | **int** | Specify the timer interval for the ingestion action in minutes. | [optional] 

## Example

```python
from majordomo_ai.models.ingest_pipeline import IngestPipeline

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



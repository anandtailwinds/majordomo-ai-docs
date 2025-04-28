# ChunkingStep

Parameters related to chunking operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingest_params** | [**IngestParams**](IngestParams.md) |  | 

## Example

```python
from majordomo_ai.models.chunking_step import ChunkingStep

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkingStep from a JSON string
chunking_step_instance = ChunkingStep.from_json(json)
# print the JSON string representation of the object
print(ChunkingStep.to_json())

# convert the object into a dict
chunking_step_dict = chunking_step_instance.to_dict()
# create an instance of ChunkingStep from a dict
chunking_step_from_dict = ChunkingStep.from_dict(chunking_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



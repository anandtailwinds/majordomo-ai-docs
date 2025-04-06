# DownloadAndParseFileStep

Download and parse file step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_type** | [**AppTypes**](AppTypes.md) |  | [optional] 
**input_filter** | **object** | Input information like file list. | 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 
**ingest_type** | [**IngestTypes**](IngestTypes.md) |  | 
**access_info** | **object** | Access information. | 

## Example

```python
from majordomo_ai.models.download_and_parse_file_step import DownloadAndParseFileStep

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadAndParseFileStep from a JSON string
download_and_parse_file_step_instance = DownloadAndParseFileStep.from_json(json)
# print the JSON string representation of the object
print(DownloadAndParseFileStep.to_json())

# convert the object into a dict
download_and_parse_file_step_dict = download_and_parse_file_step_instance.to_dict()
# create an instance of DownloadAndParseFileStep from a dict
download_and_parse_file_step_from_dict = DownloadAndParseFileStep.from_dict(download_and_parse_file_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



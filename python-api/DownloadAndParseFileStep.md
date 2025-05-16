# DownloadAndParseFileStep

Download and parse file step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_name** | **str** | The name of the application profile to access the content. | 
**input_filter** | **object** | Input filter specification for accessing the source content.  The set of parameters describing the source location and filters for accessing  the input files. The parameters for each type of data source is listed below.  &lt;b&gt;TOOL_TYPE_AWS_S3&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;TOOL_TYPE_AZURE_BLOB&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;TOOL_TYPE_WEBPAGE&lt;/b&gt;  url : The webpage URL.  | 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 
**ingest_type** | [**IngestTypes**](IngestTypes.md) |  | 

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



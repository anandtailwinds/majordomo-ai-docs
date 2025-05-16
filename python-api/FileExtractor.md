# FileExtractor

Mapping of file extractors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extractor_type** | [**FileExtractors**](FileExtractors.md) |  | 
**access_info** | **Dict[str, object]** | Parameters required for accessing the file extractor.  &lt;b&gt;LLAMAPARSE&lt;/b&gt;  api_key : The API Key required to access LlamaParse.  | [optional] 

## Example

```python
from majordomo_ai.models.file_extractor import FileExtractor

# TODO update the JSON string below
json = "{}"
# create an instance of FileExtractor from a JSON string
file_extractor_instance = FileExtractor.from_json(json)
# print the JSON string representation of the object
print(FileExtractor.to_json())

# convert the object into a dict
file_extractor_dict = file_extractor_instance.to_dict()
# create an instance of FileExtractor from a dict
file_extractor_from_dict = FileExtractor.from_dict(file_extractor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



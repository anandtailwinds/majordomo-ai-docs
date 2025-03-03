# LocalInput

The parameters used to access a webpage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_list** | **List[str]** | List of local files for ingestion. | 

## Example

```python
from majordomo_ai.models.local_input import LocalInput

# TODO update the JSON string below
json = "{}"
# create an instance of LocalInput from a JSON string
local_input_instance = LocalInput.from_json(json)
# print the JSON string representation of the object
print(LocalInput.to_json())

# convert the object into a dict
local_input_dict = local_input_instance.to_dict()
# create an instance of LocalInput from a dict
local_input_from_dict = LocalInput.from_dict(local_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



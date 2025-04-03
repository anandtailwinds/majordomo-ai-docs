# InferenceProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inference_profiles** | [**List[InferenceProfileInfo]**](InferenceProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.inference_profiles import InferenceProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfiles from a JSON string
inference_profiles_instance = InferenceProfiles.from_json(json)
# print the JSON string representation of the object
print(InferenceProfiles.to_json())

# convert the object into a dict
inference_profiles_dict = inference_profiles_instance.to_dict()
# create an instance of InferenceProfiles from a dict
inference_profiles_from_dict = InferenceProfiles.from_dict(inference_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



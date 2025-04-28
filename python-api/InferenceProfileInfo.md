# InferenceProfileInfo

This contains information specific to an inference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**InferenceProfile**](InferenceProfile.md) |  | 
**last_command** | [**DeploymentCommands**](DeploymentCommands.md) |  | 
**current_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | 
**execution_success** | **int** | The level of execution success in last run, updated after each message specifying the progress level from worker is received.  | 
**endpoint_info** | **Dict[str, object]** | Endpoint information in case it is dynamically determined. | [optional] 
**logs** | **List[str]** | The logs from the deployment. | [optional] 
**created_by** | **str** | The username who created this model profile | 
**created_at** | **int** | Timestamp of the model profile creation | 
**last_update** | **int** | Timestamp of the last update to the model profile | 

## Example

```python
from majordomo_ai.models.inference_profile_info import InferenceProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfileInfo from a JSON string
inference_profile_info_instance = InferenceProfileInfo.from_json(json)
# print the JSON string representation of the object
print(InferenceProfileInfo.to_json())

# convert the object into a dict
inference_profile_info_dict = inference_profile_info_instance.to_dict()
# create an instance of InferenceProfileInfo from a dict
inference_profile_info_from_dict = InferenceProfileInfo.from_dict(inference_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InferenceProfileCommand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace to run the command in. | 
**name** | **str** | The name of the inference profile. | 
**command** | [**DeploymentCommands**](DeploymentCommands.md) |  | 
**params** | **Dict[str, object]** | The parameters for the command, depends on each command. | [optional] 

## Example

```python
from majordomo_ai.models.inference_profile_command import InferenceProfileCommand

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfileCommand from a JSON string
inference_profile_command_instance = InferenceProfileCommand.from_json(json)
# print the JSON string representation of the object
print(InferenceProfileCommand.to_json())

# convert the object into a dict
inference_profile_command_dict = inference_profile_command_instance.to_dict()
# create an instance of InferenceProfileCommand from a dict
inference_profile_command_from_dict = InferenceProfileCommand.from_dict(inference_profile_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



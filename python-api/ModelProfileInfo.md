# ModelProfileInfo

Model profile Information

## Properties

| Name            | Type                                | Description                                       | Notes |
| --------------- | ----------------------------------- | ------------------------------------------------- | ----- |
| **config**      | [**ModelProfile**](ModelProfile.md) |                                                   |       |
| **created_by**  | **str**                             | The username who created this model profile       |       |
| **created_at**  | **int**                             | Timestamp of the model profile creation           |       |
| **last_update** | **int**                             | Timestamp of the last update to the model profile |       |

## Example

```python
from majordomo_ai.models.model_profile_info import ModelProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProfileInfo from a JSON string
model_profile_info_instance = ModelProfileInfo.from_json(json)
# print the JSON string representation of the object
print(ModelProfileInfo.to_json())

# convert the object into a dict
model_profile_info_dict = model_profile_info_instance.to_dict()
# create an instance of ModelProfileInfo from a dict
model_profile_info_from_dict = ModelProfileInfo.from_dict(model_profile_info_dict)
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

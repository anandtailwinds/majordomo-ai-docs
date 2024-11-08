# UserInfo

Information pertaining to users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | The user name. | [optional] 
**first_name** | **str** | The first name of the user. | [optional] 
**last_name** | **str** | The last name of the user. | [optional] 
**md_api_key** | **str** | The Majordomo API key allocated to the user. | [optional] 

## Example

```python
from majordomo_ai.models.user_info import UserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserInfo from a JSON string
user_info_instance = UserInfo.from_json(json)
# print the JSON string representation of the object
print(UserInfo.to_json())

# convert the object into a dict
user_info_dict = user_info_instance.to_dict()
# create an instance of UserInfo from a dict
user_info_from_dict = UserInfo.from_dict(user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConnectorProfileInfo

Connectorlication profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connectorlication profile. | 
**workspace** | **str** | The workspace that contains the model profile. | 
**connector_type** | [**ConnectorTypes**](ConnectorTypes.md) |  | 
**access_info** | **Dict[str, object]** | Credentials for connectorlication. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**created_by** | **str** | The username who created this model profile | [optional] 
**created_at** | **int** | Timestamp of the model profile creation | [optional] 
**last_update** | **int** | Timestamp of the last update to the model profile | [optional] 

## Example

```python
from majordomo_ai.models.connector_profile_info import ConnectorProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorProfileInfo from a JSON string
connector_profile_info_instance = ConnectorProfileInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectorProfileInfo.to_json())

# convert the object into a dict
connector_profile_info_dict = connector_profile_info_instance.to_dict()
# create an instance of ConnectorProfileInfo from a dict
connector_profile_info_from_dict = ConnectorProfileInfo.from_dict(connector_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



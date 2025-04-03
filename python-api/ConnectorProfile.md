# ConnectorProfile

Connectorlication Profile Information. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connectorlication profile. | 
**workspace** | **str** | The workspace that contains the model profile. | 
**connector_type** | [**ConnectorTypes**](ConnectorTypes.md) |  | 
**access_info** | **Dict[str, object]** | Credentials for connectorlication. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.connector_profile import ConnectorProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorProfile from a JSON string
connector_profile_instance = ConnectorProfile.from_json(json)
# print the JSON string representation of the object
print(ConnectorProfile.to_json())

# convert the object into a dict
connector_profile_dict = connector_profile_instance.to_dict()
# create an instance of ConnectorProfile from a dict
connector_profile_from_dict = ConnectorProfile.from_dict(connector_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



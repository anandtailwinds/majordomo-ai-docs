# ConnectorProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_profiles** | [**List[ConnectorProfileInfo]**](ConnectorProfileInfo.md) |  | [optional] 
**shared_profiles** | [**List[ConnectorProfileInfo]**](ConnectorProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.connector_profiles import ConnectorProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorProfiles from a JSON string
connector_profiles_instance = ConnectorProfiles.from_json(json)
# print the JSON string representation of the object
print(ConnectorProfiles.to_json())

# convert the object into a dict
connector_profiles_dict = connector_profiles_instance.to_dict()
# create an instance of ConnectorProfiles from a dict
connector_profiles_from_dict = ConnectorProfiles.from_dict(connector_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DataStore

This is the data store specification that is used for creating and updating a data store. Data stores can be of different types including a vector database. Some parameters are mandatory based on the type of database chosen and it will be indicated along with the parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace in which the data store is present. | 
**name** | **str** | Name of the data store. | 
**store_type** | [**DataStoreTypes**](DataStoreTypes.md) |  | 
**app_profile_name** | **str** | Name of the application profile. | 
**contents** | **str** | Description of the data store. This can be optionally included in queries. | [optional] 
**instance_info** | **Dict[str, object]** | Information about the vector data store. | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.data_store import DataStore

# TODO update the JSON string below
json = "{}"
# create an instance of DataStore from a JSON string
data_store_instance = DataStore.from_json(json)
# print the JSON string representation of the object
print(DataStore.to_json())

# convert the object into a dict
data_store_dict = data_store_instance.to_dict()
# create an instance of DataStore from a dict
data_store_from_dict = DataStore.from_dict(data_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



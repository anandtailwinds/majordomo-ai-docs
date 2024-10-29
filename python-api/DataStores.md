# DataStores


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_stores** | [**List[DataStoreInfo]**](DataStoreInfo.md) |  | [optional] 

## Example

```python
from majordomoai.models.data_stores import DataStores

# TODO update the JSON string below
json = "{}"
# create an instance of DataStores from a JSON string
data_stores_instance = DataStores.from_json(json)
# print the JSON string representation of the object
print(DataStores.to_json())

# convert the object into a dict
data_stores_dict = data_stores_instance.to_dict()
# create an instance of DataStores from a dict
data_stores_from_dict = DataStores.from_dict(data_stores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



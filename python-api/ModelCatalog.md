# ModelCatalog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_info_list** | [**List[ModelInfo]**](ModelInfo.md) |  | [optional] 
**shared_model_list** | [**List[ModelInfo]**](ModelInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.model_catalog import ModelCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of ModelCatalog from a JSON string
model_catalog_instance = ModelCatalog.from_json(json)
# print the JSON string representation of the object
print(ModelCatalog.to_json())

# convert the object into a dict
model_catalog_dict = model_catalog_instance.to_dict()
# create an instance of ModelCatalog from a dict
model_catalog_from_dict = ModelCatalog.from_dict(model_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PodList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pod_list** | **List[Dict[str, object]]** | The information about a specific pod. | 

## Example

```python
from majordomo_ai.models.pod_list import PodList

# TODO update the JSON string below
json = "{}"
# create an instance of PodList from a JSON string
pod_list_instance = PodList.from_json(json)
# print the JSON string representation of the object
print(PodList.to_json())

# convert the object into a dict
pod_list_dict = pod_list_instance.to_dict()
# create an instance of PodList from a dict
pod_list_from_dict = PodList.from_dict(pod_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



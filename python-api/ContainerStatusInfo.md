# ContainerStatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the container. | 
**image_name** | **str** | The name of the container image. | 
**started_at** | **datetime** | The time at which the container was started. | [optional] 
**status** | **str** | The current status of the container. | 

## Example

```python
from majordomo_ai.models.container_status_info import ContainerStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerStatusInfo from a JSON string
container_status_info_instance = ContainerStatusInfo.from_json(json)
# print the JSON string representation of the object
print(ContainerStatusInfo.to_json())

# convert the object into a dict
container_status_info_dict = container_status_info_instance.to_dict()
# create an instance of ContainerStatusInfo from a dict
container_status_info_from_dict = ContainerStatusInfo.from_dict(container_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



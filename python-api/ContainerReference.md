# ContainerReference

compute profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | Container image path (e.g., &#x60;docker.io/library/image:tag&#x60;, &#x60;123456789012.dkr.ecr.us-east-1.amazonaws.com/model:latest&#x60;) | [optional] 
**registry_name** | **str** | Name of configured registry profile | [optional] 

## Example

```python
from majordomo_ai.models.container_reference import ContainerReference

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerReference from a JSON string
container_reference_instance = ContainerReference.from_json(json)
# print the JSON string representation of the object
print(ContainerReference.to_json())

# convert the object into a dict
container_reference_dict = container_reference_instance.to_dict()
# create an instance of ContainerReference from a dict
container_reference_from_dict = ContainerReference.from_dict(container_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



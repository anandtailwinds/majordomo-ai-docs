# Worker

The worker node that is used to connect the user network to the director.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the worker. | 

## Example

```python
from majordomo_ai.models.worker import Worker

# TODO update the JSON string below
json = "{}"
# create an instance of Worker from a JSON string
worker_instance = Worker.from_json(json)
# print the JSON string representation of the object
print(Worker.to_json())

# convert the object into a dict
worker_dict = worker_instance.to_dict()
# create an instance of Worker from a dict
worker_from_dict = Worker.from_dict(worker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



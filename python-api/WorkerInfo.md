# WorkerInfo

Worker configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the worker. | 
**worker_id** | **str** | The unique identifier that is automatically assigned to the worker. | 
**access_key** | **str** | The client secret that is used to authenticate the worker. This needs to be provided when a worker tries to join Majordomo director. | 
**client_status** | **bool** | Indicates whether the worker is currently connected to the director. | 
**client_url** | **str** | The registered endpoint for the worker. | [optional] 
**chat_worker** | **bool** | The worker is used as a means to access a chat server. | [optional] 
**created_at** | **int** | Timestamp of the worker creation. | 
**last_update** | **int** | Timestamp of the last update to the worker. | 

## Example

```python
from majordomo_ai.models.worker_info import WorkerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerInfo from a JSON string
worker_info_instance = WorkerInfo.from_json(json)
# print the JSON string representation of the object
print(WorkerInfo.to_json())

# convert the object into a dict
worker_info_dict = worker_info_instance.to_dict()
# create an instance of WorkerInfo from a dict
worker_info_from_dict = WorkerInfo.from_dict(worker_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



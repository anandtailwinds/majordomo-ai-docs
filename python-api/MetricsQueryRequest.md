# MetricsQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The name of the workspace | 
**metrics_type** | [**MetricType**](MetricType.md) |  | 
**metrics_filter** | **Dict[str, object]** | Additional parameters for filtering the specific target resource. | 
**start_time** | **datetime** | Start time of the query range | 
**end_time** | **datetime** | End time of the query range | 
**step** | **str** | Step interval (e.g., 30s, 1m) | 
**metrics** | **List[str]** | List of metrics to query | [optional] 

## Example

```python
from majordomo_ai.models.metrics_query_request import MetricsQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsQueryRequest from a JSON string
metrics_query_request_instance = MetricsQueryRequest.from_json(json)
# print the JSON string representation of the object
print(MetricsQueryRequest.to_json())

# convert the object into a dict
metrics_query_request_dict = metrics_query_request_instance.to_dict()
# create an instance of MetricsQueryRequest from a dict
metrics_query_request_from_dict = MetricsQueryRequest.from_dict(metrics_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



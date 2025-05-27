# NodeMetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node** | **str** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | 
**step** | **str** |  | 
**metrics** | [**Dict[str, MetricResult]**](MetricResult.md) |  | 

## Example

```python
from majordomo_ai.models.node_metrics_response import NodeMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NodeMetricsResponse from a JSON string
node_metrics_response_instance = NodeMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(NodeMetricsResponse.to_json())

# convert the object into a dict
node_metrics_response_dict = node_metrics_response_instance.to_dict()
# create an instance of NodeMetricsResponse from a dict
node_metrics_response_from_dict = NodeMetricsResponse.from_dict(node_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



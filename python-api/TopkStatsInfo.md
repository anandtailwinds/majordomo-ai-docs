# TopkStatsInfo

The statistics related to top models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the model for which the statistic is generated. | 
**tokens** | **int** | The total number of tokens used by the model. | 

## Example

```python
from majordomo_ai.models.topk_stats_info import TopkStatsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TopkStatsInfo from a JSON string
topk_stats_info_instance = TopkStatsInfo.from_json(json)
# print the JSON string representation of the object
print(TopkStatsInfo.to_json())

# convert the object into a dict
topk_stats_info_dict = topk_stats_info_instance.to_dict()
# create an instance of TopkStatsInfo from a dict
topk_stats_info_from_dict = TopkStatsInfo.from_dict(topk_stats_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



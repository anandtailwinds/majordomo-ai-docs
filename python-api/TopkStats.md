# TopkStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace in which the statistic was genereated. | 
**user_name** | **str** | The user for which this statistic was generated. | 
**embed_model_stats** | [**List[TopkStatsInfo]**](TopkStatsInfo.md) |  | [optional] 
**llm_model_stats** | [**List[TopkStatsInfo]**](TopkStatsInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.topk_stats import TopkStats

# TODO update the JSON string below
json = "{}"
# create an instance of TopkStats from a JSON string
topk_stats_instance = TopkStats.from_json(json)
# print the JSON string representation of the object
print(TopkStats.to_json())

# convert the object into a dict
topk_stats_dict = topk_stats_instance.to_dict()
# create an instance of TopkStats from a dict
topk_stats_from_dict = TopkStats.from_dict(topk_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



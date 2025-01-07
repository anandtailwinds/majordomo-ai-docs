# AggregateStatsInfo

The aggregated token statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embed_tokens** | **int** | The total number of tokens used for generating the embedding. | [optional] 
**prompt_tokens** | **int** | The total number of tokens used for the prompt. | [optional] 
**completion_tokens** | **int** | The total number of tokens used for the query completion. | [optional] 
**total_files** | **int** | The total files consumed incase of an ingest operation. | [optional] 
**total_size** | **int** | The total size of content consumed incase of an ingest operation. | [optional] 
**timestamp** | **str** | The timestamp of the generated log message. | 

## Example

```python
from majordomo_ai.models.aggregate_stats_info import AggregateStatsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateStatsInfo from a JSON string
aggregate_stats_info_instance = AggregateStatsInfo.from_json(json)
# print the JSON string representation of the object
print(AggregateStatsInfo.to_json())

# convert the object into a dict
aggregate_stats_info_dict = aggregate_stats_info_instance.to_dict()
# create an instance of AggregateStatsInfo from a dict
aggregate_stats_info_from_dict = AggregateStatsInfo.from_dict(aggregate_stats_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



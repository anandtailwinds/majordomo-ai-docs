# TokenStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_stats** | [**List[TokenStatsInfo]**](TokenStatsInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.token_stats import TokenStats

# TODO update the JSON string below
json = "{}"
# create an instance of TokenStats from a JSON string
token_stats_instance = TokenStats.from_json(json)
# print the JSON string representation of the object
print(TokenStats.to_json())

# convert the object into a dict
token_stats_dict = token_stats_instance.to_dict()
# create an instance of TokenStats from a dict
token_stats_from_dict = TokenStats.from_dict(token_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



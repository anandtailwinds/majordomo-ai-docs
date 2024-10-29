# TokenStatsInfo

The various logs that are generated filtered based on user, workspace and timeframes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspce in which the log was genereated. | 
**user_name** | **str** | The user for which this log was generated. | 
**embed_model** | **str** | The embedding model used in the operation. | [optional] 
**embed_tokens** | **int** | The total number of tokens used for generating the embedding. | [optional] 
**llm_model** | **str** | The LLM model used in the operation. | [optional] 
**prompt_tokens** | **int** | The total number of tokens used for the prompt. | [optional] 
**completion_tokens** | **int** | The total number of tokens used for the query completion. | [optional] 
**total_files** | **int** | The total files consumed incase of an ingest operation. | [optional] 
**total_size** | **int** | The total size of content consumed incase of an ingest operation. | [optional] 
**latency** | **float** | The time taken to perform the underlying RAG operation. | [optional] 
**timestamp** | **int** | The timestamp of the generated log message. | 

## Example

```python
from majordomoai.models.token_stats_info import TokenStatsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TokenStatsInfo from a JSON string
token_stats_info_instance = TokenStatsInfo.from_json(json)
# print the JSON string representation of the object
print(TokenStatsInfo.to_json())

# convert the object into a dict
token_stats_info_dict = token_stats_info_instance.to_dict()
# create an instance of TokenStatsInfo from a dict
token_stats_info_from_dict = TokenStatsInfo.from_dict(token_stats_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



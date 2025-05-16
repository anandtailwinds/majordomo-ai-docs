# DataStoreIngest

The ingest parameters that are used for performing an ingest operation using a data store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace the data store belongs to. | 
**data_store_name** | **str** | Name of the data store | 
**tool_name** | **str** | Name of the application profile | [optional] 
**input_filter** | **Dict[str, object]** | The set of parameters describing the source location and filters for accessing  the input files. The parameters for each type of data source is listed below.  &lt;b&gt;APP_TYPE_AWS_S3&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;APP_TYPE_AZURE_BLOB&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;APP_TYPE_WEBPAGE&lt;/b&gt;  url : The webpage URL.  | 
**ingest_type** | [**IngestTypes**](IngestTypes.md) |  | 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.data_store_ingest import DataStoreIngest

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreIngest from a JSON string
data_store_ingest_instance = DataStoreIngest.from_json(json)
# print the JSON string representation of the object
print(DataStoreIngest.to_json())

# convert the object into a dict
data_store_ingest_dict = data_store_ingest_instance.to_dict()
# create an instance of DataStoreIngest from a dict
data_store_ingest_from_dict = DataStoreIngest.from_dict(data_store_ingest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



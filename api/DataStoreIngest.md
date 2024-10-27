# DataStoreIngest

Data store ingest parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**Credentials**](Credentials.md) |  | 
**data_store** | **str** | Name of the data store | 
**input_type** | **str** | The location of the input file(s) | 
**input_filter** | [**InputFilter**](InputFilter.md) |  | 
**input_keys** | [**InputKeys**](InputKeys.md) |  | [optional] 
**ingest_type** | **str** | The type of ingestion required | 
**ingest_params** | [**IngestParams**](IngestParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_store_ingest import DataStoreIngest

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



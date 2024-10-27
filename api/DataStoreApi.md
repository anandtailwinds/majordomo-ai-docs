# openapi_client.DataStoreApi

All URIs are relative to *http://20.40.53.225:25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_store**](DataStoreApi.md#data_store) | **PUT** /data_store | Data Store
[**data_store_0**](DataStoreApi.md#data_store_0) | **POST** /data_store | Data Store
[**data_store_ingest**](DataStoreApi.md#data_store_ingest) | **POST** /data_store_ingest | Ingest content into a data store
[**query_data_store**](DataStoreApi.md#query_data_store) | **POST** /data_store_query | Query a data store


# **data_store**
> DataStore data_store(data_store)

Data Store

Update an existing data store.

### Example


```python
import openapi_client
from openapi_client.models.data_store import DataStore
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://20.40.53.225:25001
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://20.40.53.225:25001"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataStoreApi(api_client)
    data_store = openapi_client.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.data_store(data_store)
        print("The response of DataStoreApi->data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreApi->data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStore**](DataStore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_0**
> DataStore data_store_0(data_store)

Data Store

Create a data store

### Example


```python
import openapi_client
from openapi_client.models.data_store import DataStore
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://20.40.53.225:25001
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://20.40.53.225:25001"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataStoreApi(api_client)
    data_store = openapi_client.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.data_store_0(data_store)
        print("The response of DataStoreApi->data_store_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreApi->data_store_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStore**](DataStore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_ingest**
> IngestResponse data_store_ingest(data_store_ingest)

Ingest content into a data store

Ingest files into any type of data store

### Example


```python
import openapi_client
from openapi_client.models.data_store_ingest import DataStoreIngest
from openapi_client.models.ingest_response import IngestResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://20.40.53.225:25001
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://20.40.53.225:25001"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataStoreApi(api_client)
    data_store_ingest = openapi_client.DataStoreIngest() # DataStoreIngest | 

    try:
        # Ingest content into a data store
        api_response = api_instance.data_store_ingest(data_store_ingest)
        print("The response of DataStoreApi->data_store_ingest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreApi->data_store_ingest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store_ingest** | [**DataStoreIngest**](DataStoreIngest.md)|  | 

### Return type

[**IngestResponse**](IngestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_data_store**
> QueryResponse query_data_store(data_store_query)

Query a data store

Query the contents of a data store

### Example


```python
import openapi_client
from openapi_client.models.data_store_query import DataStoreQuery
from openapi_client.models.query_response import QueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://20.40.53.225:25001
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://20.40.53.225:25001"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataStoreApi(api_client)
    data_store_query = openapi_client.DataStoreQuery() # DataStoreQuery | 

    try:
        # Query a data store
        api_response = api_instance.query_data_store(data_store_query)
        print("The response of DataStoreApi->query_data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataStoreApi->query_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store_query** | [**DataStoreQuery**](DataStoreQuery.md)|  | 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


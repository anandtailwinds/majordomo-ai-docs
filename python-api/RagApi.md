# majordomoai.RagApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_data_store**](RagApi.md#create_data_store) | **POST** /data_stores | Data Store
[**create_ingest_pipeline**](RagApi.md#create_ingest_pipeline) | **POST** /ingest_pipelines | Ingest Pipeline
[**create_query_pipeline**](RagApi.md#create_query_pipeline) | **POST** /query_pipelines | Query Pipeline
[**data_store_ingest**](RagApi.md#data_store_ingest) | **POST** /data_store_ingest | Ingest content into a data store
[**data_store_query**](RagApi.md#data_store_query) | **POST** /data_store_query | Query a data store
[**delete_data_store**](RagApi.md#delete_data_store) | **DELETE** /data_stores | Data Store
[**delete_ingest_pipeline**](RagApi.md#delete_ingest_pipeline) | **DELETE** /ingest_pipelines | Ingest Pipeline
[**delete_query_pipeline**](RagApi.md#delete_query_pipeline) | **DELETE** /query_pipelines | Query Pipeline
[**get_data_store**](RagApi.md#get_data_store) | **GET** /data_stores | Data Store Get
[**get_ingest_pipelines**](RagApi.md#get_ingest_pipelines) | **GET** /ingest_pipelines | Ingest Pipeline Get
[**get_query_pipelines**](RagApi.md#get_query_pipelines) | **GET** /query_pipelines | Query Pipeline Get
[**run_ingest_pipeline**](RagApi.md#run_ingest_pipeline) | **POST** /ingest_pipeline_run | Ingest Pipeline Run
[**run_query_pipeline**](RagApi.md#run_query_pipeline) | **POST** /query_pipeline_run | Query Pipeline Run
[**update_data_store**](RagApi.md#update_data_store) | **PUT** /data_stores | Data Store
[**update_ingest_pipeline**](RagApi.md#update_ingest_pipeline) | **PUT** /ingest_pipelines | Ingest Pipeline
[**update_query_pipeline**](RagApi.md#update_query_pipeline) | **PUT** /query_pipelines | Query Pipeline


# **create_data_store**
> DataStores create_data_store(account, data_store)

Data Store

Create a data store

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.data_store import DataStore
from majordomoai.models.data_stores import DataStores
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    account = 56 # int | Account Identifier
    data_store = majordomoai.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.create_data_store(account, data_store)
        print("The response of RagApi->create_data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->create_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **int**| Account Identifier | 
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStores**](DataStores.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_ingest_pipeline**
> IngestPipelineInfo create_ingest_pipeline(ingest_pipeline)

Ingest Pipeline

Create a ingest pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.ingest_pipeline import IngestPipeline
from majordomoai.models.ingest_pipeline_info import IngestPipelineInfo
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    ingest_pipeline = majordomoai.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_response = api_instance.create_ingest_pipeline(ingest_pipeline)
        print("The response of RagApi->create_ingest_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->create_ingest_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingest_pipeline** | [**IngestPipeline**](IngestPipeline.md)|  | 

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_query_pipeline**
> QueryPipelineInfo create_query_pipeline(query_pipeline)

Query Pipeline

Create a query pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.query_pipeline import QueryPipeline
from majordomoai.models.query_pipeline_info import QueryPipelineInfo
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    query_pipeline = majordomoai.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_response = api_instance.create_query_pipeline(query_pipeline)
        print("The response of RagApi->create_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->create_query_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_pipeline** | [**QueryPipeline**](QueryPipeline.md)|  | 

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.data_store_ingest import DataStoreIngest
from majordomoai.models.ingest_response import IngestResponse
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    data_store_ingest = majordomoai.DataStoreIngest() # DataStoreIngest | 

    try:
        # Ingest content into a data store
        api_response = api_instance.data_store_ingest(data_store_ingest)
        print("The response of RagApi->data_store_ingest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->data_store_ingest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store_ingest** | [**DataStoreIngest**](DataStoreIngest.md)|  | 

### Return type

[**IngestResponse**](IngestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_query**
> QueryResponse data_store_query(data_store_query)

Query a data store

Query the contents of a data store

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.data_store_query import DataStoreQuery
from majordomoai.models.query_response import QueryResponse
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    data_store_query = majordomoai.DataStoreQuery() # DataStoreQuery | 

    try:
        # Query a data store
        api_response = api_instance.data_store_query(data_store_query)
        print("The response of RagApi->data_store_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->data_store_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store_query** | [**DataStoreQuery**](DataStoreQuery.md)|  | 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_data_store**
> delete_data_store(workspace, name)

Data Store

Delete an existing data store.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace the data store exists
    name = 'name_example' # str | The name of the data store to be deleted.

    try:
        # Data Store
        api_instance.delete_data_store(workspace, name)
    except Exception as e:
        print("Exception when calling RagApi->delete_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace the data store exists | 
 **name** | **str**| The name of the data store to be deleted. | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ingest_pipeline**
> delete_ingest_pipeline(workspace, data_store_name, name)

Ingest Pipeline

Delete an existing ingest pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace the ingest pipeline exists
    data_store_name = 'data_store_name_example' # str | The name of the data store in which the ingest pipeline is present.
    name = 'name_example' # str | The name of the ingest pipeline to be deleted.

    try:
        # Ingest Pipeline
        api_instance.delete_ingest_pipeline(workspace, data_store_name, name)
    except Exception as e:
        print("Exception when calling RagApi->delete_ingest_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace the ingest pipeline exists | 
 **data_store_name** | **str**| The name of the data store in which the ingest pipeline is present. | 
 **name** | **str**| The name of the ingest pipeline to be deleted. | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_query_pipeline**
> delete_query_pipeline(name, workspace)

Query Pipeline

Delete an existing query pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    name = 'name_example' # str | The name of the query pipeline to delete.
    workspace = 'workspace_example' # str | The workspace in which the query pipeline is present.

    try:
        # Query Pipeline
        api_instance.delete_query_pipeline(name, workspace)
    except Exception as e:
        print("Exception when calling RagApi->delete_query_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the query pipeline to delete. | 
 **workspace** | **str**| The workspace in which the query pipeline is present. | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_data_store**
> DataStores get_data_store(name=name, workspace=workspace)

Data Store Get

Get a list of existing data stores.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.data_stores import DataStores
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    name = 56 # int | The name of the data store to retrieve. (optional)
    workspace = 56 # int | The workspace to search the data store, mandatory if name is provided. (optional)

    try:
        # Data Store Get
        api_response = api_instance.get_data_store(name=name, workspace=workspace)
        print("The response of RagApi->get_data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->get_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **int**| The name of the data store to retrieve. | [optional] 
 **workspace** | **int**| The workspace to search the data store, mandatory if name is provided. | [optional] 

### Return type

[**DataStores**](DataStores.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ingest_pipelines**
> IngestPipelines get_ingest_pipelines(name=name, workspace=workspace)

Ingest Pipeline Get

Get a list of existing ingest pipelines.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.ingest_pipelines import IngestPipelines
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    name = 56 # int | The name of the ingest pipeline to retrieve. (optional)
    workspace = 56 # int | The workspace to search the ingest pipeline, mandatory if name is provided. (optional)

    try:
        # Ingest Pipeline Get
        api_response = api_instance.get_ingest_pipelines(name=name, workspace=workspace)
        print("The response of RagApi->get_ingest_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->get_ingest_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **int**| The name of the ingest pipeline to retrieve. | [optional] 
 **workspace** | **int**| The workspace to search the ingest pipeline, mandatory if name is provided. | [optional] 

### Return type

[**IngestPipelines**](IngestPipelines.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_query_pipelines**
> QueryPipelines get_query_pipelines(name=name, workspace=workspace)

Query Pipeline Get

Get a list of existing query pipelines.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.query_pipelines import QueryPipelines
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    name = 'name_example' # str | The name of the query pipeline to retrieve. (optional)
    workspace = 'workspace_example' # str | The workspace to search the query pipeline, mandatory if name is provided. (optional)

    try:
        # Query Pipeline Get
        api_response = api_instance.get_query_pipelines(name=name, workspace=workspace)
        print("The response of RagApi->get_query_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->get_query_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the query pipeline to retrieve. | [optional] 
 **workspace** | **str**| The workspace to search the query pipeline, mandatory if name is provided. | [optional] 

### Return type

[**QueryPipelines**](QueryPipelines.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_ingest_pipeline**
> IngestPipelineRunStatus run_ingest_pipeline(ingest_pipeline_run)

Ingest Pipeline Run

Run an already defined ingest pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.ingest_pipeline_run import IngestPipelineRun
from majordomoai.models.ingest_pipeline_run_status import IngestPipelineRunStatus
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    ingest_pipeline_run = majordomoai.IngestPipelineRun() # IngestPipelineRun | 

    try:
        # Ingest Pipeline Run
        api_response = api_instance.run_ingest_pipeline(ingest_pipeline_run)
        print("The response of RagApi->run_ingest_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->run_ingest_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingest_pipeline_run** | [**IngestPipelineRun**](IngestPipelineRun.md)|  | 

### Return type

[**IngestPipelineRunStatus**](IngestPipelineRunStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_query_pipeline**
> QueryResponse run_query_pipeline(query_pipeline_run)

Query Pipeline Run

Run an already defined query pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.query_pipeline_run import QueryPipelineRun
from majordomoai.models.query_response import QueryResponse
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    query_pipeline_run = majordomoai.QueryPipelineRun() # QueryPipelineRun | 

    try:
        # Query Pipeline Run
        api_response = api_instance.run_query_pipeline(query_pipeline_run)
        print("The response of RagApi->run_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->run_query_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_pipeline_run** | [**QueryPipelineRun**](QueryPipelineRun.md)|  | 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_data_store**
> DataStore update_data_store(account, data_store)

Data Store

Update an existing data store.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.data_store import DataStore
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    account = 56 # int | Account Identifier
    data_store = majordomoai.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.update_data_store(account, data_store)
        print("The response of RagApi->update_data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->update_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **int**| Account Identifier | 
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStore**](DataStore.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_ingest_pipeline**
> IngestPipelineInfo update_ingest_pipeline(ingest_pipeline)

Ingest Pipeline

Update an existing ingest pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.ingest_pipeline import IngestPipeline
from majordomoai.models.ingest_pipeline_info import IngestPipelineInfo
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    ingest_pipeline = majordomoai.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_response = api_instance.update_ingest_pipeline(ingest_pipeline)
        print("The response of RagApi->update_ingest_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->update_ingest_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingest_pipeline** | [**IngestPipeline**](IngestPipeline.md)|  | 

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_query_pipeline**
> QueryPipelineInfo update_query_pipeline(query_pipeline)

Query Pipeline

Update an existing query pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.query_pipeline import QueryPipeline
from majordomoai.models.query_pipeline_info import QueryPipelineInfo
from majordomoai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomoai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomoai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomoai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomoai.RagApi(api_client)
    query_pipeline = majordomoai.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_response = api_instance.update_query_pipeline(query_pipeline)
        print("The response of RagApi->update_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->update_query_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_pipeline** | [**QueryPipeline**](QueryPipeline.md)|  | 

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


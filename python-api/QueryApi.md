# majordomo_ai.QueryApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_query_pipeline**](QueryApi.md#create_query_pipeline) | **POST** /query_pipelines | Query Pipeline
[**data_store_query**](QueryApi.md#data_store_query) | **POST** /data_store_query | Query a data store
[**delete_query_pipelines**](QueryApi.md#delete_query_pipelines) | **DELETE** /query_pipelines | Query Pipeline
[**get_query_pipelines**](QueryApi.md#get_query_pipelines) | **GET** /query_pipelines | Query Pipeline Get
[**run_query_pipeline**](QueryApi.md#run_query_pipeline) | **POST** /query_pipeline_run/workspace/{workspace}/name/{name}/query/{query_string} | Query Pipeline Run
[**update_query_pipeline**](QueryApi.md#update_query_pipeline) | **PUT** /query_pipelines | Query Pipeline


# **create_query_pipeline**
> QueryPipelineInfo create_query_pipeline(query_pipeline)

Query Pipeline

Create a query pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.query_pipeline import QueryPipeline
from majordomo_ai.models.query_pipeline_info import QueryPipelineInfo
from majordomo_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomo_ai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomo_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomo_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomo_ai.QueryApi(api_client)
    query_pipeline = majordomo_ai.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_response = api_instance.create_query_pipeline(query_pipeline)
        print("The response of QueryApi->create_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->create_query_pipeline: %s\n" % e)
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
**422** | Invalid input. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_query**
> QueryResponse data_store_query(data_store_query)

Query a data store

Query the contents of a data store

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.data_store_query import DataStoreQuery
from majordomo_ai.models.query_response import QueryResponse
from majordomo_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomo_ai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomo_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomo_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomo_ai.QueryApi(api_client)
    data_store_query = majordomo_ai.DataStoreQuery() # DataStoreQuery | 

    try:
        # Query a data store
        api_response = api_instance.data_store_query(data_store_query)
        print("The response of QueryApi->data_store_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->data_store_query: %s\n" % e)
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

# **delete_query_pipelines**
> DeleteResponse delete_query_pipelines(workspace, name=name)

Query Pipeline

Delete an existing query pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.delete_response import DeleteResponse
from majordomo_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomo_ai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomo_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomo_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomo_ai.QueryApi(api_client)
    workspace = 'workspace_example' # str | The workspace in which the query pipeline is present.
    name = 'name_example' # str | The name of the query pipeline to delete. If no name is provided, all query pipelines in the workspace are deleted. (optional)

    try:
        # Query Pipeline
        api_response = api_instance.delete_query_pipelines(workspace, name=name)
        print("The response of QueryApi->delete_query_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->delete_query_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace in which the query pipeline is present. | 
 **name** | **str**| The name of the query pipeline to delete. If no name is provided, all query pipelines in the workspace are deleted. | [optional] 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input. |  -  |
**401** | Unauthorized access. This is most likely because the access token has expired or the user API key is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_query_pipelines**
> QueryPipelines get_query_pipelines(workspace=workspace, name=name)

Query Pipeline Get

Get a list of existing query pipelines.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.query_pipelines import QueryPipelines
from majordomo_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomo_ai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomo_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomo_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomo_ai.QueryApi(api_client)
    workspace = 'workspace_example' # str | The workspace to search the query pipeline, mandatory if name is provided. (optional)
    name = 'name_example' # str | The name of the query pipeline to retrieve. (optional)

    try:
        # Query Pipeline Get
        api_response = api_instance.get_query_pipelines(workspace=workspace, name=name)
        print("The response of QueryApi->get_query_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->get_query_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace to search the query pipeline, mandatory if name is provided. | [optional] 
 **name** | **str**| The name of the query pipeline to retrieve. | [optional] 

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

# **run_query_pipeline**
> QueryResponse run_query_pipeline(workspace, name, query_string)

Query Pipeline Run

Run an already defined query pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.query_response import QueryResponse
from majordomo_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomo_ai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomo_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomo_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomo_ai.QueryApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the query pipeline is present.
    name = 'name_example' # str | The name of the query pipeline.
    query_string = 'query_string_example' # str | The user query for which an answer is sought using the query pipeline information.

    try:
        # Query Pipeline Run
        api_response = api_instance.run_query_pipeline(workspace, name, query_string)
        print("The response of QueryApi->run_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->run_query_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the query pipeline is present. | 
 **name** | **str**| The name of the query pipeline. | 
 **query_string** | **str**| The user query for which an answer is sought using the query pipeline information. | 

### Return type

[**QueryResponse**](QueryResponse.md)

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

# **update_query_pipeline**
> QueryPipelineInfo update_query_pipeline(query_pipeline)

Query Pipeline

Update an existing query pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.query_pipeline import QueryPipeline
from majordomo_ai.models.query_pipeline_info import QueryPipelineInfo
from majordomo_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:/25001
# See configuration.py for a list of all supported configuration parameters.
configuration = majordomo_ai.Configuration(
    host = "http://localhost:/25001"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = majordomo_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with majordomo_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = majordomo_ai.QueryApi(api_client)
    query_pipeline = majordomo_ai.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_response = api_instance.update_query_pipeline(query_pipeline)
        print("The response of QueryApi->update_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->update_query_pipeline: %s\n" % e)
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


# majordomo_ai.QueryApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_chat_history**](QueryApi.md#create_chat_history) | **POST** /chat_history | Create a chat history.
[**create_query_pipeline**](QueryApi.md#create_query_pipeline) | **POST** /query_pipelines | Create query pipeline.
[**data_store_query**](QueryApi.md#data_store_query) | **POST** /data_store_query | Query data store.
[**delete_chat_history**](QueryApi.md#delete_chat_history) | **DELETE** /chat_history | Delete chat history.
[**delete_query_pipelines**](QueryApi.md#delete_query_pipelines) | **DELETE** /query_pipelines | Delete query pipelines.
[**get_chat_history**](QueryApi.md#get_chat_history) | **GET** /chat_history | Chat history information for a user.
[**get_query_pipelines**](QueryApi.md#get_query_pipelines) | **GET** /query_pipelines | Get query pipelines.
[**run_query_pipeline**](QueryApi.md#run_query_pipeline) | **POST** /query_pipeline_run/workspace/{workspace}/name/{name}/query/{query_string} | Run query pipeline.
[**update_chat_history**](QueryApi.md#update_chat_history) | **PUT** /chat_history | Update chat history parameters.
[**update_query_pipeline**](QueryApi.md#update_query_pipeline) | **PUT** /query_pipelines | Update query pipeline.


# **create_chat_history**
> ChatHistoryInfo create_chat_history(chat_history)

Create a chat history.

Create an new chat history.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.chat_history import ChatHistory
from majordomo_ai.models.chat_history_info import ChatHistoryInfo
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
    chat_history = majordomo_ai.ChatHistory() # ChatHistory | 

    try:
        # Create a chat history.
        api_response = api_instance.create_chat_history(chat_history)
        print("The response of QueryApi->create_chat_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->create_chat_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_history** | [**ChatHistory**](ChatHistory.md)|  | 

### Return type

[**ChatHistoryInfo**](ChatHistoryInfo.md)

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

Create query pipeline.

Create a query pipeline.

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
        # Create query pipeline.
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

Query data store.

Query the contents of a specific data store. Specify any query params to tweak the query process.

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
        # Query data store.
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

# **delete_chat_history**
> DeleteResponse delete_chat_history(name=name, uid=uid)

Delete chat history.

Delete the chat history.

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
    name = 'name_example' # str | The name of the chat history to delete. (optional)
    uid = 'uid_example' # str | The unique identifier for the particular chat conversation which is to be deleted. (optional)

    try:
        # Delete chat history.
        api_response = api_instance.delete_chat_history(name=name, uid=uid)
        print("The response of QueryApi->delete_chat_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->delete_chat_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the chat history to delete. | [optional] 
 **uid** | **str**| The unique identifier for the particular chat conversation which is to be deleted. | [optional] 

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

# **delete_query_pipelines**
> DeleteResponse delete_query_pipelines(workspace, name=name)

Delete query pipelines.

Delete one or more existing query pipelines.

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
        # Delete query pipelines.
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

# **get_chat_history**
> ChatHistoryList get_chat_history(name=name)

Chat history information for a user.

The details of a chat history saved under a particular name by the user.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.chat_history_list import ChatHistoryList
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
    name = 'name_example' # str | The name of the chat history to retrieve. (optional)

    try:
        # Chat history information for a user.
        api_response = api_instance.get_chat_history(name=name)
        print("The response of QueryApi->get_chat_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->get_chat_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the chat history to retrieve. | [optional] 

### Return type

[**ChatHistoryList**](ChatHistoryList.md)

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
> QueryPipelines get_query_pipelines(workspace=workspace, name=name, shared=shared)

Get query pipelines.

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
    shared = True # bool | Retrieve all query pipelines that are shared with the user. (optional)

    try:
        # Get query pipelines.
        api_response = api_instance.get_query_pipelines(workspace=workspace, name=name, shared=shared)
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
 **shared** | **bool**| Retrieve all query pipelines that are shared with the user. | [optional] 

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
> QueryResponse run_query_pipeline(query_pipeline_run)

Run query pipeline.

Run an already defined query pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.query_pipeline_run import QueryPipelineRun
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
    query_pipeline_run = majordomo_ai.QueryPipelineRun() # QueryPipelineRun | 

    try:
        # Run query pipeline.
        api_response = api_instance.run_query_pipeline(query_pipeline_run)
        print("The response of QueryApi->run_query_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->run_query_pipeline: %s\n" % e)
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

# **update_chat_history**
> ChatHistoryInfo update_chat_history(chat_history)

Update chat history parameters.

Update an existing chat history.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.chat_history import ChatHistory
from majordomo_ai.models.chat_history_info import ChatHistoryInfo
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
    chat_history = majordomo_ai.ChatHistory() # ChatHistory | 

    try:
        # Update chat history parameters.
        api_response = api_instance.update_chat_history(chat_history)
        print("The response of QueryApi->update_chat_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->update_chat_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chat_history** | [**ChatHistory**](ChatHistory.md)|  | 

### Return type

[**ChatHistoryInfo**](ChatHistoryInfo.md)

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

Update query pipeline.

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
        # Update query pipeline.
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


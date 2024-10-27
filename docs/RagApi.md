# openapi_client.RagApi

All URIs are relative to *http://20.40.53.225:25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_store_create**](RagApi.md#data_store_create) | **POST** /data_store | Data Store
[**data_store_delete**](RagApi.md#data_store_delete) | **DELETE** /data_store | Data Store
[**data_store_get**](RagApi.md#data_store_get) | **GET** /data_store/{credentials} | Data Store Get
[**data_store_ingest**](RagApi.md#data_store_ingest) | **POST** /data_store_ingest | Ingest content into a data store
[**data_store_query**](RagApi.md#data_store_query) | **POST** /data_store_query | Query a data store
[**data_store_update**](RagApi.md#data_store_update) | **PUT** /data_store | Data Store
[**ingest_pipeline_create**](RagApi.md#ingest_pipeline_create) | **POST** /ingest_pipeline | Ingest Pipeline
[**ingest_pipeline_delete**](RagApi.md#ingest_pipeline_delete) | **DELETE** /ingest_pipeline | Ingest Pipeline
[**ingest_pipeline_get**](RagApi.md#ingest_pipeline_get) | **GET** /ingest_pipeline/{credentials} | Ingest Pipeline Get
[**ingest_pipeline_update**](RagApi.md#ingest_pipeline_update) | **PUT** /ingest_pipeline | Ingest Pipeline
[**query_pipeline_create**](RagApi.md#query_pipeline_create) | **POST** /query_pipeline | Query Pipeline
[**query_pipeline_delete**](RagApi.md#query_pipeline_delete) | **DELETE** /query_pipeline | Query Pipeline
[**query_pipeline_get**](RagApi.md#query_pipeline_get) | **GET** /query_pipeline/{credentials} | Query Pipeline Get
[**query_pipeline_update**](RagApi.md#query_pipeline_update) | **PUT** /query_pipeline | Query Pipeline


# **data_store_create**
> DataStores data_store_create(data_store)

Data Store

Create a data store

### Example


```python
import openapi_client
from openapi_client.models.data_store import DataStore
from openapi_client.models.data_stores import DataStores
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
    api_instance = openapi_client.RagApi(api_client)
    data_store = openapi_client.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.data_store_create(data_store)
        print("The response of RagApi->data_store_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->data_store_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStores**](DataStores.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_delete**
> data_store_delete(data_store)

Data Store

Delete an existing data store.

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
    api_instance = openapi_client.RagApi(api_client)
    data_store = openapi_client.DataStore() # DataStore | 

    try:
        # Data Store
        api_instance.data_store_delete(data_store)
    except Exception as e:
        print("Exception when calling RagApi->data_store_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_get**
> DataStores data_store_get(credentials)

Data Store Get

Get a list of existing data stores.

### Example


```python
import openapi_client
from openapi_client.models.credentials import Credentials
from openapi_client.models.data_stores import DataStores
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
    api_instance = openapi_client.RagApi(api_client)
    credentials = openapi_client.Credentials() # Credentials | Credentials

    try:
        # Data Store Get
        api_response = api_instance.data_store_get(credentials)
        print("The response of RagApi->data_store_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->data_store_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](.md)| Credentials | 

### Return type

[**DataStores**](DataStores.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
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
    api_instance = openapi_client.RagApi(api_client)
    data_store_ingest = openapi_client.DataStoreIngest() # DataStoreIngest | 

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

# **data_store_query**
> QueryResponse data_store_query(data_store_query)

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
    api_instance = openapi_client.RagApi(api_client)
    data_store_query = openapi_client.DataStoreQuery() # DataStoreQuery | 

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_store_update**
> DataStore data_store_update(data_store)

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
    api_instance = openapi_client.RagApi(api_client)
    data_store = openapi_client.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.data_store_update(data_store)
        print("The response of RagApi->data_store_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->data_store_update: %s\n" % e)
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

# **ingest_pipeline_create**
> IngestPipelineInfo ingest_pipeline_create(ingest_pipeline)

Ingest Pipeline

Create a ingest pipeline

### Example


```python
import openapi_client
from openapi_client.models.ingest_pipeline import IngestPipeline
from openapi_client.models.ingest_pipeline_info import IngestPipelineInfo
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
    api_instance = openapi_client.RagApi(api_client)
    ingest_pipeline = openapi_client.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_response = api_instance.ingest_pipeline_create(ingest_pipeline)
        print("The response of RagApi->ingest_pipeline_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->ingest_pipeline_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingest_pipeline** | [**IngestPipeline**](IngestPipeline.md)|  | 

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingest_pipeline_delete**
> ingest_pipeline_delete(ingest_pipeline)

Ingest Pipeline

Delete an existing ingest pipeline.

### Example


```python
import openapi_client
from openapi_client.models.ingest_pipeline import IngestPipeline
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
    api_instance = openapi_client.RagApi(api_client)
    ingest_pipeline = openapi_client.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_instance.ingest_pipeline_delete(ingest_pipeline)
    except Exception as e:
        print("Exception when calling RagApi->ingest_pipeline_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingest_pipeline** | [**IngestPipeline**](IngestPipeline.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingest_pipeline_get**
> IngestPipelines ingest_pipeline_get(credentials)

Ingest Pipeline Get

Get a list of existing ingest pipelines.

### Example


```python
import openapi_client
from openapi_client.models.credentials import Credentials
from openapi_client.models.ingest_pipelines import IngestPipelines
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
    api_instance = openapi_client.RagApi(api_client)
    credentials = openapi_client.Credentials() # Credentials | Credentials

    try:
        # Ingest Pipeline Get
        api_response = api_instance.ingest_pipeline_get(credentials)
        print("The response of RagApi->ingest_pipeline_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->ingest_pipeline_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](.md)| Credentials | 

### Return type

[**IngestPipelines**](IngestPipelines.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingest_pipeline_update**
> IngestPipelineInfo ingest_pipeline_update(ingest_pipeline)

Ingest Pipeline

Update an existing ingest pipeline.

### Example


```python
import openapi_client
from openapi_client.models.ingest_pipeline import IngestPipeline
from openapi_client.models.ingest_pipeline_info import IngestPipelineInfo
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
    api_instance = openapi_client.RagApi(api_client)
    ingest_pipeline = openapi_client.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_response = api_instance.ingest_pipeline_update(ingest_pipeline)
        print("The response of RagApi->ingest_pipeline_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->ingest_pipeline_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingest_pipeline** | [**IngestPipeline**](IngestPipeline.md)|  | 

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_pipeline_create**
> QueryPipelineInfo query_pipeline_create(query_pipeline)

Query Pipeline

Create a query pipeline

### Example


```python
import openapi_client
from openapi_client.models.query_pipeline import QueryPipeline
from openapi_client.models.query_pipeline_info import QueryPipelineInfo
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
    api_instance = openapi_client.RagApi(api_client)
    query_pipeline = openapi_client.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_response = api_instance.query_pipeline_create(query_pipeline)
        print("The response of RagApi->query_pipeline_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->query_pipeline_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_pipeline** | [**QueryPipeline**](QueryPipeline.md)|  | 

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_pipeline_delete**
> query_pipeline_delete(query_pipeline)

Query Pipeline

Delete an existing query pipeline.

### Example


```python
import openapi_client
from openapi_client.models.query_pipeline import QueryPipeline
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
    api_instance = openapi_client.RagApi(api_client)
    query_pipeline = openapi_client.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_instance.query_pipeline_delete(query_pipeline)
    except Exception as e:
        print("Exception when calling RagApi->query_pipeline_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_pipeline** | [**QueryPipeline**](QueryPipeline.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_pipeline_get**
> QueryPipelines query_pipeline_get(credentials)

Query Pipeline Get

Get a list of existing query pipelines.

### Example


```python
import openapi_client
from openapi_client.models.credentials import Credentials
from openapi_client.models.query_pipelines import QueryPipelines
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
    api_instance = openapi_client.RagApi(api_client)
    credentials = openapi_client.Credentials() # Credentials | Credentials

    try:
        # Query Pipeline Get
        api_response = api_instance.query_pipeline_get(credentials)
        print("The response of RagApi->query_pipeline_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->query_pipeline_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](.md)| Credentials | 

### Return type

[**QueryPipelines**](QueryPipelines.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_pipeline_update**
> QueryPipelineInfo query_pipeline_update(query_pipeline)

Query Pipeline

Update an existing query pipeline.

### Example


```python
import openapi_client
from openapi_client.models.query_pipeline import QueryPipeline
from openapi_client.models.query_pipeline_info import QueryPipelineInfo
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
    api_instance = openapi_client.RagApi(api_client)
    query_pipeline = openapi_client.QueryPipeline() # QueryPipeline | 

    try:
        # Query Pipeline
        api_response = api_instance.query_pipeline_update(query_pipeline)
        print("The response of RagApi->query_pipeline_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RagApi->query_pipeline_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_pipeline** | [**QueryPipeline**](QueryPipeline.md)|  | 

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


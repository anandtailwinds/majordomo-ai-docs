# majordomo_ai.IngestApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_data_store**](IngestApi.md#create_data_store) | **POST** /data_stores | Data Store
[**create_ingest_pipeline**](IngestApi.md#create_ingest_pipeline) | **POST** /ingest_pipelines | Ingest Pipeline
[**data_store_ingest**](IngestApi.md#data_store_ingest) | **POST** /data_store_ingest | Ingest content into a data store
[**data_store_upload**](IngestApi.md#data_store_upload) | **POST** /data_store_upload | Ingest content into a data store from set of input files.
[**delete_data_stores**](IngestApi.md#delete_data_stores) | **DELETE** /data_stores | Data Store
[**delete_ingest_pipelines**](IngestApi.md#delete_ingest_pipelines) | **DELETE** /ingest_pipelines | Ingest Pipeline
[**delete_vector_store_files**](IngestApi.md#delete_vector_store_files) | **DELETE** /delete_vector_store_files/workspace/{workspace}/data-store/{data_store}/files/{files} | 
[**get_data_stores**](IngestApi.md#get_data_stores) | **GET** /data_stores | Data Store Get
[**get_ingest_pipelines**](IngestApi.md#get_ingest_pipelines) | **GET** /ingest_pipelines | Ingest Pipeline Get
[**get_vector_stores**](IngestApi.md#get_vector_stores) | **GET** /vector_stores | Vector database information obtained from provider.
[**run_ingest_pipeline**](IngestApi.md#run_ingest_pipeline) | **POST** /ingest_pipeline_run/workspace/{workspace}/data-store/{data_store}/name/{name} | 
[**update_data_store**](IngestApi.md#update_data_store) | **PUT** /data_stores | Data Store
[**update_ingest_pipeline**](IngestApi.md#update_ingest_pipeline) | **PUT** /ingest_pipelines | Ingest Pipeline


# **create_data_store**
> DataStoreInfo create_data_store(data_store)

Data Store

Create a data store

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.data_store import DataStore
from majordomo_ai.models.data_store_info import DataStoreInfo
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
    api_instance = majordomo_ai.IngestApi(api_client)
    data_store = majordomo_ai.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.create_data_store(data_store)
        print("The response of IngestApi->create_data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->create_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStoreInfo**](DataStoreInfo.md)

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
import majordomo_ai
from majordomo_ai.models.ingest_pipeline import IngestPipeline
from majordomo_ai.models.ingest_pipeline_info import IngestPipelineInfo
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
    api_instance = majordomo_ai.IngestApi(api_client)
    ingest_pipeline = majordomo_ai.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_response = api_instance.create_ingest_pipeline(ingest_pipeline)
        print("The response of IngestApi->create_ingest_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->create_ingest_pipeline: %s\n" % e)
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

# **data_store_ingest**
> IngestResponse data_store_ingest(data_store_ingest)

Ingest content into a data store

Ingest files into any type of data store

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.data_store_ingest import DataStoreIngest
from majordomo_ai.models.ingest_response import IngestResponse
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
    api_instance = majordomo_ai.IngestApi(api_client)
    data_store_ingest = majordomo_ai.DataStoreIngest() # DataStoreIngest | 

    try:
        # Ingest content into a data store
        api_response = api_instance.data_store_ingest(data_store_ingest)
        print("The response of IngestApi->data_store_ingest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->data_store_ingest: %s\n" % e)
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

# **data_store_upload**
> IngestResponse data_store_upload(workspace, data_store_name, ingest_type, files, ingest_params=ingest_params)

Ingest content into a data store from set of input files.

Ingest files into any type of data store

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.ingest_params import IngestParams
from majordomo_ai.models.ingest_response import IngestResponse
from majordomo_ai.models.ingest_types import IngestTypes
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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The workspace the data store belongs to.
    data_store_name = 'data_store_name_example' # str | Name of the data store
    ingest_type = majordomo_ai.IngestTypes() # IngestTypes | 
    files = None # List[bytearray] | 
    ingest_params = majordomo_ai.IngestParams() # IngestParams |  (optional)

    try:
        # Ingest content into a data store from set of input files.
        api_response = api_instance.data_store_upload(workspace, data_store_name, ingest_type, files, ingest_params=ingest_params)
        print("The response of IngestApi->data_store_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->data_store_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace the data store belongs to. | 
 **data_store_name** | **str**| Name of the data store | 
 **ingest_type** | [**IngestTypes**](IngestTypes.md)|  | 
 **files** | **List[bytearray]**|  | 
 **ingest_params** | [**IngestParams**](IngestParams.md)|  | [optional] 

### Return type

[**IngestResponse**](IngestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_data_stores**
> DeleteResponse delete_data_stores(workspace, name=name, force=force)

Data Store

Delete an existing data store created by the user. All references to this data store need to be removed first, if not the delete will fail.

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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace the data store exists.
    name = 'name_example' # str | The name of the data store to be deleted. If no name is provided and workspace is provided, all data stores in a workspace are deleted. (optional)
    force = True # bool | Normally a data store deletion will succeed only if the corresponding entry in the vector database provider is removed. This is to ensure consistency. If there are scenarios where a discrepancy has creeped in, this option can be used to remove the data store reference in Majordomo AI. This option is available only if both workspace and data store name are provided. (optional)

    try:
        # Data Store
        api_response = api_instance.delete_data_stores(workspace, name=name, force=force)
        print("The response of IngestApi->delete_data_stores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->delete_data_stores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace the data store exists. | 
 **name** | **str**| The name of the data store to be deleted. If no name is provided and workspace is provided, all data stores in a workspace are deleted. | [optional] 
 **force** | **bool**| Normally a data store deletion will succeed only if the corresponding entry in the vector database provider is removed. This is to ensure consistency. If there are scenarios where a discrepancy has creeped in, this option can be used to remove the data store reference in Majordomo AI. This option is available only if both workspace and data store name are provided. | [optional] 

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

# **delete_ingest_pipelines**
> DeleteResponse delete_ingest_pipelines(workspace, data_store, name=name)

Ingest Pipeline

Delete an existing ingest pipeline.

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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the ingest pipeline exists
    data_store = 'data_store_example' # str | The name of the data store in which the ingest pipeline is present.
    name = 'name_example' # str | The name of the ingest pipeline to be deleted. If no name is provided, all ingest pipelines in the data store are deleted. (optional)

    try:
        # Ingest Pipeline
        api_response = api_instance.delete_ingest_pipelines(workspace, data_store, name=name)
        print("The response of IngestApi->delete_ingest_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->delete_ingest_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the ingest pipeline exists | 
 **data_store** | **str**| The name of the data store in which the ingest pipeline is present. | 
 **name** | **str**| The name of the ingest pipeline to be deleted. If no name is provided, all ingest pipelines in the data store are deleted. | [optional] 

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

# **delete_vector_store_files**
> DeleteResponse delete_vector_store_files(workspace, data_store, files)



Delete a set of files from the vector datastore. The entire vector store cannot be deleted as it will be done when the corresponding data store is also deleted.

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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The workspace in which the data store corresponding to the vector store is present.
    data_store = 'data_store_example' # str | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned.
    files = 'files_example' # str | The list of files to delete from the vector store at the provider.

    try:
        api_response = api_instance.delete_vector_store_files(workspace, data_store, files)
        print("The response of IngestApi->delete_vector_store_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->delete_vector_store_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace in which the data store corresponding to the vector store is present. | 
 **data_store** | **str**| Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. | 
 **files** | **str**| The list of files to delete from the vector store at the provider. | 

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
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_data_stores**
> DataStores get_data_stores(workspace=workspace, name=name)

Data Store Get

Get a list of existing data stores.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.data_stores import DataStores
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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The workspace to search the data store, mandatory if name is provided. (optional)
    name = 'name_example' # str | The name of the data store to retrieve. (optional)

    try:
        # Data Store Get
        api_response = api_instance.get_data_stores(workspace=workspace, name=name)
        print("The response of IngestApi->get_data_stores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->get_data_stores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace to search the data store, mandatory if name is provided. | [optional] 
 **name** | **str**| The name of the data store to retrieve. | [optional] 

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
> IngestPipelines get_ingest_pipelines(workspace, name=name, data_store=data_store)

Ingest Pipeline Get

Get a list of existing ingest pipelines.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.ingest_pipelines import IngestPipelines
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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The workspace to search the ingest pipeline, mandatory if name is provided.
    name = 'name_example' # str | The name of the ingest pipeline to retrieve. (optional)
    data_store = 'data_store_example' # str | The name of the data store in which the ingest pipeline is present. (optional)

    try:
        # Ingest Pipeline Get
        api_response = api_instance.get_ingest_pipelines(workspace, name=name, data_store=data_store)
        print("The response of IngestApi->get_ingest_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->get_ingest_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace to search the ingest pipeline, mandatory if name is provided. | 
 **name** | **str**| The name of the ingest pipeline to retrieve. | [optional] 
 **data_store** | **str**| The name of the data store in which the ingest pipeline is present. | [optional] 

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

# **get_vector_stores**
> VectorStores get_vector_stores(workspace, data_store=data_store, files=files)

Vector database information obtained from provider.

Get entries for vector database information obtained from the provider.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.vector_stores import VectorStores
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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The workspace in which the data store corresponding to the vector store is present.
    data_store = 'data_store_example' # str | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. (optional)
    files = True # bool | Obtain the list of files that are ingested into the vector store also. This option is very compute intensive as most vector databases dont provide a way to get this information without downloading the entire database. So this option can be excercised only for one data store at a time, and it is mandatory to provide a specific workspace and data store name. (optional)

    try:
        # Vector database information obtained from provider.
        api_response = api_instance.get_vector_stores(workspace, data_store=data_store, files=files)
        print("The response of IngestApi->get_vector_stores:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->get_vector_stores: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The workspace in which the data store corresponding to the vector store is present. | 
 **data_store** | **str**| Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. | [optional] 
 **files** | **bool**| Obtain the list of files that are ingested into the vector store also. This option is very compute intensive as most vector databases dont provide a way to get this information without downloading the entire database. So this option can be excercised only for one data store at a time, and it is mandatory to provide a specific workspace and data store name. | [optional] 

### Return type

[**VectorStores**](VectorStores.md)

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
> run_ingest_pipeline(workspace, data_store, name)



Run an already defined ingest pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
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
    api_instance = majordomo_ai.IngestApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the ingest pipeline is present.
    data_store = 'data_store_example' # str | The name of the data store in which the ingest pipeline is present.
    name = 'name_example' # str | The name of the ingest pipeline to run.

    try:
        api_instance.run_ingest_pipeline(workspace, data_store, name)
    except Exception as e:
        print("Exception when calling IngestApi->run_ingest_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the ingest pipeline is present. | 
 **data_store** | **str**| The name of the data store in which the ingest pipeline is present. | 
 **name** | **str**| The name of the ingest pipeline to run. | 

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

# **update_data_store**
> DataStoreInfo update_data_store(data_store)

Data Store

Update an existing data store.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.data_store import DataStore
from majordomo_ai.models.data_store_info import DataStoreInfo
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
    api_instance = majordomo_ai.IngestApi(api_client)
    data_store = majordomo_ai.DataStore() # DataStore | 

    try:
        # Data Store
        api_response = api_instance.update_data_store(data_store)
        print("The response of IngestApi->update_data_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->update_data_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_store** | [**DataStore**](DataStore.md)|  | 

### Return type

[**DataStoreInfo**](DataStoreInfo.md)

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

# **update_ingest_pipeline**
> IngestPipelineInfo update_ingest_pipeline(ingest_pipeline)

Ingest Pipeline

Update an existing ingest pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.ingest_pipeline import IngestPipeline
from majordomo_ai.models.ingest_pipeline_info import IngestPipelineInfo
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
    api_instance = majordomo_ai.IngestApi(api_client)
    ingest_pipeline = majordomo_ai.IngestPipeline() # IngestPipeline | 

    try:
        # Ingest Pipeline
        api_response = api_instance.update_ingest_pipeline(ingest_pipeline)
        print("The response of IngestApi->update_ingest_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IngestApi->update_ingest_pipeline: %s\n" % e)
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

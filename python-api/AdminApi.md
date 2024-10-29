# majordomoai.AdminApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_model_profile**](AdminApi.md#create_model_profile) | **POST** /model_profiles | Model Profile
[**create_monitor_profile**](AdminApi.md#create_monitor_profile) | **POST** /monitor_profiles | Monitor Profile
[**create_user_profile**](AdminApi.md#create_user_profile) | **POST** /user_profiles | User Profile
[**create_vectordb_profile**](AdminApi.md#create_vectordb_profile) | **POST** /vectordb_profiles | Vectordb Profile
[**create_workspace**](AdminApi.md#create_workspace) | **POST** /workspaces | Workspace
[**delete_model_profile**](AdminApi.md#delete_model_profile) | **DELETE** /model_profiles | Model Profile
[**delete_monitor_profiles**](AdminApi.md#delete_monitor_profiles) | **DELETE** /monitor_profiles | Monitor Profile
[**delete_vectordb_profile**](AdminApi.md#delete_vectordb_profile) | **DELETE** /vectordb_profiles | Vectordb Profile
[**delete_worker**](AdminApi.md#delete_worker) | **DELETE** /workers | Worker
[**delete_workspaces**](AdminApi.md#delete_workspaces) | **DELETE** /workspaces | Workspace
[**get_model_profiles**](AdminApi.md#get_model_profiles) | **GET** /model_profiles | Model profiles GET operation.
[**get_monitor_profiles**](AdminApi.md#get_monitor_profiles) | **GET** /monitor_profiles | Monitor profiles GET operation.
[**get_token_stats**](AdminApi.md#get_token_stats) | **GET** /token_stats | TokenStats
[**get_user_profiles**](AdminApi.md#get_user_profiles) | **GET** /user_profiles | User profiles GET operation.
[**get_vectordb_profiles**](AdminApi.md#get_vectordb_profiles) | **GET** /vectordb_profiles | Vectordb profiles GET operation.
[**get_workers**](AdminApi.md#get_workers) | **GET** /workers | Worker Get
[**get_workspaces**](AdminApi.md#get_workspaces) | **GET** /workspaces | Workspace GET operation.
[**log_get**](AdminApi.md#log_get) | **GET** /logs | Logs
[**update_model_profile**](AdminApi.md#update_model_profile) | **PUT** /model_profiles | Model Profile
[**update_monitor_profile**](AdminApi.md#update_monitor_profile) | **PUT** /monitor_profiles | Monitor Profile
[**update_user_profile**](AdminApi.md#update_user_profile) | **PUT** /user_profiles | User Profile
[**update_vectordb_profile**](AdminApi.md#update_vectordb_profile) | **PUT** /vectordb_profiles | Vectordb Profile
[**update_workspace**](AdminApi.md#update_workspace) | **PUT** /workspaces | Workspace
[**user_profile_delete**](AdminApi.md#user_profile_delete) | **DELETE** /user_profiles | User Profile
[**worker_create**](AdminApi.md#worker_create) | **POST** /workers | Worker


# **create_model_profile**
> ModelProfile create_model_profile(model_profile)

Model Profile

Create a model profile

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.model_profile import ModelProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    model_profile = majordomoai.ModelProfile() # ModelProfile | 

    try:
        # Model Profile
        api_response = api_instance.create_model_profile(model_profile)
        print("The response of AdminApi->create_model_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_model_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_profile** | [**ModelProfile**](ModelProfile.md)|  | 

### Return type

[**ModelProfile**](ModelProfile.md)

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

# **create_monitor_profile**
> MonitorProfile create_monitor_profile(monitor_profile)

Monitor Profile

Create a Monitor profile

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.monitor_profile import MonitorProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    monitor_profile = majordomoai.MonitorProfile() # MonitorProfile | 

    try:
        # Monitor Profile
        api_response = api_instance.create_monitor_profile(monitor_profile)
        print("The response of AdminApi->create_monitor_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_monitor_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitor_profile** | [**MonitorProfile**](MonitorProfile.md)|  | 

### Return type

[**MonitorProfile**](MonitorProfile.md)

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

# **create_user_profile**
> UserProfile create_user_profile(user_profile)

User Profile

Create a user profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.user_profile import UserProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    user_profile = majordomoai.UserProfile() # UserProfile | 

    try:
        # User Profile
        api_response = api_instance.create_user_profile(user_profile)
        print("The response of AdminApi->create_user_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_user_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile** | [**UserProfile**](UserProfile.md)|  | 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**422** | Invalid input. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_vectordb_profile**
> VectordbProfile create_vectordb_profile(vectordb_profile)

Vectordb Profile

Create a Vectordb profile

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.vectordb_profile import VectordbProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    vectordb_profile = majordomoai.VectordbProfile() # VectordbProfile | 

    try:
        # Vectordb Profile
        api_response = api_instance.create_vectordb_profile(vectordb_profile)
        print("The response of AdminApi->create_vectordb_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_vectordb_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vectordb_profile** | [**VectordbProfile**](VectordbProfile.md)|  | 

### Return type

[**VectordbProfile**](VectordbProfile.md)

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

# **create_workspace**
> WorkspaceInfo create_workspace(workspace)

Workspace

Create a workspace

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.workspace import Workspace
from majordomoai.models.workspace_info import WorkspaceInfo
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
    api_instance = majordomoai.AdminApi(api_client)
    workspace = majordomoai.Workspace() # Workspace | 

    try:
        # Workspace
        api_response = api_instance.create_workspace(workspace)
        print("The response of AdminApi->create_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**Workspace**](Workspace.md)|  | 

### Return type

[**WorkspaceInfo**](WorkspaceInfo.md)

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

# **delete_model_profile**
> delete_model_profile(model_profile)

Model Profile

Delete an existing model profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.model_profile import ModelProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    model_profile = majordomoai.ModelProfile() # ModelProfile | 

    try:
        # Model Profile
        api_instance.delete_model_profile(model_profile)
    except Exception as e:
        print("Exception when calling AdminApi->delete_model_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_profile** | [**ModelProfile**](ModelProfile.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_monitor_profiles**
> delete_monitor_profiles(name)

Monitor Profile

Delete an existing monitor profile.

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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | The name of the specific monitor profile to delete. If none is provided all monitor profiles belonging to the user are deleted.

    try:
        # Monitor Profile
        api_instance.delete_monitor_profiles(name)
    except Exception as e:
        print("Exception when calling AdminApi->delete_monitor_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the specific monitor profile to delete. If none is provided all monitor profiles belonging to the user are deleted. | 

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

# **delete_vectordb_profile**
> delete_vectordb_profile(name)

Vectordb Profile

Delete an existing Vectordb profile.

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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | The name of the vectordb profile to delete.

    try:
        # Vectordb Profile
        api_instance.delete_vectordb_profile(name)
    except Exception as e:
        print("Exception when calling AdminApi->delete_vectordb_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the vectordb profile to delete. | 

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

# **delete_worker**
> delete_worker(name)

Worker

Delete an existing worker.

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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | Name of the worker to delete.

    try:
        # Worker
        api_instance.delete_worker(name)
    except Exception as e:
        print("Exception when calling AdminApi->delete_worker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the worker to delete. | 

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

# **delete_workspaces**
> delete_workspaces(name)

Workspace

Delete one or more existing workspaces.

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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | Name of the workspaces to delete. If none is provided all workspaces are deleted.

    try:
        # Workspace
        api_instance.delete_workspaces(name)
    except Exception as e:
        print("Exception when calling AdminApi->delete_workspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the workspaces to delete. If none is provided all workspaces are deleted. | 

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

# **get_model_profiles**
> ModelProfiles get_model_profiles(name=name)

Model profiles GET operation.

Get a list of existing model profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.model_profiles import ModelProfiles
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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | The name of the model profile to retrieve. (optional)

    try:
        # Model profiles GET operation.
        api_response = api_instance.get_model_profiles(name=name)
        print("The response of AdminApi->get_model_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_model_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the model profile to retrieve. | [optional] 

### Return type

[**ModelProfiles**](ModelProfiles.md)

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

# **get_monitor_profiles**
> MonitorProfiles get_monitor_profiles(name=name)

Monitor profiles GET operation.

Get a list of existing monitor profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.monitor_profiles import MonitorProfiles
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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | The name of the monitor profile to retrieve. If none is provided all monitor profiles are retrieved. (optional)

    try:
        # Monitor profiles GET operation.
        api_response = api_instance.get_monitor_profiles(name=name)
        print("The response of AdminApi->get_monitor_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_monitor_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the monitor profile to retrieve. If none is provided all monitor profiles are retrieved. | [optional] 

### Return type

[**MonitorProfiles**](MonitorProfiles.md)

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

# **get_token_stats**
> TokenStats get_token_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time)

TokenStats

Get entries recording the token counts for the RAG operations.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.token_stats import TokenStats
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
    api_instance = majordomoai.AdminApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)
    user_name = 'user_name_example' # str | Filter the logs based on the username. (optional)
    start_time = 56 # int | Filter the logs starting at this time. (optional)
    end_time = 56 # int | Filter the logs ending at this time. (optional)

    try:
        # TokenStats
        api_response = api_instance.get_token_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time)
        print("The response of AdminApi->get_token_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_token_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 
 **user_name** | **str**| Filter the logs based on the username. | [optional] 
 **start_time** | **int**| Filter the logs starting at this time. | [optional] 
 **end_time** | **int**| Filter the logs ending at this time. | [optional] 

### Return type

[**TokenStats**](TokenStats.md)

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

# **get_user_profiles**
> UserProfiles get_user_profiles(name=name)

User profiles GET operation.

Get a list of existing user profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.user_profiles import UserProfiles
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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | The name of the user profile to retrieve. (optional)

    try:
        # User profiles GET operation.
        api_response = api_instance.get_user_profiles(name=name)
        print("The response of AdminApi->get_user_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_user_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the user profile to retrieve. | [optional] 

### Return type

[**UserProfiles**](UserProfiles.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vectordb_profiles**
> VectordbProfiles get_vectordb_profiles(name=name)

Vectordb profiles GET operation.

Get a list of existing Vectordb profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.vectordb_profiles import VectordbProfiles
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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | The name of the vectordb profile to retrieve. (optional)

    try:
        # Vectordb profiles GET operation.
        api_response = api_instance.get_vectordb_profiles(name=name)
        print("The response of AdminApi->get_vectordb_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_vectordb_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the vectordb profile to retrieve. | [optional] 

### Return type

[**VectordbProfiles**](VectordbProfiles.md)

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

# **get_workers**
> Workers get_workers(name)

Worker Get

Get a list of existing workers.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.workers import Workers
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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | Name of the specific worker to retrieve.

    try:
        # Worker Get
        api_response = api_instance.get_workers(name)
        print("The response of AdminApi->get_workers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_workers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the specific worker to retrieve. | 

### Return type

[**Workers**](Workers.md)

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

# **get_workspaces**
> Workspaces get_workspaces(name)

Workspace GET operation.

Get a list of existing workspaces.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.workspaces import Workspaces
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
    api_instance = majordomoai.AdminApi(api_client)
    name = 'name_example' # str | Name of the workspace

    try:
        # Workspace GET operation.
        api_response = api_instance.get_workspaces(name)
        print("The response of AdminApi->get_workspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_workspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the workspace | 

### Return type

[**Workspaces**](Workspaces.md)

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

# **log_get**
> Logs log_get(workspace=workspace, user_name=user_name, topic=topic, log_level=log_level, start_time=start_time, end_time=end_time)

Logs

Get a list of log messages.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.log_levels import LogLevels
from majordomoai.models.logs import Logs
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
    api_instance = majordomoai.AdminApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)
    user_name = 'user_name_example' # str | Filter the logs based on the username. (optional)
    topic = 'topic_example' # str | Filter the logs based on the topic. (optional)
    log_level = majordomoai.LogLevels() # LogLevels | Filter the logs based on the log_level. (optional)
    start_time = 56 # int | Filter the logs starting at this time. (optional)
    end_time = 56 # int | Filter the logs ending at this time. (optional)

    try:
        # Logs
        api_response = api_instance.log_get(workspace=workspace, user_name=user_name, topic=topic, log_level=log_level, start_time=start_time, end_time=end_time)
        print("The response of AdminApi->log_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->log_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 
 **user_name** | **str**| Filter the logs based on the username. | [optional] 
 **topic** | **str**| Filter the logs based on the topic. | [optional] 
 **log_level** | [**LogLevels**](.md)| Filter the logs based on the log_level. | [optional] 
 **start_time** | **int**| Filter the logs starting at this time. | [optional] 
 **end_time** | **int**| Filter the logs ending at this time. | [optional] 

### Return type

[**Logs**](Logs.md)

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

# **update_model_profile**
> ModelProfile update_model_profile(model_profile)

Model Profile

Update an existing model profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.model_profile import ModelProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    model_profile = majordomoai.ModelProfile() # ModelProfile | 

    try:
        # Model Profile
        api_response = api_instance.update_model_profile(model_profile)
        print("The response of AdminApi->update_model_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_model_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_profile** | [**ModelProfile**](ModelProfile.md)|  | 

### Return type

[**ModelProfile**](ModelProfile.md)

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

# **update_monitor_profile**
> MonitorProfile update_monitor_profile(monitor_profile)

Monitor Profile

Update an existing monitor profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.monitor_profile import MonitorProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    monitor_profile = majordomoai.MonitorProfile() # MonitorProfile | 

    try:
        # Monitor Profile
        api_response = api_instance.update_monitor_profile(monitor_profile)
        print("The response of AdminApi->update_monitor_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_monitor_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitor_profile** | [**MonitorProfile**](MonitorProfile.md)|  | 

### Return type

[**MonitorProfile**](MonitorProfile.md)

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

# **update_user_profile**
> UserProfile update_user_profile(user_profile)

User Profile

Update an existing user profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.user_profile import UserProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    user_profile = majordomoai.UserProfile() # UserProfile | 

    try:
        # User Profile
        api_response = api_instance.update_user_profile(user_profile)
        print("The response of AdminApi->update_user_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_user_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile** | [**UserProfile**](UserProfile.md)|  | 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_vectordb_profile**
> VectordbProfile update_vectordb_profile(vectordb_profile)

Vectordb Profile

Update an existing Vectordb profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.vectordb_profile import VectordbProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    vectordb_profile = majordomoai.VectordbProfile() # VectordbProfile | 

    try:
        # Vectordb Profile
        api_response = api_instance.update_vectordb_profile(vectordb_profile)
        print("The response of AdminApi->update_vectordb_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_vectordb_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vectordb_profile** | [**VectordbProfile**](VectordbProfile.md)|  | 

### Return type

[**VectordbProfile**](VectordbProfile.md)

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

# **update_workspace**
> WorkspaceInfo update_workspace(workspace)

Workspace

Update an existing workspace.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.workspace import Workspace
from majordomoai.models.workspace_info import WorkspaceInfo
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
    api_instance = majordomoai.AdminApi(api_client)
    workspace = majordomoai.Workspace() # Workspace | 

    try:
        # Workspace
        api_response = api_instance.update_workspace(workspace)
        print("The response of AdminApi->update_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**Workspace**](Workspace.md)|  | 

### Return type

[**WorkspaceInfo**](WorkspaceInfo.md)

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

# **user_profile_delete**
> user_profile_delete(user_profile)

User Profile

Delete an existing user profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.user_profile import UserProfile
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
    api_instance = majordomoai.AdminApi(api_client)
    user_profile = majordomoai.UserProfile() # UserProfile | 

    try:
        # User Profile
        api_instance.user_profile_delete(user_profile)
    except Exception as e:
        print("Exception when calling AdminApi->user_profile_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile** | [**UserProfile**](UserProfile.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **worker_create**
> WorkerInfo worker_create(worker)

Worker

Create a worker

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomoai
from majordomoai.models.worker import Worker
from majordomoai.models.worker_info import WorkerInfo
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
    api_instance = majordomoai.AdminApi(api_client)
    worker = majordomoai.Worker() # Worker | 

    try:
        # Worker
        api_response = api_instance.worker_create(worker)
        print("The response of AdminApi->worker_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->worker_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **worker** | [**Worker**](Worker.md)|  | 

### Return type

[**WorkerInfo**](WorkerInfo.md)

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


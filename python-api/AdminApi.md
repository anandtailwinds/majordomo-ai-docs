# majordomo_ai.AdminApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_model_profile**](AdminApi.md#create_model_profile) | **POST** /model_profiles | Create model profile.
[**create_user**](AdminApi.md#create_user) | **POST** /users | Add user.
[**create_user_profile**](AdminApi.md#create_user_profile) | **POST** /user_profiles | Create user profile.
[**create_vectordb_profile**](AdminApi.md#create_vectordb_profile) | **POST** /vectordb_profiles | Create vectordb profile.
[**create_worker**](AdminApi.md#create_worker) | **POST** /workers | Create worker node.
[**create_workspace**](AdminApi.md#create_workspace) | **POST** /workspaces | Create workspace.
[**delete_model_profiles**](AdminApi.md#delete_model_profiles) | **DELETE** /model_profiles | Delete model profile.
[**delete_user**](AdminApi.md#delete_user) | **DELETE** /users | Delete user.
[**delete_user_profiles**](AdminApi.md#delete_user_profiles) | **DELETE** /user_profiles | Delete user profile.
[**delete_vectordb_profiles**](AdminApi.md#delete_vectordb_profiles) | **DELETE** /vectordb_profiles | Delete vectordb profiles.
[**delete_workers**](AdminApi.md#delete_workers) | **DELETE** /workers | Delete worker nodes.
[**delete_workspaces**](AdminApi.md#delete_workspaces) | **DELETE** /workspaces | Delete workspace.
[**get_model_profiles**](AdminApi.md#get_model_profiles) | **GET** /model_profiles | Get model profiles.
[**get_user_profiles**](AdminApi.md#get_user_profiles) | **GET** /user_profiles | Get user profile.
[**get_user_scope**](AdminApi.md#get_user_scope) | **GET** /user_scope | Get permitted profiles for a specific user.
[**get_users**](AdminApi.md#get_users) | **GET** /users | Get users list.
[**get_vectordb_profiles**](AdminApi.md#get_vectordb_profiles) | **GET** /vectordb_profiles | Get vectordb profiles.
[**get_workers**](AdminApi.md#get_workers) | **GET** /workers | Get worker nodes.
[**get_workspaces**](AdminApi.md#get_workspaces) | **GET** /workspaces | Get workspaces.
[**update_model_profile**](AdminApi.md#update_model_profile) | **PUT** /model_profiles | Update model profile.
[**update_user**](AdminApi.md#update_user) | **PUT** /users | Update user.
[**update_user_profile**](AdminApi.md#update_user_profile) | **PUT** /user_profiles | Update user profile.
[**update_vectordb_profile**](AdminApi.md#update_vectordb_profile) | **PUT** /vectordb_profiles | Update vectordb profile.
[**update_workspace**](AdminApi.md#update_workspace) | **PUT** /workspaces | Update workspace.


# **create_model_profile**
> ModelProfile create_model_profile(model_profile)

Create model profile.

Create a new model profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.model_profile import ModelProfile
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
    api_instance = majordomo_ai.AdminApi(api_client)
    model_profile = majordomo_ai.ModelProfile() # ModelProfile | 

    try:
        # Create model profile.
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

# **create_user**
> UserInfo create_user(user)

Add user.

Add a new user.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.user import User
from majordomo_ai.models.user_info import UserInfo
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
    api_instance = majordomo_ai.AdminApi(api_client)
    user = majordomo_ai.User() # User | 

    try:
        # Add user.
        api_response = api_instance.create_user(user)
        print("The response of AdminApi->create_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**UserInfo**](UserInfo.md)

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

Create user profile.

Create an user profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.user_profile import UserProfile
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
    api_instance = majordomo_ai.AdminApi(api_client)
    user_profile = majordomo_ai.UserProfile() # UserProfile | 

    try:
        # Create user profile.
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

Create vectordb profile.

Create a vectordb profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.vectordb_profile import VectordbProfile
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
    api_instance = majordomo_ai.AdminApi(api_client)
    vectordb_profile = majordomo_ai.VectordbProfile() # VectordbProfile | 

    try:
        # Create vectordb profile.
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

# **create_worker**
> WorkerInfo create_worker(worker)

Create worker node.

Create a worker node.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.worker import Worker
from majordomo_ai.models.worker_info import WorkerInfo
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
    api_instance = majordomo_ai.AdminApi(api_client)
    worker = majordomo_ai.Worker() # Worker | 

    try:
        # Create worker node.
        api_response = api_instance.create_worker(worker)
        print("The response of AdminApi->create_worker:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_worker: %s\n" % e)
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

# **create_workspace**
> WorkspaceInfo create_workspace(workspace)

Create workspace.

Create a new workspace.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workspace import Workspace
from majordomo_ai.models.workspace_info import WorkspaceInfo
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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = majordomo_ai.Workspace() # Workspace | 

    try:
        # Create workspace.
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

# **delete_model_profiles**
> DeleteResponse delete_model_profiles(workspace=workspace, name=name)

Delete model profile.

Delete one or more configured model profiles.

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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the profile exists. (optional)
    name = 'name_example' # str | The name of the model profile to delete. (optional)

    try:
        # Delete model profile.
        api_response = api_instance.delete_model_profiles(workspace=workspace, name=name)
        print("The response of AdminApi->delete_model_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->delete_model_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the model profile to delete. | [optional] 

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

# **delete_user**
> DeleteResponse delete_user(name=name)

Delete user.

Delete a specific user and all his associated data such as data stores, query pipelines and logs.

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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | The name of the user to delete. (optional)

    try:
        # Delete user.
        api_response = api_instance.delete_user(name=name)
        print("The response of AdminApi->delete_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->delete_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the user to delete. | [optional] 

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

# **delete_user_profiles**
> delete_user_profiles(workspace, user_name)

Delete user profile.

Delete an existing user profile.

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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace associated with the user profile.
    user_name = 'user_name_example' # str | The name of the user associated with the user profile.

    try:
        # Delete user profile.
        api_instance.delete_user_profiles(workspace, user_name)
    except Exception as e:
        print("Exception when calling AdminApi->delete_user_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace associated with the user profile. | 
 **user_name** | **str**| The name of the user associated with the user profile. | 

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

# **delete_vectordb_profiles**
> DeleteResponse delete_vectordb_profiles(workspace=workspace, name=name)

Delete vectordb profiles.

Delete one or more existing vectordb profiles.

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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the profile exists. (optional)
    name = 'name_example' # str | The name of the vectordb profile to delete. (optional)

    try:
        # Delete vectordb profiles.
        api_response = api_instance.delete_vectordb_profiles(workspace=workspace, name=name)
        print("The response of AdminApi->delete_vectordb_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->delete_vectordb_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the vectordb profile to delete. | [optional] 

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

# **delete_workers**
> delete_workers(name)

Delete worker nodes.

Delete an existing worker node.

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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | Name of the worker to delete. Any references to this worker need to be deleted first before this operation can succeed.

    try:
        # Delete worker nodes.
        api_instance.delete_workers(name)
    except Exception as e:
        print("Exception when calling AdminApi->delete_workers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the worker to delete. Any references to this worker need to be deleted first before this operation can succeed. | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workspaces**
> DeleteResponse delete_workspaces(name)

Delete workspace.

Delete an existing workspace created by the user.

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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | Name of the workspaces to delete. Any references to this workspace need to be deleted first before this operation can succeed.

    try:
        # Delete workspace.
        api_response = api_instance.delete_workspaces(name)
        print("The response of AdminApi->delete_workspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->delete_workspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the workspaces to delete. Any references to this workspace need to be deleted first before this operation can succeed. | 

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

# **get_model_profiles**
> ModelProfiles get_model_profiles(workspace=workspace, name=name, shared=shared)

Get model profiles.

Get a list of existing model profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.model_profiles import ModelProfiles
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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = 'workspace_example' # str | Query a specific workspace for model profiles. (optional)
    name = 'name_example' # str | The name of the model profile to retrieve. (optional)
    shared = True # bool | Retrieve the profiles that are shared with this user by other users. (optional)

    try:
        # Get model profiles.
        api_response = api_instance.get_model_profiles(workspace=workspace, name=name, shared=shared)
        print("The response of AdminApi->get_model_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_model_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for model profiles. | [optional] 
 **name** | **str**| The name of the model profile to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the profiles that are shared with this user by other users. | [optional] 

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

# **get_user_profiles**
> UserProfiles get_user_profiles(name=name)

Get user profile.

Get a list of existing user profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.user_profiles import UserProfiles
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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | The name of the user profile to retrieve. (optional)

    try:
        # Get user profile.
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

# **get_user_scope**
> UserScope get_user_scope(workspace)

Get permitted profiles for a specific user.

Get a list of permitted profiles, workspaces and stores allowed for the user.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.user_scope import UserScope
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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace to retrieve the information for.

    try:
        # Get permitted profiles for a specific user.
        api_response = api_instance.get_user_scope(workspace)
        print("The response of AdminApi->get_user_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_user_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace to retrieve the information for. | 

### Return type

[**UserScope**](UserScope.md)

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

# **get_users**
> Users get_users(name=name)

Get users list.

Get the list of users in the account.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.users import Users
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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | Get information specific to a user. (optional)

    try:
        # Get users list.
        api_response = api_instance.get_users(name=name)
        print("The response of AdminApi->get_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Get information specific to a user. | [optional] 

### Return type

[**Users**](Users.md)

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

# **get_vectordb_profiles**
> VectordbProfiles get_vectordb_profiles(workspace=workspace, name=name, shared=shared)

Get vectordb profiles.

Get a list of existing vectordb profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.vectordb_profiles import VectordbProfiles
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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = 'workspace_example' # str | Query a specific workspace for model profiles. (optional)
    name = 'name_example' # str | The name of the vectordb profile to retrieve. (optional)
    shared = True # bool | Retrieve the profiles that are shared with this user by other users. (optional)

    try:
        # Get vectordb profiles.
        api_response = api_instance.get_vectordb_profiles(workspace=workspace, name=name, shared=shared)
        print("The response of AdminApi->get_vectordb_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_vectordb_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for model profiles. | [optional] 
 **name** | **str**| The name of the vectordb profile to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the profiles that are shared with this user by other users. | [optional] 

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
> Workers get_workers(name=name)

Get worker nodes.

Get a list of existing workers.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workers import Workers
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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | Name of the specific worker to retrieve. (optional)

    try:
        # Get worker nodes.
        api_response = api_instance.get_workers(name=name)
        print("The response of AdminApi->get_workers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_workers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the specific worker to retrieve. | [optional] 

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
> Workspaces get_workspaces(name=name)

Get workspaces.

Get a list of existing workspaces.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workspaces import Workspaces
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
    api_instance = majordomo_ai.AdminApi(api_client)
    name = 'name_example' # str | Name of the workspace (optional)

    try:
        # Get workspaces.
        api_response = api_instance.get_workspaces(name=name)
        print("The response of AdminApi->get_workspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_workspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the workspace | [optional] 

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

# **update_model_profile**
> ModelProfile update_model_profile(model_profile)

Update model profile.

Update an existing model profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.model_profile import ModelProfile
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
    api_instance = majordomo_ai.AdminApi(api_client)
    model_profile = majordomo_ai.ModelProfile() # ModelProfile | 

    try:
        # Update model profile.
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

# **update_user**
> UserInfo update_user(user)

Update user.

Update the API key of an existing user.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.user import User
from majordomo_ai.models.user_info import UserInfo
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
    api_instance = majordomo_ai.AdminApi(api_client)
    user = majordomo_ai.User() # User | 

    try:
        # Update user.
        api_response = api_instance.update_user(user)
        print("The response of AdminApi->update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**UserInfo**](UserInfo.md)

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

# **update_user_profile**
> UserProfile update_user_profile(user_profile)

Update user profile.

Update an existing user profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.user_profile import UserProfile
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
    api_instance = majordomo_ai.AdminApi(api_client)
    user_profile = majordomo_ai.UserProfile() # UserProfile | 

    try:
        # Update user profile.
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

Update vectordb profile.

Update an existing vectordb profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.vectordb_profile import VectordbProfile
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
    api_instance = majordomo_ai.AdminApi(api_client)
    vectordb_profile = majordomo_ai.VectordbProfile() # VectordbProfile | 

    try:
        # Update vectordb profile.
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

Update workspace.

Update an existing workspace.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workspace import Workspace
from majordomo_ai.models.workspace_info import WorkspaceInfo
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
    api_instance = majordomo_ai.AdminApi(api_client)
    workspace = majordomo_ai.Workspace() # Workspace | 

    try:
        # Update workspace.
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


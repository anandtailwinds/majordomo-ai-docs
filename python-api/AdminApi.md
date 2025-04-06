# majordomo_ai.AdminApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_app_profile**](AdminApi.md#create_app_profile) | **POST** /app_profiles | Create app profile.
[**create_inference_profile**](AdminApi.md#create_inference_profile) | **POST** /inference_profiles | Create inference profile.
[**create_model_profile**](AdminApi.md#create_model_profile) | **POST** /model_profiles | Create model profile.
[**create_user**](AdminApi.md#create_user) | **POST** /users | Add user.
[**create_worker**](AdminApi.md#create_worker) | **POST** /workers | Create worker node.
[**create_workspace**](AdminApi.md#create_workspace) | **POST** /workspaces | Create workspace.
[**delete_app_profiles**](AdminApi.md#delete_app_profiles) | **DELETE** /app_profiles | Delete app profile.
[**delete_inference_profiles**](AdminApi.md#delete_inference_profiles) | **DELETE** /inference_profiles | Delete inference profile.
[**delete_model_profiles**](AdminApi.md#delete_model_profiles) | **DELETE** /model_profiles | Delete model profile.
[**delete_user**](AdminApi.md#delete_user) | **DELETE** /users | Delete user.
[**delete_workers**](AdminApi.md#delete_workers) | **DELETE** /workers | Delete worker nodes.
[**delete_workspaces**](AdminApi.md#delete_workspaces) | **DELETE** /workspaces | Delete workspace.
[**get_allowed_profiles**](AdminApi.md#get_allowed_profiles) | **GET** /allowed_profiles | Get permitted profiles for a specific user.
[**get_app_profiles**](AdminApi.md#get_app_profiles) | **GET** /app_profiles | Get app profiles.
[**get_inference_profiles**](AdminApi.md#get_inference_profiles) | **GET** /inference_profiles | Get inference profiles.
[**get_model_profiles**](AdminApi.md#get_model_profiles) | **GET** /model_profiles | Get model profiles.
[**get_user_list**](AdminApi.md#get_user_list) | **GET** /user_list | Get list of all users.
[**get_users**](AdminApi.md#get_users) | **GET** /users | Get users list.
[**get_workers**](AdminApi.md#get_workers) | **GET** /workers | Get worker nodes.
[**get_workspaces**](AdminApi.md#get_workspaces) | **GET** /workspaces | Get workspaces.
[**update_app_profile**](AdminApi.md#update_app_profile) | **PUT** /app_profiles | Update app profile.
[**update_inference_profile**](AdminApi.md#update_inference_profile) | **PUT** /inference_profiles | Update inference profile.
[**update_model_profile**](AdminApi.md#update_model_profile) | **PUT** /model_profiles | Update model profile.
[**update_user**](AdminApi.md#update_user) | **PUT** /users | Update user.
[**update_worker**](AdminApi.md#update_worker) | **PUT** /workers | Update worker node.
[**update_workspace**](AdminApi.md#update_workspace) | **PUT** /workspaces | Update workspace.


# **create_app_profile**
> AppProfileInfo create_app_profile(app_profile)

Create app profile.

Create a new app profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.app_profile import AppProfile
from majordomo_ai.models.app_profile_info import AppProfileInfo
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
    app_profile = majordomo_ai.AppProfile() # AppProfile | 

    try:
        # Create app profile.
        api_response = api_instance.create_app_profile(app_profile)
        print("The response of AdminApi->create_app_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_app_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_profile** | [**AppProfile**](AppProfile.md)|  | 

### Return type

[**AppProfileInfo**](AppProfileInfo.md)

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

# **create_inference_profile**
> InferenceProfileInfo create_inference_profile(inference_profile)

Create inference profile.

Create a new inference profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.inference_profile import InferenceProfile
from majordomo_ai.models.inference_profile_info import InferenceProfileInfo
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
    inference_profile = majordomo_ai.InferenceProfile() # InferenceProfile | 

    try:
        # Create inference profile.
        api_response = api_instance.create_inference_profile(inference_profile)
        print("The response of AdminApi->create_inference_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->create_inference_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inference_profile** | [**InferenceProfile**](InferenceProfile.md)|  | 

### Return type

[**InferenceProfileInfo**](InferenceProfileInfo.md)

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

# **delete_app_profiles**
> DeleteResponse delete_app_profiles(workspace=workspace, name=name, force=force)

Delete app profile.

Delete one or more configured app profiles.

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
    name = 'name_example' # str | The name of the app profile to delete. (optional)
    force = True # bool | Force delete all query pipelines or data stores that are referring to this app profile. This will also delete all usages of app profile done by users with whom the profile is shared. (optional)

    try:
        # Delete app profile.
        api_response = api_instance.delete_app_profiles(workspace=workspace, name=name, force=force)
        print("The response of AdminApi->delete_app_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->delete_app_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the app profile to delete. | [optional] 
 **force** | **bool**| Force delete all query pipelines or data stores that are referring to this app profile. This will also delete all usages of app profile done by users with whom the profile is shared. | [optional] 

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

# **delete_inference_profiles**
> DeleteResponse delete_inference_profiles(workspace=workspace, name=name, force=force)

Delete inference profile.

Delete one or more configured inference profiles.

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
    name = 'name_example' # str | The name of the inference profile to delete. (optional)
    force = True # bool | Force delete all query pipelines or data stores that are referring to this inference profile. This will also delete all usages of inference profile done by users with whom the profile is shared. (optional)

    try:
        # Delete inference profile.
        api_response = api_instance.delete_inference_profiles(workspace=workspace, name=name, force=force)
        print("The response of AdminApi->delete_inference_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->delete_inference_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the inference profile to delete. | [optional] 
 **force** | **bool**| Force delete all query pipelines or data stores that are referring to this inference profile. This will also delete all usages of inference profile done by users with whom the profile is shared. | [optional] 

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

# **delete_model_profiles**
> DeleteResponse delete_model_profiles(workspace=workspace, name=name, force=force)

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
    force = True # bool | Force delete all query pipelines or data stores that are referring to this model profile. This will also delete all usages of model profile done by users with whom the profile is shared. (optional)

    try:
        # Delete model profile.
        api_response = api_instance.delete_model_profiles(workspace=workspace, name=name, force=force)
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
 **force** | **bool**| Force delete all query pipelines or data stores that are referring to this model profile. This will also delete all usages of model profile done by users with whom the profile is shared. | [optional] 

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

# **get_allowed_profiles**
> AllowedProfiles get_allowed_profiles(workspace)

Get permitted profiles for a specific user.

Get a list of permitted profiles, workspaces and stores allowed for the user.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.allowed_profiles import AllowedProfiles
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
        api_response = api_instance.get_allowed_profiles(workspace)
        print("The response of AdminApi->get_allowed_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_allowed_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace to retrieve the information for. | 

### Return type

[**AllowedProfiles**](AllowedProfiles.md)

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

# **get_app_profiles**
> AppProfiles get_app_profiles(workspace=workspace, name=name, shared=shared)

Get app profiles.

Get a list of existing app profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.app_profiles import AppProfiles
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
    workspace = 'workspace_example' # str | Query a specific workspace for app profiles. (optional)
    name = 'name_example' # str | The name of the app profile to retrieve. (optional)
    shared = True # bool | Retrieve the profiles that are shared with this user by other users. (optional)

    try:
        # Get app profiles.
        api_response = api_instance.get_app_profiles(workspace=workspace, name=name, shared=shared)
        print("The response of AdminApi->get_app_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_app_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for app profiles. | [optional] 
 **name** | **str**| The name of the app profile to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the profiles that are shared with this user by other users. | [optional] 

### Return type

[**AppProfiles**](AppProfiles.md)

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

# **get_inference_profiles**
> InferenceProfiles get_inference_profiles(workspace=workspace, name=name, shared=shared)

Get inference profiles.

Get a list of existing inference profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.inference_profiles import InferenceProfiles
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
    workspace = 'workspace_example' # str | Query a specific workspace for inference profiles. (optional)
    name = 'name_example' # str | The name of the inference profile to retrieve. (optional)
    shared = True # bool | Retrieve the profiles that are shared with this user by other users. (optional)

    try:
        # Get inference profiles.
        api_response = api_instance.get_inference_profiles(workspace=workspace, name=name, shared=shared)
        print("The response of AdminApi->get_inference_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_inference_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for inference profiles. | [optional] 
 **name** | **str**| The name of the inference profile to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the profiles that are shared with this user by other users. | [optional] 

### Return type

[**InferenceProfiles**](InferenceProfiles.md)

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

# **get_user_list**
> List[str] get_user_list(name=name, workspace=workspace)

Get list of all users.

Get the list of al users in the account.

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
    name = 'name_example' # str | Get information specific to a user. (optional)
    workspace = 'workspace_example' # str | Get list of active users in a workspace. (optional)

    try:
        # Get list of all users.
        api_response = api_instance.get_user_list(name=name, workspace=workspace)
        print("The response of AdminApi->get_user_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_user_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Get information specific to a user. | [optional] 
 **workspace** | **str**| Get list of active users in a workspace. | [optional] 

### Return type

**List[str]**

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

# **update_app_profile**
> AppProfileInfo update_app_profile(app_profile)

Update app profile.

Update an existing app profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.app_profile import AppProfile
from majordomo_ai.models.app_profile_info import AppProfileInfo
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
    app_profile = majordomo_ai.AppProfile() # AppProfile | 

    try:
        # Update app profile.
        api_response = api_instance.update_app_profile(app_profile)
        print("The response of AdminApi->update_app_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_app_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_profile** | [**AppProfile**](AppProfile.md)|  | 

### Return type

[**AppProfileInfo**](AppProfileInfo.md)

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

# **update_inference_profile**
> InferenceProfileInfo update_inference_profile(inference_profile)

Update inference profile.

Update an existing inference profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.inference_profile import InferenceProfile
from majordomo_ai.models.inference_profile_info import InferenceProfileInfo
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
    inference_profile = majordomo_ai.InferenceProfile() # InferenceProfile | 

    try:
        # Update inference profile.
        api_response = api_instance.update_inference_profile(inference_profile)
        print("The response of AdminApi->update_inference_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_inference_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inference_profile** | [**InferenceProfile**](InferenceProfile.md)|  | 

### Return type

[**InferenceProfileInfo**](InferenceProfileInfo.md)

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

# **update_worker**
> WorkerInfo update_worker(worker)

Update worker node.

Update a worker node.

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
        # Update worker node.
        api_response = api_instance.update_worker(worker)
        print("The response of AdminApi->update_worker:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_worker: %s\n" % e)
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


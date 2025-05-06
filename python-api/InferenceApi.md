# majordomo_ai.InferenceApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_inference_profile**](InferenceApi.md#create_inference_profile) | **POST** /inference_profiles | Create inference profile.
[**create_model_catalog**](InferenceApi.md#create_model_catalog) | **POST** /model_catalog | Create model catalog.
[**create_target_resource**](InferenceApi.md#create_target_resource) | **POST** /target_resource | Create target resource.
[**delete_inference_profiles**](InferenceApi.md#delete_inference_profiles) | **DELETE** /inference_profiles | Delete inference profile.
[**delete_model_catalog**](InferenceApi.md#delete_model_catalog) | **DELETE** /model_catalog | Delete model catalog.
[**delete_target_resources**](InferenceApi.md#delete_target_resources) | **DELETE** /target_resource | Delete target resource.
[**get_inference_profiles**](InferenceApi.md#get_inference_profiles) | **GET** /inference_profiles | Get inference profiles.
[**get_model_catalog**](InferenceApi.md#get_model_catalog) | **GET** /model_catalog | Get model catalog.
[**get_target_resources**](InferenceApi.md#get_target_resources) | **GET** /target_resource | Get target resources.
[**inference_profile_command**](InferenceApi.md#inference_profile_command) | **POST** /inference_profile_command | Send a command to inference pipeline.
[**update_inference_profile**](InferenceApi.md#update_inference_profile) | **PUT** /inference_profiles | Update inference profile.
[**update_model_catalog**](InferenceApi.md#update_model_catalog) | **PUT** /model_catalog | Update model catalog.
[**update_target_resource**](InferenceApi.md#update_target_resource) | **PUT** /target_resource | Update target resource.


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
    api_instance = majordomo_ai.InferenceApi(api_client)
    inference_profile = majordomo_ai.InferenceProfile() # InferenceProfile | 

    try:
        # Create inference profile.
        api_response = api_instance.create_inference_profile(inference_profile)
        print("The response of InferenceApi->create_inference_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->create_inference_profile: %s\n" % e)
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

# **create_model_catalog**
> ModelInfo create_model_catalog(model_config)

Create model catalog.

Create a new model catalog.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.model_config import ModelConfig
from majordomo_ai.models.model_info import ModelInfo
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    model_config = majordomo_ai.ModelConfig() # ModelConfig | 

    try:
        # Create model catalog.
        api_response = api_instance.create_model_catalog(model_config)
        print("The response of InferenceApi->create_model_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->create_model_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_config** | [**ModelConfig**](ModelConfig.md)|  | 

### Return type

[**ModelInfo**](ModelInfo.md)

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

# **create_target_resource**
> TargetResourceInfo create_target_resource(target_resource)

Create target resource.

Create a new target resource.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.target_resource import TargetResource
from majordomo_ai.models.target_resource_info import TargetResourceInfo
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    target_resource = majordomo_ai.TargetResource() # TargetResource | 

    try:
        # Create target resource.
        api_response = api_instance.create_target_resource(target_resource)
        print("The response of InferenceApi->create_target_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->create_target_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target_resource** | [**TargetResource**](TargetResource.md)|  | 

### Return type

[**TargetResourceInfo**](TargetResourceInfo.md)

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

# **delete_inference_profiles**
> DeleteResponse delete_inference_profiles(workspace=workspace, name=name, logs=logs)

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
    api_instance = majordomo_ai.InferenceApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the profile exists. (optional)
    name = 'name_example' # str | The name of the inference profile to delete. (optional)
    logs = True # bool | Delete only logs of the matching entries. (optional)

    try:
        # Delete inference profile.
        api_response = api_instance.delete_inference_profiles(workspace=workspace, name=name, logs=logs)
        print("The response of InferenceApi->delete_inference_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->delete_inference_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the inference profile to delete. | [optional] 
 **logs** | **bool**| Delete only logs of the matching entries. | [optional] 

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

# **delete_model_catalog**
> DeleteResponse delete_model_catalog(workspace=workspace, name=name)

Delete model catalog.

Delete one or more configured model catalog.

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
    api_instance = majordomo_ai.InferenceApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the catalog exists. (optional)
    name = 'name_example' # str | The name of the model catalog to delete. (optional)

    try:
        # Delete model catalog.
        api_response = api_instance.delete_model_catalog(workspace=workspace, name=name)
        print("The response of InferenceApi->delete_model_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->delete_model_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the catalog exists. | [optional] 
 **name** | **str**| The name of the model catalog to delete. | [optional] 

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

# **delete_target_resources**
> DeleteResponse delete_target_resources(workspace=workspace, name=name)

Delete target resource.

Delete one or more configured target resources.

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
    api_instance = majordomo_ai.InferenceApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the profile exists. (optional)
    name = 'name_example' # str | The name of the target resource to delete. (optional)

    try:
        # Delete target resource.
        api_response = api_instance.delete_target_resources(workspace=workspace, name=name)
        print("The response of InferenceApi->delete_target_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->delete_target_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the target resource to delete. | [optional] 

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
**401** | Unauthorized access. This is most likely because the access token has  expired or the user API key is invalid.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_inference_profiles**
> InferenceProfiles get_inference_profiles(workspace=workspace, name=name)

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
    api_instance = majordomo_ai.InferenceApi(api_client)
    workspace = 'workspace_example' # str | Query a specific workspace for inference profiles. (optional)
    name = 'name_example' # str | The name of the inference profile to retrieve. (optional)

    try:
        # Get inference profiles.
        api_response = api_instance.get_inference_profiles(workspace=workspace, name=name)
        print("The response of InferenceApi->get_inference_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->get_inference_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for inference profiles. | [optional] 
 **name** | **str**| The name of the inference profile to retrieve. | [optional] 

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

# **get_model_catalog**
> ModelCatalog get_model_catalog(workspace=workspace, name=name, shared=shared)

Get model catalog.

Get a list of existing model catalog.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.model_catalog import ModelCatalog
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    workspace = 'workspace_example' # str | Query a specific workspace for model catalog. (optional)
    name = 'name_example' # str | The name of the model catalog to retrieve. (optional)
    shared = True # bool | Retrieve the catalog that are shared with this user by other users. (optional)

    try:
        # Get model catalog.
        api_response = api_instance.get_model_catalog(workspace=workspace, name=name, shared=shared)
        print("The response of InferenceApi->get_model_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->get_model_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for model catalog. | [optional] 
 **name** | **str**| The name of the model catalog to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the catalog that are shared with this user by other users. | [optional] 

### Return type

[**ModelCatalog**](ModelCatalog.md)

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

# **get_target_resources**
> TargetResources get_target_resources(workspace=workspace, name=name, shared=shared)

Get target resources.

Get a list of existing target resources.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.target_resources import TargetResources
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    workspace = 'workspace_example' # str | Query a specific workspace for target resources. (optional)
    name = 'name_example' # str | The name of the target resource to retrieve. (optional)
    shared = True # bool | Retrieve the profiles that are shared with this user by other users. (optional)

    try:
        # Get target resources.
        api_response = api_instance.get_target_resources(workspace=workspace, name=name, shared=shared)
        print("The response of InferenceApi->get_target_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->get_target_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for target resources. | [optional] 
 **name** | **str**| The name of the target resource to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the profiles that are shared with this user by other users. | [optional] 

### Return type

[**TargetResources**](TargetResources.md)

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

# **inference_profile_command**
> InferenceProfileCommand200Response inference_profile_command(inference_profile_command)

Send a command to inference pipeline.

Trigger a single run of an already created inference pipeline.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.inference_profile_command import InferenceProfileCommand
from majordomo_ai.models.inference_profile_command200_response import InferenceProfileCommand200Response
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    inference_profile_command = majordomo_ai.InferenceProfileCommand() # InferenceProfileCommand | 

    try:
        # Send a command to inference pipeline.
        api_response = api_instance.inference_profile_command(inference_profile_command)
        print("The response of InferenceApi->inference_profile_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->inference_profile_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inference_profile_command** | [**InferenceProfileCommand**](InferenceProfileCommand.md)|  | 

### Return type

[**InferenceProfileCommand200Response**](InferenceProfileCommand200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

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
    api_instance = majordomo_ai.InferenceApi(api_client)
    inference_profile = majordomo_ai.InferenceProfile() # InferenceProfile | 

    try:
        # Update inference profile.
        api_response = api_instance.update_inference_profile(inference_profile)
        print("The response of InferenceApi->update_inference_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->update_inference_profile: %s\n" % e)
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

# **update_model_catalog**
> ModelInfo update_model_catalog(model_config)

Update model catalog.

Update an existing model catalog.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.model_config import ModelConfig
from majordomo_ai.models.model_info import ModelInfo
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    model_config = majordomo_ai.ModelConfig() # ModelConfig | 

    try:
        # Update model catalog.
        api_response = api_instance.update_model_catalog(model_config)
        print("The response of InferenceApi->update_model_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->update_model_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_config** | [**ModelConfig**](ModelConfig.md)|  | 

### Return type

[**ModelInfo**](ModelInfo.md)

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

# **update_target_resource**
> TargetResourceInfo update_target_resource(target_resource)

Update target resource.

Update an existing target resource.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.target_resource import TargetResource
from majordomo_ai.models.target_resource_info import TargetResourceInfo
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
    api_instance = majordomo_ai.InferenceApi(api_client)
    target_resource = majordomo_ai.TargetResource() # TargetResource | 

    try:
        # Update target resource.
        api_response = api_instance.update_target_resource(target_resource)
        print("The response of InferenceApi->update_target_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InferenceApi->update_target_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target_resource** | [**TargetResource**](TargetResource.md)|  | 

### Return type

[**TargetResourceInfo**](TargetResourceInfo.md)

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


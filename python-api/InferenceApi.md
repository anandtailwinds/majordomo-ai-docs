# majordomo_ai.InferenceApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_inference_profile**](InferenceApi.md#create_inference_profile) | **POST** /inference_profiles | Create inference profile.
[**delete_inference_profiles**](InferenceApi.md#delete_inference_profiles) | **DELETE** /inference_profiles | Delete inference profile.
[**get_inference_profiles**](InferenceApi.md#get_inference_profiles) | **GET** /inference_profiles | Get inference profiles.
[**inference_profile_command**](InferenceApi.md#inference_profile_command) | **POST** /inference_profile_command/workspace/{workspace}/name/{name}/command/{command} | Send a command to inference pipeline.
[**update_inference_profile**](InferenceApi.md#update_inference_profile) | **PUT** /inference_profiles | Update inference profile.


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


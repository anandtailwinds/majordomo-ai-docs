# majordomo_ai.MonitorApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_monitor_profile**](MonitorApi.md#create_monitor_profile) | **POST** /monitor_profiles | Create monitor profile.
[**delete_monitor_profiles**](MonitorApi.md#delete_monitor_profiles) | **DELETE** /monitor_profiles | Delete monitor profiles.
[**get_aggregate_stats**](MonitorApi.md#get_aggregate_stats) | **GET** /aggregate_stats | Get token statistics.
[**get_data_count**](MonitorApi.md#get_data_count) | **GET** /data_count | Get the total count of various entities in the workspace.
[**get_logs**](MonitorApi.md#get_logs) | **GET** /logs | Get logs.
[**get_monitor_profiles**](MonitorApi.md#get_monitor_profiles) | **GET** /monitor_profiles | Get monitor profiles.
[**get_token_stats**](MonitorApi.md#get_token_stats) | **GET** /token_stats | Get token statistics.
[**get_topk_stats**](MonitorApi.md#get_topk_stats) | **GET** /topk_stats | Get token statistics.
[**update_monitor_profile**](MonitorApi.md#update_monitor_profile) | **PUT** /monitor_profiles | Update monitor profile.


# **create_monitor_profile**
> MonitorProfileInfo create_monitor_profile(monitor_profile)

Create monitor profile.

Create a new monitor profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.monitor_profile import MonitorProfile
from majordomo_ai.models.monitor_profile_info import MonitorProfileInfo
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    monitor_profile = majordomo_ai.MonitorProfile() # MonitorProfile | 

    try:
        # Create monitor profile.
        api_response = api_instance.create_monitor_profile(monitor_profile)
        print("The response of MonitorApi->create_monitor_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->create_monitor_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitor_profile** | [**MonitorProfile**](MonitorProfile.md)|  | 

### Return type

[**MonitorProfileInfo**](MonitorProfileInfo.md)

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

# **delete_monitor_profiles**
> DeleteResponse delete_monitor_profiles(workspace=workspace, name=name)

Delete monitor profiles.

Delete one or more existing monitor profiles.

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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the monitor profile is present.  (optional)
    name = 'name_example' # str | The name of the monitor profile to delete. (optional)

    try:
        # Delete monitor profiles.
        api_response = api_instance.delete_monitor_profiles(workspace=workspace, name=name)
        print("The response of MonitorApi->delete_monitor_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->delete_monitor_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the monitor profile is present.  | [optional] 
 **name** | **str**| The name of the monitor profile to delete. | [optional] 

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
**401** | Unauthorized access. This is most likely because the access token has  expired or the user API key is invalid.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_aggregate_stats**
> AggregateStats get_aggregate_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time, hour=hour)

Get token statistics.

Get token consumption statistics recorded for each RAG operation, filtered by timeframe.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.aggregate_stats import AggregateStats
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)
    user_name = 'user_name_example' # str | Filter the logs based on the username. (optional)
    start_time = 'start_time_example' # str | Filter the logs starting at this time. (optional)
    end_time = 'end_time_example' # str | Filter the logs ending at this time. (optional)
    hour = True # bool | Aggregate on an hourly basis, default is day basis. (optional)

    try:
        # Get token statistics.
        api_response = api_instance.get_aggregate_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time, hour=hour)
        print("The response of MonitorApi->get_aggregate_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_aggregate_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 
 **user_name** | **str**| Filter the logs based on the username. | [optional] 
 **start_time** | **str**| Filter the logs starting at this time. | [optional] 
 **end_time** | **str**| Filter the logs ending at this time. | [optional] 
 **hour** | **bool**| Aggregate on an hourly basis, default is day basis. | [optional] 

### Return type

[**AggregateStats**](AggregateStats.md)

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

# **get_data_count**
> DataCount get_data_count(workspace=workspace)

Get the total count of various entities in the workspace.

Get the total count of various entities in the workspace.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.data_count import DataCount
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)

    try:
        # Get the total count of various entities in the workspace.
        api_response = api_instance.get_data_count(workspace=workspace)
        print("The response of MonitorApi->get_data_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_data_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 

### Return type

[**DataCount**](DataCount.md)

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

# **get_logs**
> Logs get_logs(workspace=workspace, user_name=user_name, topic=topic, log_level=log_level, start_time=start_time, end_time=end_time)

Get logs.

Get a list of log messages filtered by specific parameters and timeframe.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.log_levels import LogLevels
from majordomo_ai.models.logs import Logs
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)
    user_name = 'user_name_example' # str | Filter the logs based on the username. (optional)
    topic = 'topic_example' # str | Filter the logs based on the topic. (optional)
    log_level = majordomo_ai.LogLevels() # LogLevels | Filter the logs based on the log_level. (optional)
    start_time = 'start_time_example' # str | Filter the logs starting at this time. (optional)
    end_time = 'end_time_example' # str | Filter the logs ending at this time. (optional)

    try:
        # Get logs.
        api_response = api_instance.get_logs(workspace=workspace, user_name=user_name, topic=topic, log_level=log_level, start_time=start_time, end_time=end_time)
        print("The response of MonitorApi->get_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 
 **user_name** | **str**| Filter the logs based on the username. | [optional] 
 **topic** | **str**| Filter the logs based on the topic. | [optional] 
 **log_level** | [**LogLevels**](.md)| Filter the logs based on the log_level. | [optional] 
 **start_time** | **str**| Filter the logs starting at this time. | [optional] 
 **end_time** | **str**| Filter the logs ending at this time. | [optional] 

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

# **get_monitor_profiles**
> MonitorProfiles get_monitor_profiles(workspace=workspace, name=name)

Get monitor profiles.

Get a list of existing monitor profiles.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.monitor_profiles import MonitorProfiles
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the monitor profile is present.  (optional)
    name = 'name_example' # str | The name of the monitor profile to retrieve. If none is provided all  monitor profiles are retrieved.  (optional)

    try:
        # Get monitor profiles.
        api_response = api_instance.get_monitor_profiles(workspace=workspace, name=name)
        print("The response of MonitorApi->get_monitor_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_monitor_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the monitor profile is present.  | [optional] 
 **name** | **str**| The name of the monitor profile to retrieve. If none is provided all  monitor profiles are retrieved.  | [optional] 

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

Get token statistics.

Get token consumption statistics recorded for each RAG operation, filtered by timeframe.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.token_stats import TokenStats
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)
    user_name = 'user_name_example' # str | Filter the logs based on the username. (optional)
    start_time = 'start_time_example' # str | Filter the logs starting at this time. (optional)
    end_time = 'end_time_example' # str | Filter the logs ending at this time. (optional)

    try:
        # Get token statistics.
        api_response = api_instance.get_token_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time)
        print("The response of MonitorApi->get_token_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_token_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 
 **user_name** | **str**| Filter the logs based on the username. | [optional] 
 **start_time** | **str**| Filter the logs starting at this time. | [optional] 
 **end_time** | **str**| Filter the logs ending at this time. | [optional] 

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

# **get_topk_stats**
> TopkStats get_topk_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time, hour=hour)

Get token statistics.

Get token consumption statistics recorded for each RAG operation, filtered by timeframe.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.topk_stats import TopkStats
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    workspace = 'workspace_example' # str | Filter the logs based on the workspace. (optional)
    user_name = 'user_name_example' # str | Filter the logs based on the username. (optional)
    start_time = 'start_time_example' # str | Filter the logs starting at this time. (optional)
    end_time = 'end_time_example' # str | Filter the logs ending at this time. (optional)
    hour = True # bool | Aggregate on an hourly basis, default is day basis. (optional)

    try:
        # Get token statistics.
        api_response = api_instance.get_topk_stats(workspace=workspace, user_name=user_name, start_time=start_time, end_time=end_time, hour=hour)
        print("The response of MonitorApi->get_topk_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_topk_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Filter the logs based on the workspace. | [optional] 
 **user_name** | **str**| Filter the logs based on the username. | [optional] 
 **start_time** | **str**| Filter the logs starting at this time. | [optional] 
 **end_time** | **str**| Filter the logs ending at this time. | [optional] 
 **hour** | **bool**| Aggregate on an hourly basis, default is day basis. | [optional] 

### Return type

[**TopkStats**](TopkStats.md)

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

# **update_monitor_profile**
> MonitorProfileInfo update_monitor_profile(monitor_profile)

Update monitor profile.

Update an existing monitor profile.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.monitor_profile import MonitorProfile
from majordomo_ai.models.monitor_profile_info import MonitorProfileInfo
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
    api_instance = majordomo_ai.MonitorApi(api_client)
    monitor_profile = majordomo_ai.MonitorProfile() # MonitorProfile | 

    try:
        # Update monitor profile.
        api_response = api_instance.update_monitor_profile(monitor_profile)
        print("The response of MonitorApi->update_monitor_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->update_monitor_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitor_profile** | [**MonitorProfile**](MonitorProfile.md)|  | 

### Return type

[**MonitorProfileInfo**](MonitorProfileInfo.md)

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


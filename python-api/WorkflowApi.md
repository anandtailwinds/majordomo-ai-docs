# majordomo_ai.WorkflowApi

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workflow**](WorkflowApi.md#create_workflow) | **POST** /workflows | Create workflow.
[**delete_workflows**](WorkflowApi.md#delete_workflows) | **DELETE** /workflows | Delete workflow.
[**get_workflows**](WorkflowApi.md#get_workflows) | **GET** /workflows | Get workflows.
[**run_workflow**](WorkflowApi.md#run_workflow) | **POST** /workflow_run | Run query pipeline.
[**update_workflow**](WorkflowApi.md#update_workflow) | **PUT** /workflows | Update workflow.


# **create_workflow**
> WorkflowInfo create_workflow(workflow)

Create workflow.

Create a new workflow.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workflow import Workflow
from majordomo_ai.models.workflow_info import WorkflowInfo
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
    api_instance = majordomo_ai.WorkflowApi(api_client)
    workflow = majordomo_ai.Workflow() # Workflow | 

    try:
        # Create workflow.
        api_response = api_instance.create_workflow(workflow)
        print("The response of WorkflowApi->create_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowApi->create_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow** | [**Workflow**](Workflow.md)|  | 

### Return type

[**WorkflowInfo**](WorkflowInfo.md)

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

# **delete_workflows**
> DeleteResponse delete_workflows(workspace=workspace, name=name)

Delete workflow.

Delete one or more configured workflows.

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
    api_instance = majordomo_ai.WorkflowApi(api_client)
    workspace = 'workspace_example' # str | The name of the workspace in which the profile exists. (optional)
    name = 'name_example' # str | The name of the workflow to delete. (optional)

    try:
        # Delete workflow.
        api_response = api_instance.delete_workflows(workspace=workspace, name=name)
        print("The response of WorkflowApi->delete_workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowApi->delete_workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| The name of the workspace in which the profile exists. | [optional] 
 **name** | **str**| The name of the workflow to delete. | [optional] 

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

# **get_workflows**
> Workflows get_workflows(workspace=workspace, name=name, shared=shared)

Get workflows.

Get a list of existing workflows.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workflows import Workflows
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
    api_instance = majordomo_ai.WorkflowApi(api_client)
    workspace = 'workspace_example' # str | Query a specific workspace for workflows. (optional)
    name = 'name_example' # str | The name of the workflow to retrieve. (optional)
    shared = True # bool | Retrieve the profiles that are shared with this user by other users. (optional)

    try:
        # Get workflows.
        api_response = api_instance.get_workflows(workspace=workspace, name=name, shared=shared)
        print("The response of WorkflowApi->get_workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowApi->get_workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**| Query a specific workspace for workflows. | [optional] 
 **name** | **str**| The name of the workflow to retrieve. | [optional] 
 **shared** | **bool**| Retrieve the profiles that are shared with this user by other users. | [optional] 

### Return type

[**Workflows**](Workflows.md)

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

# **run_workflow**
> QueryResponse run_workflow(workflow_run)

Run query pipeline.

Run an already defined workflow.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.query_response import QueryResponse
from majordomo_ai.models.workflow_run import WorkflowRun
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
    api_instance = majordomo_ai.WorkflowApi(api_client)
    workflow_run = majordomo_ai.WorkflowRun() # WorkflowRun | 

    try:
        # Run query pipeline.
        api_response = api_instance.run_workflow(workflow_run)
        print("The response of WorkflowApi->run_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowApi->run_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_run** | [**WorkflowRun**](WorkflowRun.md)|  | 

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

# **update_workflow**
> WorkflowInfo update_workflow(workflow)

Update workflow.

Update an existing workflow.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import majordomo_ai
from majordomo_ai.models.workflow import Workflow
from majordomo_ai.models.workflow_info import WorkflowInfo
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
    api_instance = majordomo_ai.WorkflowApi(api_client)
    workflow = majordomo_ai.Workflow() # Workflow | 

    try:
        # Update workflow.
        api_response = api_instance.update_workflow(workflow)
        print("The response of WorkflowApi->update_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowApi->update_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow** | [**Workflow**](Workflow.md)|  | 

### Return type

[**WorkflowInfo**](WorkflowInfo.md)

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


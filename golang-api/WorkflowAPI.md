# \WorkflowAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateWorkflow**](WorkflowAPI.md#CreateWorkflow) | **Post** /workflows | Create workflow.
[**DeleteWorkflows**](WorkflowAPI.md#DeleteWorkflows) | **Delete** /workflows | Delete workflow.
[**GetWorkflows**](WorkflowAPI.md#GetWorkflows) | **Get** /workflows | Get workflows.
[**RunWorkflow**](WorkflowAPI.md#RunWorkflow) | **Post** /workflow_run | Run query pipeline.
[**UpdateWorkflow**](WorkflowAPI.md#UpdateWorkflow) | **Put** /workflows | Update workflow.



## CreateWorkflow

> WorkflowInfo CreateWorkflow(ctx).Workflow(workflow).Execute()

Create workflow.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	workflow := *openapiclient.NewWorkflow("Workspace_example", "Name_example", "WorkflowType_example", []openapiclient.WorkflowStep{*openapiclient.NewWorkflowStep("Name_example", map[string]interface{}{"key": interface{}(123)})}) // Workflow | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflowAPI.CreateWorkflow(context.Background()).Workflow(workflow).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflowAPI.CreateWorkflow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWorkflow`: WorkflowInfo
	fmt.Fprintf(os.Stdout, "Response from `WorkflowAPI.CreateWorkflow`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow** | [**Workflow**](Workflow.md) |  | 

### Return type

[**WorkflowInfo**](WorkflowInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWorkflows

> DeleteResponse DeleteWorkflows(ctx).Workspace(workspace).Name(name).Execute()

Delete workflow.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	workspace := "workspace_example" // string | The name of the workspace in which the profile exists. (optional)
	name := "name_example" // string | The name of the workflow to delete. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflowAPI.DeleteWorkflows(context.Background()).Workspace(workspace).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflowAPI.DeleteWorkflows``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWorkflows`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkflowAPI.DeleteWorkflows`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkflowsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace in which the profile exists. | 
 **name** | **string** | The name of the workflow to delete. | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkflows

> Workflows GetWorkflows(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

Get workflows.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	workspace := "workspace_example" // string | Query a specific workspace for workflows. (optional)
	name := "name_example" // string | The name of the workflow to retrieve. (optional)
	shared := true // bool | Retrieve the profiles that are shared with this user by other users. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflowAPI.GetWorkflows(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflowAPI.GetWorkflows``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWorkflows`: Workflows
	fmt.Fprintf(os.Stdout, "Response from `WorkflowAPI.GetWorkflows`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Query a specific workspace for workflows. | 
 **name** | **string** | The name of the workflow to retrieve. | 
 **shared** | **bool** | Retrieve the profiles that are shared with this user by other users. | 

### Return type

[**Workflows**](Workflows.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RunWorkflow

> QueryResponse RunWorkflow(ctx).WorkflowRun(workflowRun).Execute()

Run query pipeline.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	workflowRun := *openapiclient.NewWorkflowRun("Workspace_example", "Name_example") // WorkflowRun | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflowAPI.RunWorkflow(context.Background()).WorkflowRun(workflowRun).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflowAPI.RunWorkflow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RunWorkflow`: QueryResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkflowAPI.RunWorkflow`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRunWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowRun** | [**WorkflowRun**](WorkflowRun.md) |  | 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWorkflow

> WorkflowInfo UpdateWorkflow(ctx).Workflow(workflow).Execute()

Update workflow.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	workflow := *openapiclient.NewWorkflow("Workspace_example", "Name_example", "WorkflowType_example", []openapiclient.WorkflowStep{*openapiclient.NewWorkflowStep("Name_example", map[string]interface{}{"key": interface{}(123)})}) // Workflow | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflowAPI.UpdateWorkflow(context.Background()).Workflow(workflow).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflowAPI.UpdateWorkflow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWorkflow`: WorkflowInfo
	fmt.Fprintf(os.Stdout, "Response from `WorkflowAPI.UpdateWorkflow`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkflowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow** | [**Workflow**](Workflow.md) |  | 

### Return type

[**WorkflowInfo**](WorkflowInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


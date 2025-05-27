# \InferenceAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateInferenceProfile**](InferenceAPI.md#CreateInferenceProfile) | **Post** /inference_profiles | Create inference profile.
[**CreateModelCatalog**](InferenceAPI.md#CreateModelCatalog) | **Post** /model_catalog | Create model catalog.
[**CreateTargetResource**](InferenceAPI.md#CreateTargetResource) | **Post** /target_resource | Create target resource.
[**DeleteInferenceProfiles**](InferenceAPI.md#DeleteInferenceProfiles) | **Delete** /inference_profiles | Delete inference profile.
[**DeleteModelCatalog**](InferenceAPI.md#DeleteModelCatalog) | **Delete** /model_catalog | Delete model catalog.
[**DeleteTargetResources**](InferenceAPI.md#DeleteTargetResources) | **Delete** /target_resource | Delete target resource.
[**GetInferenceProfiles**](InferenceAPI.md#GetInferenceProfiles) | **Get** /inference_profiles | Get inference profiles.
[**GetModelCatalog**](InferenceAPI.md#GetModelCatalog) | **Get** /model_catalog | Get model catalog.
[**GetTargetResources**](InferenceAPI.md#GetTargetResources) | **Get** /target_resource | Get target resources.
[**InferenceProfileCommand**](InferenceAPI.md#InferenceProfileCommand) | **Post** /inference_profile_command | Send a command to inference pipeline.
[**TestInference**](InferenceAPI.md#TestInference) | **Post** /test_inference | Process or terminate a test inference request.
[**UpdateInferenceProfile**](InferenceAPI.md#UpdateInferenceProfile) | **Put** /inference_profiles | Update inference profile.
[**UpdateModelCatalog**](InferenceAPI.md#UpdateModelCatalog) | **Put** /model_catalog | Update model catalog.
[**UpdateTargetResource**](InferenceAPI.md#UpdateTargetResource) | **Put** /target_resource | Update target resource.



## CreateInferenceProfile

> InferenceProfileInfo CreateInferenceProfile(ctx).InferenceProfile(inferenceProfile).Execute()

Create inference profile.



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
	inferenceProfile := *openapiclient.NewInferenceProfile("{"name":"LLama-dev"}", "Workspace_example", "ModelName_example", "TargetResourceName_example") // InferenceProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.CreateInferenceProfile(context.Background()).InferenceProfile(inferenceProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.CreateInferenceProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateInferenceProfile`: InferenceProfileInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.CreateInferenceProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateInferenceProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inferenceProfile** | [**InferenceProfile**](InferenceProfile.md) |  | 

### Return type

[**InferenceProfileInfo**](InferenceProfileInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateModelCatalog

> ModelInfo CreateModelCatalog(ctx).ModelConfig(modelConfig).Execute()

Create model catalog.



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
	modelConfig := *openapiclient.NewModelConfig("{"name":"llama-3.2-7b"}", "{"name":"Engineering"}", "{"name":"LLama model for text generation"}", openapiclient.ModelPackages(1)) // ModelConfig | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.CreateModelCatalog(context.Background()).ModelConfig(modelConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.CreateModelCatalog``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateModelCatalog`: ModelInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.CreateModelCatalog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateModelCatalogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelConfig** | [**ModelConfig**](ModelConfig.md) |  | 

### Return type

[**ModelInfo**](ModelInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTargetResource

> TargetResourceInfo CreateTargetResource(ctx).TargetResource(targetResource).Execute()

Create target resource.



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
	targetResource := *openapiclient.NewTargetResource("{"name":"Engineering"}", "{"name":"4vCPU-US-EAST-1"}", openapiclient.TargetResourceTypes(1), map[string]interface{}{"key": interface{}(123)}) // TargetResource | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.CreateTargetResource(context.Background()).TargetResource(targetResource).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.CreateTargetResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTargetResource`: TargetResourceInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.CreateTargetResource`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTargetResourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetResource** | [**TargetResource**](TargetResource.md) |  | 

### Return type

[**TargetResourceInfo**](TargetResourceInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteInferenceProfiles

> DeleteResponse DeleteInferenceProfiles(ctx).Workspace(workspace).Name(name).Logs(logs).Execute()

Delete inference profile.



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
	name := "name_example" // string | The name of the inference profile to delete. (optional)
	logs := true // bool | Delete only logs of the matching entries. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.DeleteInferenceProfiles(context.Background()).Workspace(workspace).Name(name).Logs(logs).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.DeleteInferenceProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteInferenceProfiles`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.DeleteInferenceProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInferenceProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace in which the profile exists. | 
 **name** | **string** | The name of the inference profile to delete. | 
 **logs** | **bool** | Delete only logs of the matching entries. | 

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


## DeleteModelCatalog

> DeleteResponse DeleteModelCatalog(ctx).Workspace(workspace).Name(name).Execute()

Delete model catalog.



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
	workspace := "workspace_example" // string | The name of the workspace in which the catalog exists. (optional)
	name := "name_example" // string | The name of the model catalog to delete. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.DeleteModelCatalog(context.Background()).Workspace(workspace).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.DeleteModelCatalog``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteModelCatalog`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.DeleteModelCatalog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteModelCatalogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace in which the catalog exists. | 
 **name** | **string** | The name of the model catalog to delete. | 

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


## DeleteTargetResources

> DeleteResponse DeleteTargetResources(ctx).Workspace(workspace).Name(name).Execute()

Delete target resource.



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
	name := "name_example" // string | The name of the target resource to delete. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.DeleteTargetResources(context.Background()).Workspace(workspace).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.DeleteTargetResources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteTargetResources`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.DeleteTargetResources`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTargetResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace in which the profile exists. | 
 **name** | **string** | The name of the target resource to delete. | 

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


## GetInferenceProfiles

> InferenceProfiles GetInferenceProfiles(ctx).Workspace(workspace).Name(name).Execute()

Get inference profiles.



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
	workspace := "workspace_example" // string | Query a specific workspace for inference profiles. (optional)
	name := "name_example" // string | The name of the inference profile to retrieve. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.GetInferenceProfiles(context.Background()).Workspace(workspace).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.GetInferenceProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInferenceProfiles`: InferenceProfiles
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.GetInferenceProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInferenceProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Query a specific workspace for inference profiles. | 
 **name** | **string** | The name of the inference profile to retrieve. | 

### Return type

[**InferenceProfiles**](InferenceProfiles.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetModelCatalog

> ModelCatalog GetModelCatalog(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

Get model catalog.



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
	workspace := "workspace_example" // string | Query a specific workspace for model catalog. (optional)
	name := "name_example" // string | The name of the model catalog to retrieve. (optional)
	shared := true // bool | Retrieve the catalog that are shared with this user by other users. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.GetModelCatalog(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.GetModelCatalog``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetModelCatalog`: ModelCatalog
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.GetModelCatalog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetModelCatalogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Query a specific workspace for model catalog. | 
 **name** | **string** | The name of the model catalog to retrieve. | 
 **shared** | **bool** | Retrieve the catalog that are shared with this user by other users. | 

### Return type

[**ModelCatalog**](ModelCatalog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTargetResources

> TargetResources GetTargetResources(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

Get target resources.



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
	workspace := "workspace_example" // string | Query a specific workspace for target resources. (optional)
	name := "name_example" // string | The name of the target resource to retrieve. (optional)
	shared := true // bool | Retrieve the profiles that are shared with this user by other users. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.GetTargetResources(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.GetTargetResources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTargetResources`: TargetResources
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.GetTargetResources`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTargetResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Query a specific workspace for target resources. | 
 **name** | **string** | The name of the target resource to retrieve. | 
 **shared** | **bool** | Retrieve the profiles that are shared with this user by other users. | 

### Return type

[**TargetResources**](TargetResources.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InferenceProfileCommand

> InferenceProfileCommand200Response InferenceProfileCommand(ctx).InferenceProfileCommand(inferenceProfileCommand).Execute()

Send a command to inference pipeline.



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
	inferenceProfileCommand := *openapiclient.NewInferenceProfileCommand("Workspace_example", "Name_example", openapiclient.DeploymentCommands(1)) // InferenceProfileCommand | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.InferenceProfileCommand(context.Background()).InferenceProfileCommand(inferenceProfileCommand).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.InferenceProfileCommand``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `InferenceProfileCommand`: InferenceProfileCommand200Response
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.InferenceProfileCommand`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiInferenceProfileCommandRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inferenceProfileCommand** | [**InferenceProfileCommand**](InferenceProfileCommand.md) |  | 

### Return type

[**InferenceProfileCommand200Response**](InferenceProfileCommand200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TestInference

> TestInferenceInfo TestInference(ctx).TestInference(testInference).Execute()

Process or terminate a test inference request.



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
	testInference := *openapiclient.NewTestInference("Workspace_example", "req_12345", "http://1.2.3.4/v1/completion", map[string]interface{}{"key": interface{}(123)}) // TestInference | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.TestInference(context.Background()).TestInference(testInference).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.TestInference``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestInference`: TestInferenceInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.TestInference`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTestInferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testInference** | [**TestInference**](TestInference.md) |  | 

### Return type

[**TestInferenceInfo**](TestInferenceInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateInferenceProfile

> InferenceProfileInfo UpdateInferenceProfile(ctx).InferenceProfile(inferenceProfile).Execute()

Update inference profile.



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
	inferenceProfile := *openapiclient.NewInferenceProfile("{"name":"LLama-dev"}", "Workspace_example", "ModelName_example", "TargetResourceName_example") // InferenceProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.UpdateInferenceProfile(context.Background()).InferenceProfile(inferenceProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.UpdateInferenceProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateInferenceProfile`: InferenceProfileInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.UpdateInferenceProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateInferenceProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inferenceProfile** | [**InferenceProfile**](InferenceProfile.md) |  | 

### Return type

[**InferenceProfileInfo**](InferenceProfileInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateModelCatalog

> ModelInfo UpdateModelCatalog(ctx).ModelConfig(modelConfig).Execute()

Update model catalog.



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
	modelConfig := *openapiclient.NewModelConfig("{"name":"llama-3.2-7b"}", "{"name":"Engineering"}", "{"name":"LLama model for text generation"}", openapiclient.ModelPackages(1)) // ModelConfig | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.UpdateModelCatalog(context.Background()).ModelConfig(modelConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.UpdateModelCatalog``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateModelCatalog`: ModelInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.UpdateModelCatalog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateModelCatalogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelConfig** | [**ModelConfig**](ModelConfig.md) |  | 

### Return type

[**ModelInfo**](ModelInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTargetResource

> TargetResourceInfo UpdateTargetResource(ctx).TargetResource(targetResource).Execute()

Update target resource.



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
	targetResource := *openapiclient.NewTargetResource("{"name":"Engineering"}", "{"name":"4vCPU-US-EAST-1"}", openapiclient.TargetResourceTypes(1), map[string]interface{}{"key": interface{}(123)}) // TargetResource | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.UpdateTargetResource(context.Background()).TargetResource(targetResource).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.UpdateTargetResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTargetResource`: TargetResourceInfo
	fmt.Fprintf(os.Stdout, "Response from `InferenceAPI.UpdateTargetResource`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTargetResourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetResource** | [**TargetResource**](TargetResource.md) |  | 

### Return type

[**TargetResourceInfo**](TargetResourceInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


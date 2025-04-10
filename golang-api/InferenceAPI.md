# \InferenceAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateInferenceProfile**](InferenceAPI.md#CreateInferenceProfile) | **Post** /inference_profiles | Create inference profile.
[**DeleteInferenceProfiles**](InferenceAPI.md#DeleteInferenceProfiles) | **Delete** /inference_profiles | Delete inference profile.
[**GetInferenceProfiles**](InferenceAPI.md#GetInferenceProfiles) | **Get** /inference_profiles | Get inference profiles.
[**InferenceProfileCommand**](InferenceAPI.md#InferenceProfileCommand) | **Post** /inference_profile_command/workspace/{workspace}/name/{name}/command/{command} | Send a command to inference pipeline.
[**UpdateInferenceProfile**](InferenceAPI.md#UpdateInferenceProfile) | **Put** /inference_profiles | Update inference profile.



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
	inferenceProfile := *openapiclient.NewInferenceProfile("{"name":"LLama-dev"}", "Workspace_example", *openapiclient.NewModelSpec(openapiclient.ModelSources(1), "AppProfileName_example", map[string]interface{}{"key": interface{}(123)}), *openapiclient.NewDeploymentSpec()) // InferenceProfile | 

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


## DeleteInferenceProfiles

> DeleteResponse DeleteInferenceProfiles(ctx).Workspace(workspace).Name(name).Force(force).Execute()

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
	force := true // bool | Force delete all query pipelines or data stores that are referring to this inference profile. This will also delete all usages of inference profile done by users with whom the profile is shared. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.DeleteInferenceProfiles(context.Background()).Workspace(workspace).Name(name).Force(force).Execute()
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
 **force** | **bool** | Force delete all query pipelines or data stores that are referring to this inference profile. This will also delete all usages of inference profile done by users with whom the profile is shared. | 

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

> InferenceProfiles GetInferenceProfiles(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

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
	shared := true // bool | Retrieve the profiles that are shared with this user by other users. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InferenceAPI.GetInferenceProfiles(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
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
 **shared** | **bool** | Retrieve the profiles that are shared with this user by other users. | 

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


## InferenceProfileCommand

> InferenceProfileCommand(ctx, workspace, name, command).Execute()

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
	workspace := "workspace_example" // string | The name of the workspace in which the inference pipeline is present.
	name := "name_example" // string | The name of the inference pipeline.
	command := openapiclient.DeploymentCommands(1) // DeploymentCommands | The command to be executed on the inference pipeline.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.InferenceAPI.InferenceProfileCommand(context.Background(), workspace, name, command).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InferenceAPI.InferenceProfileCommand``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workspace** | **string** | The name of the workspace in which the inference pipeline is present. | 
**name** | **string** | The name of the inference pipeline. | 
**command** | [**DeploymentCommands**](.md) | The command to be executed on the inference pipeline. | 

### Other Parameters

Other parameters are passed through a pointer to a apiInferenceProfileCommandRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

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
	inferenceProfile := *openapiclient.NewInferenceProfile("{"name":"LLama-dev"}", "Workspace_example", *openapiclient.NewModelSpec(openapiclient.ModelSources(1), "AppProfileName_example", map[string]interface{}{"key": interface{}(123)}), *openapiclient.NewDeploymentSpec()) // InferenceProfile | 

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


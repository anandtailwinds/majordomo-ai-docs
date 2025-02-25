# \AdminAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateModelProfile**](AdminAPI.md#CreateModelProfile) | **Post** /model_profiles | Create model profile.
[**CreateUser**](AdminAPI.md#CreateUser) | **Post** /users | Add user.
[**CreateVectordbProfile**](AdminAPI.md#CreateVectordbProfile) | **Post** /vectordb_profiles | Create vectordb profile.
[**CreateWorker**](AdminAPI.md#CreateWorker) | **Post** /workers | Create worker node.
[**CreateWorkspace**](AdminAPI.md#CreateWorkspace) | **Post** /workspaces | Create workspace.
[**DeleteModelProfiles**](AdminAPI.md#DeleteModelProfiles) | **Delete** /model_profiles | Delete model profile.
[**DeleteUser**](AdminAPI.md#DeleteUser) | **Delete** /users | Delete user.
[**DeleteVectordbProfiles**](AdminAPI.md#DeleteVectordbProfiles) | **Delete** /vectordb_profiles | Delete vectordb profiles.
[**DeleteWorkers**](AdminAPI.md#DeleteWorkers) | **Delete** /workers | Delete worker nodes.
[**DeleteWorkspaces**](AdminAPI.md#DeleteWorkspaces) | **Delete** /workspaces | Delete workspace.
[**GetAllowedProfiles**](AdminAPI.md#GetAllowedProfiles) | **Get** /allowed_profiles | Get permitted profiles for a specific user.
[**GetModelProfiles**](AdminAPI.md#GetModelProfiles) | **Get** /model_profiles | Get model profiles.
[**GetUserList**](AdminAPI.md#GetUserList) | **Get** /user_list | Get list of all users.
[**GetUsers**](AdminAPI.md#GetUsers) | **Get** /users | Get users list.
[**GetVectordbProfiles**](AdminAPI.md#GetVectordbProfiles) | **Get** /vectordb_profiles | Get vectordb profiles.
[**GetWorkers**](AdminAPI.md#GetWorkers) | **Get** /workers | Get worker nodes.
[**GetWorkspaces**](AdminAPI.md#GetWorkspaces) | **Get** /workspaces | Get workspaces.
[**UpdateModelProfile**](AdminAPI.md#UpdateModelProfile) | **Put** /model_profiles | Update model profile.
[**UpdateUser**](AdminAPI.md#UpdateUser) | **Put** /users | Update user.
[**UpdateVectordbProfile**](AdminAPI.md#UpdateVectordbProfile) | **Put** /vectordb_profiles | Update vectordb profile.
[**UpdateWorker**](AdminAPI.md#UpdateWorker) | **Put** /workers | Update worker node.
[**UpdateWorkspace**](AdminAPI.md#UpdateWorkspace) | **Put** /workspaces | Update workspace.



## CreateModelProfile

> ModelProfile CreateModelProfile(ctx).ModelProfile(modelProfile).Execute()

Create model profile.



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
	modelProfile := *openapiclient.NewModelProfile("{"name":"OpenAI-Dev"}", openapiclient.ModelProviders(1), "{"name":"Engineering"}") // ModelProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.CreateModelProfile(context.Background()).ModelProfile(modelProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.CreateModelProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateModelProfile`: ModelProfile
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.CreateModelProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateModelProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelProfile** | [**ModelProfile**](ModelProfile.md) |  | 

### Return type

[**ModelProfile**](ModelProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateUser

> UserInfo CreateUser(ctx).User(user).Execute()

Add user.



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
	user := *openapiclient.NewUser("UserName_example", "FirstName_example", "LastName_example", "Password_example", false) // User | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.CreateUser(context.Background()).User(user).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.CreateUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateUser`: UserInfo
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.CreateUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md) |  | 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateVectordbProfile

> VectordbProfile CreateVectordbProfile(ctx).VectordbProfile(vectordbProfile).Execute()

Create vectordb profile.



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
	vectordbProfile := *openapiclient.NewVectordbProfile("Name_example", openapiclient.VectordbProviders(1), "{"name":"Engineering"}") // VectordbProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.CreateVectordbProfile(context.Background()).VectordbProfile(vectordbProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.CreateVectordbProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateVectordbProfile`: VectordbProfile
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.CreateVectordbProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateVectordbProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vectordbProfile** | [**VectordbProfile**](VectordbProfile.md) |  | 

### Return type

[**VectordbProfile**](VectordbProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateWorker

> WorkerInfo CreateWorker(ctx).Worker(worker).Execute()

Create worker node.



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
	worker := *openapiclient.NewWorker("Name_example") // Worker | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.CreateWorker(context.Background()).Worker(worker).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.CreateWorker``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWorker`: WorkerInfo
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.CreateWorker`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **worker** | [**Worker**](Worker.md) |  | 

### Return type

[**WorkerInfo**](WorkerInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateWorkspace

> WorkspaceInfo CreateWorkspace(ctx).Workspace(workspace).Execute()

Create workspace.



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
	workspace := *openapiclient.NewWorkspace("Name_example", "WorkerName_example") // Workspace | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.CreateWorkspace(context.Background()).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.CreateWorkspace``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWorkspace`: WorkspaceInfo
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.CreateWorkspace`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkspaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**Workspace**](Workspace.md) |  | 

### Return type

[**WorkspaceInfo**](WorkspaceInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteModelProfiles

> DeleteResponse DeleteModelProfiles(ctx).Workspace(workspace).Name(name).Force(force).Execute()

Delete model profile.



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
	name := "name_example" // string | The name of the model profile to delete. (optional)
	force := true // bool | Force delete all query pipelines or data stores that are referring to this model profile. This will also delete all usages of model profile done by users with whom the profile is shared. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.DeleteModelProfiles(context.Background()).Workspace(workspace).Name(name).Force(force).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.DeleteModelProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteModelProfiles`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.DeleteModelProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteModelProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace in which the profile exists. | 
 **name** | **string** | The name of the model profile to delete. | 
 **force** | **bool** | Force delete all query pipelines or data stores that are referring to this model profile. This will also delete all usages of model profile done by users with whom the profile is shared. | 

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


## DeleteUser

> DeleteResponse DeleteUser(ctx).Name(name).Execute()

Delete user.



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
	name := "name_example" // string | The name of the user to delete. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.DeleteUser(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.DeleteUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteUser`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.DeleteUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | The name of the user to delete. | 

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


## DeleteVectordbProfiles

> DeleteResponse DeleteVectordbProfiles(ctx).Workspace(workspace).Name(name).Force(force).Execute()

Delete vectordb profiles.



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
	name := "name_example" // string | The name of the vectordb profile to delete. (optional)
	force := true // bool | Force delete all query pipelines or data stores that are referring to this vectordb profile. This will also delete all usages of vectordb profile done by users with whom the profile is shared. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.DeleteVectordbProfiles(context.Background()).Workspace(workspace).Name(name).Force(force).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.DeleteVectordbProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteVectordbProfiles`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.DeleteVectordbProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteVectordbProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace in which the profile exists. | 
 **name** | **string** | The name of the vectordb profile to delete. | 
 **force** | **bool** | Force delete all query pipelines or data stores that are referring to this vectordb profile. This will also delete all usages of vectordb profile done by users with whom the profile is shared. | 

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


## DeleteWorkers

> DeleteWorkers(ctx).Name(name).Execute()

Delete worker nodes.



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
	name := "name_example" // string | Name of the worker to delete. Any references to this worker need to be deleted first before this operation can succeed.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AdminAPI.DeleteWorkers(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.DeleteWorkers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | Name of the worker to delete. Any references to this worker need to be deleted first before this operation can succeed. | 

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


## DeleteWorkspaces

> DeleteResponse DeleteWorkspaces(ctx).Name(name).Execute()

Delete workspace.



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
	name := "name_example" // string | Name of the workspaces to delete. Any references to this workspace need to be deleted first before this operation can succeed.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.DeleteWorkspaces(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.DeleteWorkspaces``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWorkspaces`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.DeleteWorkspaces`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkspacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | Name of the workspaces to delete. Any references to this workspace need to be deleted first before this operation can succeed. | 

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


## GetAllowedProfiles

> AllowedProfiles GetAllowedProfiles(ctx).Workspace(workspace).Execute()

Get permitted profiles for a specific user.



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
	workspace := "workspace_example" // string | The name of the workspace to retrieve the information for.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetAllowedProfiles(context.Background()).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetAllowedProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllowedProfiles`: AllowedProfiles
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetAllowedProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllowedProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The name of the workspace to retrieve the information for. | 

### Return type

[**AllowedProfiles**](AllowedProfiles.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetModelProfiles

> ModelProfiles GetModelProfiles(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

Get model profiles.



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
	workspace := "workspace_example" // string | Query a specific workspace for model profiles. (optional)
	name := "name_example" // string | The name of the model profile to retrieve. (optional)
	shared := true // bool | Retrieve the profiles that are shared with this user by other users. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetModelProfiles(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetModelProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetModelProfiles`: ModelProfiles
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetModelProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetModelProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Query a specific workspace for model profiles. | 
 **name** | **string** | The name of the model profile to retrieve. | 
 **shared** | **bool** | Retrieve the profiles that are shared with this user by other users. | 

### Return type

[**ModelProfiles**](ModelProfiles.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserList

> []string GetUserList(ctx).Name(name).Workspace(workspace).Execute()

Get list of all users.



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
	name := "name_example" // string | Get information specific to a user. (optional)
	workspace := "workspace_example" // string | Get list of active users in a workspace. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetUserList(context.Background()).Name(name).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetUserList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserList`: []string
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetUserList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | Get information specific to a user. | 
 **workspace** | **string** | Get list of active users in a workspace. | 

### Return type

**[]string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUsers

> Users GetUsers(ctx).Name(name).Execute()

Get users list.



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
	name := "name_example" // string | Get information specific to a user. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetUsers(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetUsers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUsers`: Users
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetUsers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUsersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | Get information specific to a user. | 

### Return type

[**Users**](Users.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetVectordbProfiles

> VectordbProfiles GetVectordbProfiles(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

Get vectordb profiles.



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
	workspace := "workspace_example" // string | Query a specific workspace for model profiles. (optional)
	name := "name_example" // string | The name of the vectordb profile to retrieve. (optional)
	shared := true // bool | Retrieve the profiles that are shared with this user by other users. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetVectordbProfiles(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetVectordbProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetVectordbProfiles`: VectordbProfiles
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetVectordbProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetVectordbProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Query a specific workspace for model profiles. | 
 **name** | **string** | The name of the vectordb profile to retrieve. | 
 **shared** | **bool** | Retrieve the profiles that are shared with this user by other users. | 

### Return type

[**VectordbProfiles**](VectordbProfiles.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkers

> Workers GetWorkers(ctx).Name(name).Execute()

Get worker nodes.



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
	name := "name_example" // string | Name of the specific worker to retrieve. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetWorkers(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetWorkers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWorkers`: Workers
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetWorkers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | Name of the specific worker to retrieve. | 

### Return type

[**Workers**](Workers.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkspaces

> Workspaces GetWorkspaces(ctx).Name(name).Execute()

Get workspaces.



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
	name := "name_example" // string | Name of the workspace (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.GetWorkspaces(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.GetWorkspaces``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWorkspaces`: Workspaces
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.GetWorkspaces`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkspacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | Name of the workspace | 

### Return type

[**Workspaces**](Workspaces.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateModelProfile

> ModelProfile UpdateModelProfile(ctx).ModelProfile(modelProfile).Execute()

Update model profile.



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
	modelProfile := *openapiclient.NewModelProfile("{"name":"OpenAI-Dev"}", openapiclient.ModelProviders(1), "{"name":"Engineering"}") // ModelProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.UpdateModelProfile(context.Background()).ModelProfile(modelProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.UpdateModelProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateModelProfile`: ModelProfile
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.UpdateModelProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateModelProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelProfile** | [**ModelProfile**](ModelProfile.md) |  | 

### Return type

[**ModelProfile**](ModelProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUser

> UserInfo UpdateUser(ctx).User(user).Execute()

Update user.



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
	user := *openapiclient.NewUser("UserName_example", "FirstName_example", "LastName_example", "Password_example", false) // User | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.UpdateUser(context.Background()).User(user).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.UpdateUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateUser`: UserInfo
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.UpdateUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md) |  | 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateVectordbProfile

> VectordbProfile UpdateVectordbProfile(ctx).VectordbProfile(vectordbProfile).Execute()

Update vectordb profile.



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
	vectordbProfile := *openapiclient.NewVectordbProfile("Name_example", openapiclient.VectordbProviders(1), "{"name":"Engineering"}") // VectordbProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.UpdateVectordbProfile(context.Background()).VectordbProfile(vectordbProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.UpdateVectordbProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateVectordbProfile`: VectordbProfile
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.UpdateVectordbProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateVectordbProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vectordbProfile** | [**VectordbProfile**](VectordbProfile.md) |  | 

### Return type

[**VectordbProfile**](VectordbProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWorker

> WorkerInfo UpdateWorker(ctx).Worker(worker).Execute()

Update worker node.



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
	worker := *openapiclient.NewWorker("Name_example") // Worker | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.UpdateWorker(context.Background()).Worker(worker).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.UpdateWorker``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWorker`: WorkerInfo
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.UpdateWorker`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **worker** | [**Worker**](Worker.md) |  | 

### Return type

[**WorkerInfo**](WorkerInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWorkspace

> WorkspaceInfo UpdateWorkspace(ctx).Workspace(workspace).Execute()

Update workspace.



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
	workspace := *openapiclient.NewWorkspace("Name_example", "WorkerName_example") // Workspace | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AdminAPI.UpdateWorkspace(context.Background()).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AdminAPI.UpdateWorkspace``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWorkspace`: WorkspaceInfo
	fmt.Fprintf(os.Stdout, "Response from `AdminAPI.UpdateWorkspace`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkspaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**Workspace**](Workspace.md) |  | 

### Return type

[**WorkspaceInfo**](WorkspaceInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


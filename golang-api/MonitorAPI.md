# \MonitorAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateMonitorProfile**](MonitorAPI.md#CreateMonitorProfile) | **Post** /monitor_profiles | Monitor Profile
[**DeleteMonitorProfiles**](MonitorAPI.md#DeleteMonitorProfiles) | **Delete** /monitor_profiles | Monitor Profile DELETE.
[**GetMonitorProfiles**](MonitorAPI.md#GetMonitorProfiles) | **Get** /monitor_profiles | Monitor profiles GET operation.
[**GetTokenStats**](MonitorAPI.md#GetTokenStats) | **Get** /token_stats | TokenStats
[**LogGet**](MonitorAPI.md#LogGet) | **Get** /logs | Logs
[**UpdateMonitorProfile**](MonitorAPI.md#UpdateMonitorProfile) | **Put** /monitor_profiles | Monitor Profile



## CreateMonitorProfile

> MonitorProfile CreateMonitorProfile(ctx).MonitorProfile(monitorProfile).Execute()

Monitor Profile



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
	monitorProfile := *openapiclient.NewMonitorProfile("Name_example", openapiclient.MonitorProviders(1), "AccessKey_example", "Endpoint_example") // MonitorProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitorAPI.CreateMonitorProfile(context.Background()).MonitorProfile(monitorProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitorAPI.CreateMonitorProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMonitorProfile`: MonitorProfile
	fmt.Fprintf(os.Stdout, "Response from `MonitorAPI.CreateMonitorProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMonitorProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorProfile** | [**MonitorProfile**](MonitorProfile.md) |  | 

### Return type

[**MonitorProfile**](MonitorProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMonitorProfiles

> DeleteResponse DeleteMonitorProfiles(ctx).Execute()

Monitor Profile DELETE.



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitorAPI.DeleteMonitorProfiles(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitorAPI.DeleteMonitorProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteMonitorProfiles`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `MonitorAPI.DeleteMonitorProfiles`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMonitorProfilesRequest struct via the builder pattern


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


## GetMonitorProfiles

> MonitorProfiles GetMonitorProfiles(ctx).Name(name).Execute()

Monitor profiles GET operation.



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
	name := "name_example" // string | The name of the monitor profile to retrieve. If none is provided all monitor profiles are retrieved. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitorAPI.GetMonitorProfiles(context.Background()).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitorAPI.GetMonitorProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMonitorProfiles`: MonitorProfiles
	fmt.Fprintf(os.Stdout, "Response from `MonitorAPI.GetMonitorProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMonitorProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | The name of the monitor profile to retrieve. If none is provided all monitor profiles are retrieved. | 

### Return type

[**MonitorProfiles**](MonitorProfiles.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTokenStats

> TokenStats GetTokenStats(ctx).Workspace(workspace).UserName(userName).StartTime(startTime).EndTime(endTime).Execute()

TokenStats



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
	workspace := "workspace_example" // string | Filter the logs based on the workspace. (optional)
	userName := "userName_example" // string | Filter the logs based on the username. (optional)
	startTime := int64(789) // int64 | Filter the logs starting at this time. (optional)
	endTime := int64(789) // int64 | Filter the logs ending at this time. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitorAPI.GetTokenStats(context.Background()).Workspace(workspace).UserName(userName).StartTime(startTime).EndTime(endTime).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitorAPI.GetTokenStats``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTokenStats`: TokenStats
	fmt.Fprintf(os.Stdout, "Response from `MonitorAPI.GetTokenStats`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTokenStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Filter the logs based on the workspace. | 
 **userName** | **string** | Filter the logs based on the username. | 
 **startTime** | **int64** | Filter the logs starting at this time. | 
 **endTime** | **int64** | Filter the logs ending at this time. | 

### Return type

[**TokenStats**](TokenStats.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LogGet

> Logs LogGet(ctx).Workspace(workspace).UserName(userName).Topic(topic).LogLevel(logLevel).StartTime(startTime).EndTime(endTime).Execute()

Logs



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
	workspace := "workspace_example" // string | Filter the logs based on the workspace. (optional)
	userName := "userName_example" // string | Filter the logs based on the username. (optional)
	topic := "topic_example" // string | Filter the logs based on the topic. (optional)
	logLevel := openapiclient.LogLevels(1) // LogLevels | Filter the logs based on the log_level. (optional)
	startTime := int64(789) // int64 | Filter the logs starting at this time. (optional)
	endTime := int64(789) // int64 | Filter the logs ending at this time. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitorAPI.LogGet(context.Background()).Workspace(workspace).UserName(userName).Topic(topic).LogLevel(logLevel).StartTime(startTime).EndTime(endTime).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitorAPI.LogGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LogGet`: Logs
	fmt.Fprintf(os.Stdout, "Response from `MonitorAPI.LogGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLogGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | Filter the logs based on the workspace. | 
 **userName** | **string** | Filter the logs based on the username. | 
 **topic** | **string** | Filter the logs based on the topic. | 
 **logLevel** | [**LogLevels**](LogLevels.md) | Filter the logs based on the log_level. | 
 **startTime** | **int64** | Filter the logs starting at this time. | 
 **endTime** | **int64** | Filter the logs ending at this time. | 

### Return type

[**Logs**](Logs.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateMonitorProfile

> MonitorProfile UpdateMonitorProfile(ctx).MonitorProfile(monitorProfile).Execute()

Monitor Profile



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
	monitorProfile := *openapiclient.NewMonitorProfile("Name_example", openapiclient.MonitorProviders(1), "AccessKey_example", "Endpoint_example") // MonitorProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitorAPI.UpdateMonitorProfile(context.Background()).MonitorProfile(monitorProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitorAPI.UpdateMonitorProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateMonitorProfile`: MonitorProfile
	fmt.Fprintf(os.Stdout, "Response from `MonitorAPI.UpdateMonitorProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMonitorProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorProfile** | [**MonitorProfile**](MonitorProfile.md) |  | 

### Return type

[**MonitorProfile**](MonitorProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


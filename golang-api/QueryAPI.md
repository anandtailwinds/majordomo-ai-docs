# \QueryAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateQueryPipeline**](QueryAPI.md#CreateQueryPipeline) | **Post** /query_pipelines | Query Pipeline
[**DataStoreQuery**](QueryAPI.md#DataStoreQuery) | **Post** /data_store_query | Query a data store
[**DeleteQueryPipelines**](QueryAPI.md#DeleteQueryPipelines) | **Delete** /query_pipelines | Query Pipeline
[**GetQueryPipelines**](QueryAPI.md#GetQueryPipelines) | **Get** /query_pipelines | Query Pipeline Get
[**RunQueryPipeline**](QueryAPI.md#RunQueryPipeline) | **Post** /query_pipeline_run/workspace/{workspace}/name/{name}/query/{query_string} | Query Pipeline Run
[**UpdateQueryPipeline**](QueryAPI.md#UpdateQueryPipeline) | **Put** /query_pipelines | Query Pipeline



## CreateQueryPipeline

> QueryPipelineInfo CreateQueryPipeline(ctx).QueryPipeline(queryPipeline).Execute()

Query Pipeline



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
	queryPipeline := *openapiclient.NewQueryPipeline("Workspace_example", "Name_example", []string{"DataStoreNames_example"}, "EmbeddingModel_example", "LlmModel_example", openapiclient.QueryTypes(1)) // QueryPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.CreateQueryPipeline(context.Background()).QueryPipeline(queryPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.CreateQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateQueryPipeline`: QueryPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.CreateQueryPipeline`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateQueryPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryPipeline** | [**QueryPipeline**](QueryPipeline.md) |  | 

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataStoreQuery

> QueryResponse DataStoreQuery(ctx).DataStoreQuery(dataStoreQuery).Execute()

Query a data store



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
	dataStoreQuery := *openapiclient.NewDataStoreQuery("Workspace_example", "DataStoreName_example", "EmbeddingModel_example", "LlmModel_example", "QueryString_example", openapiclient.QueryTypes(1)) // DataStoreQuery | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.DataStoreQuery(context.Background()).DataStoreQuery(dataStoreQuery).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.DataStoreQuery``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DataStoreQuery`: QueryResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.DataStoreQuery`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDataStoreQueryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStoreQuery** | [**DataStoreQuery**](DataStoreQuery.md) |  | 

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


## DeleteQueryPipelines

> DeleteResponse DeleteQueryPipelines(ctx).Workspace(workspace).Name(name).Execute()

Query Pipeline



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
	workspace := "workspace_example" // string | The workspace in which the query pipeline is present.
	name := "name_example" // string | The name of the query pipeline to delete. If no name is provided, all query pipelines in the workspace are deleted. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.DeleteQueryPipelines(context.Background()).Workspace(workspace).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.DeleteQueryPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteQueryPipelines`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.DeleteQueryPipelines`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteQueryPipelinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The workspace in which the query pipeline is present. | 
 **name** | **string** | The name of the query pipeline to delete. If no name is provided, all query pipelines in the workspace are deleted. | 

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


## GetQueryPipelines

> QueryPipelines GetQueryPipelines(ctx).Workspace(workspace).Name(name).Execute()

Query Pipeline Get



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
	workspace := "workspace_example" // string | The workspace to search the query pipeline, mandatory if name is provided. (optional)
	name := "name_example" // string | The name of the query pipeline to retrieve. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.GetQueryPipelines(context.Background()).Workspace(workspace).Name(name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.GetQueryPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQueryPipelines`: QueryPipelines
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.GetQueryPipelines`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetQueryPipelinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The workspace to search the query pipeline, mandatory if name is provided. | 
 **name** | **string** | The name of the query pipeline to retrieve. | 

### Return type

[**QueryPipelines**](QueryPipelines.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RunQueryPipeline

> QueryResponse RunQueryPipeline(ctx, workspace, name, queryString).Execute()

Query Pipeline Run



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
	workspace := "workspace_example" // string | The name of the workspace in which the query pipeline is present.
	name := "name_example" // string | The name of the query pipeline.
	queryString := "queryString_example" // string | The user query for which an answer is sought using the query pipeline information.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.RunQueryPipeline(context.Background(), workspace, name, queryString).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.RunQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RunQueryPipeline`: QueryResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.RunQueryPipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workspace** | **string** | The name of the workspace in which the query pipeline is present. | 
**name** | **string** | The name of the query pipeline. | 
**queryString** | **string** | The user query for which an answer is sought using the query pipeline information. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRunQueryPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateQueryPipeline

> QueryPipelineInfo UpdateQueryPipeline(ctx).QueryPipeline(queryPipeline).Execute()

Query Pipeline



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
	queryPipeline := *openapiclient.NewQueryPipeline("Workspace_example", "Name_example", []string{"DataStoreNames_example"}, "EmbeddingModel_example", "LlmModel_example", openapiclient.QueryTypes(1)) // QueryPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.UpdateQueryPipeline(context.Background()).QueryPipeline(queryPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.UpdateQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateQueryPipeline`: QueryPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.UpdateQueryPipeline`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateQueryPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryPipeline** | [**QueryPipeline**](QueryPipeline.md) |  | 

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


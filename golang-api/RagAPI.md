# \RagAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDataStore**](RagAPI.md#CreateDataStore) | **Post** /data_stores | Data Store
[**CreateIngestPipeline**](RagAPI.md#CreateIngestPipeline) | **Post** /ingest_pipelines | Ingest Pipeline
[**CreateQueryPipeline**](RagAPI.md#CreateQueryPipeline) | **Post** /query_pipelines | Query Pipeline
[**DataStoreIngest**](RagAPI.md#DataStoreIngest) | **Post** /data_store_ingest | Ingest content into a data store
[**DataStoreQuery**](RagAPI.md#DataStoreQuery) | **Post** /data_store_query | Query a data store
[**DeleteDataStore**](RagAPI.md#DeleteDataStore) | **Delete** /data_stores | Data Store
[**DeleteIngestPipeline**](RagAPI.md#DeleteIngestPipeline) | **Delete** /ingest_pipelines | Ingest Pipeline
[**DeleteQueryPipeline**](RagAPI.md#DeleteQueryPipeline) | **Delete** /query_pipelines | Query Pipeline
[**GetDataStore**](RagAPI.md#GetDataStore) | **Get** /data_stores | Data Store Get
[**GetIngestPipelines**](RagAPI.md#GetIngestPipelines) | **Get** /ingest_pipelines | Ingest Pipeline Get
[**GetQueryPipelines**](RagAPI.md#GetQueryPipelines) | **Get** /query_pipelines | Query Pipeline Get
[**RunIngestPipeline**](RagAPI.md#RunIngestPipeline) | **Post** /ingest_pipeline_run | Ingest Pipeline Run
[**RunQueryPipeline**](RagAPI.md#RunQueryPipeline) | **Post** /query_pipeline_run | Query Pipeline Run
[**UpdateDataStore**](RagAPI.md#UpdateDataStore) | **Put** /data_stores | Data Store
[**UpdateIngestPipeline**](RagAPI.md#UpdateIngestPipeline) | **Put** /ingest_pipelines | Ingest Pipeline
[**UpdateQueryPipeline**](RagAPI.md#UpdateQueryPipeline) | **Put** /query_pipelines | Query Pipeline



## CreateDataStore

> DataStores CreateDataStore(ctx, account).DataStore(dataStore).Execute()

Data Store



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
	account := int32(56) // int32 | Account Identifier
	dataStore := *openapiclient.NewDataStore("Workspace_example", "UserName_example", "Name_example", openapiclient.DataStoreTypes(1)) // DataStore | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.CreateDataStore(context.Background(), account).DataStore(dataStore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.CreateDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDataStore`: DataStores
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.CreateDataStore`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**account** | **int32** | Account Identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateDataStoreRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dataStore** | [**DataStore**](DataStore.md) |  | 

### Return type

[**DataStores**](DataStores.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateIngestPipeline

> IngestPipelineInfo CreateIngestPipeline(ctx).IngestPipeline(ingestPipeline).Execute()

Ingest Pipeline



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
	ingestPipeline := *openapiclient.NewIngestPipeline("Workspace_example", "UserName_example", "Name_example", "DataStoreName_example", *openapiclient.NewInputFilter(), openapiclient.InputTypes(1), openapiclient.IngestTypes(1)) // IngestPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.CreateIngestPipeline(context.Background()).IngestPipeline(ingestPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.CreateIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateIngestPipeline`: IngestPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.CreateIngestPipeline`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIngestPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingestPipeline** | [**IngestPipeline**](IngestPipeline.md) |  | 

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


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
	queryPipeline := *openapiclient.NewQueryPipeline("Workspace_example", "UserName_example", "Name_example", "EmbeddingModel_example", "LlmModel_example", openapiclient.QueryTypes(1)) // QueryPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.CreateQueryPipeline(context.Background()).QueryPipeline(queryPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.CreateQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateQueryPipeline`: QueryPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.CreateQueryPipeline`: %v\n", resp)
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


## DataStoreIngest

> IngestResponse DataStoreIngest(ctx).DataStoreIngest(dataStoreIngest).Execute()

Ingest content into a data store



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
	dataStoreIngest := *openapiclient.NewDataStoreIngest("Workspace_example", "DataStoreName_example", *openapiclient.NewInputFilter(), openapiclient.InputTypes(1), openapiclient.IngestTypes(1)) // DataStoreIngest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.DataStoreIngest(context.Background()).DataStoreIngest(dataStoreIngest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.DataStoreIngest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DataStoreIngest`: IngestResponse
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.DataStoreIngest`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDataStoreIngestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStoreIngest** | [**DataStoreIngest**](DataStoreIngest.md) |  | 

### Return type

[**IngestResponse**](IngestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

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
	resp, r, err := apiClient.RagAPI.DataStoreQuery(context.Background()).DataStoreQuery(dataStoreQuery).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.DataStoreQuery``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DataStoreQuery`: QueryResponse
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.DataStoreQuery`: %v\n", resp)
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


## DeleteDataStore

> DeleteDataStore(ctx, workspace, name).Execute()

Data Store



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
	workspace := "workspace_example" // string | The name of the workspace the data store exists
	name := "name_example" // string | The name of the data store to be deleted.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.RagAPI.DeleteDataStore(context.Background(), workspace, name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.DeleteDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workspace** | **string** | The name of the workspace the data store exists | 
**name** | **string** | The name of the data store to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDataStoreRequest struct via the builder pattern


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


## DeleteIngestPipeline

> DeleteIngestPipeline(ctx, workspace, dataStoreName, name).Execute()

Ingest Pipeline



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
	workspace := "workspace_example" // string | The name of the workspace the ingest pipeline exists
	dataStoreName := "dataStoreName_example" // string | The name of the data store in which the ingest pipeline is present.
	name := "name_example" // string | The name of the ingest pipeline to be deleted.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.RagAPI.DeleteIngestPipeline(context.Background(), workspace, dataStoreName, name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.DeleteIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workspace** | **string** | The name of the workspace the ingest pipeline exists | 
**dataStoreName** | **string** | The name of the data store in which the ingest pipeline is present. | 
**name** | **string** | The name of the ingest pipeline to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIngestPipelineRequest struct via the builder pattern


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


## DeleteQueryPipeline

> DeleteQueryPipeline(ctx, name, workspace).Execute()

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
	name := "name_example" // string | The name of the query pipeline to delete.
	workspace := "workspace_example" // string | The workspace in which the query pipeline is present.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.RagAPI.DeleteQueryPipeline(context.Background(), name, workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.DeleteQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The name of the query pipeline to delete. | 
**workspace** | **string** | The workspace in which the query pipeline is present. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteQueryPipelineRequest struct via the builder pattern


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


## GetDataStore

> DataStores GetDataStore(ctx).Name(name).Workspace(workspace).Execute()

Data Store Get



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
	name := int32(56) // int32 | The name of the data store to retrieve. (optional)
	workspace := int32(56) // int32 | The workspace to search the data store, mandatory if name is provided. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.GetDataStore(context.Background()).Name(name).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.GetDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDataStore`: DataStores
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.GetDataStore`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDataStoreRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **int32** | The name of the data store to retrieve. | 
 **workspace** | **int32** | The workspace to search the data store, mandatory if name is provided. | 

### Return type

[**DataStores**](DataStores.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetIngestPipelines

> IngestPipelines GetIngestPipelines(ctx).Name(name).Workspace(workspace).Execute()

Ingest Pipeline Get



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
	name := int32(56) // int32 | The name of the ingest pipeline to retrieve. (optional)
	workspace := int32(56) // int32 | The workspace to search the ingest pipeline, mandatory if name is provided. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.GetIngestPipelines(context.Background()).Name(name).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.GetIngestPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIngestPipelines`: IngestPipelines
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.GetIngestPipelines`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetIngestPipelinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **int32** | The name of the ingest pipeline to retrieve. | 
 **workspace** | **int32** | The workspace to search the ingest pipeline, mandatory if name is provided. | 

### Return type

[**IngestPipelines**](IngestPipelines.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetQueryPipelines

> QueryPipelines GetQueryPipelines(ctx).Name(name).Workspace(workspace).Execute()

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
	name := "name_example" // string | The name of the query pipeline to retrieve. (optional)
	workspace := "workspace_example" // string | The workspace to search the query pipeline, mandatory if name is provided. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.GetQueryPipelines(context.Background()).Name(name).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.GetQueryPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQueryPipelines`: QueryPipelines
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.GetQueryPipelines`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetQueryPipelinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string** | The name of the query pipeline to retrieve. | 
 **workspace** | **string** | The workspace to search the query pipeline, mandatory if name is provided. | 

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


## RunIngestPipeline

> IngestPipelineRunStatus RunIngestPipeline(ctx).IngestPipelineRun(ingestPipelineRun).Execute()

Ingest Pipeline Run



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
	ingestPipelineRun := *openapiclient.NewIngestPipelineRun("Workspace_example", "Name_example", "DataStoreName_example") // IngestPipelineRun | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.RunIngestPipeline(context.Background()).IngestPipelineRun(ingestPipelineRun).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.RunIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RunIngestPipeline`: IngestPipelineRunStatus
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.RunIngestPipeline`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRunIngestPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingestPipelineRun** | [**IngestPipelineRun**](IngestPipelineRun.md) |  | 

### Return type

[**IngestPipelineRunStatus**](IngestPipelineRunStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RunQueryPipeline

> QueryResponse RunQueryPipeline(ctx).QueryPipelineRun(queryPipelineRun).Execute()

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
	queryPipelineRun := *openapiclient.NewQueryPipelineRun("Workspace_example", "Name_example", "QueryString_example") // QueryPipelineRun | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.RunQueryPipeline(context.Background()).QueryPipelineRun(queryPipelineRun).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.RunQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RunQueryPipeline`: QueryResponse
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.RunQueryPipeline`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRunQueryPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryPipelineRun** | [**QueryPipelineRun**](QueryPipelineRun.md) |  | 

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


## UpdateDataStore

> DataStore UpdateDataStore(ctx, account).DataStore(dataStore).Execute()

Data Store



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
	account := int32(56) // int32 | Account Identifier
	dataStore := *openapiclient.NewDataStore("Workspace_example", "UserName_example", "Name_example", openapiclient.DataStoreTypes(1)) // DataStore | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.UpdateDataStore(context.Background(), account).DataStore(dataStore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.UpdateDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDataStore`: DataStore
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.UpdateDataStore`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**account** | **int32** | Account Identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDataStoreRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dataStore** | [**DataStore**](DataStore.md) |  | 

### Return type

[**DataStore**](DataStore.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateIngestPipeline

> IngestPipelineInfo UpdateIngestPipeline(ctx).IngestPipeline(ingestPipeline).Execute()

Ingest Pipeline



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
	ingestPipeline := *openapiclient.NewIngestPipeline("Workspace_example", "UserName_example", "Name_example", "DataStoreName_example", *openapiclient.NewInputFilter(), openapiclient.InputTypes(1), openapiclient.IngestTypes(1)) // IngestPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.UpdateIngestPipeline(context.Background()).IngestPipeline(ingestPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.UpdateIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateIngestPipeline`: IngestPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.UpdateIngestPipeline`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateIngestPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingestPipeline** | [**IngestPipeline**](IngestPipeline.md) |  | 

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
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
	queryPipeline := *openapiclient.NewQueryPipeline("Workspace_example", "UserName_example", "Name_example", "EmbeddingModel_example", "LlmModel_example", openapiclient.QueryTypes(1)) // QueryPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RagAPI.UpdateQueryPipeline(context.Background()).QueryPipeline(queryPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RagAPI.UpdateQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateQueryPipeline`: QueryPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `RagAPI.UpdateQueryPipeline`: %v\n", resp)
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


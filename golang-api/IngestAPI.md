# \IngestAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDataStore**](IngestAPI.md#CreateDataStore) | **Post** /data_stores | Data Store
[**CreateIngestPipeline**](IngestAPI.md#CreateIngestPipeline) | **Post** /ingest_pipelines | Ingest Pipeline
[**DataStoreIngest**](IngestAPI.md#DataStoreIngest) | **Post** /data_store_ingest | Ingest content into a data store
[**DeleteDataStore**](IngestAPI.md#DeleteDataStore) | **Delete** /data_store/workspace/{workspace}/name/{name} | Data Store
[**DeleteIngestPipeline**](IngestAPI.md#DeleteIngestPipeline) | **Delete** /ingest_pipeline/workspace/{workspace}/data-store/{data_store_name}/name/{name} | Ingest Pipeline
[**GetDataStores**](IngestAPI.md#GetDataStores) | **Get** /data_stores | Data Store Get
[**GetIngestPipelines**](IngestAPI.md#GetIngestPipelines) | **Get** /ingest_pipelines | Ingest Pipeline Get
[**GetVectorStores**](IngestAPI.md#GetVectorStores) | **Get** /vector_stores | Vector database information obtained from provider.
[**RunIngestPipeline**](IngestAPI.md#RunIngestPipeline) | **Post** /ingest_pipeline_run | Ingest Pipeline Run
[**UpdateDataStore**](IngestAPI.md#UpdateDataStore) | **Put** /data_stores | Data Store
[**UpdateIngestPipeline**](IngestAPI.md#UpdateIngestPipeline) | **Put** /ingest_pipelines | Ingest Pipeline



## CreateDataStore

> DataStoreInfo CreateDataStore(ctx).DataStore(dataStore).Execute()

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
	dataStore := *openapiclient.NewDataStore("Development", "SalesDocuments", openapiclient.DataStoreTypes(1)) // DataStore | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.CreateDataStore(context.Background()).DataStore(dataStore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.CreateDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDataStore`: DataStoreInfo
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.CreateDataStore`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDataStoreRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStore** | [**DataStore**](DataStore.md) |  | 

### Return type

[**DataStoreInfo**](DataStoreInfo.md)

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
	ingestPipeline := *openapiclient.NewIngestPipeline("Development", "user@company.ai", "my_ingest", "Customers", *openapiclient.NewInputFilter(), openapiclient.InputTypes(1), openapiclient.IngestTypes(1)) // IngestPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.CreateIngestPipeline(context.Background()).IngestPipeline(ingestPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.CreateIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateIngestPipeline`: IngestPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.CreateIngestPipeline`: %v\n", resp)
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
	dataStoreIngest := *openapiclient.NewDataStoreIngest("Engineering", "Customers", *openapiclient.NewInputFilter(), openapiclient.InputTypes(1), openapiclient.IngestTypes(1)) // DataStoreIngest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.DataStoreIngest(context.Background()).DataStoreIngest(dataStoreIngest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.DataStoreIngest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DataStoreIngest`: IngestResponse
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.DataStoreIngest`: %v\n", resp)
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


## DeleteDataStore

> DeleteResponse DeleteDataStore(ctx, workspace, name, force).Execute()

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
	workspace := "workspace_example" // string | The name of the workspace the data store exists.
	name := "name_example" // string | The name of the data store to be deleted. If no name is provided and workspace is provided, all data stores in a workspace are deleted.
	force := true // bool | Normally a data store deletion will succeed only if the corresponding entry in the vector database provider is removed. This is to ensure consistency. If there are scenarios where a discrepancy has creeped in, this option can be used to remove the data store reference in Majordomo AI. This option is available only if both workspace and data store name are provided.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.DeleteDataStore(context.Background(), workspace, name, force).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.DeleteDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteDataStore`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.DeleteDataStore`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workspace** | **string** | The name of the workspace the data store exists. | 
**name** | **string** | The name of the data store to be deleted. If no name is provided and workspace is provided, all data stores in a workspace are deleted. | 
**force** | **bool** | Normally a data store deletion will succeed only if the corresponding entry in the vector database provider is removed. This is to ensure consistency. If there are scenarios where a discrepancy has creeped in, this option can be used to remove the data store reference in Majordomo AI. This option is available only if both workspace and data store name are provided. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDataStoreRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




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


## DeleteIngestPipeline

> DeleteResponse DeleteIngestPipeline(ctx, workspace, dataStoreName, name).Execute()

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
	workspace := "workspace_example" // string | The name of the workspace in which the ingest pipeline exists
	dataStoreName := "dataStoreName_example" // string | The name of the data store in which the ingest pipeline is present.
	name := "name_example" // string | The name of the ingest pipeline to be deleted. If no name is provided, all ingest pipelines in the data store are deleted.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.DeleteIngestPipeline(context.Background(), workspace, dataStoreName, name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.DeleteIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteIngestPipeline`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.DeleteIngestPipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workspace** | **string** | The name of the workspace in which the ingest pipeline exists | 
**dataStoreName** | **string** | The name of the data store in which the ingest pipeline is present. | 
**name** | **string** | The name of the ingest pipeline to be deleted. If no name is provided, all ingest pipelines in the data store are deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIngestPipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




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


## GetDataStores

> DataStores GetDataStores(ctx).Name(name).Workspace(workspace).Execute()

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
	resp, r, err := apiClient.IngestAPI.GetDataStores(context.Background()).Name(name).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.GetDataStores``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDataStores`: DataStores
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.GetDataStores`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDataStoresRequest struct via the builder pattern


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
	resp, r, err := apiClient.IngestAPI.GetIngestPipelines(context.Background()).Name(name).Workspace(workspace).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.GetIngestPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIngestPipelines`: IngestPipelines
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.GetIngestPipelines`: %v\n", resp)
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


## GetVectorStores

> VectorStores GetVectorStores(ctx).Workspace(workspace).DataStoreName(dataStoreName).Files(files).Execute()

Vector database information obtained from provider.



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
	workspace := "workspace_example" // string | The workspace in which the data store corresponding to the vector store is present.
	dataStoreName := "dataStoreName_example" // string | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. (optional)
	files := true // bool | Obtain the list of files that are ingested into the vector store also. This option is very compute intensive as most vector databases dont provide a way to get this information without downloading the entire database. So this option can be excercised only for one data store at a time, and it is mandatory to provide a specific workspace and data store name. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.GetVectorStores(context.Background()).Workspace(workspace).DataStoreName(dataStoreName).Files(files).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.GetVectorStores``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetVectorStores`: VectorStores
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.GetVectorStores`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetVectorStoresRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **string** | The workspace in which the data store corresponding to the vector store is present. | 
 **dataStoreName** | **string** | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. | 
 **files** | **bool** | Obtain the list of files that are ingested into the vector store also. This option is very compute intensive as most vector databases dont provide a way to get this information without downloading the entire database. So this option can be excercised only for one data store at a time, and it is mandatory to provide a specific workspace and data store name. | 

### Return type

[**VectorStores**](VectorStores.md)

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
	resp, r, err := apiClient.IngestAPI.RunIngestPipeline(context.Background()).IngestPipelineRun(ingestPipelineRun).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.RunIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RunIngestPipeline`: IngestPipelineRunStatus
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.RunIngestPipeline`: %v\n", resp)
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


## UpdateDataStore

> DataStoreInfo UpdateDataStore(ctx).DataStore(dataStore).Execute()

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
	dataStore := *openapiclient.NewDataStore("Development", "SalesDocuments", openapiclient.DataStoreTypes(1)) // DataStore | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.UpdateDataStore(context.Background()).DataStore(dataStore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.UpdateDataStore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDataStore`: DataStoreInfo
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.UpdateDataStore`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDataStoreRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStore** | [**DataStore**](DataStore.md) |  | 

### Return type

[**DataStoreInfo**](DataStoreInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

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
	ingestPipeline := *openapiclient.NewIngestPipeline("Development", "user@company.ai", "my_ingest", "Customers", *openapiclient.NewInputFilter(), openapiclient.InputTypes(1), openapiclient.IngestTypes(1)) // IngestPipeline | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IngestAPI.UpdateIngestPipeline(context.Background()).IngestPipeline(ingestPipeline).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IngestAPI.UpdateIngestPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateIngestPipeline`: IngestPipelineInfo
	fmt.Fprintf(os.Stdout, "Response from `IngestAPI.UpdateIngestPipeline`: %v\n", resp)
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


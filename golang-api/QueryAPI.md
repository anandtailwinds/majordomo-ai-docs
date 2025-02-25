# \QueryAPI

All URIs are relative to *http://localhost:/25001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateChatInfo**](QueryAPI.md#CreateChatInfo) | **Post** /chat_info | Create a chat info entry.
[**CreateChatMessage**](QueryAPI.md#CreateChatMessage) | **Post** /chat_messages | Create a chat message entry.
[**CreateQueryPipeline**](QueryAPI.md#CreateQueryPipeline) | **Post** /query_pipelines | Create query pipeline.
[**DataStoreQuery**](QueryAPI.md#DataStoreQuery) | **Post** /data_store_query | Query data store.
[**DeleteChatInfo**](QueryAPI.md#DeleteChatInfo) | **Delete** /chat_info | Delete chat info entry.
[**DeleteChatMessages**](QueryAPI.md#DeleteChatMessages) | **Delete** /chat_messages | Delete a specific chat message
[**DeleteQueryPipelines**](QueryAPI.md#DeleteQueryPipelines) | **Delete** /query_pipelines | Delete query pipelines.
[**GetChatInfo**](QueryAPI.md#GetChatInfo) | **Get** /chat_info | Chat info information for a user.
[**GetChatMessages**](QueryAPI.md#GetChatMessages) | **Get** /chat_messages | Chat message information for a particular chat.
[**GetQueryPipelines**](QueryAPI.md#GetQueryPipelines) | **Get** /query_pipelines | Get query pipelines.
[**RunQueryPipeline**](QueryAPI.md#RunQueryPipeline) | **Post** /query_pipeline_run | Run query pipeline.
[**UpdateChatInfo**](QueryAPI.md#UpdateChatInfo) | **Put** /chat_info | Update chat info parameters such as name or add a bunch of chat messages.
[**UpdateQueryPipeline**](QueryAPI.md#UpdateQueryPipeline) | **Put** /query_pipelines | Update query pipeline.



## CreateChatInfo

> ChatInfoResponse CreateChatInfo(ctx).ChatInfo(chatInfo).Execute()

Create a chat info entry.



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
	chatInfo := *openapiclient.NewChatInfo("ChatId_example") // ChatInfo | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.CreateChatInfo(context.Background()).ChatInfo(chatInfo).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.CreateChatInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateChatInfo`: ChatInfoResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.CreateChatInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateChatInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatInfo** | [**ChatInfo**](ChatInfo.md) |  | 

### Return type

[**ChatInfoResponse**](ChatInfoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateChatMessage

> ChatMessage CreateChatMessage(ctx).ChatEntry(chatEntry).Execute()

Create a chat message entry.



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
	chatEntry := *openapiclient.NewChatEntry("ChatId_example", []openapiclient.ChatMessage{*openapiclient.NewChatMessage("Question_example", "Answer_example")}) // ChatEntry | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.CreateChatMessage(context.Background()).ChatEntry(chatEntry).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.CreateChatMessage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateChatMessage`: ChatMessage
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.CreateChatMessage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateChatMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatEntry** | [**ChatEntry**](ChatEntry.md) |  | 

### Return type

[**ChatMessage**](ChatMessage.md)

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

Create query pipeline.



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
	queryPipeline := *openapiclient.NewQueryPipeline("Workspace_example", "Name_example", openapiclient.QueryTypes(1), []string{"DataStoreNames_example"}, "LlmModelProfile_example", "LlmModel_example") // QueryPipeline | 

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

Query data store.



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
	dataStoreQuery := *openapiclient.NewDataStoreQuery("Workspace_example", "DataStoreName_example", "LlmModelProfile_example", "LlmModel_example", "QueryString_example") // DataStoreQuery | 

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


## DeleteChatInfo

> DeleteResponse DeleteChatInfo(ctx).ChatId(chatId).Execute()

Delete chat info entry.



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
	chatId := "chatId_example" // string | The unique identifier for the chat info. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.DeleteChatInfo(context.Background()).ChatId(chatId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.DeleteChatInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteChatInfo`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.DeleteChatInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChatInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **string** | The unique identifier for the chat info. | 

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


## DeleteChatMessages

> DeleteResponse DeleteChatMessages(ctx).ChatId(chatId).MessageId(messageId).Execute()

Delete a specific chat message



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
	chatId := "chatId_example" // string | The unique identifier for the chat history.
	messageId := int64(789) // int64 | The particular message within a chat that has to be deleted. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.DeleteChatMessages(context.Background()).ChatId(chatId).MessageId(messageId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.DeleteChatMessages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteChatMessages`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.DeleteChatMessages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChatMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **string** | The unique identifier for the chat history. | 
 **messageId** | **int64** | The particular message within a chat that has to be deleted. | 

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


## DeleteQueryPipelines

> DeleteResponse DeleteQueryPipelines(ctx).Workspace(workspace).Name(name).Execute()

Delete query pipelines.



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


## GetChatInfo

> ChatInfoList GetChatInfo(ctx).ChatId(chatId).Execute()

Chat info information for a user.



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
	chatId := "chatId_example" // string | The unique identifier for the chat info. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.GetChatInfo(context.Background()).ChatId(chatId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.GetChatInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetChatInfo`: ChatInfoList
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.GetChatInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChatInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **string** | The unique identifier for the chat info. | 

### Return type

[**ChatInfoList**](ChatInfoList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChatMessages

> ChatMessages GetChatMessages(ctx).ChatId(chatId).MessageId(messageId).Execute()

Chat message information for a particular chat.



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
	chatId := "chatId_example" // string | The unique identifier for the chat history. (optional)
	messageId := int64(789) // int64 | The particular message within a chat that has to be retrieved. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.GetChatMessages(context.Background()).ChatId(chatId).MessageId(messageId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.GetChatMessages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetChatMessages`: ChatMessages
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.GetChatMessages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChatMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatId** | **string** | The unique identifier for the chat history. | 
 **messageId** | **int64** | The particular message within a chat that has to be retrieved. | 

### Return type

[**ChatMessages**](ChatMessages.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetQueryPipelines

> QueryPipelines GetQueryPipelines(ctx).Workspace(workspace).Name(name).Shared(shared).Execute()

Get query pipelines.



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
	shared := true // bool | Retrieve all query pipelines that are shared with the user. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.GetQueryPipelines(context.Background()).Workspace(workspace).Name(name).Shared(shared).Execute()
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
 **shared** | **bool** | Retrieve all query pipelines that are shared with the user. | 

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

> QueryResponse RunQueryPipeline(ctx).QueryPipelineRun(queryPipelineRun).Execute()

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
	queryPipelineRun := *openapiclient.NewQueryPipelineRun("Workspace_example", "Name_example", "QueryString_example") // QueryPipelineRun | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.RunQueryPipeline(context.Background()).QueryPipelineRun(queryPipelineRun).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.RunQueryPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RunQueryPipeline`: QueryResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.RunQueryPipeline`: %v\n", resp)
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


## UpdateChatInfo

> ChatInfoResponse UpdateChatInfo(ctx).ChatInfo(chatInfo).Execute()

Update chat info parameters such as name or add a bunch of chat messages.



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
	chatInfo := *openapiclient.NewChatInfo("ChatId_example") // ChatInfo | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QueryAPI.UpdateChatInfo(context.Background()).ChatInfo(chatInfo).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QueryAPI.UpdateChatInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateChatInfo`: ChatInfoResponse
	fmt.Fprintf(os.Stdout, "Response from `QueryAPI.UpdateChatInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateChatInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatInfo** | [**ChatInfo**](ChatInfo.md) |  | 

### Return type

[**ChatInfoResponse**](ChatInfoResponse.md)

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

Update query pipeline.



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
	queryPipeline := *openapiclient.NewQueryPipeline("Workspace_example", "Name_example", openapiclient.QueryTypes(1), []string{"DataStoreNames_example"}, "LlmModelProfile_example", "LlmModel_example") // QueryPipeline | 

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


# Org.OpenAPITools.Api.QueryApi

All URIs are relative to *http://localhost:/25001*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateChatHistory**](QueryApi.md#createchathistory) | **POST** /chat_history | Create a chat history. |
| [**CreateQueryPipeline**](QueryApi.md#createquerypipeline) | **POST** /query_pipelines | Create query pipeline. |
| [**DataStoreQuery**](QueryApi.md#datastorequery) | **POST** /data_store_query | Query data store. |
| [**DeleteChatHistory**](QueryApi.md#deletechathistory) | **DELETE** /chat_history | Delete chat history. |
| [**DeleteQueryPipelines**](QueryApi.md#deletequerypipelines) | **DELETE** /query_pipelines | Delete query pipelines. |
| [**GetChatHistory**](QueryApi.md#getchathistory) | **GET** /chat_history | Chat history information for a user. |
| [**GetQueryPipelines**](QueryApi.md#getquerypipelines) | **GET** /query_pipelines | Get query pipelines. |
| [**RunQueryPipeline**](QueryApi.md#runquerypipeline) | **POST** /query_pipeline_run/workspace/{workspace}/name/{name}/query/{query_string} | Run query pipeline. |
| [**UpdateChatHistory**](QueryApi.md#updatechathistory) | **PUT** /chat_history | Update chat history parameters. |
| [**UpdateQueryPipeline**](QueryApi.md#updatequerypipeline) | **PUT** /query_pipelines | Update query pipeline. |

<a id="createchathistory"></a>
# **CreateChatHistory**
> ChatHistoryInfo CreateChatHistory (ChatHistory chatHistory)

Create a chat history.

Create an new chat history.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateChatHistoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatHistory = new ChatHistory(); // ChatHistory | 

            try
            {
                // Create a chat history.
                ChatHistoryInfo result = apiInstance.CreateChatHistory(chatHistory);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.CreateChatHistory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateChatHistoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a chat history.
    ApiResponse<ChatHistoryInfo> response = apiInstance.CreateChatHistoryWithHttpInfo(chatHistory);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.CreateChatHistoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatHistory** | [**ChatHistory**](ChatHistory.md) |  |  |

### Return type

[**ChatHistoryInfo**](ChatHistoryInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createquerypipeline"></a>
# **CreateQueryPipeline**
> QueryPipelineInfo CreateQueryPipeline (QueryPipeline queryPipeline)

Create query pipeline.

Create a query pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateQueryPipelineExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var queryPipeline = new QueryPipeline(); // QueryPipeline | 

            try
            {
                // Create query pipeline.
                QueryPipelineInfo result = apiInstance.CreateQueryPipeline(queryPipeline);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.CreateQueryPipeline: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateQueryPipelineWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create query pipeline.
    ApiResponse<QueryPipelineInfo> response = apiInstance.CreateQueryPipelineWithHttpInfo(queryPipeline);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.CreateQueryPipelineWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **queryPipeline** | [**QueryPipeline**](QueryPipeline.md) |  |  |

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="datastorequery"></a>
# **DataStoreQuery**
> QueryResponse DataStoreQuery (DataStoreQuery dataStoreQuery)

Query data store.

Query the contents of a specific data store. Specify any query params to tweak the query process.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DataStoreQueryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var dataStoreQuery = new DataStoreQuery(); // DataStoreQuery | 

            try
            {
                // Query data store.
                QueryResponse result = apiInstance.DataStoreQuery(dataStoreQuery);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.DataStoreQuery: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DataStoreQueryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Query data store.
    ApiResponse<QueryResponse> response = apiInstance.DataStoreQueryWithHttpInfo(dataStoreQuery);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.DataStoreQueryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **dataStoreQuery** | [**DataStoreQuery**](DataStoreQuery.md) |  |  |

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
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletechathistory"></a>
# **DeleteChatHistory**
> DeleteResponse DeleteChatHistory (string? name = null, string? uid = null)

Delete chat history.

Delete the chat history.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteChatHistoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var name = "name_example";  // string? | The name of the chat history to delete. (optional) 
            var uid = "uid_example";  // string? | The unique identifier for the particular chat conversation which is to be deleted. (optional) 

            try
            {
                // Delete chat history.
                DeleteResponse result = apiInstance.DeleteChatHistory(name, uid);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.DeleteChatHistory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteChatHistoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete chat history.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteChatHistoryWithHttpInfo(name, uid);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.DeleteChatHistoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string?** | The name of the chat history to delete. | [optional]  |
| **uid** | **string?** | The unique identifier for the particular chat conversation which is to be deleted. | [optional]  |

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
| **200** | successful operation |  -  |
| **422** | Invalid input. |  -  |
| **401** | Unauthorized access. This is most likely because the access token has expired or the user API key is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletequerypipelines"></a>
# **DeleteQueryPipelines**
> DeleteResponse DeleteQueryPipelines (string workspace, string? name = null)

Delete query pipelines.

Delete one or more existing query pipelines.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteQueryPipelinesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var workspace = "workspace_example";  // string | The workspace in which the query pipeline is present.
            var name = "name_example";  // string? | The name of the query pipeline to delete. If no name is provided, all query pipelines in the workspace are deleted. (optional) 

            try
            {
                // Delete query pipelines.
                DeleteResponse result = apiInstance.DeleteQueryPipelines(workspace, name);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.DeleteQueryPipelines: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteQueryPipelinesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete query pipelines.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteQueryPipelinesWithHttpInfo(workspace, name);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.DeleteQueryPipelinesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The workspace in which the query pipeline is present. |  |
| **name** | **string?** | The name of the query pipeline to delete. If no name is provided, all query pipelines in the workspace are deleted. | [optional]  |

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
| **200** | successful operation |  -  |
| **422** | Invalid input. |  -  |
| **401** | Unauthorized access. This is most likely because the access token has expired or the user API key is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getchathistory"></a>
# **GetChatHistory**
> ChatHistoryList GetChatHistory (string? name = null)

Chat history information for a user.

The details of a chat history saved under a particular name by the user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetChatHistoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var name = "name_example";  // string? | The name of the chat history to retrieve. (optional) 

            try
            {
                // Chat history information for a user.
                ChatHistoryList result = apiInstance.GetChatHistory(name);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.GetChatHistory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetChatHistoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Chat history information for a user.
    ApiResponse<ChatHistoryList> response = apiInstance.GetChatHistoryWithHttpInfo(name);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.GetChatHistoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string?** | The name of the chat history to retrieve. | [optional]  |

### Return type

[**ChatHistoryList**](ChatHistoryList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getquerypipelines"></a>
# **GetQueryPipelines**
> QueryPipelines GetQueryPipelines (string? workspace = null, string? name = null, bool? shared = null)

Get query pipelines.

Get a list of existing query pipelines.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetQueryPipelinesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var workspace = "workspace_example";  // string? | The workspace to search the query pipeline, mandatory if name is provided. (optional) 
            var name = "name_example";  // string? | The name of the query pipeline to retrieve. (optional) 
            var shared = true;  // bool? | Retrieve all query pipelines that are shared with the user. (optional) 

            try
            {
                // Get query pipelines.
                QueryPipelines result = apiInstance.GetQueryPipelines(workspace, name, shared);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.GetQueryPipelines: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetQueryPipelinesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get query pipelines.
    ApiResponse<QueryPipelines> response = apiInstance.GetQueryPipelinesWithHttpInfo(workspace, name, shared);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.GetQueryPipelinesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | The workspace to search the query pipeline, mandatory if name is provided. | [optional]  |
| **name** | **string?** | The name of the query pipeline to retrieve. | [optional]  |
| **shared** | **bool?** | Retrieve all query pipelines that are shared with the user. | [optional]  |

### Return type

[**QueryPipelines**](QueryPipelines.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="runquerypipeline"></a>
# **RunQueryPipeline**
> QueryResponse RunQueryPipeline (QueryPipelineRun queryPipelineRun)

Run query pipeline.

Run an already defined query pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RunQueryPipelineExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var queryPipelineRun = new QueryPipelineRun(); // QueryPipelineRun | 

            try
            {
                // Run query pipeline.
                QueryResponse result = apiInstance.RunQueryPipeline(queryPipelineRun);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.RunQueryPipeline: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RunQueryPipelineWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Run query pipeline.
    ApiResponse<QueryResponse> response = apiInstance.RunQueryPipelineWithHttpInfo(queryPipelineRun);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.RunQueryPipelineWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **queryPipelineRun** | [**QueryPipelineRun**](QueryPipelineRun.md) |  |  |

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
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatechathistory"></a>
# **UpdateChatHistory**
> ChatHistoryInfo UpdateChatHistory (ChatHistory chatHistory)

Update chat history parameters.

Update an existing chat history.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateChatHistoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatHistory = new ChatHistory(); // ChatHistory | 

            try
            {
                // Update chat history parameters.
                ChatHistoryInfo result = apiInstance.UpdateChatHistory(chatHistory);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.UpdateChatHistory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateChatHistoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update chat history parameters.
    ApiResponse<ChatHistoryInfo> response = apiInstance.UpdateChatHistoryWithHttpInfo(chatHistory);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.UpdateChatHistoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatHistory** | [**ChatHistory**](ChatHistory.md) |  |  |

### Return type

[**ChatHistoryInfo**](ChatHistoryInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatequerypipeline"></a>
# **UpdateQueryPipeline**
> QueryPipelineInfo UpdateQueryPipeline (QueryPipeline queryPipeline)

Update query pipeline.

Update an existing query pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateQueryPipelineExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var queryPipeline = new QueryPipeline(); // QueryPipeline | 

            try
            {
                // Update query pipeline.
                QueryPipelineInfo result = apiInstance.UpdateQueryPipeline(queryPipeline);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.UpdateQueryPipeline: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateQueryPipelineWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update query pipeline.
    ApiResponse<QueryPipelineInfo> response = apiInstance.UpdateQueryPipelineWithHttpInfo(queryPipeline);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.UpdateQueryPipelineWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **queryPipeline** | [**QueryPipeline**](QueryPipeline.md) |  |  |

### Return type

[**QueryPipelineInfo**](QueryPipelineInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# Org.OpenAPITools.Api.QueryApi

All URIs are relative to *http://localhost:/25001*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateChatInfo**](QueryApi.md#createchatinfo) | **POST** /chat_info | Create a chat info entry. |
| [**CreateChatMessage**](QueryApi.md#createchatmessage) | **POST** /chat_messages | Create a chat message entry. |
| [**CreateQueryPipeline**](QueryApi.md#createquerypipeline) | **POST** /query_pipelines | Create query pipeline. |
| [**DataStoreQuery**](QueryApi.md#datastorequery) | **POST** /data_store_query | Query data store. |
| [**DeleteChatInfo**](QueryApi.md#deletechatinfo) | **DELETE** /chat_info | Delete chat info entry. |
| [**DeleteChatMessages**](QueryApi.md#deletechatmessages) | **DELETE** /chat_messages | Delete a specific chat message |
| [**DeleteQueryPipelines**](QueryApi.md#deletequerypipelines) | **DELETE** /query_pipelines | Delete query pipelines. |
| [**GetChatInfo**](QueryApi.md#getchatinfo) | **GET** /chat_info | Chat info information for a user. |
| [**GetChatMessages**](QueryApi.md#getchatmessages) | **GET** /chat_messages | Chat message information for a particular chat. |
| [**GetQueryPipelines**](QueryApi.md#getquerypipelines) | **GET** /query_pipelines | Get query pipelines. |
| [**RunQueryPipeline**](QueryApi.md#runquerypipeline) | **POST** /query_pipeline_run | Run query pipeline. |
| [**UpdateChatInfo**](QueryApi.md#updatechatinfo) | **PUT** /chat_info | Update chat info parameters such as name or add a bunch of chat messages. |
| [**UpdateQueryPipeline**](QueryApi.md#updatequerypipeline) | **PUT** /query_pipelines | Update query pipeline. |

<a id="createchatinfo"></a>
# **CreateChatInfo**
> ChatInfoResponse CreateChatInfo (ChatInfo chatInfo)

Create a chat info entry.

Create an new chat info entry.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateChatInfoExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatInfo = new ChatInfo(); // ChatInfo | 

            try
            {
                // Create a chat info entry.
                ChatInfoResponse result = apiInstance.CreateChatInfo(chatInfo);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.CreateChatInfo: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateChatInfoWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a chat info entry.
    ApiResponse<ChatInfoResponse> response = apiInstance.CreateChatInfoWithHttpInfo(chatInfo);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.CreateChatInfoWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatInfo** | [**ChatInfo**](ChatInfo.md) |  |  |

### Return type

[**ChatInfoResponse**](ChatInfoResponse.md)

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

<a id="createchatmessage"></a>
# **CreateChatMessage**
> ChatMessage CreateChatMessage (ChatEntry chatEntry)

Create a chat message entry.

Create an new chat message entry.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateChatMessageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatEntry = new ChatEntry(); // ChatEntry | 

            try
            {
                // Create a chat message entry.
                ChatMessage result = apiInstance.CreateChatMessage(chatEntry);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.CreateChatMessage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateChatMessageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a chat message entry.
    ApiResponse<ChatMessage> response = apiInstance.CreateChatMessageWithHttpInfo(chatEntry);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.CreateChatMessageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatEntry** | [**ChatEntry**](ChatEntry.md) |  |  |

### Return type

[**ChatMessage**](ChatMessage.md)

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

<a id="deletechatinfo"></a>
# **DeleteChatInfo**
> DeleteResponse DeleteChatInfo (string? chatId = null)

Delete chat info entry.

Delete the chat info entry.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteChatInfoExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatId = "chatId_example";  // string? | The unique identifier for the chat info. (optional) 

            try
            {
                // Delete chat info entry.
                DeleteResponse result = apiInstance.DeleteChatInfo(chatId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.DeleteChatInfo: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteChatInfoWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete chat info entry.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteChatInfoWithHttpInfo(chatId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.DeleteChatInfoWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatId** | **string?** | The unique identifier for the chat info. | [optional]  |

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

<a id="deletechatmessages"></a>
# **DeleteChatMessages**
> DeleteResponse DeleteChatMessages (string chatId, long? messageId = null)

Delete a specific chat message

Delete a specific chat message from the history.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteChatMessagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatId = "chatId_example";  // string | The unique identifier for the chat history.
            var messageId = 789L;  // long? | The particular message within a chat that has to be deleted. (optional) 

            try
            {
                // Delete a specific chat message
                DeleteResponse result = apiInstance.DeleteChatMessages(chatId, messageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.DeleteChatMessages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteChatMessagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a specific chat message
    ApiResponse<DeleteResponse> response = apiInstance.DeleteChatMessagesWithHttpInfo(chatId, messageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.DeleteChatMessagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatId** | **string** | The unique identifier for the chat history. |  |
| **messageId** | **long?** | The particular message within a chat that has to be deleted. | [optional]  |

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
| **401** | Unauthorized access. |  -  |

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

<a id="getchatinfo"></a>
# **GetChatInfo**
> ChatInfoList GetChatInfo (string? chatId = null)

Chat info information for a user.

The details of a chat info saved under a particular name by the user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetChatInfoExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatId = "chatId_example";  // string? | The unique identifier for the chat info. (optional) 

            try
            {
                // Chat info information for a user.
                ChatInfoList result = apiInstance.GetChatInfo(chatId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.GetChatInfo: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetChatInfoWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Chat info information for a user.
    ApiResponse<ChatInfoList> response = apiInstance.GetChatInfoWithHttpInfo(chatId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.GetChatInfoWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatId** | **string?** | The unique identifier for the chat info. | [optional]  |

### Return type

[**ChatInfoList**](ChatInfoList.md)

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

<a id="getchatmessages"></a>
# **GetChatMessages**
> ChatMessages GetChatMessages (string? chatId = null, long? messageId = null)

Chat message information for a particular chat.

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
    public class GetChatMessagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatId = "chatId_example";  // string? | The unique identifier for the chat history. (optional) 
            var messageId = 789L;  // long? | The particular message within a chat that has to be retrieved. (optional) 

            try
            {
                // Chat message information for a particular chat.
                ChatMessages result = apiInstance.GetChatMessages(chatId, messageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.GetChatMessages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetChatMessagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Chat message information for a particular chat.
    ApiResponse<ChatMessages> response = apiInstance.GetChatMessagesWithHttpInfo(chatId, messageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.GetChatMessagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatId** | **string?** | The unique identifier for the chat history. | [optional]  |
| **messageId** | **long?** | The particular message within a chat that has to be retrieved. | [optional]  |

### Return type

[**ChatMessages**](ChatMessages.md)

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

<a id="updatechatinfo"></a>
# **UpdateChatInfo**
> ChatInfoResponse UpdateChatInfo (ChatInfo chatInfo)

Update chat info parameters such as name or add a bunch of chat messages.

Update an existing chat info.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateChatInfoExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new QueryApi(config);
            var chatInfo = new ChatInfo(); // ChatInfo | 

            try
            {
                // Update chat info parameters such as name or add a bunch of chat messages.
                ChatInfoResponse result = apiInstance.UpdateChatInfo(chatInfo);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling QueryApi.UpdateChatInfo: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateChatInfoWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update chat info parameters such as name or add a bunch of chat messages.
    ApiResponse<ChatInfoResponse> response = apiInstance.UpdateChatInfoWithHttpInfo(chatInfo);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling QueryApi.UpdateChatInfoWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **chatInfo** | [**ChatInfo**](ChatInfo.md) |  |  |

### Return type

[**ChatInfoResponse**](ChatInfoResponse.md)

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


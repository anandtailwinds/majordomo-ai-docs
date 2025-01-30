# Org.OpenAPITools.Api.MonitorApi

All URIs are relative to *http://localhost:/25001*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateMonitorProfile**](MonitorApi.md#createmonitorprofile) | **POST** /monitor_profiles | Create monitor profile. |
| [**DeleteMonitorProfiles**](MonitorApi.md#deletemonitorprofiles) | **DELETE** /monitor_profiles | Delete monitor profiles. |
| [**GetAggregateStats**](MonitorApi.md#getaggregatestats) | **GET** /aggregate_stats | Get token statistics. |
| [**GetDataCount**](MonitorApi.md#getdatacount) | **GET** /data_count | Get the total count of various entities in the workspace. |
| [**GetLogs**](MonitorApi.md#getlogs) | **GET** /logs | Get logs. |
| [**GetMonitorProfiles**](MonitorApi.md#getmonitorprofiles) | **GET** /monitor_profiles | Get monitor profiles. |
| [**GetTokenStats**](MonitorApi.md#gettokenstats) | **GET** /token_stats | Get token statistics. |
| [**GetTopkStats**](MonitorApi.md#gettopkstats) | **GET** /topk_stats | Get token statistics. |
| [**UpdateMonitorProfile**](MonitorApi.md#updatemonitorprofile) | **PUT** /monitor_profiles | Update monitor profile. |

<a id="createmonitorprofile"></a>
# **CreateMonitorProfile**
> MonitorProfile CreateMonitorProfile (MonitorProfile monitorProfile)

Create monitor profile.

Create a new monitor profile.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateMonitorProfileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var monitorProfile = new MonitorProfile(); // MonitorProfile | 

            try
            {
                // Create monitor profile.
                MonitorProfile result = apiInstance.CreateMonitorProfile(monitorProfile);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.CreateMonitorProfile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateMonitorProfileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create monitor profile.
    ApiResponse<MonitorProfile> response = apiInstance.CreateMonitorProfileWithHttpInfo(monitorProfile);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.CreateMonitorProfileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **monitorProfile** | [**MonitorProfile**](MonitorProfile.md) |  |  |

### Return type

[**MonitorProfile**](MonitorProfile.md)

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

<a id="deletemonitorprofiles"></a>
# **DeleteMonitorProfiles**
> DeleteResponse DeleteMonitorProfiles (string? name = null)

Delete monitor profiles.

Delete one or more existing monitor profiles.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteMonitorProfilesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var name = "name_example";  // string? | The name of the monitor profile to delete. (optional) 

            try
            {
                // Delete monitor profiles.
                DeleteResponse result = apiInstance.DeleteMonitorProfiles(name);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.DeleteMonitorProfiles: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteMonitorProfilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete monitor profiles.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteMonitorProfilesWithHttpInfo(name);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.DeleteMonitorProfilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string?** | The name of the monitor profile to delete. | [optional]  |

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
| **422** | Invalid input |  -  |
| **401** | Unauthorized access. This is most likely because the access token has expired or the user API key is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getaggregatestats"></a>
# **GetAggregateStats**
> AggregateStats GetAggregateStats (string? workspace = null, string? userName = null, string? startTime = null, string? endTime = null, bool? hour = null)

Get token statistics.

Get token consumption statistics recorded for each RAG operation, filtered by timeframe.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetAggregateStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var workspace = "workspace_example";  // string? | Filter the logs based on the workspace. (optional) 
            var userName = "userName_example";  // string? | Filter the logs based on the username. (optional) 
            var startTime = "startTime_example";  // string? | Filter the logs starting at this time. (optional) 
            var endTime = "endTime_example";  // string? | Filter the logs ending at this time. (optional) 
            var hour = true;  // bool? | Aggregate on an hourly basis, default is day basis. (optional) 

            try
            {
                // Get token statistics.
                AggregateStats result = apiInstance.GetAggregateStats(workspace, userName, startTime, endTime, hour);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.GetAggregateStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAggregateStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get token statistics.
    ApiResponse<AggregateStats> response = apiInstance.GetAggregateStatsWithHttpInfo(workspace, userName, startTime, endTime, hour);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.GetAggregateStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | Filter the logs based on the workspace. | [optional]  |
| **userName** | **string?** | Filter the logs based on the username. | [optional]  |
| **startTime** | **string?** | Filter the logs starting at this time. | [optional]  |
| **endTime** | **string?** | Filter the logs ending at this time. | [optional]  |
| **hour** | **bool?** | Aggregate on an hourly basis, default is day basis. | [optional]  |

### Return type

[**AggregateStats**](AggregateStats.md)

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

<a id="getdatacount"></a>
# **GetDataCount**
> DataCount GetDataCount (string? workspace = null)

Get the total count of various entities in the workspace.

Get the total count of various entities in the workspace.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetDataCountExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var workspace = "workspace_example";  // string? | Filter the logs based on the workspace. (optional) 

            try
            {
                // Get the total count of various entities in the workspace.
                DataCount result = apiInstance.GetDataCount(workspace);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.GetDataCount: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDataCountWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get the total count of various entities in the workspace.
    ApiResponse<DataCount> response = apiInstance.GetDataCountWithHttpInfo(workspace);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.GetDataCountWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | Filter the logs based on the workspace. | [optional]  |

### Return type

[**DataCount**](DataCount.md)

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

<a id="getlogs"></a>
# **GetLogs**
> Logs GetLogs (string? workspace = null, string? userName = null, string? topic = null, LogLevels? logLevel = null, string? startTime = null, string? endTime = null)

Get logs.

Get a list of log messages filtered by specific parameters and timeframe.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetLogsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var workspace = "workspace_example";  // string? | Filter the logs based on the workspace. (optional) 
            var userName = "userName_example";  // string? | Filter the logs based on the username. (optional) 
            var topic = "topic_example";  // string? | Filter the logs based on the topic. (optional) 
            var logLevel = new LogLevels?(); // LogLevels? | Filter the logs based on the log_level. (optional) 
            var startTime = "startTime_example";  // string? | Filter the logs starting at this time. (optional) 
            var endTime = "endTime_example";  // string? | Filter the logs ending at this time. (optional) 

            try
            {
                // Get logs.
                Logs result = apiInstance.GetLogs(workspace, userName, topic, logLevel, startTime, endTime);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.GetLogs: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLogsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get logs.
    ApiResponse<Logs> response = apiInstance.GetLogsWithHttpInfo(workspace, userName, topic, logLevel, startTime, endTime);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.GetLogsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | Filter the logs based on the workspace. | [optional]  |
| **userName** | **string?** | Filter the logs based on the username. | [optional]  |
| **topic** | **string?** | Filter the logs based on the topic. | [optional]  |
| **logLevel** | [**LogLevels?**](LogLevels?.md) | Filter the logs based on the log_level. | [optional]  |
| **startTime** | **string?** | Filter the logs starting at this time. | [optional]  |
| **endTime** | **string?** | Filter the logs ending at this time. | [optional]  |

### Return type

[**Logs**](Logs.md)

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

<a id="getmonitorprofiles"></a>
# **GetMonitorProfiles**
> MonitorProfiles GetMonitorProfiles (string? name = null)

Get monitor profiles.

Get a list of existing monitor profiles.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetMonitorProfilesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var name = "name_example";  // string? | The name of the monitor profile to retrieve. If none is provided all monitor profiles are retrieved. (optional) 

            try
            {
                // Get monitor profiles.
                MonitorProfiles result = apiInstance.GetMonitorProfiles(name);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.GetMonitorProfiles: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetMonitorProfilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get monitor profiles.
    ApiResponse<MonitorProfiles> response = apiInstance.GetMonitorProfilesWithHttpInfo(name);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.GetMonitorProfilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string?** | The name of the monitor profile to retrieve. If none is provided all monitor profiles are retrieved. | [optional]  |

### Return type

[**MonitorProfiles**](MonitorProfiles.md)

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

<a id="gettokenstats"></a>
# **GetTokenStats**
> TokenStats GetTokenStats (string? workspace = null, string? userName = null, string? startTime = null, string? endTime = null)

Get token statistics.

Get token consumption statistics recorded for each RAG operation, filtered by timeframe.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTokenStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var workspace = "workspace_example";  // string? | Filter the logs based on the workspace. (optional) 
            var userName = "userName_example";  // string? | Filter the logs based on the username. (optional) 
            var startTime = "startTime_example";  // string? | Filter the logs starting at this time. (optional) 
            var endTime = "endTime_example";  // string? | Filter the logs ending at this time. (optional) 

            try
            {
                // Get token statistics.
                TokenStats result = apiInstance.GetTokenStats(workspace, userName, startTime, endTime);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.GetTokenStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTokenStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get token statistics.
    ApiResponse<TokenStats> response = apiInstance.GetTokenStatsWithHttpInfo(workspace, userName, startTime, endTime);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.GetTokenStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | Filter the logs based on the workspace. | [optional]  |
| **userName** | **string?** | Filter the logs based on the username. | [optional]  |
| **startTime** | **string?** | Filter the logs starting at this time. | [optional]  |
| **endTime** | **string?** | Filter the logs ending at this time. | [optional]  |

### Return type

[**TokenStats**](TokenStats.md)

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

<a id="gettopkstats"></a>
# **GetTopkStats**
> TopkStats GetTopkStats (string? workspace = null, string? userName = null, string? startTime = null, string? endTime = null, bool? hour = null)

Get token statistics.

Get token consumption statistics recorded for each RAG operation, filtered by timeframe.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTopkStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var workspace = "workspace_example";  // string? | Filter the logs based on the workspace. (optional) 
            var userName = "userName_example";  // string? | Filter the logs based on the username. (optional) 
            var startTime = "startTime_example";  // string? | Filter the logs starting at this time. (optional) 
            var endTime = "endTime_example";  // string? | Filter the logs ending at this time. (optional) 
            var hour = true;  // bool? | Aggregate on an hourly basis, default is day basis. (optional) 

            try
            {
                // Get token statistics.
                TopkStats result = apiInstance.GetTopkStats(workspace, userName, startTime, endTime, hour);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.GetTopkStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTopkStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get token statistics.
    ApiResponse<TopkStats> response = apiInstance.GetTopkStatsWithHttpInfo(workspace, userName, startTime, endTime, hour);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.GetTopkStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | Filter the logs based on the workspace. | [optional]  |
| **userName** | **string?** | Filter the logs based on the username. | [optional]  |
| **startTime** | **string?** | Filter the logs starting at this time. | [optional]  |
| **endTime** | **string?** | Filter the logs ending at this time. | [optional]  |
| **hour** | **bool?** | Aggregate on an hourly basis, default is day basis. | [optional]  |

### Return type

[**TopkStats**](TopkStats.md)

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

<a id="updatemonitorprofile"></a>
# **UpdateMonitorProfile**
> MonitorProfile UpdateMonitorProfile (MonitorProfile monitorProfile)

Update monitor profile.

Update an existing monitor profile.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateMonitorProfileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new MonitorApi(config);
            var monitorProfile = new MonitorProfile(); // MonitorProfile | 

            try
            {
                // Update monitor profile.
                MonitorProfile result = apiInstance.UpdateMonitorProfile(monitorProfile);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling MonitorApi.UpdateMonitorProfile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateMonitorProfileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update monitor profile.
    ApiResponse<MonitorProfile> response = apiInstance.UpdateMonitorProfileWithHttpInfo(monitorProfile);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling MonitorApi.UpdateMonitorProfileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **monitorProfile** | [**MonitorProfile**](MonitorProfile.md) |  |  |

### Return type

[**MonitorProfile**](MonitorProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


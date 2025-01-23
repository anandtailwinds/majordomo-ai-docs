# Org.OpenAPITools.Api.IngestApi

All URIs are relative to *http://localhost:/25001*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateDataStore**](IngestApi.md#createdatastore) | **POST** /data_stores | Create a data store. |
| [**CreateIngestPipeline**](IngestApi.md#createingestpipeline) | **POST** /ingest_pipelines | Create ingest pipeline. |
| [**DataStoreIngest**](IngestApi.md#datastoreingest) | **POST** /data_store_ingest | Data store ingestion. |
| [**DataStoreUpload**](IngestApi.md#datastoreupload) | **POST** /data_store_upload | Data store ingest local file. |
| [**DeleteDataStores**](IngestApi.md#deletedatastores) | **DELETE** /data_stores | Delete data store. |
| [**DeleteIngestPipelines**](IngestApi.md#deleteingestpipelines) | **DELETE** /ingest_pipelines | Delete ingest pipeline. |
| [**DeleteVectorStoreFiles**](IngestApi.md#deletevectorstorefiles) | **DELETE** /delete_vector_store_files/workspace/{workspace}/data-store-name/{data-store-name}/files/{files} | Delete vector stores information. |
| [**GetDataStores**](IngestApi.md#getdatastores) | **GET** /data_stores | List data stores. |
| [**GetIngestPipelines**](IngestApi.md#getingestpipelines) | **GET** /ingest_pipelines | Get ingest pipeline. |
| [**GetVectorStores**](IngestApi.md#getvectorstores) | **GET** /vector_stores | Get vector stores information. |
| [**RunIngestPipeline**](IngestApi.md#runingestpipeline) | **POST** /ingest_pipeline_run/workspace/{workspace}/data-store/{data_store}/name/{name} | Run ingest pipeline. |
| [**UpdateDataStore**](IngestApi.md#updatedatastore) | **PUT** /data_stores | Update data store. |
| [**UpdateIngestPipeline**](IngestApi.md#updateingestpipeline) | **PUT** /ingest_pipelines | Update ingest pipeline. |

<a id="createdatastore"></a>
# **CreateDataStore**
> DataStoreInfo CreateDataStore (DataStore dataStore)

Create a data store.

Create a data store of a specified type. A data store of type vector database needs to have the same name as the corresponding index that is created in the vector database provider for this collection of documents. Structured data stores can only be ingested using custom ingestion types. The name of structured data stores is only for reference and need not match the database name.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateDataStoreExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var dataStore = new DataStore(); // DataStore | 

            try
            {
                // Create a data store.
                DataStoreInfo result = apiInstance.CreateDataStore(dataStore);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.CreateDataStore: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDataStoreWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a data store.
    ApiResponse<DataStoreInfo> response = apiInstance.CreateDataStoreWithHttpInfo(dataStore);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.CreateDataStoreWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **dataStore** | [**DataStore**](DataStore.md) |  |  |

### Return type

[**DataStoreInfo**](DataStoreInfo.md)

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

<a id="createingestpipeline"></a>
# **CreateIngestPipeline**
> IngestPipelineInfo CreateIngestPipeline (IngestPipeline ingestPipeline)

Create ingest pipeline.

Create a ingest pipeline as part of a data store to add documents.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateIngestPipelineExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var ingestPipeline = new IngestPipeline(); // IngestPipeline | 

            try
            {
                // Create ingest pipeline.
                IngestPipelineInfo result = apiInstance.CreateIngestPipeline(ingestPipeline);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.CreateIngestPipeline: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateIngestPipelineWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create ingest pipeline.
    ApiResponse<IngestPipelineInfo> response = apiInstance.CreateIngestPipelineWithHttpInfo(ingestPipeline);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.CreateIngestPipelineWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **ingestPipeline** | [**IngestPipeline**](IngestPipeline.md) |  |  |

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

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

<a id="datastoreingest"></a>
# **DataStoreIngest**
> IngestResponse DataStoreIngest (DataStoreIngest dataStoreIngest)

Data store ingestion.

Ingest files into a specific data store.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DataStoreIngestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var dataStoreIngest = new DataStoreIngest(); // DataStoreIngest | 

            try
            {
                // Data store ingestion.
                IngestResponse result = apiInstance.DataStoreIngest(dataStoreIngest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.DataStoreIngest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DataStoreIngestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Data store ingestion.
    ApiResponse<IngestResponse> response = apiInstance.DataStoreIngestWithHttpInfo(dataStoreIngest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.DataStoreIngestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **dataStoreIngest** | [**DataStoreIngest**](DataStoreIngest.md) |  |  |

### Return type

[**IngestResponse**](IngestResponse.md)

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

<a id="datastoreupload"></a>
# **DataStoreUpload**
> IngestResponse DataStoreUpload (string workspace, string dataStoreName, IngestTypes ingestType, List<System.IO.Stream> files, IngestParams? ingestParams = null)

Data store ingest local file.

Ingest content into a specific data store using a file present locally. For ingestion from other sources, use data store ingest or ingestion pipeline options.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DataStoreUploadExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string | The workspace the data store belongs to.
            var dataStoreName = "dataStoreName_example";  // string | Name of the data store
            var ingestType = (IngestTypes) "1";  // IngestTypes | 
            var files = new List<System.IO.Stream>(); // List<System.IO.Stream> | 
            var ingestParams = new IngestParams?(); // IngestParams? |  (optional) 

            try
            {
                // Data store ingest local file.
                IngestResponse result = apiInstance.DataStoreUpload(workspace, dataStoreName, ingestType, files, ingestParams);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.DataStoreUpload: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DataStoreUploadWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Data store ingest local file.
    ApiResponse<IngestResponse> response = apiInstance.DataStoreUploadWithHttpInfo(workspace, dataStoreName, ingestType, files, ingestParams);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.DataStoreUploadWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The workspace the data store belongs to. |  |
| **dataStoreName** | **string** | Name of the data store |  |
| **ingestType** | **IngestTypes** |  |  |
| **files** | **List&lt;System.IO.Stream&gt;** |  |  |
| **ingestParams** | [**IngestParams?**](IngestParams?.md) |  | [optional]  |

### Return type

[**IngestResponse**](IngestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletedatastores"></a>
# **DeleteDataStores**
> DeleteResponse DeleteDataStores (string workspace, string? name = null, bool? force = null)

Delete data store.

Delete an existing data store created by the user. All references to this data store need to be removed first, if not the delete will fail.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteDataStoresExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string | The name of the workspace the data store exists.
            var name = "name_example";  // string? | The name of the data store to be deleted. If no name is provided and workspace is provided, all data stores in a workspace are deleted. (optional) 
            var force = true;  // bool? | Normally a data store deletion will succeed only if the corresponding entry in the vector database provider is removed. This is to ensure consistency. If there are scenarios where a discrepancy has creeped in, this option can be used to remove the data store reference in Majordomo AI. This option is available only if both workspace and data store name are provided. (optional) 

            try
            {
                // Delete data store.
                DeleteResponse result = apiInstance.DeleteDataStores(workspace, name, force);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.DeleteDataStores: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDataStoresWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete data store.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteDataStoresWithHttpInfo(workspace, name, force);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.DeleteDataStoresWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The name of the workspace the data store exists. |  |
| **name** | **string?** | The name of the data store to be deleted. If no name is provided and workspace is provided, all data stores in a workspace are deleted. | [optional]  |
| **force** | **bool?** | Normally a data store deletion will succeed only if the corresponding entry in the vector database provider is removed. This is to ensure consistency. If there are scenarios where a discrepancy has creeped in, this option can be used to remove the data store reference in Majordomo AI. This option is available only if both workspace and data store name are provided. | [optional]  |

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

<a id="deleteingestpipelines"></a>
# **DeleteIngestPipelines**
> DeleteResponse DeleteIngestPipelines (string workspace, string dataStore, string? name = null)

Delete ingest pipeline.

Delete an existing ingest pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteIngestPipelinesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string | The name of the workspace in which the ingest pipeline exists
            var dataStore = "dataStore_example";  // string | The name of the data store in which the ingest pipeline is present.
            var name = "name_example";  // string? | The name of the ingest pipeline to be deleted. If no name is provided, all ingest pipelines in the data store are deleted. (optional) 

            try
            {
                // Delete ingest pipeline.
                DeleteResponse result = apiInstance.DeleteIngestPipelines(workspace, dataStore, name);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.DeleteIngestPipelines: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteIngestPipelinesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete ingest pipeline.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteIngestPipelinesWithHttpInfo(workspace, dataStore, name);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.DeleteIngestPipelinesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The name of the workspace in which the ingest pipeline exists |  |
| **dataStore** | **string** | The name of the data store in which the ingest pipeline is present. |  |
| **name** | **string?** | The name of the ingest pipeline to be deleted. If no name is provided, all ingest pipelines in the data store are deleted. | [optional]  |

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

<a id="deletevectorstorefiles"></a>
# **DeleteVectorStoreFiles**
> DeleteResponse DeleteVectorStoreFiles (string workspace, string dataStoreName, string files)

Delete vector stores information.

Delete a set of files from the vector database present in the vector database provider. The entire vector store cannot be deleted as it will be done when the corresponding data store is also deleted.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteVectorStoreFilesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string | The workspace in which the data store corresponding to the vector store is present.
            var dataStoreName = "dataStoreName_example";  // string | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned.
            var files = "files_example";  // string | The list of files to delete from the vector store at the provider.

            try
            {
                // Delete vector stores information.
                DeleteResponse result = apiInstance.DeleteVectorStoreFiles(workspace, dataStoreName, files);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.DeleteVectorStoreFiles: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteVectorStoreFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete vector stores information.
    ApiResponse<DeleteResponse> response = apiInstance.DeleteVectorStoreFilesWithHttpInfo(workspace, dataStoreName, files);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.DeleteVectorStoreFilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The workspace in which the data store corresponding to the vector store is present. |  |
| **dataStoreName** | **string** | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. |  |
| **files** | **string** | The list of files to delete from the vector store at the provider. |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getdatastores"></a>
# **GetDataStores**
> DataStores GetDataStores (string? workspace = null, string? name = null, bool? shared = null, DataStoreTypes? type = null)

List data stores.

Get a list of existing data stores that are created by the user filtered based on parameters such as workspace.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetDataStoresExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string? | The workspace to search the data store, mandatory if name is provided. (optional) 
            var name = "name_example";  // string? | The name of the data store to retrieve. (optional) 
            var shared = true;  // bool? | Retrieve data stores that are shared by others for querying. (optional) 
            var type = new DataStoreTypes?(); // DataStoreTypes? | Retrieve data stores that are shared by others for querying. (optional) 

            try
            {
                // List data stores.
                DataStores result = apiInstance.GetDataStores(workspace, name, shared, type);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.GetDataStores: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDataStoresWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List data stores.
    ApiResponse<DataStores> response = apiInstance.GetDataStoresWithHttpInfo(workspace, name, shared, type);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.GetDataStoresWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | The workspace to search the data store, mandatory if name is provided. | [optional]  |
| **name** | **string?** | The name of the data store to retrieve. | [optional]  |
| **shared** | **bool?** | Retrieve data stores that are shared by others for querying. | [optional]  |
| **type** | [**DataStoreTypes?**](DataStoreTypes?.md) | Retrieve data stores that are shared by others for querying. | [optional]  |

### Return type

[**DataStores**](DataStores.md)

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

<a id="getingestpipelines"></a>
# **GetIngestPipelines**
> IngestPipelines GetIngestPipelines (string? workspace = null, string? name = null, string? dataStore = null, DataStoreTypes? dataStoreType = null)

Get ingest pipeline.

Get a list of existing ingest pipelines.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetIngestPipelinesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string? | The workspace to search the ingest pipeline, mandatory if name is provided. (optional) 
            var name = "name_example";  // string? | The name of the ingest pipeline to retrieve. (optional) 
            var dataStore = "dataStore_example";  // string? | The name of the data store in which the ingest pipeline is present. (optional) 
            var dataStoreType = new DataStoreTypes?(); // DataStoreTypes? | The type of the data store in which the ingest pipeline is present. (optional) 

            try
            {
                // Get ingest pipeline.
                IngestPipelines result = apiInstance.GetIngestPipelines(workspace, name, dataStore, dataStoreType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.GetIngestPipelines: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetIngestPipelinesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get ingest pipeline.
    ApiResponse<IngestPipelines> response = apiInstance.GetIngestPipelinesWithHttpInfo(workspace, name, dataStore, dataStoreType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.GetIngestPipelinesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string?** | The workspace to search the ingest pipeline, mandatory if name is provided. | [optional]  |
| **name** | **string?** | The name of the ingest pipeline to retrieve. | [optional]  |
| **dataStore** | **string?** | The name of the data store in which the ingest pipeline is present. | [optional]  |
| **dataStoreType** | [**DataStoreTypes?**](DataStoreTypes?.md) | The type of the data store in which the ingest pipeline is present. | [optional]  |

### Return type

[**IngestPipelines**](IngestPipelines.md)

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

<a id="getvectorstores"></a>
# **GetVectorStores**
> VectorStores GetVectorStores (string workspace, string? dataStoreName = null, bool? files = null)

Get vector stores information.

Get information about vector databases that are present in the vector database provider.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetVectorStoresExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string | The workspace in which the data store corresponding to the vector store is present.
            var dataStoreName = "dataStoreName_example";  // string? | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. (optional) 
            var files = true;  // bool? | Obtain the list of files that are ingested into the vector store also. This option is very compute intensive as most vector databases dont provide a way to get this information without downloading the entire database. So this option can be excercised only for one data store at a time, and it is mandatory to provide a specific workspace and data store name. (optional) 

            try
            {
                // Get vector stores information.
                VectorStores result = apiInstance.GetVectorStores(workspace, dataStoreName, files);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.GetVectorStores: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetVectorStoresWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get vector stores information.
    ApiResponse<VectorStores> response = apiInstance.GetVectorStoresWithHttpInfo(workspace, dataStoreName, files);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.GetVectorStoresWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The workspace in which the data store corresponding to the vector store is present. |  |
| **dataStoreName** | **string?** | Name of the data store for which the corresponding vector store information is sought. If none specified, all matching data stores created by the user are scanned. | [optional]  |
| **files** | **bool?** | Obtain the list of files that are ingested into the vector store also. This option is very compute intensive as most vector databases dont provide a way to get this information without downloading the entire database. So this option can be excercised only for one data store at a time, and it is mandatory to provide a specific workspace and data store name. | [optional]  |

### Return type

[**VectorStores**](VectorStores.md)

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

<a id="runingestpipeline"></a>
# **RunIngestPipeline**
> void RunIngestPipeline (string workspace, string dataStore, string name)

Run ingest pipeline.

Trigger a single run of an already created ingest pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RunIngestPipelineExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var workspace = "workspace_example";  // string | The name of the workspace in which the ingest pipeline is present.
            var dataStore = "dataStore_example";  // string | The name of the data store in which the ingest pipeline is present.
            var name = "name_example";  // string | The name of the ingest pipeline to run.

            try
            {
                // Run ingest pipeline.
                apiInstance.RunIngestPipeline(workspace, dataStore, name);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.RunIngestPipeline: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RunIngestPipelineWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Run ingest pipeline.
    apiInstance.RunIngestPipelineWithHttpInfo(workspace, dataStore, name);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.RunIngestPipelineWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workspace** | **string** | The name of the workspace in which the ingest pipeline is present. |  |
| **dataStore** | **string** | The name of the data store in which the ingest pipeline is present. |  |
| **name** | **string** | The name of the ingest pipeline to run. |  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  -  |
| **422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatedatastore"></a>
# **UpdateDataStore**
> DataStoreInfo UpdateDataStore (DataStore dataStore)

Update data store.

Change any modifiable parameters of the data store.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateDataStoreExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var dataStore = new DataStore(); // DataStore | 

            try
            {
                // Update data store.
                DataStoreInfo result = apiInstance.UpdateDataStore(dataStore);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.UpdateDataStore: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDataStoreWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update data store.
    ApiResponse<DataStoreInfo> response = apiInstance.UpdateDataStoreWithHttpInfo(dataStore);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.UpdateDataStoreWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **dataStore** | [**DataStore**](DataStore.md) |  |  |

### Return type

[**DataStoreInfo**](DataStoreInfo.md)

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

<a id="updateingestpipeline"></a>
# **UpdateIngestPipeline**
> IngestPipelineInfo UpdateIngestPipeline (IngestPipeline ingestPipeline)

Update ingest pipeline.

Update an existing ingest pipeline.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateIngestPipelineExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:/25001";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new IngestApi(config);
            var ingestPipeline = new IngestPipeline(); // IngestPipeline | 

            try
            {
                // Update ingest pipeline.
                IngestPipelineInfo result = apiInstance.UpdateIngestPipeline(ingestPipeline);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling IngestApi.UpdateIngestPipeline: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateIngestPipelineWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update ingest pipeline.
    ApiResponse<IngestPipelineInfo> response = apiInstance.UpdateIngestPipelineWithHttpInfo(ingestPipeline);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling IngestApi.UpdateIngestPipelineWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **ingestPipeline** | [**IngestPipeline**](IngestPipeline.md) |  |  |

### Return type

[**IngestPipelineInfo**](IngestPipelineInfo.md)

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


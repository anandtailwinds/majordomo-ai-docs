# QueryPipelineInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the data store is present. | 
**UserName** | **string** | The user who created the ingest pipeline. | 
**Name** | **string** | Name of the query pipeline. | 
**DataStoreNames** | **[]string** | The type of the parent data store. | 
**EmbeddingModel** | **string** | The embedding model to be used | 
**LlmModel** | **string** | The LLM model to be used | 
**QueryType** | [**QueryTypes**](QueryTypes.md) |  | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**CreatedAt** | **int64** | Timestamp of the query pipeline creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the query pipeline. | 

## Methods

### NewQueryPipelineInfo

`func NewQueryPipelineInfo(workspace string, userName string, name string, dataStoreNames []string, embeddingModel string, llmModel string, queryType QueryTypes, createdAt int64, lastUpdate int64, ) *QueryPipelineInfo`

NewQueryPipelineInfo instantiates a new QueryPipelineInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryPipelineInfoWithDefaults

`func NewQueryPipelineInfoWithDefaults() *QueryPipelineInfo`

NewQueryPipelineInfoWithDefaults instantiates a new QueryPipelineInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *QueryPipelineInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *QueryPipelineInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *QueryPipelineInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *QueryPipelineInfo) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *QueryPipelineInfo) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *QueryPipelineInfo) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetName

`func (o *QueryPipelineInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *QueryPipelineInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *QueryPipelineInfo) SetName(v string)`

SetName sets Name field to given value.


### GetDataStoreNames

`func (o *QueryPipelineInfo) GetDataStoreNames() []string`

GetDataStoreNames returns the DataStoreNames field if non-nil, zero value otherwise.

### GetDataStoreNamesOk

`func (o *QueryPipelineInfo) GetDataStoreNamesOk() (*[]string, bool)`

GetDataStoreNamesOk returns a tuple with the DataStoreNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreNames

`func (o *QueryPipelineInfo) SetDataStoreNames(v []string)`

SetDataStoreNames sets DataStoreNames field to given value.


### GetEmbeddingModel

`func (o *QueryPipelineInfo) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *QueryPipelineInfo) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *QueryPipelineInfo) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetLlmModel

`func (o *QueryPipelineInfo) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *QueryPipelineInfo) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *QueryPipelineInfo) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.


### GetQueryType

`func (o *QueryPipelineInfo) GetQueryType() QueryTypes`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *QueryPipelineInfo) GetQueryTypeOk() (*QueryTypes, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *QueryPipelineInfo) SetQueryType(v QueryTypes)`

SetQueryType sets QueryType field to given value.


### GetQueryParams

`func (o *QueryPipelineInfo) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *QueryPipelineInfo) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *QueryPipelineInfo) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *QueryPipelineInfo) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.

### GetCreatedAt

`func (o *QueryPipelineInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *QueryPipelineInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *QueryPipelineInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *QueryPipelineInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *QueryPipelineInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *QueryPipelineInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



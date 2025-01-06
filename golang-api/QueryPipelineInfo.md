# QueryPipelineInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**Name** | **string** | Name of the query pipeline. | 
**DataStoreNames** | Pointer to **[]string** | The list of data stores to be used in the query. | [optional] 
**QueryType** | [**QueryTypes**](QueryTypes.md) |  | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**EmbeddingModelProfile** | Pointer to **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**EmbeddingModel** | Pointer to **string** | The embedding model to be used. | [optional] 
**LlmModelProfile** | Pointer to **string** | The name of the model profile to use for accessing the LLM models. | [optional] 
**LlmModel** | Pointer to **string** | The LLM model to be used. | [optional] 
**CreatedBy** | **string** | The user who created the ingest pipeline. | 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 
**ExtraInfo** | Pointer to **string** | For any queries that are performed using this pipeline, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 
**CreatedAt** | **int64** | Timestamp of the query pipeline creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the query pipeline. | 

## Methods

### NewQueryPipelineInfo

`func NewQueryPipelineInfo(workspace string, name string, queryType QueryTypes, createdBy string, createdAt int64, lastUpdate int64, ) *QueryPipelineInfo`

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

### HasDataStoreNames

`func (o *QueryPipelineInfo) HasDataStoreNames() bool`

HasDataStoreNames returns a boolean if a field has been set.

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

### GetEmbeddingModelProfile

`func (o *QueryPipelineInfo) GetEmbeddingModelProfile() string`

GetEmbeddingModelProfile returns the EmbeddingModelProfile field if non-nil, zero value otherwise.

### GetEmbeddingModelProfileOk

`func (o *QueryPipelineInfo) GetEmbeddingModelProfileOk() (*string, bool)`

GetEmbeddingModelProfileOk returns a tuple with the EmbeddingModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelProfile

`func (o *QueryPipelineInfo) SetEmbeddingModelProfile(v string)`

SetEmbeddingModelProfile sets EmbeddingModelProfile field to given value.

### HasEmbeddingModelProfile

`func (o *QueryPipelineInfo) HasEmbeddingModelProfile() bool`

HasEmbeddingModelProfile returns a boolean if a field has been set.

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

### HasEmbeddingModel

`func (o *QueryPipelineInfo) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### GetLlmModelProfile

`func (o *QueryPipelineInfo) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *QueryPipelineInfo) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *QueryPipelineInfo) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.

### HasLlmModelProfile

`func (o *QueryPipelineInfo) HasLlmModelProfile() bool`

HasLlmModelProfile returns a boolean if a field has been set.

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

### HasLlmModel

`func (o *QueryPipelineInfo) HasLlmModel() bool`

HasLlmModel returns a boolean if a field has been set.

### GetCreatedBy

`func (o *QueryPipelineInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *QueryPipelineInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *QueryPipelineInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetSharedUsers

`func (o *QueryPipelineInfo) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *QueryPipelineInfo) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *QueryPipelineInfo) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *QueryPipelineInfo) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.

### GetExtraInfo

`func (o *QueryPipelineInfo) GetExtraInfo() string`

GetExtraInfo returns the ExtraInfo field if non-nil, zero value otherwise.

### GetExtraInfoOk

`func (o *QueryPipelineInfo) GetExtraInfoOk() (*string, bool)`

GetExtraInfoOk returns a tuple with the ExtraInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraInfo

`func (o *QueryPipelineInfo) SetExtraInfo(v string)`

SetExtraInfo sets ExtraInfo field to given value.

### HasExtraInfo

`func (o *QueryPipelineInfo) HasExtraInfo() bool`

HasExtraInfo returns a boolean if a field has been set.

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



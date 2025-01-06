# QueryPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this query pipeline belongs to. | 
**Name** | **string** | Name of the query pipeline. | 
**QueryType** | [**QueryTypes**](QueryTypes.md) |  | 
**DataStoreNames** | **[]string** | The list of data stores to be used in the query. | 
**EmbeddingModelProfile** | Pointer to **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**EmbeddingModel** | Pointer to **string** | The embedding model to be used. | [optional] 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | 
**LlmModel** | **string** | The LLM model to be used. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**ExtraInfo** | Pointer to **string** | For any queries that are performed using this pipeline, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewQueryPipeline

`func NewQueryPipeline(workspace string, name string, queryType QueryTypes, dataStoreNames []string, llmModelProfile string, llmModel string, ) *QueryPipeline`

NewQueryPipeline instantiates a new QueryPipeline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryPipelineWithDefaults

`func NewQueryPipelineWithDefaults() *QueryPipeline`

NewQueryPipelineWithDefaults instantiates a new QueryPipeline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *QueryPipeline) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *QueryPipeline) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *QueryPipeline) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *QueryPipeline) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *QueryPipeline) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *QueryPipeline) SetName(v string)`

SetName sets Name field to given value.


### GetQueryType

`func (o *QueryPipeline) GetQueryType() QueryTypes`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *QueryPipeline) GetQueryTypeOk() (*QueryTypes, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *QueryPipeline) SetQueryType(v QueryTypes)`

SetQueryType sets QueryType field to given value.


### GetDataStoreNames

`func (o *QueryPipeline) GetDataStoreNames() []string`

GetDataStoreNames returns the DataStoreNames field if non-nil, zero value otherwise.

### GetDataStoreNamesOk

`func (o *QueryPipeline) GetDataStoreNamesOk() (*[]string, bool)`

GetDataStoreNamesOk returns a tuple with the DataStoreNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreNames

`func (o *QueryPipeline) SetDataStoreNames(v []string)`

SetDataStoreNames sets DataStoreNames field to given value.


### GetEmbeddingModelProfile

`func (o *QueryPipeline) GetEmbeddingModelProfile() string`

GetEmbeddingModelProfile returns the EmbeddingModelProfile field if non-nil, zero value otherwise.

### GetEmbeddingModelProfileOk

`func (o *QueryPipeline) GetEmbeddingModelProfileOk() (*string, bool)`

GetEmbeddingModelProfileOk returns a tuple with the EmbeddingModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelProfile

`func (o *QueryPipeline) SetEmbeddingModelProfile(v string)`

SetEmbeddingModelProfile sets EmbeddingModelProfile field to given value.

### HasEmbeddingModelProfile

`func (o *QueryPipeline) HasEmbeddingModelProfile() bool`

HasEmbeddingModelProfile returns a boolean if a field has been set.

### GetEmbeddingModel

`func (o *QueryPipeline) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *QueryPipeline) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *QueryPipeline) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *QueryPipeline) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### GetLlmModelProfile

`func (o *QueryPipeline) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *QueryPipeline) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *QueryPipeline) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModel

`func (o *QueryPipeline) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *QueryPipeline) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *QueryPipeline) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.


### GetQueryParams

`func (o *QueryPipeline) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *QueryPipeline) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *QueryPipeline) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *QueryPipeline) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.

### GetExtraInfo

`func (o *QueryPipeline) GetExtraInfo() string`

GetExtraInfo returns the ExtraInfo field if non-nil, zero value otherwise.

### GetExtraInfoOk

`func (o *QueryPipeline) GetExtraInfoOk() (*string, bool)`

GetExtraInfoOk returns a tuple with the ExtraInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraInfo

`func (o *QueryPipeline) SetExtraInfo(v string)`

SetExtraInfo sets ExtraInfo field to given value.

### HasExtraInfo

`func (o *QueryPipeline) HasExtraInfo() bool`

HasExtraInfo returns a boolean if a field has been set.

### GetSharedUsers

`func (o *QueryPipeline) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *QueryPipeline) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *QueryPipeline) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *QueryPipeline) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DataCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace for which the counts were collected. | 
**UserName** | **string** | The user for whom the counts are collected. | 
**VectordbDataStores** | **int64** | The total number of data stores in the workspace. | 
**StructdbDataStores** | **int64** | The total number of data stores in the workspace. | 
**IngestionPipelines** | **int64** | The total number of data stores in the workspace. | 
**QueryPipelines** | **int64** | The total number of data stores in the workspace. | 

## Methods

### NewDataCount

`func NewDataCount(workspace string, userName string, vectordbDataStores int64, structdbDataStores int64, ingestionPipelines int64, queryPipelines int64, ) *DataCount`

NewDataCount instantiates a new DataCount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataCountWithDefaults

`func NewDataCountWithDefaults() *DataCount`

NewDataCountWithDefaults instantiates a new DataCount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *DataCount) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *DataCount) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *DataCount) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *DataCount) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *DataCount) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *DataCount) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetVectordbDataStores

`func (o *DataCount) GetVectordbDataStores() int64`

GetVectordbDataStores returns the VectordbDataStores field if non-nil, zero value otherwise.

### GetVectordbDataStoresOk

`func (o *DataCount) GetVectordbDataStoresOk() (*int64, bool)`

GetVectordbDataStoresOk returns a tuple with the VectordbDataStores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbDataStores

`func (o *DataCount) SetVectordbDataStores(v int64)`

SetVectordbDataStores sets VectordbDataStores field to given value.


### GetStructdbDataStores

`func (o *DataCount) GetStructdbDataStores() int64`

GetStructdbDataStores returns the StructdbDataStores field if non-nil, zero value otherwise.

### GetStructdbDataStoresOk

`func (o *DataCount) GetStructdbDataStoresOk() (*int64, bool)`

GetStructdbDataStoresOk returns a tuple with the StructdbDataStores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbDataStores

`func (o *DataCount) SetStructdbDataStores(v int64)`

SetStructdbDataStores sets StructdbDataStores field to given value.


### GetIngestionPipelines

`func (o *DataCount) GetIngestionPipelines() int64`

GetIngestionPipelines returns the IngestionPipelines field if non-nil, zero value otherwise.

### GetIngestionPipelinesOk

`func (o *DataCount) GetIngestionPipelinesOk() (*int64, bool)`

GetIngestionPipelinesOk returns a tuple with the IngestionPipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestionPipelines

`func (o *DataCount) SetIngestionPipelines(v int64)`

SetIngestionPipelines sets IngestionPipelines field to given value.


### GetQueryPipelines

`func (o *DataCount) GetQueryPipelines() int64`

GetQueryPipelines returns the QueryPipelines field if non-nil, zero value otherwise.

### GetQueryPipelinesOk

`func (o *DataCount) GetQueryPipelinesOk() (*int64, bool)`

GetQueryPipelinesOk returns a tuple with the QueryPipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryPipelines

`func (o *DataCount) SetQueryPipelines(v int64)`

SetQueryPipelines sets QueryPipelines field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



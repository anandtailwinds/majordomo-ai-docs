# QueryPipelineInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the data store is present. | 
**Name** | **string** | Name of the query pipeline. | 
**QueryType** | [**QueryTypes**](QueryTypes.md) |  | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**TextQueryParams** | Pointer to [**TextQueryParams**](TextQueryParams.md) |  | [optional] 
**SqlQueryParams** | Pointer to [**SQLQueryParams**](SQLQueryParams.md) |  | [optional] 
**CreatedBy** | **string** | The user who created the ingest pipeline. | 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 
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

### GetTextQueryParams

`func (o *QueryPipelineInfo) GetTextQueryParams() TextQueryParams`

GetTextQueryParams returns the TextQueryParams field if non-nil, zero value otherwise.

### GetTextQueryParamsOk

`func (o *QueryPipelineInfo) GetTextQueryParamsOk() (*TextQueryParams, bool)`

GetTextQueryParamsOk returns a tuple with the TextQueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQueryParams

`func (o *QueryPipelineInfo) SetTextQueryParams(v TextQueryParams)`

SetTextQueryParams sets TextQueryParams field to given value.

### HasTextQueryParams

`func (o *QueryPipelineInfo) HasTextQueryParams() bool`

HasTextQueryParams returns a boolean if a field has been set.

### GetSqlQueryParams

`func (o *QueryPipelineInfo) GetSqlQueryParams() SQLQueryParams`

GetSqlQueryParams returns the SqlQueryParams field if non-nil, zero value otherwise.

### GetSqlQueryParamsOk

`func (o *QueryPipelineInfo) GetSqlQueryParamsOk() (*SQLQueryParams, bool)`

GetSqlQueryParamsOk returns a tuple with the SqlQueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlQueryParams

`func (o *QueryPipelineInfo) SetSqlQueryParams(v SQLQueryParams)`

SetSqlQueryParams sets SqlQueryParams field to given value.

### HasSqlQueryParams

`func (o *QueryPipelineInfo) HasSqlQueryParams() bool`

HasSqlQueryParams returns a boolean if a field has been set.

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



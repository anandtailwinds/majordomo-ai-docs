# QueryPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this query pipeline belongs to. | 
**Name** | **string** | Name of the query pipeline. | 
**QueryType** | [**QueryTypes**](QueryTypes.md) |  | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**TextQueryParams** | Pointer to [**TextQueryParams**](TextQueryParams.md) |  | [optional] 
**SqlQueryParams** | Pointer to [**SQLQueryParams**](SQLQueryParams.md) |  | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewQueryPipeline

`func NewQueryPipeline(workspace string, name string, queryType QueryTypes, ) *QueryPipeline`

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

### GetTextQueryParams

`func (o *QueryPipeline) GetTextQueryParams() TextQueryParams`

GetTextQueryParams returns the TextQueryParams field if non-nil, zero value otherwise.

### GetTextQueryParamsOk

`func (o *QueryPipeline) GetTextQueryParamsOk() (*TextQueryParams, bool)`

GetTextQueryParamsOk returns a tuple with the TextQueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQueryParams

`func (o *QueryPipeline) SetTextQueryParams(v TextQueryParams)`

SetTextQueryParams sets TextQueryParams field to given value.

### HasTextQueryParams

`func (o *QueryPipeline) HasTextQueryParams() bool`

HasTextQueryParams returns a boolean if a field has been set.

### GetSqlQueryParams

`func (o *QueryPipeline) GetSqlQueryParams() SQLQueryParams`

GetSqlQueryParams returns the SqlQueryParams field if non-nil, zero value otherwise.

### GetSqlQueryParamsOk

`func (o *QueryPipeline) GetSqlQueryParamsOk() (*SQLQueryParams, bool)`

GetSqlQueryParamsOk returns a tuple with the SqlQueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlQueryParams

`func (o *QueryPipeline) SetSqlQueryParams(v SQLQueryParams)`

SetSqlQueryParams sets SqlQueryParams field to given value.

### HasSqlQueryParams

`func (o *QueryPipeline) HasSqlQueryParams() bool`

HasSqlQueryParams returns a boolean if a field has been set.

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



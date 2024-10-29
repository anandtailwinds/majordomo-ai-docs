# QueryPipelineRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this query pipeline belongs to. | 
**Name** | **string** | Name of the query pipeline. | 
**QueryString** | **string** | The query user wants to ask based on the Query Pipeline. | 

## Methods

### NewQueryPipelineRun

`func NewQueryPipelineRun(workspace string, name string, queryString string, ) *QueryPipelineRun`

NewQueryPipelineRun instantiates a new QueryPipelineRun object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryPipelineRunWithDefaults

`func NewQueryPipelineRunWithDefaults() *QueryPipelineRun`

NewQueryPipelineRunWithDefaults instantiates a new QueryPipelineRun object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *QueryPipelineRun) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *QueryPipelineRun) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *QueryPipelineRun) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *QueryPipelineRun) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *QueryPipelineRun) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *QueryPipelineRun) SetName(v string)`

SetName sets Name field to given value.


### GetQueryString

`func (o *QueryPipelineRun) GetQueryString() string`

GetQueryString returns the QueryString field if non-nil, zero value otherwise.

### GetQueryStringOk

`func (o *QueryPipelineRun) GetQueryStringOk() (*string, bool)`

GetQueryStringOk returns a tuple with the QueryString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryString

`func (o *QueryPipelineRun) SetQueryString(v string)`

SetQueryString sets QueryString field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



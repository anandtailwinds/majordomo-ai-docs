# SelectWorkflowStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LlmModelInfo** | [**ModelInfo**](ModelInfo.md) |  | 
**QueryString** | **string** | Query string. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**Workflows** | [**[]Workflow**](Workflow.md) | Workflow list | 

## Methods

### NewSelectWorkflowStep

`func NewSelectWorkflowStep(llmModelInfo ModelInfo, queryString string, workflows []Workflow, ) *SelectWorkflowStep`

NewSelectWorkflowStep instantiates a new SelectWorkflowStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelectWorkflowStepWithDefaults

`func NewSelectWorkflowStepWithDefaults() *SelectWorkflowStep`

NewSelectWorkflowStepWithDefaults instantiates a new SelectWorkflowStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLlmModelInfo

`func (o *SelectWorkflowStep) GetLlmModelInfo() ModelInfo`

GetLlmModelInfo returns the LlmModelInfo field if non-nil, zero value otherwise.

### GetLlmModelInfoOk

`func (o *SelectWorkflowStep) GetLlmModelInfoOk() (*ModelInfo, bool)`

GetLlmModelInfoOk returns a tuple with the LlmModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelInfo

`func (o *SelectWorkflowStep) SetLlmModelInfo(v ModelInfo)`

SetLlmModelInfo sets LlmModelInfo field to given value.


### GetQueryString

`func (o *SelectWorkflowStep) GetQueryString() string`

GetQueryString returns the QueryString field if non-nil, zero value otherwise.

### GetQueryStringOk

`func (o *SelectWorkflowStep) GetQueryStringOk() (*string, bool)`

GetQueryStringOk returns a tuple with the QueryString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryString

`func (o *SelectWorkflowStep) SetQueryString(v string)`

SetQueryString sets QueryString field to given value.


### GetQueryParams

`func (o *SelectWorkflowStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *SelectWorkflowStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *SelectWorkflowStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *SelectWorkflowStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.

### GetWorkflows

`func (o *SelectWorkflowStep) GetWorkflows() []Workflow`

GetWorkflows returns the Workflows field if non-nil, zero value otherwise.

### GetWorkflowsOk

`func (o *SelectWorkflowStep) GetWorkflowsOk() (*[]Workflow, bool)`

GetWorkflowsOk returns a tuple with the Workflows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflows

`func (o *SelectWorkflowStep) SetWorkflows(v []Workflow)`

SetWorkflows sets Workflows field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SelectWorkflowStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LlmModelProfile** | **string** | The name of the LLM model profile to lookup. | 
**LlmModelName** | **string** | The name of the LLM model to use. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**Workflows** | [**[]Workflow**](Workflow.md) | Workflow list | 

## Methods

### NewSelectWorkflowStep

`func NewSelectWorkflowStep(llmModelProfile string, llmModelName string, workflows []Workflow, ) *SelectWorkflowStep`

NewSelectWorkflowStep instantiates a new SelectWorkflowStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelectWorkflowStepWithDefaults

`func NewSelectWorkflowStepWithDefaults() *SelectWorkflowStep`

NewSelectWorkflowStepWithDefaults instantiates a new SelectWorkflowStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLlmModelProfile

`func (o *SelectWorkflowStep) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *SelectWorkflowStep) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *SelectWorkflowStep) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModelName

`func (o *SelectWorkflowStep) GetLlmModelName() string`

GetLlmModelName returns the LlmModelName field if non-nil, zero value otherwise.

### GetLlmModelNameOk

`func (o *SelectWorkflowStep) GetLlmModelNameOk() (*string, bool)`

GetLlmModelNameOk returns a tuple with the LlmModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelName

`func (o *SelectWorkflowStep) SetLlmModelName(v string)`

SetLlmModelName sets LlmModelName field to given value.


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



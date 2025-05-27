# SummarizeDoc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LlmModelProfile** | **string** | The LLM model profile to be used in cases of any options that require it  such as summarization.  | 
**LlmModelName** | **string** | The LLM model to be used for summarization. | 
**SummaryQuery** | Pointer to **string** | The query to use while summarizing documents. | [optional] 
**AdditionalInfo** | Pointer to **map[string]interface{}** | Additional information to be passed to summarizing process. | [optional] 

## Methods

### NewSummarizeDoc

`func NewSummarizeDoc(llmModelProfile string, llmModelName string, ) *SummarizeDoc`

NewSummarizeDoc instantiates a new SummarizeDoc object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummarizeDocWithDefaults

`func NewSummarizeDocWithDefaults() *SummarizeDoc`

NewSummarizeDocWithDefaults instantiates a new SummarizeDoc object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLlmModelProfile

`func (o *SummarizeDoc) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *SummarizeDoc) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *SummarizeDoc) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModelName

`func (o *SummarizeDoc) GetLlmModelName() string`

GetLlmModelName returns the LlmModelName field if non-nil, zero value otherwise.

### GetLlmModelNameOk

`func (o *SummarizeDoc) GetLlmModelNameOk() (*string, bool)`

GetLlmModelNameOk returns a tuple with the LlmModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelName

`func (o *SummarizeDoc) SetLlmModelName(v string)`

SetLlmModelName sets LlmModelName field to given value.


### GetSummaryQuery

`func (o *SummarizeDoc) GetSummaryQuery() string`

GetSummaryQuery returns the SummaryQuery field if non-nil, zero value otherwise.

### GetSummaryQueryOk

`func (o *SummarizeDoc) GetSummaryQueryOk() (*string, bool)`

GetSummaryQueryOk returns a tuple with the SummaryQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryQuery

`func (o *SummarizeDoc) SetSummaryQuery(v string)`

SetSummaryQuery sets SummaryQuery field to given value.

### HasSummaryQuery

`func (o *SummarizeDoc) HasSummaryQuery() bool`

HasSummaryQuery returns a boolean if a field has been set.

### GetAdditionalInfo

`func (o *SummarizeDoc) GetAdditionalInfo() map[string]interface{}`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *SummarizeDoc) GetAdditionalInfoOk() (*map[string]interface{}, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *SummarizeDoc) SetAdditionalInfo(v map[string]interface{})`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *SummarizeDoc) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



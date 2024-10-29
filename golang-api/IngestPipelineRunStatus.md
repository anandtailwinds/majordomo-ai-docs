# IngestPipelineRunStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **bool** | Status of the operation, true indicates success. | [optional] 
**Error** | Pointer to **string** | Any associated error message in case the status is false. | [optional] 

## Methods

### NewIngestPipelineRunStatus

`func NewIngestPipelineRunStatus() *IngestPipelineRunStatus`

NewIngestPipelineRunStatus instantiates a new IngestPipelineRunStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIngestPipelineRunStatusWithDefaults

`func NewIngestPipelineRunStatusWithDefaults() *IngestPipelineRunStatus`

NewIngestPipelineRunStatusWithDefaults instantiates a new IngestPipelineRunStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *IngestPipelineRunStatus) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IngestPipelineRunStatus) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IngestPipelineRunStatus) SetStatus(v bool)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IngestPipelineRunStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetError

`func (o *IngestPipelineRunStatus) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *IngestPipelineRunStatus) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *IngestPipelineRunStatus) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *IngestPipelineRunStatus) HasError() bool`

HasError returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



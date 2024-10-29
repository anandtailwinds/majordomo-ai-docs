# IngestPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this ingest pipeline belongs to. | 
**UserName** | **string** | The user who created the ingest pipeline. | 
**Name** | **string** | Name of the ingest pipeline. | 
**DataStoreName** | **string** | The name of the parent data store in which this ingest pipeline is present. | 
**InputFilter** | [**InputFilter**](InputFilter.md) |  | 
**InputKeys** | Pointer to [**InputKeys**](InputKeys.md) |  | [optional] 
**InputType** | [**InputTypes**](InputTypes.md) |  | 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 
**TimerOn** | Pointer to **bool** |  | [optional] 
**TimerInterval** | Pointer to **int64** |  | [optional] 

## Methods

### NewIngestPipeline

`func NewIngestPipeline(workspace string, userName string, name string, dataStoreName string, inputFilter InputFilter, inputType InputTypes, ingestType IngestTypes, ) *IngestPipeline`

NewIngestPipeline instantiates a new IngestPipeline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIngestPipelineWithDefaults

`func NewIngestPipelineWithDefaults() *IngestPipeline`

NewIngestPipelineWithDefaults instantiates a new IngestPipeline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *IngestPipeline) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *IngestPipeline) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *IngestPipeline) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *IngestPipeline) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *IngestPipeline) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *IngestPipeline) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetName

`func (o *IngestPipeline) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IngestPipeline) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IngestPipeline) SetName(v string)`

SetName sets Name field to given value.


### GetDataStoreName

`func (o *IngestPipeline) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *IngestPipeline) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *IngestPipeline) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetInputFilter

`func (o *IngestPipeline) GetInputFilter() InputFilter`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *IngestPipeline) GetInputFilterOk() (*InputFilter, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *IngestPipeline) SetInputFilter(v InputFilter)`

SetInputFilter sets InputFilter field to given value.


### GetInputKeys

`func (o *IngestPipeline) GetInputKeys() InputKeys`

GetInputKeys returns the InputKeys field if non-nil, zero value otherwise.

### GetInputKeysOk

`func (o *IngestPipeline) GetInputKeysOk() (*InputKeys, bool)`

GetInputKeysOk returns a tuple with the InputKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputKeys

`func (o *IngestPipeline) SetInputKeys(v InputKeys)`

SetInputKeys sets InputKeys field to given value.

### HasInputKeys

`func (o *IngestPipeline) HasInputKeys() bool`

HasInputKeys returns a boolean if a field has been set.

### GetInputType

`func (o *IngestPipeline) GetInputType() InputTypes`

GetInputType returns the InputType field if non-nil, zero value otherwise.

### GetInputTypeOk

`func (o *IngestPipeline) GetInputTypeOk() (*InputTypes, bool)`

GetInputTypeOk returns a tuple with the InputType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputType

`func (o *IngestPipeline) SetInputType(v InputTypes)`

SetInputType sets InputType field to given value.


### GetIngestType

`func (o *IngestPipeline) GetIngestType() IngestTypes`

GetIngestType returns the IngestType field if non-nil, zero value otherwise.

### GetIngestTypeOk

`func (o *IngestPipeline) GetIngestTypeOk() (*IngestTypes, bool)`

GetIngestTypeOk returns a tuple with the IngestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestType

`func (o *IngestPipeline) SetIngestType(v IngestTypes)`

SetIngestType sets IngestType field to given value.


### GetIngestParams

`func (o *IngestPipeline) GetIngestParams() IngestParams`

GetIngestParams returns the IngestParams field if non-nil, zero value otherwise.

### GetIngestParamsOk

`func (o *IngestPipeline) GetIngestParamsOk() (*IngestParams, bool)`

GetIngestParamsOk returns a tuple with the IngestParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestParams

`func (o *IngestPipeline) SetIngestParams(v IngestParams)`

SetIngestParams sets IngestParams field to given value.

### HasIngestParams

`func (o *IngestPipeline) HasIngestParams() bool`

HasIngestParams returns a boolean if a field has been set.

### GetTimerOn

`func (o *IngestPipeline) GetTimerOn() bool`

GetTimerOn returns the TimerOn field if non-nil, zero value otherwise.

### GetTimerOnOk

`func (o *IngestPipeline) GetTimerOnOk() (*bool, bool)`

GetTimerOnOk returns a tuple with the TimerOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimerOn

`func (o *IngestPipeline) SetTimerOn(v bool)`

SetTimerOn sets TimerOn field to given value.

### HasTimerOn

`func (o *IngestPipeline) HasTimerOn() bool`

HasTimerOn returns a boolean if a field has been set.

### GetTimerInterval

`func (o *IngestPipeline) GetTimerInterval() int64`

GetTimerInterval returns the TimerInterval field if non-nil, zero value otherwise.

### GetTimerIntervalOk

`func (o *IngestPipeline) GetTimerIntervalOk() (*int64, bool)`

GetTimerIntervalOk returns a tuple with the TimerInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimerInterval

`func (o *IngestPipeline) SetTimerInterval(v int64)`

SetTimerInterval sets TimerInterval field to given value.

### HasTimerInterval

`func (o *IngestPipeline) HasTimerInterval() bool`

HasTimerInterval returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



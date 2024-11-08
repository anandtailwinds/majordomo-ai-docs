# IngestPipelineInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**CreatedBy** | **string** | The user who created the ingest pipeline. | 
**Name** | **string** | Name of the ingest pipeline. | 
**DataStoreName** | **string** | The name of the parent data store in which this ingest pipeline is present. | 
**InputFilter** | [**InputFilter**](InputFilter.md) |  | 
**InputKeys** | Pointer to [**InputKeys**](InputKeys.md) |  | [optional] 
**InputType** | [**InputTypes**](InputTypes.md) |  | 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 
**TimerOn** | Pointer to **bool** |  | [optional] 
**TimerInterval** | Pointer to **int64** |  | [optional] 
**CreatedAt** | **int64** | Timestamp of the ingest pipeline creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the ingest pipeline. | 

## Methods

### NewIngestPipelineInfo

`func NewIngestPipelineInfo(workspace string, createdBy string, name string, dataStoreName string, inputFilter InputFilter, inputType InputTypes, ingestType IngestTypes, createdAt int64, lastUpdate int64, ) *IngestPipelineInfo`

NewIngestPipelineInfo instantiates a new IngestPipelineInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIngestPipelineInfoWithDefaults

`func NewIngestPipelineInfoWithDefaults() *IngestPipelineInfo`

NewIngestPipelineInfoWithDefaults instantiates a new IngestPipelineInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *IngestPipelineInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *IngestPipelineInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *IngestPipelineInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetCreatedBy

`func (o *IngestPipelineInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *IngestPipelineInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *IngestPipelineInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetName

`func (o *IngestPipelineInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IngestPipelineInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IngestPipelineInfo) SetName(v string)`

SetName sets Name field to given value.


### GetDataStoreName

`func (o *IngestPipelineInfo) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *IngestPipelineInfo) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *IngestPipelineInfo) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetInputFilter

`func (o *IngestPipelineInfo) GetInputFilter() InputFilter`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *IngestPipelineInfo) GetInputFilterOk() (*InputFilter, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *IngestPipelineInfo) SetInputFilter(v InputFilter)`

SetInputFilter sets InputFilter field to given value.


### GetInputKeys

`func (o *IngestPipelineInfo) GetInputKeys() InputKeys`

GetInputKeys returns the InputKeys field if non-nil, zero value otherwise.

### GetInputKeysOk

`func (o *IngestPipelineInfo) GetInputKeysOk() (*InputKeys, bool)`

GetInputKeysOk returns a tuple with the InputKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputKeys

`func (o *IngestPipelineInfo) SetInputKeys(v InputKeys)`

SetInputKeys sets InputKeys field to given value.

### HasInputKeys

`func (o *IngestPipelineInfo) HasInputKeys() bool`

HasInputKeys returns a boolean if a field has been set.

### GetInputType

`func (o *IngestPipelineInfo) GetInputType() InputTypes`

GetInputType returns the InputType field if non-nil, zero value otherwise.

### GetInputTypeOk

`func (o *IngestPipelineInfo) GetInputTypeOk() (*InputTypes, bool)`

GetInputTypeOk returns a tuple with the InputType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputType

`func (o *IngestPipelineInfo) SetInputType(v InputTypes)`

SetInputType sets InputType field to given value.


### GetIngestType

`func (o *IngestPipelineInfo) GetIngestType() IngestTypes`

GetIngestType returns the IngestType field if non-nil, zero value otherwise.

### GetIngestTypeOk

`func (o *IngestPipelineInfo) GetIngestTypeOk() (*IngestTypes, bool)`

GetIngestTypeOk returns a tuple with the IngestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestType

`func (o *IngestPipelineInfo) SetIngestType(v IngestTypes)`

SetIngestType sets IngestType field to given value.


### GetIngestParams

`func (o *IngestPipelineInfo) GetIngestParams() IngestParams`

GetIngestParams returns the IngestParams field if non-nil, zero value otherwise.

### GetIngestParamsOk

`func (o *IngestPipelineInfo) GetIngestParamsOk() (*IngestParams, bool)`

GetIngestParamsOk returns a tuple with the IngestParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestParams

`func (o *IngestPipelineInfo) SetIngestParams(v IngestParams)`

SetIngestParams sets IngestParams field to given value.

### HasIngestParams

`func (o *IngestPipelineInfo) HasIngestParams() bool`

HasIngestParams returns a boolean if a field has been set.

### GetTimerOn

`func (o *IngestPipelineInfo) GetTimerOn() bool`

GetTimerOn returns the TimerOn field if non-nil, zero value otherwise.

### GetTimerOnOk

`func (o *IngestPipelineInfo) GetTimerOnOk() (*bool, bool)`

GetTimerOnOk returns a tuple with the TimerOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimerOn

`func (o *IngestPipelineInfo) SetTimerOn(v bool)`

SetTimerOn sets TimerOn field to given value.

### HasTimerOn

`func (o *IngestPipelineInfo) HasTimerOn() bool`

HasTimerOn returns a boolean if a field has been set.

### GetTimerInterval

`func (o *IngestPipelineInfo) GetTimerInterval() int64`

GetTimerInterval returns the TimerInterval field if non-nil, zero value otherwise.

### GetTimerIntervalOk

`func (o *IngestPipelineInfo) GetTimerIntervalOk() (*int64, bool)`

GetTimerIntervalOk returns a tuple with the TimerInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimerInterval

`func (o *IngestPipelineInfo) SetTimerInterval(v int64)`

SetTimerInterval sets TimerInterval field to given value.

### HasTimerInterval

`func (o *IngestPipelineInfo) HasTimerInterval() bool`

HasTimerInterval returns a boolean if a field has been set.

### GetCreatedAt

`func (o *IngestPipelineInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *IngestPipelineInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *IngestPipelineInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *IngestPipelineInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *IngestPipelineInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *IngestPipelineInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



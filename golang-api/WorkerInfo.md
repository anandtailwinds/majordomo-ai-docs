# WorkerInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the worker. | 
**WorkerId** | **string** | The unique identifier that is automatically assigned to the worker. | 
**AccessKey** | **string** | The client secret that is used to authenticate the worker. This needs to be provided when a worker tries to join Majordomo director. | 
**ClientStatus** | **bool** | Indicates whether the worker is currently connected to the director. | 
**ClientUrl** | Pointer to **string** | The registered endpoint for the worker. | [optional] 
**CreatedAt** | **int64** | Timestamp of the worker creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the worker. | 

## Methods

### NewWorkerInfo

`func NewWorkerInfo(name string, workerId string, accessKey string, clientStatus bool, createdAt int64, lastUpdate int64, ) *WorkerInfo`

NewWorkerInfo instantiates a new WorkerInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkerInfoWithDefaults

`func NewWorkerInfoWithDefaults() *WorkerInfo`

NewWorkerInfoWithDefaults instantiates a new WorkerInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *WorkerInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkerInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkerInfo) SetName(v string)`

SetName sets Name field to given value.


### GetWorkerId

`func (o *WorkerInfo) GetWorkerId() string`

GetWorkerId returns the WorkerId field if non-nil, zero value otherwise.

### GetWorkerIdOk

`func (o *WorkerInfo) GetWorkerIdOk() (*string, bool)`

GetWorkerIdOk returns a tuple with the WorkerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkerId

`func (o *WorkerInfo) SetWorkerId(v string)`

SetWorkerId sets WorkerId field to given value.


### GetAccessKey

`func (o *WorkerInfo) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *WorkerInfo) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *WorkerInfo) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.


### GetClientStatus

`func (o *WorkerInfo) GetClientStatus() bool`

GetClientStatus returns the ClientStatus field if non-nil, zero value otherwise.

### GetClientStatusOk

`func (o *WorkerInfo) GetClientStatusOk() (*bool, bool)`

GetClientStatusOk returns a tuple with the ClientStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientStatus

`func (o *WorkerInfo) SetClientStatus(v bool)`

SetClientStatus sets ClientStatus field to given value.


### GetClientUrl

`func (o *WorkerInfo) GetClientUrl() string`

GetClientUrl returns the ClientUrl field if non-nil, zero value otherwise.

### GetClientUrlOk

`func (o *WorkerInfo) GetClientUrlOk() (*string, bool)`

GetClientUrlOk returns a tuple with the ClientUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientUrl

`func (o *WorkerInfo) SetClientUrl(v string)`

SetClientUrl sets ClientUrl field to given value.

### HasClientUrl

`func (o *WorkerInfo) HasClientUrl() bool`

HasClientUrl returns a boolean if a field has been set.

### GetCreatedAt

`func (o *WorkerInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *WorkerInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *WorkerInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *WorkerInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *WorkerInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *WorkerInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



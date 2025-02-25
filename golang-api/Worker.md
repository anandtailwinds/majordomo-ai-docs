# Worker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the worker. | 
**ClientUrl** | Pointer to **string** | The static registered endpoint for the worker. This will bypass proxy. | [optional] 
**ChatWorker** | Pointer to **bool** | The worker is used as a means to access a chat server. | [optional] 

## Methods

### NewWorker

`func NewWorker(name string, ) *Worker`

NewWorker instantiates a new Worker object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkerWithDefaults

`func NewWorkerWithDefaults() *Worker`

NewWorkerWithDefaults instantiates a new Worker object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Worker) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Worker) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Worker) SetName(v string)`

SetName sets Name field to given value.


### GetClientUrl

`func (o *Worker) GetClientUrl() string`

GetClientUrl returns the ClientUrl field if non-nil, zero value otherwise.

### GetClientUrlOk

`func (o *Worker) GetClientUrlOk() (*string, bool)`

GetClientUrlOk returns a tuple with the ClientUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientUrl

`func (o *Worker) SetClientUrl(v string)`

SetClientUrl sets ClientUrl field to given value.

### HasClientUrl

`func (o *Worker) HasClientUrl() bool`

HasClientUrl returns a boolean if a field has been set.

### GetChatWorker

`func (o *Worker) GetChatWorker() bool`

GetChatWorker returns the ChatWorker field if non-nil, zero value otherwise.

### GetChatWorkerOk

`func (o *Worker) GetChatWorkerOk() (*bool, bool)`

GetChatWorkerOk returns a tuple with the ChatWorker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatWorker

`func (o *Worker) SetChatWorker(v bool)`

SetChatWorker sets ChatWorker field to given value.

### HasChatWorker

`func (o *Worker) HasChatWorker() bool`

HasChatWorker returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



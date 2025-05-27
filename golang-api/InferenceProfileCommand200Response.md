# InferenceProfileCommand200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** | The result of the inference profile command. | 
**Message** | **string** | The message returned for the inference profile command operation. | 
**PodList** | **[]map[string]interface{}** | The information about a specific pod. | 
**Logs** | **[]string** | The current status of inference obtained from Kserve. | 
**InferenceStatus** | [**[]InferenceStatusInfo**](InferenceStatusInfo.md) | The list of inference status. | 

## Methods

### NewInferenceProfileCommand200Response

`func NewInferenceProfileCommand200Response(status bool, message string, podList []map[string]interface{}, logs []string, inferenceStatus []InferenceStatusInfo, ) *InferenceProfileCommand200Response`

NewInferenceProfileCommand200Response instantiates a new InferenceProfileCommand200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInferenceProfileCommand200ResponseWithDefaults

`func NewInferenceProfileCommand200ResponseWithDefaults() *InferenceProfileCommand200Response`

NewInferenceProfileCommand200ResponseWithDefaults instantiates a new InferenceProfileCommand200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *InferenceProfileCommand200Response) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InferenceProfileCommand200Response) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InferenceProfileCommand200Response) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *InferenceProfileCommand200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *InferenceProfileCommand200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *InferenceProfileCommand200Response) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetPodList

`func (o *InferenceProfileCommand200Response) GetPodList() []map[string]interface{}`

GetPodList returns the PodList field if non-nil, zero value otherwise.

### GetPodListOk

`func (o *InferenceProfileCommand200Response) GetPodListOk() (*[]map[string]interface{}, bool)`

GetPodListOk returns a tuple with the PodList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPodList

`func (o *InferenceProfileCommand200Response) SetPodList(v []map[string]interface{})`

SetPodList sets PodList field to given value.


### GetLogs

`func (o *InferenceProfileCommand200Response) GetLogs() []string`

GetLogs returns the Logs field if non-nil, zero value otherwise.

### GetLogsOk

`func (o *InferenceProfileCommand200Response) GetLogsOk() (*[]string, bool)`

GetLogsOk returns a tuple with the Logs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogs

`func (o *InferenceProfileCommand200Response) SetLogs(v []string)`

SetLogs sets Logs field to given value.


### GetInferenceStatus

`func (o *InferenceProfileCommand200Response) GetInferenceStatus() []InferenceStatusInfo`

GetInferenceStatus returns the InferenceStatus field if non-nil, zero value otherwise.

### GetInferenceStatusOk

`func (o *InferenceProfileCommand200Response) GetInferenceStatusOk() (*[]InferenceStatusInfo, bool)`

GetInferenceStatusOk returns a tuple with the InferenceStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInferenceStatus

`func (o *InferenceProfileCommand200Response) SetInferenceStatus(v []InferenceStatusInfo)`

SetInferenceStatus sets InferenceStatus field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



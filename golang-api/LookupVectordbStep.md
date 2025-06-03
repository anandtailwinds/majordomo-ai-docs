# LookupVectordbStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataStoreName** | **string** | The name of the data store to lookup. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**ChatId** | Pointer to **string** | Chat identifier that denotes the conversation this is part of. | [optional] 

## Methods

### NewLookupVectordbStep

`func NewLookupVectordbStep(dataStoreName string, ) *LookupVectordbStep`

NewLookupVectordbStep instantiates a new LookupVectordbStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLookupVectordbStepWithDefaults

`func NewLookupVectordbStepWithDefaults() *LookupVectordbStep`

NewLookupVectordbStepWithDefaults instantiates a new LookupVectordbStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataStoreName

`func (o *LookupVectordbStep) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *LookupVectordbStep) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *LookupVectordbStep) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetQueryParams

`func (o *LookupVectordbStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *LookupVectordbStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *LookupVectordbStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *LookupVectordbStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.

### GetChatId

`func (o *LookupVectordbStep) GetChatId() string`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *LookupVectordbStep) GetChatIdOk() (*string, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *LookupVectordbStep) SetChatId(v string)`

SetChatId sets ChatId field to given value.

### HasChatId

`func (o *LookupVectordbStep) HasChatId() bool`

HasChatId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



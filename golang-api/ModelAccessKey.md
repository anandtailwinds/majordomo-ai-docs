# ModelAccessKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | Pointer to **string** | Access Key for accessing the model. It is possible to specify the access key as a secret value using either of the following formats {Azure:KeyVault-Name:Key} or {AWS:SecretName:Key} or {AWS:Region:SecretName:Key}. | [optional] 

## Methods

### NewModelAccessKey

`func NewModelAccessKey() *ModelAccessKey`

NewModelAccessKey instantiates a new ModelAccessKey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelAccessKeyWithDefaults

`func NewModelAccessKeyWithDefaults() *ModelAccessKey`

NewModelAccessKeyWithDefaults instantiates a new ModelAccessKey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *ModelAccessKey) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *ModelAccessKey) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *ModelAccessKey) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *ModelAccessKey) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



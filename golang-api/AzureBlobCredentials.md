# AzureBlobCredentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AzClientId** | **string** | Azure Client ID. | 
**AzClientSecret** | **string** | Azure Client Secret. | 
**AzTenantId** | **string** | Azure Tenant ID. | 

## Methods

### NewAzureBlobCredentials

`func NewAzureBlobCredentials(azClientId string, azClientSecret string, azTenantId string, ) *AzureBlobCredentials`

NewAzureBlobCredentials instantiates a new AzureBlobCredentials object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureBlobCredentialsWithDefaults

`func NewAzureBlobCredentialsWithDefaults() *AzureBlobCredentials`

NewAzureBlobCredentialsWithDefaults instantiates a new AzureBlobCredentials object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAzClientId

`func (o *AzureBlobCredentials) GetAzClientId() string`

GetAzClientId returns the AzClientId field if non-nil, zero value otherwise.

### GetAzClientIdOk

`func (o *AzureBlobCredentials) GetAzClientIdOk() (*string, bool)`

GetAzClientIdOk returns a tuple with the AzClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzClientId

`func (o *AzureBlobCredentials) SetAzClientId(v string)`

SetAzClientId sets AzClientId field to given value.


### GetAzClientSecret

`func (o *AzureBlobCredentials) GetAzClientSecret() string`

GetAzClientSecret returns the AzClientSecret field if non-nil, zero value otherwise.

### GetAzClientSecretOk

`func (o *AzureBlobCredentials) GetAzClientSecretOk() (*string, bool)`

GetAzClientSecretOk returns a tuple with the AzClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzClientSecret

`func (o *AzureBlobCredentials) SetAzClientSecret(v string)`

SetAzClientSecret sets AzClientSecret field to given value.


### GetAzTenantId

`func (o *AzureBlobCredentials) GetAzTenantId() string`

GetAzTenantId returns the AzTenantId field if non-nil, zero value otherwise.

### GetAzTenantIdOk

`func (o *AzureBlobCredentials) GetAzTenantIdOk() (*string, bool)`

GetAzTenantIdOk returns a tuple with the AzTenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzTenantId

`func (o *AzureBlobCredentials) SetAzTenantId(v string)`

SetAzTenantId sets AzTenantId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



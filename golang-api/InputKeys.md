# InputKeys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AzureBlobCredentials** | Pointer to [**AzureBlobCredentials**](AzureBlobCredentials.md) |  | [optional] 
**AwsS3Credentials** | Pointer to [**AWSS3Credentials**](AWSS3Credentials.md) |  | [optional] 
**ConfluenceCredentials** | Pointer to [**ConfluenceCredentials**](ConfluenceCredentials.md) |  | [optional] 

## Methods

### NewInputKeys

`func NewInputKeys() *InputKeys`

NewInputKeys instantiates a new InputKeys object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInputKeysWithDefaults

`func NewInputKeysWithDefaults() *InputKeys`

NewInputKeysWithDefaults instantiates a new InputKeys object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAzureBlobCredentials

`func (o *InputKeys) GetAzureBlobCredentials() AzureBlobCredentials`

GetAzureBlobCredentials returns the AzureBlobCredentials field if non-nil, zero value otherwise.

### GetAzureBlobCredentialsOk

`func (o *InputKeys) GetAzureBlobCredentialsOk() (*AzureBlobCredentials, bool)`

GetAzureBlobCredentialsOk returns a tuple with the AzureBlobCredentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzureBlobCredentials

`func (o *InputKeys) SetAzureBlobCredentials(v AzureBlobCredentials)`

SetAzureBlobCredentials sets AzureBlobCredentials field to given value.

### HasAzureBlobCredentials

`func (o *InputKeys) HasAzureBlobCredentials() bool`

HasAzureBlobCredentials returns a boolean if a field has been set.

### GetAwsS3Credentials

`func (o *InputKeys) GetAwsS3Credentials() AWSS3Credentials`

GetAwsS3Credentials returns the AwsS3Credentials field if non-nil, zero value otherwise.

### GetAwsS3CredentialsOk

`func (o *InputKeys) GetAwsS3CredentialsOk() (*AWSS3Credentials, bool)`

GetAwsS3CredentialsOk returns a tuple with the AwsS3Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsS3Credentials

`func (o *InputKeys) SetAwsS3Credentials(v AWSS3Credentials)`

SetAwsS3Credentials sets AwsS3Credentials field to given value.

### HasAwsS3Credentials

`func (o *InputKeys) HasAwsS3Credentials() bool`

HasAwsS3Credentials returns a boolean if a field has been set.

### GetConfluenceCredentials

`func (o *InputKeys) GetConfluenceCredentials() ConfluenceCredentials`

GetConfluenceCredentials returns the ConfluenceCredentials field if non-nil, zero value otherwise.

### GetConfluenceCredentialsOk

`func (o *InputKeys) GetConfluenceCredentialsOk() (*ConfluenceCredentials, bool)`

GetConfluenceCredentialsOk returns a tuple with the ConfluenceCredentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfluenceCredentials

`func (o *InputKeys) SetConfluenceCredentials(v ConfluenceCredentials)`

SetConfluenceCredentials sets ConfluenceCredentials field to given value.

### HasConfluenceCredentials

`func (o *InputKeys) HasConfluenceCredentials() bool`

HasConfluenceCredentials returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



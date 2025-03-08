# AWSS3Credentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwsAccessKey** | **string** | AWS Access Key | 
**AwsSecretToken** | **string** | AWS Secret Token | 

## Methods

### NewAWSS3Credentials

`func NewAWSS3Credentials(awsAccessKey string, awsSecretToken string, ) *AWSS3Credentials`

NewAWSS3Credentials instantiates a new AWSS3Credentials object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAWSS3CredentialsWithDefaults

`func NewAWSS3CredentialsWithDefaults() *AWSS3Credentials`

NewAWSS3CredentialsWithDefaults instantiates a new AWSS3Credentials object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwsAccessKey

`func (o *AWSS3Credentials) GetAwsAccessKey() string`

GetAwsAccessKey returns the AwsAccessKey field if non-nil, zero value otherwise.

### GetAwsAccessKeyOk

`func (o *AWSS3Credentials) GetAwsAccessKeyOk() (*string, bool)`

GetAwsAccessKeyOk returns a tuple with the AwsAccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccessKey

`func (o *AWSS3Credentials) SetAwsAccessKey(v string)`

SetAwsAccessKey sets AwsAccessKey field to given value.


### GetAwsSecretToken

`func (o *AWSS3Credentials) GetAwsSecretToken() string`

GetAwsSecretToken returns the AwsSecretToken field if non-nil, zero value otherwise.

### GetAwsSecretTokenOk

`func (o *AWSS3Credentials) GetAwsSecretTokenOk() (*string, bool)`

GetAwsSecretTokenOk returns a tuple with the AwsSecretToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsSecretToken

`func (o *AWSS3Credentials) SetAwsSecretToken(v string)`

SetAwsSecretToken sets AwsSecretToken field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



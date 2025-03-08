# AzureBlobInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileList** | **[]string** | File list to be ingested, wild cards are allowed. | 
**AzContainer** | **string** | Name of the container incase of Azure storage. | 
**AzAccountUrl** | **string** | Name of the account URL incase of Azure storage. | 

## Methods

### NewAzureBlobInput

`func NewAzureBlobInput(fileList []string, azContainer string, azAccountUrl string, ) *AzureBlobInput`

NewAzureBlobInput instantiates a new AzureBlobInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureBlobInputWithDefaults

`func NewAzureBlobInputWithDefaults() *AzureBlobInput`

NewAzureBlobInputWithDefaults instantiates a new AzureBlobInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileList

`func (o *AzureBlobInput) GetFileList() []string`

GetFileList returns the FileList field if non-nil, zero value otherwise.

### GetFileListOk

`func (o *AzureBlobInput) GetFileListOk() (*[]string, bool)`

GetFileListOk returns a tuple with the FileList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileList

`func (o *AzureBlobInput) SetFileList(v []string)`

SetFileList sets FileList field to given value.


### GetAzContainer

`func (o *AzureBlobInput) GetAzContainer() string`

GetAzContainer returns the AzContainer field if non-nil, zero value otherwise.

### GetAzContainerOk

`func (o *AzureBlobInput) GetAzContainerOk() (*string, bool)`

GetAzContainerOk returns a tuple with the AzContainer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzContainer

`func (o *AzureBlobInput) SetAzContainer(v string)`

SetAzContainer sets AzContainer field to given value.


### GetAzAccountUrl

`func (o *AzureBlobInput) GetAzAccountUrl() string`

GetAzAccountUrl returns the AzAccountUrl field if non-nil, zero value otherwise.

### GetAzAccountUrlOk

`func (o *AzureBlobInput) GetAzAccountUrlOk() (*string, bool)`

GetAzAccountUrlOk returns a tuple with the AzAccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzAccountUrl

`func (o *AzureBlobInput) SetAzAccountUrl(v string)`

SetAzAccountUrl sets AzAccountUrl field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



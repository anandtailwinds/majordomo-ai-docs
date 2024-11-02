# InputFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilesList** | Pointer to **string** | Comma separated list of file name specification to be picked for ingestion. Supports wildcards. | [optional] 
**Recursive** | Pointer to **string** | Indicates that the file wildcards can be matched in sub-directories of the specified source. | [optional] 
**AzBlob** | Pointer to **string** | Name of the blob incase of Azure storage. | [optional] 
**AzAccountUrl** | Pointer to **string** | Name of the account URL incase of Azure storage. | [optional] 
**S3Bucket** | Pointer to **string** | Name of the S3 bucket in case of AWS storage. | [optional] 

## Methods

### NewInputFilter

`func NewInputFilter() *InputFilter`

NewInputFilter instantiates a new InputFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInputFilterWithDefaults

`func NewInputFilterWithDefaults() *InputFilter`

NewInputFilterWithDefaults instantiates a new InputFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilesList

`func (o *InputFilter) GetFilesList() string`

GetFilesList returns the FilesList field if non-nil, zero value otherwise.

### GetFilesListOk

`func (o *InputFilter) GetFilesListOk() (*string, bool)`

GetFilesListOk returns a tuple with the FilesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilesList

`func (o *InputFilter) SetFilesList(v string)`

SetFilesList sets FilesList field to given value.

### HasFilesList

`func (o *InputFilter) HasFilesList() bool`

HasFilesList returns a boolean if a field has been set.

### GetRecursive

`func (o *InputFilter) GetRecursive() string`

GetRecursive returns the Recursive field if non-nil, zero value otherwise.

### GetRecursiveOk

`func (o *InputFilter) GetRecursiveOk() (*string, bool)`

GetRecursiveOk returns a tuple with the Recursive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecursive

`func (o *InputFilter) SetRecursive(v string)`

SetRecursive sets Recursive field to given value.

### HasRecursive

`func (o *InputFilter) HasRecursive() bool`

HasRecursive returns a boolean if a field has been set.

### GetAzBlob

`func (o *InputFilter) GetAzBlob() string`

GetAzBlob returns the AzBlob field if non-nil, zero value otherwise.

### GetAzBlobOk

`func (o *InputFilter) GetAzBlobOk() (*string, bool)`

GetAzBlobOk returns a tuple with the AzBlob field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzBlob

`func (o *InputFilter) SetAzBlob(v string)`

SetAzBlob sets AzBlob field to given value.

### HasAzBlob

`func (o *InputFilter) HasAzBlob() bool`

HasAzBlob returns a boolean if a field has been set.

### GetAzAccountUrl

`func (o *InputFilter) GetAzAccountUrl() string`

GetAzAccountUrl returns the AzAccountUrl field if non-nil, zero value otherwise.

### GetAzAccountUrlOk

`func (o *InputFilter) GetAzAccountUrlOk() (*string, bool)`

GetAzAccountUrlOk returns a tuple with the AzAccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzAccountUrl

`func (o *InputFilter) SetAzAccountUrl(v string)`

SetAzAccountUrl sets AzAccountUrl field to given value.

### HasAzAccountUrl

`func (o *InputFilter) HasAzAccountUrl() bool`

HasAzAccountUrl returns a boolean if a field has been set.

### GetS3Bucket

`func (o *InputFilter) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *InputFilter) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *InputFilter) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.

### HasS3Bucket

`func (o *InputFilter) HasS3Bucket() bool`

HasS3Bucket returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AWSS3Input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileList** | **[]string** | File list to be ingested, wild cards are allowed. | 
**S3Bucket** | **string** | Name of the S3 bucket in case of AWS storage. | 
**Region** | Pointer to **string** | Name of the region in which the bucket is present. | [optional] 

## Methods

### NewAWSS3Input

`func NewAWSS3Input(fileList []string, s3Bucket string, ) *AWSS3Input`

NewAWSS3Input instantiates a new AWSS3Input object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAWSS3InputWithDefaults

`func NewAWSS3InputWithDefaults() *AWSS3Input`

NewAWSS3InputWithDefaults instantiates a new AWSS3Input object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileList

`func (o *AWSS3Input) GetFileList() []string`

GetFileList returns the FileList field if non-nil, zero value otherwise.

### GetFileListOk

`func (o *AWSS3Input) GetFileListOk() (*[]string, bool)`

GetFileListOk returns a tuple with the FileList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileList

`func (o *AWSS3Input) SetFileList(v []string)`

SetFileList sets FileList field to given value.


### GetS3Bucket

`func (o *AWSS3Input) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *AWSS3Input) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *AWSS3Input) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.


### GetRegion

`func (o *AWSS3Input) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AWSS3Input) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AWSS3Input) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AWSS3Input) HasRegion() bool`

HasRegion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



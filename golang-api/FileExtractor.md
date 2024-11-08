# FileExtractor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Extension** | **string** | The extension for which the extractor has to be applied. | 
**Extractor** | [**FileExtractors**](FileExtractors.md) |  | 

## Methods

### NewFileExtractor

`func NewFileExtractor(extension string, extractor FileExtractors, ) *FileExtractor`

NewFileExtractor instantiates a new FileExtractor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFileExtractorWithDefaults

`func NewFileExtractorWithDefaults() *FileExtractor`

NewFileExtractorWithDefaults instantiates a new FileExtractor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExtension

`func (o *FileExtractor) GetExtension() string`

GetExtension returns the Extension field if non-nil, zero value otherwise.

### GetExtensionOk

`func (o *FileExtractor) GetExtensionOk() (*string, bool)`

GetExtensionOk returns a tuple with the Extension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtension

`func (o *FileExtractor) SetExtension(v string)`

SetExtension sets Extension field to given value.


### GetExtractor

`func (o *FileExtractor) GetExtractor() FileExtractors`

GetExtractor returns the Extractor field if non-nil, zero value otherwise.

### GetExtractorOk

`func (o *FileExtractor) GetExtractorOk() (*FileExtractors, bool)`

GetExtractorOk returns a tuple with the Extractor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractor

`func (o *FileExtractor) SetExtractor(v FileExtractors)`

SetExtractor sets Extractor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



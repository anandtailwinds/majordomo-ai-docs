# Org.OpenAPITools.Model.StructdbStore
This is the data store specification structured databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubType** | **DataStoreSubTypes** |  | 
**ConnectString** | **string** | The endpoint of the structure database such as SQL/MongoDB. This string can contain keystore specification for any sensitive information. This is a mandatory parameter for structured and image databases. | 
**DatabaseName** | **string** | The name of the database in the structured database This is a mandatory parameter for structured and image databases. | 
**Tables** | **List&lt;string&gt;** | The list of tables in the structured database. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


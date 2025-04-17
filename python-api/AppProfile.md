# AppProfile

Application Profile Information. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the application profile. | 
**workspace** | **str** | The workspace that contains the model profile. | 
**app_type** | [**AppTypes**](AppTypes.md) |  | 
**access_info** | **Dict[str, object]** | Key value pairs with information required to access the application. The possible values for the different types are given below.  APP_TYPE_DOCKER_REGISTRY   registry_name : Name of the registry  APP_TYPE_ACR   registry_name : Name of the registry  APP_TYPE_ECR   registry_name : Name of the registry  APP_TYPE_AWS_S3   access_key : The AWS access key for accessing S3.   secret_token : The AWS secret token for accessing S3.   region :  AWS region.  APP_TYPE_AZURE_BLOB   client_id : The Azure client ID.   client_secret : The Azure client secret.   tenant_id : The Azure tenant ID.  APP_TYPE_WEBPAGE   None  APP_TYPE_PINECONE   cloud : The cloud in which the vector database is running.   region : The region in which the vector database is running.   api_key : API Key for accessing the Pinecone.  APP_TYPE_MONGO_VECTORDB   connect_string : The connect string to contact the Mongo Vector database.   database_name : The database name.  APP_TYPE_POSTGRES_VECTORDB   connect_string : The connect string to contact the Mongo Vector database.   database_name : The database name.  APP_TYPE_SQL   connect_string : The connect string to contact the Mongo Vector database.                     Format: postgres://   database_name : The database name.  APP_TYPE_MONGODB   connect_string : The connect string to contact the Mongo Vector database.   database_name : The database name.  APP_TYPE_CONFLUENCE   user_name : The user name for accessing the Confluence server.   api_token : API Token for accessing the server.   space_key : The key required to access the Confluence space.  APP_TYPE_ELASTIC_SEARCH   None  | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.app_profile import AppProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AppProfile from a JSON string
app_profile_instance = AppProfile.from_json(json)
# print the JSON string representation of the object
print(AppProfile.to_json())

# convert the object into a dict
app_profile_dict = app_profile_instance.to_dict()
# create an instance of AppProfile from a dict
app_profile_from_dict = AppProfile.from_dict(app_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



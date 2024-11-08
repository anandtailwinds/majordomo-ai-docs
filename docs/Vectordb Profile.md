# Vectordb Profiles

## Purpose

The vectordb profile defines the characteristics of a particular vectordb provider instance that can be used as a endpoint for performing ingestion and query operations using embeddings. The vectordb profile can point to either an on-prem vectordb instance that is running on a customer network or a vectordb endpoint offered by the cloud service provider, such as AWS Pinecone or a third party website hosted vectordb provider that is accessible via the Internet such as Mongodb Atlast. 

## Defining a vectordb profile

The information that is required to fully define a vectordb provider will require a subset of the following.

### Provider

The type of the vectordb provider will eventually determine how the vectordb provider functionality is accessed for a ingestion or query operation from the worker. There are a bunch of standard vectordb providers such as Pinecone and Mongodb Vector Store that will be supported out of the box when it comes to third party providers. The provisioning of the vectordb provider itself is outside the scope of this product and will need to be done by the administratively directly with the provider or using the Majordomo CloudOps solution in case it is a cloud managed offering. It is possible to specify the some types of access info in a KeyVault encoded format so that the information is available only the worker node that is responsible for making the connection with the provider and is very secure. This is useful incase the access information also contains password or equivalent data.

### Access Info

This is a container for holding the access information for a vectordb provider as JSON specification. This information is specific to the vectordb provider, for example in case of Pinecone, the region and cloud type for the hosting are required in case of a third party Pinecone. The appropriate access information that is to be provided for a supported vectordb type should be available in the API documentation. It is possible to specify the some types of access info in a KeyVault encoded format so that the information is available only the worker node that is responsible for making the connection with the provider and is very secure. This is useful incase the access information also contains password or equivalent data.

### Access Key

This is a container holding the key information for accessing the vector databases on a provider. The nature of the exact key specification will vary as per the provider. Typically an API Key or something similar is required to access the data on the provider and the key needs to be obtained directly from the provider.  Since this is an extensible JSON specification, the exact specification for each provider can be easily provided. Please refer to the API documentation for specific value requirements for each provider we support. It is possible to specify the access keys in a KeyVault encoded format so that the information is available only the worker node that is responsible for making the connection with the provider and is very secure.

### Read Only

This parameter can be used to restrict write access to the vector database only to a few users. For example, in an administrator managed account, if the administrator wants to ensure that some users can only read from a vector database but they do not have permission to ingest new documents, then the vectordb profile needs to have this option set and the user can be assigned this profile. It is not necessary for the administrator to create another API key for this purpose and the same key can be used in another profile that also allows write access and is assigned to a different set of users. 

#### Notes

1. While the access control mechanisms can differ from provider to provider, it is important to note that in administrator controlled accounts using a common access (eg: API Key mechanism), users will need to name the databases uniquely to not create confusion. While Majordomo AI will ensure that the data store will flag if a data store name is reused using the same profile, it is not possible to detect the usage in different profiles pointing to the same endpoint. 
2. Vectordb access should be done only via the Majordomo AI software. If there are any changes done to the vector database outside of this, then there can be data inconsistency problems. While there will be hooks to overcome this, it is recommended to not use them. For example, if a vector database is deleted directly bypassing Majordomo AI, then when the corresponding data store is deleted in future, it will fail because it cannot delete the vector database. However in such extreme cases, there will be a force flag to delete the data store irrespective of the status of the vector database.

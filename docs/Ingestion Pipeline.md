# Ingestion Pipelines

## Introduction

Ingestion pipelines are the mechanism to use to ingest enterprise or user data into the different kind of data stores that are available in Majordomo AI. Ingestion pipelines are broadly categorized into two types.

The standard ingestion types have pre-built ingestion mechanisms provided by Majordomo AI such as ingestion of PDF or text into a vector database or scrap information from a Slack channel and ingest into a vector database. While there are many parameters that can be controlled with respect to this ingestion, this type of ingestion is straightforward and is minimal operational complexity for the user and typically used for embedding based databases.

The custom ingestion type is provided to give an extensible mechanism to adapt to customer needs to ingest data into structured databases where the input data needs to be massaged before it is suitable for being ingested in a query-able form. For example, if you want to ingest a set of JSON files into a Mongodb structured database, you may want to clean some information or add metadata while ingesting them, so that they can be queried easily later. Such unique requirements can be easily handled by the custom ingestion. Once the custom ingestion is designed and adapted all the rest of the capabilities regarding the ingestion pipelines such as timed ingestions etc. can be leveraged seamlessly.

## Ingestion Pipeline Capabilities

### Data Source

Ingestion pipelines provide an extensible way to source data for the process. The data may be residing in customer document stores such as AWS S3 or Azure blobs, or they could be hosted in a web server, or the documents can be part of enterprise software such as Sharepoint, Notion, Confluence etc. Majordomo AI will provide options for the user to specify in a fine-grained manner the data to be collected as part of the ingestion process. For example, if the user wants to ingest Slack data between a specific set of time interval, the specifics of the support data source can be provided as part of the ingestion pipeline run.

### Data Access Information

The security keys required for ingesting the data from the specific type of data source can be handled in multiple ways.

1. The worker that executes the ingestion operation and running in the customer network can be provided with enough permissions to access the information.

2. The security keys can be specified as part of the pipeline in a Keyvault encoded format that is supported by Majordomo AI for common key vaults such as AWS Secrets Manager or Azure Key Vault. The worker will then need to have sufficient policy access to get information from the key vault. This way the information stays within the customer network similar to other clould based applications.

3. When the user is fully comfortable with providing the access information, they can also be specified directly in the ingestion pipeline but we do not recommend this beyond simple trials.

## Periodic Runs

The ingestion pipelines can be run periodically based on a timer interval. If the data to be ingested is being updated on a regular basis and there is a periodicity with which it has to be ingested into the vector database or the structured databases, the periodic runs can be triggered with user-chosen time interval. Apart from the periodic runs, it is also possible to trigger the ingestion pipeline whenever the run is required irrespective of current state of timer.

## Optimization

One of the key issues with periodic runs on the same set of data is the fact that even when a file is not changed, the file is ingested again along with the associated embedding model costs. To alleviate this, Majordomo AI has its own mechanism for tracking if the files have changed since the last ingestion and only those files that have ingested will go through the embedding process again.

Note that the above optimization is valid only for vector database ingestions. For custom ingestions, the user script will need to have a mechanism to decide if the ingestion is required or not, it is beyond the scope of Majordomo AI.

## Ingestion Parameters

There are a number of ingestion parameters that can be tweaked while performing the ingestion and they are detailed in the Ingestion Params section.

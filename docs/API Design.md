# Majordomo AI API

Majordomo AI supports APIs in multiple programming languages to access the AI pipelines and execute operations on them. The languages that are currently tested and supported in first phase are,

- Python

- Golang

The APIs are classified into one of these categories.

## Admin API

These APIs are meant to perform and retrieve administrative resource such as model profiles, user profiles, workspace etcs. The profile maintenance in a administator controlled account can be performed only by the admin. In the user controlled account, individual users create their own profiles and utilize them without sharing.

The full set of administrative APIs can be found [here]([majordomo-ai-docs/python-api/AdminApi.md at main · anandtailwinds/majordomo-ai-docs · GitHub](https://github.com/anandtailwinds/majordomo-ai-docs/blob/main/python-api/AdminApi.md))

## Monitor API

The purpose of these APIs is to manage the monitoring related actions that Majordomo AI supports. These APIs can be used to configure Monitoring tools, retrieve logging information based on filters and run queries on the token statistics for the AI operations that have been performed by the user. The API access is available for administatrators to retrieve the information for any user in their account in both kinds of accounts. 

The full set of monitoring APIs can be found [here]([majordomo-ai-docs/python-api/MonitorApi.md at main · anandtailwinds/majordomo-ai-docs · GitHub](https://github.com/anandtailwinds/majordomo-ai-docs/blob/main/python-api/MonitorApi.md)).

## Ingest API

The purpose of these APIs is to aid and assist ingestion operations of customer data into the different types of data stores that are supported by Majordomo AI. Multiple sources of data are currently supported and will be expanded in future based on customer requirements. There are a number of user customizable parameters that can be modified during the ingestion process. 

The full set of ingestion APIs can be found [here]([majordomo-ai-docs/python-api/IngestPipelines.md at main · anandtailwinds/majordomo-ai-docs · GitHub](https://github.com/anandtailwinds/majordomo-ai-docs/blob/main/python-api/IngestPipelines.md)).

## Query API

The Query APIs provide an extensible framework for customers to build Query Pipelines that can perform various LLM related actions. The query pipeline can be evolved in future with more complex RAG pipeline implementations, to provide the user with reusable code blocks that can be run repeatedly with different sets of queries.

The full set of query APIs can be found [here]([majordomo-ai-docs/python-api/QueryApi.md at main · anandtailwinds/majordomo-ai-docs · GitHub](https://github.com/anandtailwinds/majordomo-ai-docs/blob/main/python-api/QueryApi.md)).

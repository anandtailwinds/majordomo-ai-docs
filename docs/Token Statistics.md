# Token Statistics

Irrespective of whether a monitoring tool is turned on or not, Majordomo AI provides a token statistics functionality that measures the token consumed for each operation of the RAG pipeline, either for ingestion or query. The token statistics are logged on an individual operation basis and can be aggregated as per the requirement of the customer. The token stats cannot be removed, they will be aggregrated to save space on a periodic basis in future. The token stats consumed for each operation is visible to the user who performed the operation as well as the administrator.

It is possible to implement cost budgets using the data collected by token statistics. The budgeting capability will be added in future enhancements.  

## Collected statistics

- Embedding Model used (applicable for both ingest and query operations)

- Embedding tokens consumed

- LLM Model used (applicable for operations that involve an LLM, most ingest operations don't need LLMs)

- LLM Prompt tokens consumed

- LLM Completion tokens consumed

- Files count (applies to ingest operations)

- File size (total size of ingested files, applies only to ingest operations)

## Filter Parameters

#### Workspace

Logs can be filtered based on the workspace in which the operation was performed.

#### Start Time

The start time for the query of logs. If the start time is not specified, it is assumed to cover the last 15 minutes.

#### End time

This is valid only if the start time is specified and defines the time period for which logs are desired.

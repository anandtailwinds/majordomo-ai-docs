# Logging

LLM related operations performed by the user are logged in a central location in the Majordomo AI Saas Cloud and are viewable both by the user whose actions resulted in those logs as well as the administrator of the domain. The logging can be filtered based on the following conditions.

## Filter Parameters

#### Loglevel

There are four predefined levels for logging.

- LOG DEBUG

- LOG INFO

- LOG WARN

- LOG ERROR

#### Topic

The topic or the nature of the operation that resulted in the log generation. This can be but is not limited to

- QUERY

- INGEST

#### Workspace

Logs can be filtered based on the workspace in which the operation was performed.

#### Start Time

The start time for the query of logs. If the start time is not specified, it is assumed to cover the last 15 minutes.

#### End time

This is valid only if the start time is specified and defines the time period for which logs are desired. 

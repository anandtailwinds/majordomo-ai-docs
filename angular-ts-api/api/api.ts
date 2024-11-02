export * from './admin.service';
import { AdminService } from './admin.service';
export * from './ingest.service';
import { IngestService } from './ingest.service';
export * from './monitor.service';
import { MonitorService } from './monitor.service';
export * from './query.service';
import { QueryService } from './query.service';
export const APIS = [AdminService, IngestService, MonitorService, QueryService];

import { DatabaseQuery, ChildEvent, AngularFireAction, SnapshotAction } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireDatabase } from '../database';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
export declare function createAuditTrail(query: DatabaseQuery, afDatabase: AngularFireDatabase): (events?: ChildEvent[] | undefined) => Observable<AngularFireAction<DataSnapshot>[]>;
export declare function auditTrail(query: DatabaseQuery, events?: ChildEvent[]): Observable<SnapshotAction[]>;

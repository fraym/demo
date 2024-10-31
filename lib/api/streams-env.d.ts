/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'Boolean': unknown;
    'CreateStreamSnapshotInput': { kind: 'INPUT_OBJECT'; name: 'CreateStreamSnapshotInput'; isOneOf: false; inputFields: [{ name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'stream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'lastSnapshottedEventId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'snapshotEvent'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'EventInput'; ofType: null; }; }; defaultValue: null }]; };
    'DateTime': unknown;
    'Event': { kind: 'OBJECT'; name: 'Event'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'metadata': { name: 'metadata'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'EventMetadata'; ofType: null; }; } }; 'options': { name: 'options'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'EventOptions'; ofType: null; }; } }; 'payload': { name: 'payload'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Map'; ofType: null; }; } }; 'raisedAt': { name: 'raisedAt'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; } }; 'reason': { name: 'reason'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'stream': { name: 'stream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'tenantId': { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'topic': { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'type': { name: 'type'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'EventHandledInput': { kind: 'INPUT_OBJECT'; name: 'EventHandledInput'; isOneOf: false; inputFields: [{ name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'error'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'subscriberId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'EventInput': { kind: 'INPUT_OBJECT'; name: 'EventInput'; isOneOf: false; inputFields: [{ name: 'payload'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'EventPayloadInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'type'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'stream'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'reason'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'options'; type: { kind: 'INPUT_OBJECT'; name: 'EventOptionsInput'; ofType: null; }; defaultValue: null }, { name: 'metadata'; type: { kind: 'INPUT_OBJECT'; name: 'EventMetadataInput'; ofType: null; }; defaultValue: null }]; };
    'EventMetadata': { kind: 'OBJECT'; name: 'EventMetadata'; fields: { 'causationId': { name: 'causationId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'correlationId': { name: 'correlationId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'orderSerial': { name: 'orderSerial'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; }; };
    'EventMetadataInput': { kind: 'INPUT_OBJECT'; name: 'EventMetadataInput'; isOneOf: false; inputFields: [{ name: 'causationId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'correlationId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'EventOptions': { kind: 'OBJECT'; name: 'EventOptions'; fields: { 'broadcast': { name: 'broadcast'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'EventOptionsInput': { kind: 'INPUT_OBJECT'; name: 'EventOptionsInput'; isOneOf: false; inputFields: [{ name: 'broadcast'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }]; };
    'EventPayloadGdprInput': { kind: 'INPUT_OBJECT'; name: 'EventPayloadGdprInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'default'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'isInvalidated'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: null }]; };
    'EventPayloadInput': { kind: 'INPUT_OBJECT'; name: 'EventPayloadInput'; isOneOf: false; inputFields: [{ name: 'gdpr'; type: { kind: 'INPUT_OBJECT'; name: 'EventPayloadGdprInput'; ofType: null; }; defaultValue: null }, { name: 'key'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'value'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'GetEventInput': { kind: 'INPUT_OBJECT'; name: 'GetEventInput'; isOneOf: false; inputFields: [{ name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'GetEventsAfterEventIdInput': { kind: 'INPUT_OBJECT'; name: 'GetEventsAfterEventIdInput'; isOneOf: false; inputFields: [{ name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'types'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'page'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'perPage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'GetEventsInput': { kind: 'INPUT_OBJECT'; name: 'GetEventsInput'; isOneOf: false; inputFields: [{ name: 'perPage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'types'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'page'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }]; };
    'GetLastEventByTypesInput': { kind: 'INPUT_OBJECT'; name: 'GetLastEventByTypesInput'; isOneOf: false; inputFields: [{ name: 'types'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'GetLastEventInput': { kind: 'INPUT_OBJECT'; name: 'GetLastEventInput'; isOneOf: false; inputFields: [{ name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'GetStreamAfterEventIdInput': { kind: 'INPUT_OBJECT'; name: 'GetStreamAfterEventIdInput'; isOneOf: false; inputFields: [{ name: 'eventId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'page'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'perPage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'stream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'GetStreamInput': { kind: 'INPUT_OBJECT'; name: 'GetStreamInput'; isOneOf: false; inputFields: [{ name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'stream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'page'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'perPage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }]; };
    'ID': unknown;
    'Int': unknown;
    'IntroduceGdprOnEventFieldInput': { kind: 'INPUT_OBJECT'; name: 'IntroduceGdprOnEventFieldInput'; isOneOf: false; inputFields: [{ name: 'eventId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'fieldName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'defaultValue'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'InvalidateGdprInput': { kind: 'INPUT_OBJECT'; name: 'InvalidateGdprInput'; isOneOf: false; inputFields: [{ name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'gdprId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'IsStreamEmptyInput': { kind: 'INPUT_OBJECT'; name: 'IsStreamEmptyInput'; isOneOf: false; inputFields: [{ name: 'tenantId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'stream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'Map': unknown;
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'createStreamSnapshot': { name: 'createStreamSnapshot'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'eventHandled': { name: 'eventHandled'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'introduceGdprOnEventField': { name: 'introduceGdprOnEventField'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'invalidateGdpr': { name: 'invalidateGdpr'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'publish': { name: 'publish'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'PublishInput': { kind: 'INPUT_OBJECT'; name: 'PublishInput'; isOneOf: false; inputFields: [{ name: 'topic'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'events'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'EventInput'; ofType: null; }; }; }; }; defaultValue: null }]; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'getEvent': { name: 'getEvent'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; } }; 'getEvents': { name: 'getEvents'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; }; }; } }; 'getEventsAfterEventId': { name: 'getEventsAfterEventId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; }; }; } }; 'getLastEvent': { name: 'getLastEvent'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; } }; 'getLastEventByTypes': { name: 'getLastEventByTypes'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; } }; 'getStream': { name: 'getStream'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; }; }; } }; 'getStreamAfterEventId': { name: 'getStreamAfterEventId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; }; }; } }; 'isStreamEmpty': { name: 'isStreamEmpty'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'String': unknown;
    'SubscribeInput': { kind: 'INPUT_OBJECT'; name: 'SubscribeInput'; isOneOf: false; inputFields: [{ name: 'topics'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'metadata'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'SubscribeMetadata'; ofType: null; }; }; defaultValue: null }]; };
    'SubscribeMetadata': { kind: 'INPUT_OBJECT'; name: 'SubscribeMetadata'; isOneOf: false; inputFields: [{ name: 'group'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'subscriberId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'Subscription': { kind: 'OBJECT'; name: 'Subscription'; fields: { 'topics': { name: 'topics'; type: { kind: 'UNION'; name: 'TopicSubscriptionData'; ofType: null; } }; }; };
    'TopicSubscriptionData': { kind: 'UNION'; name: 'TopicSubscriptionData'; fields: {}; possibleTypes: 'TopicSubscriptionDataEvent' | 'TopicSubscriptionDataPanic' | 'TopicSubscriptionDataSubscribed'; };
    'TopicSubscriptionDataEvent': { kind: 'OBJECT'; name: 'TopicSubscriptionDataEvent'; fields: { 'event': { name: 'event'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null; }; } }; }; };
    'TopicSubscriptionDataPanic': { kind: 'OBJECT'; name: 'TopicSubscriptionDataPanic'; fields: { 'reason': { name: 'reason'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'TopicSubscriptionDataSubscribed': { kind: 'OBJECT'; name: 'TopicSubscriptionDataSubscribed'; fields: { 'error': { name: 'error'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: 'streams';
  query: 'Query';
  mutation: 'Mutation';
  subscription: 'Subscription';
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';
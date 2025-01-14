/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'ActivateTotpInput': { kind: 'INPUT_OBJECT'; name: 'ActivateTotpInput'; isOneOf: false; inputFields: [{ name: 'code'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'ActivateUserInput': { kind: 'INPUT_OBJECT'; name: 'ActivateUserInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'AllowedScope': { kind: 'OBJECT'; name: 'AllowedScope'; fields: { 'clientId': { name: 'clientId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'scopeName': { name: 'scopeName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; }; };
    'AllowedScopeInput': { kind: 'INPUT_OBJECT'; name: 'AllowedScopeInput'; isOneOf: false; inputFields: [{ name: 'clientId'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'scopeName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'BlockUserUntilInput': { kind: 'INPUT_OBJECT'; name: 'BlockUserUntilInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }, { name: 'time'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }; defaultValue: null }]; };
    'Boolean': unknown;
    'ChangeUserOptionsFailedAttemptsInput': { kind: 'INPUT_OBJECT'; name: 'ChangeUserOptionsFailedAttemptsInput'; isOneOf: false; inputFields: [{ name: 'count'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: null }, { name: 'blockDuration'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: null }]; };
    'ChangeUserOptionsPasswordComplexityInput': { kind: 'INPUT_OBJECT'; name: 'ChangeUserOptionsPasswordComplexityInput'; isOneOf: false; inputFields: [{ name: 'regexp'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'ChangeUserPasswordInput': { kind: 'INPUT_OBJECT'; name: 'ChangeUserPasswordInput'; isOneOf: false; inputFields: [{ name: 'newPassword'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'oldPassword'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'userId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'CreateInitialUserInput': { kind: 'INPUT_OBJECT'; name: 'CreateInitialUserInput'; isOneOf: false; inputFields: [{ name: 'login'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'password'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'displayName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'DateTime': unknown;
    'DateTimeFieldFilter': { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; isOneOf: false; inputFields: [{ name: 'notIn'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }; defaultValue: null }, { name: 'before'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'after'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'equals'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'in'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }; defaultValue: null }, { name: 'notEquals'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }]; };
    'DeactivateUserInput': { kind: 'INPUT_OBJECT'; name: 'DeactivateUserInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'DeleteRoleInput': { kind: 'INPUT_OBJECT'; name: 'DeleteRoleInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'FilterRoleListParams': { kind: 'INPUT_OBJECT'; name: 'FilterRoleListParams'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'IdFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'createdAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'changedAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'and'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleListParams'; ofType: null; }; }; }; defaultValue: null }, { name: 'or'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleListParams'; ofType: null; }; }; }; defaultValue: null }]; };
    'FilterRoleListSubscriptionParams': { kind: 'INPUT_OBJECT'; name: 'FilterRoleListSubscriptionParams'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'IdFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'createdAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'changedAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'and'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleListSubscriptionParams'; ofType: null; }; }; }; defaultValue: null }, { name: 'or'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleListSubscriptionParams'; ofType: null; }; }; }; defaultValue: null }]; };
    'FilterRoleParams': { kind: 'INPUT_OBJECT'; name: 'FilterRoleParams'; isOneOf: false; inputFields: [{ name: 'createdAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'changedAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'and'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleParams'; ofType: null; }; }; }; defaultValue: null }, { name: 'or'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleParams'; ofType: null; }; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'IdFieldFilter'; ofType: null; }; defaultValue: null }]; };
    'FilterRoleSubscriptionParams': { kind: 'INPUT_OBJECT'; name: 'FilterRoleSubscriptionParams'; isOneOf: false; inputFields: [{ name: 'changedAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'and'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleSubscriptionParams'; ofType: null; }; }; }; defaultValue: null }, { name: 'or'; type: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'FilterRoleSubscriptionParams'; ofType: null; }; }; }; defaultValue: null }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'IdFieldFilter'; ofType: null; }; defaultValue: null }, { name: 'createdAt'; type: { kind: 'INPUT_OBJECT'; name: 'DateTimeFieldFilter'; ofType: null; }; defaultValue: null }]; };
    'GetRoleInput': { kind: 'INPUT_OBJECT'; name: 'GetRoleInput'; isOneOf: false; inputFields: [{ name: 'returnEmptyDataIfNotFound'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; defaultValue: "false" }, { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'filter'; type: { kind: 'INPUT_OBJECT'; name: 'FilterRoleParams'; ofType: null; }; defaultValue: null }]; };
    'GetRoleListInput': { kind: 'INPUT_OBJECT'; name: 'GetRoleListInput'; isOneOf: false; inputFields: [{ name: 'order'; type: { kind: 'INPUT_OBJECT'; name: 'OrderRoleListParams'; ofType: null; }; defaultValue: null }, { name: 'limit'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: "0" }, { name: 'page'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: "1" }, { name: 'filter'; type: { kind: 'INPUT_OBJECT'; name: 'FilterRoleListParams'; ofType: null; }; defaultValue: null }]; };
    'ID': unknown;
    'IdFieldFilter': { kind: 'INPUT_OBJECT'; name: 'IdFieldFilter'; isOneOf: false; inputFields: [{ name: 'equals'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'inArray'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'notEquals'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'notInArray'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'Int': unknown;
    'ListOrder': { kind: 'INPUT_OBJECT'; name: 'ListOrder'; isOneOf: false; inputFields: [{ name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'OrderDirection'; ofType: null; }; }; defaultValue: null }, { name: 'priority'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: null }]; };
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'createInitialUser': { name: 'createInitialUser'; type: { kind: 'OBJECT'; name: 'createResponse'; ofType: null; } }; 'deleteRole': { name: 'deleteRole'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'upsertRole': { name: 'upsertRole'; type: { kind: 'OBJECT'; name: 'createResponse'; ofType: null; } }; 'userActivate': { name: 'userActivate'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userActivateTotp': { name: 'userActivateTotp'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userBlockUntil': { name: 'userBlockUntil'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userChangePassword': { name: 'userChangePassword'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userDeactivate': { name: 'userDeactivate'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userDisableTotp': { name: 'userDisableTotp'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userEnrollTotp': { name: 'userEnrollTotp'; type: { kind: 'OBJECT'; name: 'TotpConfig'; ofType: null; } }; 'userOptionsChangeFailedAttempts': { name: 'userOptionsChangeFailedAttempts'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userOptionsChangePasswordComplexity': { name: 'userOptionsChangePasswordComplexity'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; 'userUnblock': { name: 'userUnblock'; type: { kind: 'OBJECT'; name: 'successResponse'; ofType: null; } }; }; };
    'OrderDirection': unknown;
    'OrderRoleListParams': { kind: 'INPUT_OBJECT'; name: 'OrderRoleListParams'; isOneOf: false; inputFields: [{ name: 'createdAt'; type: { kind: 'INPUT_OBJECT'; name: 'ListOrder'; ofType: null; }; defaultValue: null }, { name: 'changedAt'; type: { kind: 'INPUT_OBJECT'; name: 'ListOrder'; ofType: null; }; defaultValue: null }]; };
    'PaginatedRoleList': { kind: 'OBJECT'; name: 'PaginatedRoleList'; fields: { 'data': { name: 'data'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Role'; ofType: null; }; }; }; } }; 'limit': { name: 'limit'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'page': { name: 'page'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'total': { name: 'total'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'getRole': { name: 'getRole'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Role'; ofType: null; }; } }; 'getRoleList': { name: 'getRoleList'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'PaginatedRoleList'; ofType: null; }; } }; 'getUserOptionsPasswordComplexity': { name: 'getUserOptionsPasswordComplexity'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'Role': { kind: 'OBJECT'; name: 'Role'; fields: { 'allowedScopes': { name: 'allowedScopes'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'AllowedScope'; ofType: null; }; }; }; } }; 'changedAt': { name: 'changedAt'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; }; };
    'RoleSubscriptionData': { kind: 'UNION'; name: 'RoleSubscriptionData'; fields: {}; possibleTypes: 'Role' | 'removeData'; };
    'String': unknown;
    'SubscribeRoleInput': { kind: 'INPUT_OBJECT'; name: 'SubscribeRoleInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'filter'; type: { kind: 'INPUT_OBJECT'; name: 'FilterRoleSubscriptionParams'; ofType: null; }; defaultValue: null }]; };
    'SubscribeRoleListInput': { kind: 'INPUT_OBJECT'; name: 'SubscribeRoleListInput'; isOneOf: false; inputFields: [{ name: 'filter'; type: { kind: 'INPUT_OBJECT'; name: 'FilterRoleListSubscriptionParams'; ofType: null; }; defaultValue: null }]; };
    'Subscription': { kind: 'OBJECT'; name: 'Subscription'; fields: { 'subscribeToRole': { name: 'subscribeToRole'; type: { kind: 'UNION'; name: 'RoleSubscriptionData'; ofType: null; } }; 'subscribeToRoleList': { name: 'subscribeToRoleList'; type: { kind: 'UNION'; name: 'RoleSubscriptionData'; ofType: null; } }; }; };
    'TotpConfig': { kind: 'OBJECT'; name: 'TotpConfig'; fields: { 'backupCodes': { name: 'backupCodes'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; } }; 'qrCode': { name: 'qrCode'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'secret': { name: 'secret'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'url': { name: 'url'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'UnblockUserInput': { kind: 'INPUT_OBJECT'; name: 'UnblockUserInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; }; defaultValue: null }]; };
    'UpsertRoleInput': { kind: 'INPUT_OBJECT'; name: 'UpsertRoleInput'; isOneOf: false; inputFields: [{ name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; defaultValue: null }, { name: 'allowedScopes'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AllowedScopeInput'; ofType: null; }; }; }; }; defaultValue: null }]; };
    'createResponse': { kind: 'OBJECT'; name: 'createResponse'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'removeData': { kind: 'OBJECT'; name: 'removeData'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'remove': { name: 'remove'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'successResponse': { kind: 'OBJECT'; name: 'successResponse'; fields: { 'ok': { name: 'ok'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
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
  name: 'auth';
  query: 'Query';
  mutation: 'Mutation';
  subscription: 'Subscription';
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

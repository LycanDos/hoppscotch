import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  /** Date when the user account was created */
  createdOn: Scalars['DateTime']['output'];
  /** Name of the user (if fetched) */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Email of the user */
  email?: Maybe<Scalars['String']['output']>;
  /** Date when the user last interacted with the app */
  lastActiveOn?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the user last logged in */
  lastLoggedOn?: Maybe<Scalars['DateTime']['output']>;
  /** URL to the profile photo of the user (if fetched) */
  photoURL?: Maybe<Scalars['String']['output']>;
  /** UID of the user */
  uid: Scalars['ID']['output'];
};

export enum AuthProvider {
  Email = 'EMAIL',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Microsoft = 'MICROSOFT'
}

export type CollectionReorderData = {
  __typename?: 'CollectionReorderData';
  /** Team Collection being moved */
  collection: TeamCollection;
  /** Team Collection succeeding the collection being moved in its new position */
  nextCollection?: Maybe<TeamCollection>;
};

export type CreateInfraTokenResponse = {
  __typename?: 'CreateInfraTokenResponse';
  /** Infra token info */
  info: InfraToken;
  /** The infra token */
  token: Scalars['String']['output'];
};

export type CreateMockServerInput = {
  /** Whether to auto-create a collection for the mock server if collectionID is not provided */
  autoCreateCollection?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to auto-create request examples in the collection for the mock server */
  autoCreateRequestExample?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the (team or user) collection to associate with the mock server */
  collectionID?: InputMaybe<Scalars['String']['input']>;
  /** Delay in milliseconds before responding */
  delayInMs?: InputMaybe<Scalars['Int']['input']>;
  /** Whether the mock server is publicly accessible */
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the mock server */
  name: Scalars['String']['input'];
  /** ID of the workspace (user or team) to associate with the mock server */
  workspaceID?: InputMaybe<Scalars['String']['input']>;
  /** Type of workspace: USER or TEAM */
  workspaceType: WorkspaceType;
};

export type CreatePublishedDocsArgs = {
  /** Whether the published document should auto-sync with the source */
  autoSync: Scalars['Boolean']['input'];
  /** ID of the source (personal/team) collection from which to publish */
  collectionID: Scalars['String']['input'];
  /** Metadata associated with the published document */
  metadata: Scalars['String']['input'];
  /** Title of the published document */
  title: Scalars['String']['input'];
  /** Version of the published document */
  version: Scalars['String']['input'];
  /** ID of the workspace */
  workspaceID: Scalars['String']['input'];
  /** Type of the workspace (e.g., personal, team) */
  workspaceType: WorkspaceType;
};

export type CreateTeamRequestInput = {
  /** JSON string representing the request data */
  request: Scalars['String']['input'];
  /** ID of the team the collection belongs to */
  teamID: Scalars['ID']['input'];
  /** Displayed title of the request */
  title: Scalars['String']['input'];
};

export type EnableAndDisableSsoArgs = {
  /** Auth Provider */
  provider: AuthProvider;
  /** Auth Provider Status */
  status: ServiceStatus;
};

export type Infra = {
  __typename?: 'Infra';
  /** Returns a list of all admin users in infra */
  admins: Array<User>;
  /** Returns a list of all the shortcodes in the infra */
  allShortcodes: Array<ShortcodeWithUserEmail>;
  /** Returns a list of all the teams in the infra */
  allTeams: Array<Team>;
  /**
   * Returns a list of all the users in infra
   * @deprecated Use allUsersV2 instead
   */
  allUsers: Array<User>;
  /** Returns a list of all the users in infra */
  allUsersV2: Array<User>;
  /** Return count of all the stored collections in a team */
  collectionCountInTeam: Scalars['Int']['output'];
  /** Return count of all the stored environments in a team */
  environmentCountInTeam: Scalars['Int']['output'];
  /** Admin who executed the action */
  executedBy: Admin;
  /** Returns a list of all the invited users */
  invitedUsers: Array<InvitedUser>;
  /** Return count of all the members in a team */
  membersCountInTeam: Scalars['Int']['output'];
  /** Return all the pending invitations in a team */
  pendingInvitationCountInTeam: Array<TeamInvitation>;
  /** Return count of all the stored requests in a team */
  requestCountInTeam: Scalars['Int']['output'];
  /** Return total number of Team Collections in organization */
  teamCollectionsCount: Scalars['Int']['output'];
  /** Returns a team info by ID when requested by Admin */
  teamInfo: Team;
  /** Return total number of Team Requests in organization */
  teamRequestsCount: Scalars['Int']['output'];
  /** Return total number of Teams in organization */
  teamsCount: Scalars['Int']['output'];
  /** Returns a user info by UID */
  userInfo: User;
  /** Return total number of Users in organization */
  usersCount: Scalars['Int']['output'];
};


export type InfraAllShortcodesArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};


export type InfraAllTeamsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraAllUsersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraAllUsersV2Args = {
  searchString?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraCollectionCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraEnvironmentCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraInvitedUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraMembersCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraPendingInvitationCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraRequestCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraTeamInfoArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraUserInfoArgs = {
  userUid: Scalars['ID']['input'];
};

export type InfraConfig = {
  __typename?: 'InfraConfig';
  /** Infra Config Name */
  name: Scalars['String']['output'];
  /** Infra Config Value */
  value: Scalars['String']['output'];
};

export type InfraConfigArgs = {
  /** Infra Config Name */
  name: InfraConfigEnum;
  /** Infra Config Value */
  value: Scalars['String']['input'];
};

export enum InfraConfigEnum {
  AccessTokenValidity = 'ACCESS_TOKEN_VALIDITY',
  AllowAnalyticsCollection = 'ALLOW_ANALYTICS_COLLECTION',
  AllowSecureCookies = 'ALLOW_SECURE_COOKIES',
  AnalyticsUserId = 'ANALYTICS_USER_ID',
  GithubCallbackUrl = 'GITHUB_CALLBACK_URL',
  GithubClientId = 'GITHUB_CLIENT_ID',
  GithubClientSecret = 'GITHUB_CLIENT_SECRET',
  GithubScope = 'GITHUB_SCOPE',
  GoogleCallbackUrl = 'GOOGLE_CALLBACK_URL',
  GoogleClientId = 'GOOGLE_CLIENT_ID',
  GoogleClientSecret = 'GOOGLE_CLIENT_SECRET',
  GoogleScope = 'GOOGLE_SCOPE',
  IsFirstTimeInfraSetup = 'IS_FIRST_TIME_INFRA_SETUP',
  JwtSecret = 'JWT_SECRET',
  MagicLinkTokenValidity = 'MAGIC_LINK_TOKEN_VALIDITY',
  MailerAddressFrom = 'MAILER_ADDRESS_FROM',
  MailerSmtpEnable = 'MAILER_SMTP_ENABLE',
  MailerSmtpHost = 'MAILER_SMTP_HOST',
  MailerSmtpPassword = 'MAILER_SMTP_PASSWORD',
  MailerSmtpPort = 'MAILER_SMTP_PORT',
  MailerSmtpSecure = 'MAILER_SMTP_SECURE',
  MailerSmtpUrl = 'MAILER_SMTP_URL',
  MailerSmtpUser = 'MAILER_SMTP_USER',
  MailerTlsRejectUnauthorized = 'MAILER_TLS_REJECT_UNAUTHORIZED',
  MailerUseCustomConfigs = 'MAILER_USE_CUSTOM_CONFIGS',
  MicrosoftCallbackUrl = 'MICROSOFT_CALLBACK_URL',
  MicrosoftClientId = 'MICROSOFT_CLIENT_ID',
  MicrosoftClientSecret = 'MICROSOFT_CLIENT_SECRET',
  MicrosoftScope = 'MICROSOFT_SCOPE',
  MicrosoftTenant = 'MICROSOFT_TENANT',
  MockServerWildcardDomain = 'MOCK_SERVER_WILDCARD_DOMAIN',
  OnboardingCompleted = 'ONBOARDING_COMPLETED',
  OnboardingRecoveryToken = 'ONBOARDING_RECOVERY_TOKEN',
  RateLimitMax = 'RATE_LIMIT_MAX',
  RateLimitTtl = 'RATE_LIMIT_TTL',
  RefreshTokenValidity = 'REFRESH_TOKEN_VALIDITY',
  SessionCookieName = 'SESSION_COOKIE_NAME',
  SessionSecret = 'SESSION_SECRET',
  TokenSaltComplexity = 'TOKEN_SALT_COMPLEXITY',
  UserHistoryStoreEnabled = 'USER_HISTORY_STORE_ENABLED',
  ViteAllowedAuthProviders = 'VITE_ALLOWED_AUTH_PROVIDERS'
}

export type InfraToken = {
  __typename?: 'InfraToken';
  /** Date when the infra token was created */
  createdOn: Scalars['DateTime']['output'];
  /** Date when the infra token expires */
  expiresOn?: Maybe<Scalars['DateTime']['output']>;
  /** ID of the infra token */
  id: Scalars['ID']['output'];
  /** Label of the infra token */
  label: Scalars['String']['output'];
  /** Date when the infra token was last used */
  lastUsedOn: Scalars['DateTime']['output'];
};

export type InvitedUser = {
  __typename?: 'InvitedUser';
  /** Admin email */
  adminEmail: Scalars['String']['output'];
  /** Admin UID */
  adminUid: Scalars['ID']['output'];
  /** Date when the user invitation was sent */
  invitedOn: Scalars['DateTime']['output'];
  /** Invitee email */
  inviteeEmail: Scalars['String']['output'];
};

export type MockServer = {
  __typename?: 'MockServer';
  /** Returns the collection of the mock server */
  collection?: Maybe<MockServerCollection>;
  /** Date and time when the mock server was created */
  createdOn: Scalars['DateTime']['output'];
  /** Returns the creator of the mock server */
  creator?: Maybe<User>;
  /** Delay in milliseconds before responding */
  delayInMs: Scalars['Int']['output'];
  /** ID of the mock server */
  id: Scalars['ID']['output'];
  /** Whether the mock server is active */
  isActive: Scalars['Boolean']['output'];
  /** Whether the mock server is publicly accessible */
  isPublic: Scalars['Boolean']['output'];
  /** Name of the mock server */
  name: Scalars['String']['output'];
  /** Server URL for the mock server using subdomain pattern (e.g., https://1234.mock.backend-hoppscotch.io) */
  serverUrlDomainBased?: Maybe<Scalars['String']['output']>;
  /** Server URL for the mock server using path pattern (e.g., https://backend.hoppscotch.io/mock/1234) */
  serverUrlPathBased: Scalars['String']['output'];
  /** Subdomain for the mock server (e.g., mock-1234) */
  subdomain: Scalars['String']['output'];
  /** Date and time when the mock server was last updated */
  updatedOn: Scalars['DateTime']['output'];
  /** ID of the workspace (user or team) to associate with the mock server */
  workspaceID?: Maybe<Scalars['String']['output']>;
  /** Type of workspace: USER or TEAM */
  workspaceType: WorkspaceType;
};

export type MockServerCollection = {
  __typename?: 'MockServerCollection';
  /** ID of the collection */
  id: Scalars['ID']['output'];
  /** Title of the collection */
  title: Scalars['String']['output'];
};

export type MockServerLog = {
  __typename?: 'MockServerLog';
  /** Date and time when the request was executed */
  executedAt: Scalars['DateTime']['output'];
  /** ID of the log entry */
  id: Scalars['ID']['output'];
  /** IP address of the requester */
  ipAddress?: Maybe<Scalars['String']['output']>;
  /** ID of the mock server */
  mockServerID: Scalars['ID']['output'];
  /** Request body as JSON string */
  requestBody?: Maybe<Scalars['String']['output']>;
  /** Request headers as JSON string */
  requestHeaders: Scalars['String']['output'];
  /** HTTP method of the request */
  requestMethod: Scalars['String']['output'];
  /** Path of the request */
  requestPath: Scalars['String']['output'];
  /** Request query parameters as JSON string */
  requestQuery?: Maybe<Scalars['String']['output']>;
  /** Response body as JSON string */
  responseBody?: Maybe<Scalars['String']['output']>;
  /** Response headers as JSON string */
  responseHeaders: Scalars['String']['output'];
  /** HTTP status code of the response */
  responseStatus: Scalars['Int']['output'];
  /** Response time in milliseconds */
  responseTime: Scalars['Int']['output'];
  /** User agent of the requester */
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept an Invitation */
  acceptTeamInvitation: TeamMember;
  /** Add a user to a team with email and team member role */
  addUserToTeamByAdmin: TeamMember;
  /** Change the role of a user in a team */
  changeUserRoleInTeamByAdmin: TeamMember;
  /** Deletes all variables inside a users global environment */
  clearGlobalEnvironments: UserEnvironment;
  /** Create a collection that has a parent collection */
  createChildCollection: TeamCollection;
  /** Create a duplicate of an existing environment */
  createDuplicateEnvironment: TeamEnvironment;
  /** Creates a new child GraphQL user collection */
  createGQLChildUserCollection: UserCollection;
  /** Creates root GraphQL user collection(no parent user collection) */
  createGQLRootUserCollection: UserCollection;
  /** Create a new user GraphQL request */
  createGQLUserRequest: UserRequest;
  /** Create a new infra token */
  createInfraToken: CreateInfraTokenResponse;
  /** Create a new mock server */
  createMockServer: MockServer;
  /** Create a new published document */
  createPublishedDoc: PublishedDocs;
  /** Creates a new child REST user collection */
  createRESTChildUserCollection: UserCollection;
  /** Creates root REST user collection(no parent user collection) */
  createRESTRootUserCollection: UserCollection;
  /** Create a new user REST request */
  createRESTUserRequest: UserRequest;
  /** Create a team request in the given collection. */
  createRequestInCollection: TeamRequest;
  /** Creates a collection at the root of the team hierarchy (no parent collection) */
  createRootCollection: TeamCollection;
  /** Create a shortcode for the given request. */
  createShortcode: Shortcode;
  /** Creates a team owned by the executing user */
  createTeam: Team;
  /** Create a new team by providing the user uid to nominate as Team owner */
  createTeamByAdmin: Team;
  /** Create a new Team Environment for given Team ID */
  createTeamEnvironment: TeamEnvironment;
  /** Creates a Team Invitation */
  createTeamInvitation: TeamInvitation;
  /** Create a new personal user environment for given user uid */
  createUserEnvironment: UserEnvironment;
  /** Create a new global user environment for given user uid */
  createUserGlobalEnvironment: UserEnvironment;
  /** Adds a new REST/GQL request to user history */
  createUserHistory: UserHistory;
  /** Creates a new user setting */
  createUserSettings: UserSettings;
  /** Deletes all REST/GQL history for a user based on Request type */
  deleteAllUserHistory: UserHistoryDeletedManyData;
  /** Delete all variables from a Team Environment */
  deleteAllVariablesFromTeamEnvironment: TeamEnvironment;
  /** Delete a collection */
  deleteCollection: Scalars['Boolean']['output'];
  /** Delete a mock server */
  deleteMockServer: Scalars['Boolean']['output'];
  /** Delete a mock server log by log ID */
  deleteMockServerLog: Scalars['Boolean']['output'];
  /** Delete a published document by ID */
  deletePublishedDoc: Scalars['Boolean']['output'];
  /** Delete a request with the given ID */
  deleteRequest: Scalars['Boolean']['output'];
  /** Deletes the team */
  deleteTeam: Scalars['Boolean']['output'];
  /** Delete a team */
  deleteTeamByAdmin: Scalars['Boolean']['output'];
  /** Delete a Team Environment for given Team ID */
  deleteTeamEnvironment: Scalars['Boolean']['output'];
  /** Delete an user account */
  deleteUser: Scalars['Boolean']['output'];
  /** Delete a user collection */
  deleteUserCollection: Scalars['Boolean']['output'];
  /** Deletes a users personal environment */
  deleteUserEnvironment: Scalars['Boolean']['output'];
  /** Deletes all of users personal environments */
  deleteUserEnvironments: Scalars['Int']['output'];
  /** Delete a user request */
  deleteUserRequest: Scalars['Boolean']['output'];
  /** Remove users as admin */
  demoteUsersByAdmin: Scalars['Boolean']['output'];
  /** Duplicate a Team Collection */
  duplicateTeamCollection: Scalars['Boolean']['output'];
  /** Duplicate a User Collection */
  duplicateUserCollection: Scalars['Boolean']['output'];
  /** Enable or Disable SSO for login/signup */
  enableAndDisableSSO: Scalars['Boolean']['output'];
  /** Import collections from JSON string to the specified Team */
  importCollectionsFromJSON: Scalars['Boolean']['output'];
  /** Import collections from JSON string to the specified Team */
  importUserCollectionsFromJSON: UserCollectionExportJsonData;
  /** Invite a user to the infra using email */
  inviteNewUser: InvitedUser;
  /** Leaves a team the executing user is a part of */
  leaveTeam: Scalars['Boolean']['output'];
  /**
   * Make user an admin
   * @deprecated Use makeUsersAdmin instead
   */
  makeUserAdmin: Scalars['Boolean']['output'];
  /** Make users an admin */
  makeUsersAdmin: Scalars['Boolean']['output'];
  /** Move a collection into a new parent collection or the root of the team */
  moveCollection: TeamCollection;
  /** Move a request to the given collection */
  moveRequest: TeamRequest;
  /** Move user collection into new parent or root */
  moveUserCollection: UserCollection;
  /** Move and re-order of a user request within same or across collection */
  moveUserRequest: UserRequest;
  /** Removes a REST/GQL request from user history */
  removeRequestFromHistory: UserHistory;
  /** Removes the team member from the team */
  removeTeamMember: Scalars['Boolean']['output'];
  /**
   * Remove user as admin
   * @deprecated Use demoteUsersByAdmin instead
   */
  removeUserAsAdmin: Scalars['Boolean']['output'];
  /**
   * Delete an user account from infra
   * @deprecated Use removeUsersByAdmin instead
   */
  removeUserByAdmin: Scalars['Boolean']['output'];
  /** Remove the user from a team */
  removeUserFromTeamByAdmin: Scalars['Boolean']['output'];
  /** Delete user accounts from infra */
  removeUsersByAdmin: Array<UserDeletionResult>;
  /**
   * Rename a collection
   * @deprecated Switch to updateTeamCollection mutation instead
   */
  renameCollection: TeamCollection;
  /** Renames a team */
  renameTeam: Team;
  /** Change a team name */
  renameTeamByAdmin: Team;
  /** Rename a user collection */
  renameUserCollection: UserCollection;
  /** Reset Infra Configs with default values (.env) */
  resetInfraConfigs: Scalars['Boolean']['output'];
  /** Revoke all User History */
  revokeAllUserHistoryByAdmin: Scalars['Boolean']['output'];
  /** Revoke an infra token */
  revokeInfraToken: Scalars['Boolean']['output'];
  /** Revoke a user generated shortcode */
  revokeShortcode: Scalars['Boolean']['output'];
  /** Revoke Shortcode by ID */
  revokeShortcodeByAdmin: Scalars['Boolean']['output'];
  /** Revokes an invitation and deletes it */
  revokeTeamInvitation: Scalars['Boolean']['output'];
  /** Revoke a team Invite by Invite ID */
  revokeTeamInviteByAdmin: Scalars['Boolean']['output'];
  /** Revoke a user invites by invitee emails */
  revokeUserInvitationsByAdmin: Scalars['Boolean']['output'];
  /** Sort team collections */
  sortTeamCollections: Scalars['Boolean']['output'];
  /** Sort user collections */
  sortUserCollections: Scalars['Boolean']['output'];
  /** Enable or disable analytics collection */
  toggleAnalyticsCollection: Scalars['Boolean']['output'];
  /** Stars/Unstars a REST/GQL request in user history */
  toggleHistoryStarStatus: UserHistory;
  /** Enable or Disable SMTP for sending emails */
  toggleSMTP: Scalars['Boolean']['output'];
  /** Enable or Disable User History Storing in DB */
  toggleUserHistoryStore: Scalars['Boolean']['output'];
  /** Update the order of collections */
  updateCollectionOrder: Scalars['Boolean']['output'];
  /** Update a users display name */
  updateDisplayName: User;
  /** Update a user generated Shortcode */
  updateEmbedProperties: Shortcode;
  /** Update a user GraphQL request */
  updateGQLUserRequest: UserRequest;
  /** Update Infra Configs */
  updateInfraConfigs: Array<InfraConfig>;
  /** Update the order of requests in the lookup table */
  updateLookUpRequestOrder: Scalars['Boolean']['output'];
  /** Update a mock server */
  updateMockServer: MockServer;
  /** Update an existing published document */
  updatePublishedDoc: PublishedDocs;
  /** Update a user REST request */
  updateRESTUserRequest: UserRequest;
  /** Update a request with the given ID */
  updateRequest: TeamRequest;
  /** Update role of a team member the executing user owns */
  updateTeamAccessRole: TeamMember;
  /** Update Team Collection details */
  updateTeamCollection: TeamCollection;
  /** Add/Edit a single environment variable or variables to a Team Environment */
  updateTeamEnvironment: TeamEnvironment;
  /** Update a UserCollection */
  updateUserCollection: UserCollection;
  /** Update the order of UserCollections inside parent collection or in root */
  updateUserCollectionOrder: Scalars['Boolean']['output'];
  /** Update user display name */
  updateUserDisplayNameByAdmin: Scalars['Boolean']['output'];
  /** Updates a users personal or global environment */
  updateUserEnvironment: UserEnvironment;
  /** Update user sessions */
  updateUserSessions: User;
  /** Update user setting for a given user */
  updateUserSettings: UserSettings;
};


export type MutationAcceptTeamInvitationArgs = {
  inviteID: Scalars['ID']['input'];
};


export type MutationAddUserToTeamByAdminArgs = {
  role: TeamAccessRole;
  teamID: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationChangeUserRoleInTeamByAdminArgs = {
  newRole: TeamAccessRole;
  teamID: Scalars['ID']['input'];
  userUID: Scalars['ID']['input'];
};


export type MutationClearGlobalEnvironmentsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateChildCollectionArgs = {
  childTitle: Scalars['String']['input'];
  collectionID: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateDuplicateEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateGqlChildUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  parentUserCollectionID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateGqlRootUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateGqlUserRequestArgs = {
  collectionID: Scalars['ID']['input'];
  request: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateInfraTokenArgs = {
  expiryInDays?: InputMaybe<Scalars['Int']['input']>;
  label: Scalars['String']['input'];
};


export type MutationCreateMockServerArgs = {
  input: CreateMockServerInput;
};


export type MutationCreatePublishedDocArgs = {
  args: CreatePublishedDocsArgs;
};


export type MutationCreateRestChildUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  parentUserCollectionID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateRestRootUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateRestUserRequestArgs = {
  collectionID: Scalars['ID']['input'];
  request: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateRequestInCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  data: CreateTeamRequestInput;
};


export type MutationCreateRootCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  teamID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateShortcodeArgs = {
  properties?: InputMaybe<Scalars['String']['input']>;
  request: Scalars['String']['input'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateTeamByAdminArgs = {
  name: Scalars['String']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationCreateTeamEnvironmentArgs = {
  name: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
  variables: Scalars['String']['input'];
};


export type MutationCreateTeamInvitationArgs = {
  inviteeEmail: Scalars['String']['input'];
  inviteeRole: TeamAccessRole;
  teamID: Scalars['ID']['input'];
};


export type MutationCreateUserEnvironmentArgs = {
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
};


export type MutationCreateUserGlobalEnvironmentArgs = {
  variables: Scalars['String']['input'];
};


export type MutationCreateUserHistoryArgs = {
  reqData: Scalars['String']['input'];
  reqType: ReqType;
  resMetadata: Scalars['String']['input'];
};


export type MutationCreateUserSettingsArgs = {
  properties: Scalars['String']['input'];
};


export type MutationDeleteAllUserHistoryArgs = {
  reqType: ReqType;
};


export type MutationDeleteAllVariablesFromTeamEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  collectionID: Scalars['ID']['input'];
};


export type MutationDeleteMockServerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMockServerLogArgs = {
  logID: Scalars['ID']['input'];
};


export type MutationDeletePublishedDocArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRequestArgs = {
  requestID: Scalars['ID']['input'];
};


export type MutationDeleteTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type MutationDeleteTeamByAdminArgs = {
  teamID: Scalars['ID']['input'];
};


export type MutationDeleteTeamEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserCollectionArgs = {
  userCollectionID: Scalars['ID']['input'];
};


export type MutationDeleteUserEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDemoteUsersByAdminArgs = {
  userUIDs: Array<Scalars['ID']['input']>;
};


export type MutationDuplicateTeamCollectionArgs = {
  collectionID: Scalars['String']['input'];
};


export type MutationDuplicateUserCollectionArgs = {
  collectionID: Scalars['String']['input'];
  reqType: ReqType;
};


export type MutationEnableAndDisableSsoArgs = {
  providerInfo: Array<EnableAndDisableSsoArgs>;
};


export type MutationImportCollectionsFromJsonArgs = {
  jsonString: Scalars['String']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  teamID: Scalars['ID']['input'];
};


export type MutationImportUserCollectionsFromJsonArgs = {
  jsonString: Scalars['String']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  reqType: ReqType;
};


export type MutationInviteNewUserArgs = {
  inviteeEmail: Scalars['String']['input'];
};


export type MutationLeaveTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type MutationMakeUserAdminArgs = {
  userUID: Scalars['ID']['input'];
};


export type MutationMakeUsersAdminArgs = {
  userUIDs: Array<Scalars['ID']['input']>;
};


export type MutationMoveCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveRequestArgs = {
  destCollID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  requestID: Scalars['ID']['input'];
  srcCollID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveUserCollectionArgs = {
  destCollectionID?: InputMaybe<Scalars['ID']['input']>;
  userCollectionID: Scalars['ID']['input'];
};


export type MutationMoveUserRequestArgs = {
  destinationCollectionID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  requestID: Scalars['ID']['input'];
  sourceCollectionID: Scalars['ID']['input'];
};


export type MutationRemoveRequestFromHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTeamMemberArgs = {
  teamID: Scalars['ID']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationRemoveUserAsAdminArgs = {
  userUID: Scalars['ID']['input'];
};


export type MutationRemoveUserByAdminArgs = {
  userUID: Scalars['ID']['input'];
};


export type MutationRemoveUserFromTeamByAdminArgs = {
  teamID: Scalars['ID']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationRemoveUsersByAdminArgs = {
  userUIDs: Array<Scalars['ID']['input']>;
};


export type MutationRenameCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};


export type MutationRenameTeamArgs = {
  newName: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
};


export type MutationRenameTeamByAdminArgs = {
  newName: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
};


export type MutationRenameUserCollectionArgs = {
  newTitle: Scalars['String']['input'];
  userCollectionID: Scalars['ID']['input'];
};


export type MutationRevokeInfraTokenArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRevokeShortcodeArgs = {
  code: Scalars['ID']['input'];
};


export type MutationRevokeShortcodeByAdminArgs = {
  code: Scalars['ID']['input'];
};


export type MutationRevokeTeamInvitationArgs = {
  inviteID: Scalars['ID']['input'];
};


export type MutationRevokeTeamInviteByAdminArgs = {
  inviteID: Scalars['ID']['input'];
};


export type MutationRevokeUserInvitationsByAdminArgs = {
  inviteeEmails: Array<Scalars['String']['input']>;
};


export type MutationSortTeamCollectionsArgs = {
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  sortOption: SortOptions;
  teamID: Scalars['ID']['input'];
};


export type MutationSortUserCollectionsArgs = {
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  sortOption: SortOptions;
};


export type MutationToggleAnalyticsCollectionArgs = {
  status: ServiceStatus;
};


export type MutationToggleHistoryStarStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleSmtpArgs = {
  status: ServiceStatus;
};


export type MutationToggleUserHistoryStoreArgs = {
  status: ServiceStatus;
};


export type MutationUpdateCollectionOrderArgs = {
  collectionID: Scalars['ID']['input'];
  destCollID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateDisplayNameArgs = {
  updatedDisplayName: Scalars['String']['input'];
};


export type MutationUpdateEmbedPropertiesArgs = {
  code: Scalars['ID']['input'];
  properties: Scalars['String']['input'];
};


export type MutationUpdateGqlUserRequestArgs = {
  id: Scalars['ID']['input'];
  request?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateInfraConfigsArgs = {
  infraConfigs: Array<InfraConfigArgs>;
};


export type MutationUpdateLookUpRequestOrderArgs = {
  collectionID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  requestID: Scalars['ID']['input'];
};


export type MutationUpdateMockServerArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMockServerInput;
};


export type MutationUpdatePublishedDocArgs = {
  args: UpdatePublishedDocsArgs;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRestUserRequestArgs = {
  id: Scalars['ID']['input'];
  request?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateRequestArgs = {
  data: UpdateTeamRequestInput;
  requestID: Scalars['ID']['input'];
};


export type MutationUpdateTeamAccessRoleArgs = {
  newRole: TeamAccessRole;
  teamID: Scalars['ID']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationUpdateTeamCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  newTitle?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTeamEnvironmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
};


export type MutationUpdateUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  newTitle?: InputMaybe<Scalars['String']['input']>;
  userCollectionID: Scalars['ID']['input'];
};


export type MutationUpdateUserCollectionOrderArgs = {
  collectionID: Scalars['ID']['input'];
  nextCollectionID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUserDisplayNameByAdminArgs = {
  displayName: Scalars['String']['input'];
  userUID: Scalars['ID']['input'];
};


export type MutationUpdateUserEnvironmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
};


export type MutationUpdateUserSessionsArgs = {
  currentSession: Scalars['String']['input'];
  sessionType: SessionType;
};


export type MutationUpdateUserSettingsArgs = {
  properties: Scalars['String']['input'];
};

export type PublishedDocs = {
  __typename?: 'PublishedDocs';
  /** Indicates if the documentation is set to auto-sync */
  autoSync: Scalars['Boolean']['output'];
  /** Returns the collection of the published document */
  collection: PublishedDocsCollection;
  /** Timestamp when the documentation was created */
  createdOn: Scalars['DateTime']['output'];
  /** Returns the creator of the published document */
  creator?: Maybe<User>;
  /** Document tree structure associated with the documentation */
  documentTree: Scalars['String']['output'];
  /** ID of the published API documentation */
  id: Scalars['ID']['output'];
  /** Metadata of the documentation */
  metadata: Scalars['String']['output'];
  /** Title of the published API documentation */
  title: Scalars['String']['output'];
  /** Timestamp when the documentation was last updated */
  updatedOn: Scalars['DateTime']['output'];
  /** URL where the published API documentation can be accessed */
  url: Scalars['String']['output'];
  /** Version of the published API documentation */
  version: Scalars['String']['output'];
  /** Workspace ID (of team/user ID) associated with the published documentation */
  workspaceID: Scalars['String']['output'];
  /** Type of workspace associated with the published documentation */
  workspaceType: Scalars['String']['output'];
};

export type PublishedDocsCollection = {
  __typename?: 'PublishedDocsCollection';
  /** ID of the collection */
  id: Scalars['ID']['output'];
  /** Title of the collection */
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Gives details of the admin executing this query */
  admin: Admin;
  /** Allowed Auth Provider list */
  allowedAuthProviders: Array<Scalars['String']['output']>;
  /** Get a Team Collection with ID or null (if not exists) */
  collection?: Maybe<TeamCollection>;
  /** Returns a JSON string of all the contents of a Team Collection */
  exportCollectionToJSON: Scalars['String']['output'];
  /** Returns the JSON string giving the collections and their contents of the team */
  exportCollectionsToJSON: Scalars['String']['output'];
  /** Returns a JSON string of all the contents of a User Collection */
  exportUserCollectionToJSON: Scalars['String']['output'];
  /** Returns the JSON string giving the collections and their contents of a user */
  exportUserCollectionsToJSON: UserCollectionExportJsonData;
  /** Fetch details of the Infrastructure */
  infra: Infra;
  /** Retrieve configuration details for the instance */
  infraConfigs: Array<InfraConfig>;
  /** Get list of infra tokens */
  infraTokens: Array<InfraToken>;
  /** Check if the SMTP is enabled or not */
  isSMTPEnabled: Scalars['Boolean']['output'];
  /** Check if user history is enabled or not */
  isUserHistoryEnabled: InfraConfig;
  /** Gives details of the user executing this query (pass Authorization 'Bearer' header) */
  me: User;
  /** Get a specific mock server by ID */
  mockServer: MockServer;
  /** Get logs for a specific mock server with pagination, sorted by execution time (most recent first) */
  mockServerLogs: Array<MockServerLog>;
  /** Get all mock servers for the authenticated user */
  myMockServers: Array<MockServer>;
  /** List all shortcodes the current user has generated */
  myShortcodes: Array<Shortcode>;
  /** List of teams that the executing user belongs to. */
  myTeams: Array<Team>;
  /** Get a published document by ID */
  publishedDoc: PublishedDocs;
  /** Gives a request with the given ID or null (if not exists) */
  request?: Maybe<TeamRequest>;
  /** Gives a paginated list of requests in the collection */
  requestsInCollection: Array<TeamRequest>;
  /** Returns the collections of a team */
  rootCollectionsOfTeam: Array<TeamCollection>;
  /** Get the root GraphQL user collections for a user */
  rootGQLUserCollections: Array<UserCollection>;
  /** Get the root REST user collections for a user */
  rootRESTUserCollections: Array<UserCollection>;
  /** Search the team for a specific request with title */
  searchForRequest: Array<TeamRequest>;
  /** Resolves and returns a shortcode data */
  shortcode?: Maybe<Shortcode>;
  /** Returns the detail of the team with the given ID */
  team?: Maybe<Team>;
  /** Gets the Team Invitation with the given ID, or null if not exists */
  teamInvitation: TeamInvitation;
  /** Get all mock servers for a specific team */
  teamMockServers: Array<MockServer>;
  /** Get all published documents */
  teamPublishedDocsList: Array<PublishedDocs>;
  /** Get user collection with ID */
  userCollection: UserCollection;
  /** Get GraphQL user requests */
  userGQLRequests: Array<UserRequest>;
  /** Get all published documents of a user */
  userPublishedDocsList: Array<PublishedDocs>;
  /** Get REST user requests */
  userRESTRequests: Array<UserRequest>;
  /** Get a user request by ID */
  userRequest: UserRequest;
};


export type QueryCollectionArgs = {
  collectionID: Scalars['ID']['input'];
};


export type QueryExportCollectionToJsonArgs = {
  collectionID: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
};


export type QueryExportCollectionsToJsonArgs = {
  teamID: Scalars['ID']['input'];
};


export type QueryExportUserCollectionToJsonArgs = {
  collectionID: Scalars['ID']['input'];
};


export type QueryExportUserCollectionsToJsonArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  collectionType: ReqType;
};


export type QueryInfraConfigsArgs = {
  configNames: Array<InfraConfigEnum>;
};


export type QueryInfraTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMockServerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMockServerLogsArgs = {
  mockServerID: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyMockServersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyShortcodesArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyTeamsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPublishedDocArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRequestArgs = {
  requestID: Scalars['ID']['input'];
};


export type QueryRequestsInCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootCollectionsOfTeamArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  teamID: Scalars['ID']['input'];
};


export type QueryRootGqlUserCollectionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootRestUserCollectionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchForRequestArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  searchTerm: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  teamID: Scalars['ID']['input'];
};


export type QueryShortcodeArgs = {
  code: Scalars['ID']['input'];
};


export type QueryTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type QueryTeamInvitationArgs = {
  inviteID: Scalars['ID']['input'];
};


export type QueryTeamMockServersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  teamID: Scalars['ID']['input'];
};


export type QueryTeamPublishedDocsListArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  teamID: Scalars['ID']['input'];
};


export type QueryUserCollectionArgs = {
  userCollectionID: Scalars['ID']['input'];
};


export type QueryUserGqlRequestsArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserPublishedDocsListArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserRestRequestsArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserRequestArgs = {
  id: Scalars['ID']['input'];
};

export enum ReqType {
  Gql = 'GQL',
  Rest = 'REST'
}

export type RequestReorderData = {
  __typename?: 'RequestReorderData';
  /** Team Request succeeding the request being moved in its new position */
  nextRequest?: Maybe<TeamRequest>;
  /** Team Request being moved */
  request: TeamRequest;
};

export enum ServiceStatus {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export enum SessionType {
  Gql = 'GQL',
  Rest = 'REST'
}

export type Shortcode = {
  __typename?: 'Shortcode';
  /** Timestamp of when the Shortcode was created */
  createdOn: Scalars['DateTime']['output'];
  /** The 12 digit alphanumeric code */
  id: Scalars['ID']['output'];
  /** JSON string representing the properties for an embed */
  properties?: Maybe<Scalars['String']['output']>;
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
};

export type ShortcodeCreator = {
  __typename?: 'ShortcodeCreator';
  /** Email of user who created the shortcode */
  email: Scalars['String']['output'];
  /** Uid of user who created the shortcode */
  uid: Scalars['String']['output'];
};

export type ShortcodeWithUserEmail = {
  __typename?: 'ShortcodeWithUserEmail';
  /** Timestamp of when the Shortcode was created */
  createdOn: Scalars['DateTime']['output'];
  /** Details of user who created the shortcode */
  creator?: Maybe<ShortcodeCreator>;
  /** The 12 digit alphanumeric code */
  id: Scalars['ID']['output'];
  /** JSON string representing the properties for an embed */
  properties?: Maybe<Scalars['String']['output']>;
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
};

export enum SortOptions {
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Listen to when a collections position has changed */
  collectionOrderUpdated: CollectionReorderData;
  /** Subscription for infra config update */
  infraConfigUpdate: Scalars['String']['output'];
  /** Listen for shortcode creation */
  myShortcodesCreated: Shortcode;
  /** Listen for shortcode deletion */
  myShortcodesRevoked: Shortcode;
  /** Listen for Shortcode updates */
  myShortcodesUpdated: Shortcode;
  /** Emitted when a request has been moved from one collection into another */
  requestMoved: TeamRequest;
  /** Emitted when a requests position has been changed in its collection */
  requestOrderUpdated: RequestReorderData;
  /** Listen for Team Child Collection Sort Events */
  teamChildCollectionsSorted: Scalars['ID']['output'];
  /** Listen to when a collection has been added to a team. The emitted value is the team added */
  teamCollectionAdded: TeamCollection;
  /** Listen to when a collection has been moved */
  teamCollectionMoved: TeamCollection;
  /** Listen to when a collection has been removed */
  teamCollectionRemoved: Scalars['ID']['output'];
  /** Listen to when a collection has been updated. */
  teamCollectionUpdated: TeamCollection;
  /** Listen for Team Environment Creation Messages */
  teamEnvironmentCreated: TeamEnvironment;
  /** Listen for Team Environment Deletion Messages */
  teamEnvironmentDeleted: TeamEnvironment;
  /** Listen for Team Environment Updates */
  teamEnvironmentUpdated: TeamEnvironment;
  /** Listens to when a Team Invitation is added */
  teamInvitationAdded: TeamInvitation;
  /** Listens to when a Team Invitation is removed */
  teamInvitationRemoved: Scalars['ID']['output'];
  /** Listen to when a new team member being added to the team. The emitted value is the new team member added. */
  teamMemberAdded: TeamMember;
  /** Listen to when a team member has been removed. The emitted value is the uid of the user removed */
  teamMemberRemoved: Scalars['ID']['output'];
  /** Listen to when a team member status has been updated. The emitted value is the new team member status */
  teamMemberUpdated: TeamMember;
  /** Emits when a new request is added to a team */
  teamRequestAdded: TeamRequest;
  /** Emitted when a request has been deleted. Only the id of the request is emitted. */
  teamRequestDeleted: Scalars['ID']['output'];
  /** Emitted when a request has been updated */
  teamRequestUpdated: TeamRequest;
  /** Listen for Team Root Collection Sort Events */
  teamRootCollectionsSorted: Scalars['Boolean']['output'];
  /** Listen for User Child Collection Sort Events */
  userChildCollectionsSorted: UserCollectionSortData;
  /** Listen for User Collection Creation */
  userCollectionCreated: UserCollection;
  /** Listen to when a User Collection has been duplicated */
  userCollectionDuplicated: UserCollectionDuplicatedData;
  /** Listen to when a User Collection has been moved */
  userCollectionMoved: UserCollection;
  /** Listen to when a User Collections position has changed */
  userCollectionOrderUpdated: UserCollectionReorderData;
  /** Listen to when a User Collection has been deleted */
  userCollectionRemoved: UserCollectionRemovedData;
  /** Listen to when a User Collection has been updated. */
  userCollectionUpdated: UserCollection;
  /** Listen for user deletion */
  userDeleted: User;
  /** Listen for User Environment Creation */
  userEnvironmentCreated: UserEnvironment;
  /** Listen for User Environment DeleteMany */
  userEnvironmentDeleteMany: Scalars['Int']['output'];
  /** Listen for User Environment deletion */
  userEnvironmentDeleted: UserEnvironment;
  /** Listen for User Environment updates */
  userEnvironmentUpdated: UserEnvironment;
  /** Listen for All User History deleted */
  userHistoryAllDeleted: Scalars['Boolean']['output'];
  /** Listen for User History Creation */
  userHistoryCreated: UserHistory;
  /** Listen for User History deletion */
  userHistoryDeleted: UserHistory;
  /** Listen for User History deleted many */
  userHistoryDeletedMany: UserHistoryDeletedManyData;
  /** Listen for User History update */
  userHistoryUpdated: UserHistory;
  /** Listen for User Invitation */
  userInvited: InvitedUser;
  /** Listen for User Request Creation */
  userRequestCreated: UserRequest;
  /** Listen for User Request Deletion */
  userRequestDeleted: UserRequest;
  /** Listen for User Request Moved */
  userRequestMoved: UserRequestReorderData;
  /** Listen for User Request Update */
  userRequestUpdated: UserRequest;
  /** Listen for User Root Collection Sort Events */
  userRootCollectionsSorted: UserCollectionSortData;
  /** Listen for user setting creation */
  userSettingsCreated: UserSettings;
  /** Listen for user setting updates */
  userSettingsUpdated: UserSettings;
  /** Listen for user updates */
  userUpdated: User;
};


export type SubscriptionCollectionOrderUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionInfraConfigUpdateArgs = {
  configName: InfraConfigEnum;
};


export type SubscriptionRequestMovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionRequestOrderUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamChildCollectionsSortedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionMovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionRemovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamEnvironmentCreatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamEnvironmentDeletedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamEnvironmentUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamInvitationAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamInvitationRemovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamMemberAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamMemberRemovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamMemberUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRequestAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRequestDeletedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRequestUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRootCollectionsSortedArgs = {
  teamID: Scalars['ID']['input'];
};

export type Team = {
  __typename?: 'Team';
  /** The number of users with the EDITOR role in the team */
  editorsCount: Scalars['Int']['output'];
  /** ID of the team */
  id: Scalars['ID']['output'];
  /** Returns the list of members of a team */
  members: Array<TeamMember>;
  /** The role of the current user in the team */
  myRole?: Maybe<TeamAccessRole>;
  /** Displayed name of the team */
  name: Scalars['String']['output'];
  /** The number of users with the OWNER role in the team */
  ownersCount: Scalars['Int']['output'];
  /** Returns all Team Environments for the given Team */
  teamEnvironments: Array<TeamEnvironment>;
  /** Get all the active invites in the team */
  teamInvitations: Array<TeamInvitation>;
  /** Returns the list of members of a team */
  teamMembers: Array<TeamMember>;
  /** The number of users with the VIEWER role in the team */
  viewersCount: Scalars['Int']['output'];
};


export type TeamMembersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
};

export enum TeamAccessRole {
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type TeamCollection = {
  __typename?: 'TeamCollection';
  /** List of children Team Collections */
  children: Array<TeamCollection>;
  /** JSON string representing the collection data */
  data?: Maybe<Scalars['String']['output']>;
  /** ID of the collection */
  id: Scalars['ID']['output'];
  /** Return the parent Team Collection (null if root ) */
  parent?: Maybe<TeamCollection>;
  /** ID of the collection */
  parentID?: Maybe<Scalars['ID']['output']>;
  /** Team the collection belongs to */
  team: Team;
  /** Displayed title of the collection */
  title: Scalars['String']['output'];
};


export type TeamCollectionChildrenArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TeamEnvironment = {
  __typename?: 'TeamEnvironment';
  /** ID of the Team Environment */
  id: Scalars['ID']['output'];
  /** Name of the environment */
  name: Scalars['String']['output'];
  /** ID of the team this environment belongs to */
  teamID: Scalars['ID']['output'];
  /** All variables present in the environment */
  variables: Scalars['String']['output'];
};

export type TeamInvitation = {
  __typename?: 'TeamInvitation';
  /** Get the creator of the invite */
  creator: User;
  /** UID of the creator of the invite */
  creatorUid: Scalars['ID']['output'];
  /** ID of the invite */
  id: Scalars['ID']['output'];
  /** Email of the invitee */
  inviteeEmail: Scalars['String']['output'];
  /** The role that will be given to the invitee */
  inviteeRole: TeamAccessRole;
  /** Get the team associated to the invite */
  team: Team;
  /** ID of the team the invite is to */
  teamID: Scalars['ID']['output'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /** Membership ID of the Team Member */
  membershipID: Scalars['ID']['output'];
  /** Role of the given team member in the given team */
  role: TeamAccessRole;
  user: User;
};

export type TeamRequest = {
  __typename?: 'TeamRequest';
  /** Collection the request belongs to */
  collection: TeamCollection;
  /** ID of the collection the request belongs to. */
  collectionID: Scalars['ID']['output'];
  /** ID of the request */
  id: Scalars['ID']['output'];
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
  /** Team the request belongs to */
  team: Team;
  /** ID of the team the request belongs to. */
  teamID: Scalars['ID']['output'];
  /** Displayed title of the request */
  title: Scalars['String']['output'];
};

export type UpdateMockServerInput = {
  /** Delay in milliseconds before responding */
  delayInMs?: InputMaybe<Scalars['Int']['input']>;
  /** Whether the mock server is active */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the mock server is publicly accessible */
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the mock server */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePublishedDocsArgs = {
  /** Whether the published document should auto-sync with the source */
  autoSync?: InputMaybe<Scalars['Boolean']['input']>;
  /** Metadata associated with the published document */
  metadata?: InputMaybe<Scalars['String']['input']>;
  /** Title of the published document */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Version of the published document */
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamRequestInput = {
  /** JSON string representing the request data */
  request?: InputMaybe<Scalars['String']['input']>;
  /** Displayed title of the request */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** Returns a users GraphQL history */
  GQLHistory: Array<UserHistory>;
  /** Returns a users REST history */
  RESTHistory: Array<UserHistory>;
  /** Date when the user account was created */
  createdOn: Scalars['DateTime']['output'];
  /** Stringified current GraphQL session for logged-in User */
  currentGQLSession?: Maybe<Scalars['String']['output']>;
  /** Stringified current REST session for logged-in User */
  currentRESTSession?: Maybe<Scalars['String']['output']>;
  /** Name of the user (if fetched) */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Email of the user */
  email?: Maybe<Scalars['String']['output']>;
  /** Returns a list of users personal environments */
  environments: Array<UserEnvironment>;
  /** Returns the users global environments */
  globalEnvironments: UserEnvironment;
  /** Flag to determine if user is an Admin or not */
  isAdmin: Scalars['Boolean']['output'];
  /** Date when the user last interacted with the app */
  lastActiveOn?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the user last logged in */
  lastLoggedOn?: Maybe<Scalars['DateTime']['output']>;
  /** URL to the profile photo of the user (if fetched) */
  photoURL?: Maybe<Scalars['String']['output']>;
  /** Returns user settings */
  settings: UserSettings;
  /** UID of the user */
  uid: Scalars['ID']['output'];
};


export type UserGqlHistoryArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserRestHistoryArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCollection = {
  __typename?: 'UserCollection';
  /** List of children GraphQL user collection */
  childrenGQL: Array<UserCollection>;
  /** List of children REST user collection */
  childrenREST: Array<UserCollection>;
  /** JSON string representing the collection data */
  data?: Maybe<Scalars['String']['output']>;
  /** ID of the user collection */
  id: Scalars['ID']['output'];
  /** Parent user collection (null if root) */
  parent?: Maybe<UserCollection>;
  /** Returns user requests of a user collection */
  requests: Array<UserRequest>;
  /** Displayed title of the user collection */
  title: Scalars['String']['output'];
  /** Type of the user collection */
  type: ReqType;
  /** User the collection belongs to */
  user: User;
};


export type UserCollectionChildrenGqlArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCollectionChildrenRestArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCollectionRequestsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCollectionDuplicatedData = {
  __typename?: 'UserCollectionDuplicatedData';
  /** Child collections of the duplicated User Collection */
  childCollections: Scalars['String']['output'];
  /** JSON string representing the collection data */
  data?: Maybe<Scalars['String']['output']>;
  /** ID of the user collection */
  id: Scalars['ID']['output'];
  /** Parent ID of the duplicated User Collection */
  parentID?: Maybe<Scalars['String']['output']>;
  /** Requests of the duplicated User Collection */
  requests: Array<UserRequest>;
  /** Displayed title of the user collection */
  title: Scalars['String']['output'];
  /** Type of the user collection */
  type: ReqType;
  /** User ID of the duplicated User Collection */
  userID: Scalars['String']['output'];
};

export type UserCollectionExportJsonData = {
  __typename?: 'UserCollectionExportJSONData';
  /** Type of the user collection */
  collectionType: ReqType;
  /** Stringified contents of the collection */
  exportedCollection: Scalars['ID']['output'];
};

export type UserCollectionRemovedData = {
  __typename?: 'UserCollectionRemovedData';
  /** ID of User Collection being removed */
  id: Scalars['ID']['output'];
  /** Type of the user collection */
  type: ReqType;
};

export type UserCollectionReorderData = {
  __typename?: 'UserCollectionReorderData';
  /** User Collection succeeding the collection being moved in its new position */
  nextUserCollection?: Maybe<UserCollection>;
  /** User Collection being moved */
  userCollection: UserCollection;
};

export type UserCollectionSortData = {
  __typename?: 'UserCollectionSortData';
  /** ID of the parent collection */
  parentCollectionID?: Maybe<Scalars['ID']['output']>;
  /** Sorting option */
  sortOption: SortOptions;
};

export type UserDeletionResult = {
  __typename?: 'UserDeletionResult';
  /** Error message if user deletion was not successful */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Flag to determine if user deletion was successful or not */
  isDeleted: Scalars['Boolean']['output'];
  /** UID of the user */
  userUID: Scalars['ID']['output'];
};

export type UserEnvironment = {
  __typename?: 'UserEnvironment';
  /** ID of the User Environment */
  id: Scalars['ID']['output'];
  /** Flag to indicate the environment is global or not */
  isGlobal: Scalars['Boolean']['output'];
  /** Name of the environment */
  name?: Maybe<Scalars['String']['output']>;
  /** ID of the user this environment belongs to */
  userUid: Scalars['ID']['output'];
  /** All variables present in the environment */
  variables: Scalars['String']['output'];
};

export type UserHistory = {
  __typename?: 'UserHistory';
  /** Timestamp of when the request was executed or history was created */
  executedOn: Scalars['DateTime']['output'];
  /** ID of the user request in history */
  id: Scalars['ID']['output'];
  /** If the request in the history starred */
  isStarred: Scalars['Boolean']['output'];
  /** Type of the request in the history */
  reqType: ReqType;
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
  /** JSON string representing the response meta-data */
  responseMetadata: Scalars['String']['output'];
  /** ID of the user this history belongs to */
  userUid: Scalars['ID']['output'];
};

export type UserHistoryDeletedManyData = {
  __typename?: 'UserHistoryDeletedManyData';
  /** Number of user histories deleted */
  count: Scalars['Int']['output'];
  /** Type of the request in the history */
  reqType: ReqType;
};

export type UserRequest = {
  __typename?: 'UserRequest';
  /** ID of the parent collection ID */
  collectionID: Scalars['ID']['output'];
  /** Date of the user request creation */
  createdOn: Scalars['DateTime']['output'];
  /** ID of the user request */
  id: Scalars['ID']['output'];
  /** Content/Body of the user request */
  request: Scalars['String']['output'];
  /** Title of the user request */
  title: Scalars['String']['output'];
  /** Type (GRAPHQL/REST) of the user request */
  type: ReqType;
  /** Returns the user of the user request */
  user: User;
};

export type UserRequestReorderData = {
  __typename?: 'UserRequestReorderData';
  /** User request succeeding the request being moved in its new position */
  nextRequest?: Maybe<UserRequest>;
  /** User request being moved */
  request: UserRequest;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  /** ID of the User Setting */
  id: Scalars['ID']['output'];
  /** Stringified JSON settings object */
  properties: Scalars['String']['output'];
  /** Last updated on */
  updatedOn: Scalars['DateTime']['output'];
  /** ID of the user this setting belongs to */
  userUid: Scalars['ID']['output'];
};

export enum WorkspaceType {
  Team = 'TEAM',
  User = 'USER'
}

export type AcceptTeamInvitationMutationVariables = Exact<{
  inviteID: Scalars['ID']['input'];
}>;


export type AcceptTeamInvitationMutation = { __typename?: 'Mutation', acceptTeamInvitation: { __typename?: 'TeamMember', membershipID: string, role: TeamAccessRole, user: { __typename?: 'User', uid: string, displayName?: string | null, photoURL?: string | null, email?: string | null } } };

export type AddUserToTeamByAdminMutationVariables = Exact<{
  userEmail: Scalars['String']['input'];
  role: TeamAccessRole;
  teamID: Scalars['ID']['input'];
}>;


export type AddUserToTeamByAdminMutation = { __typename?: 'Mutation', addUserToTeamByAdmin: { __typename?: 'TeamMember', membershipID: string, role: TeamAccessRole, user: { __typename?: 'User', uid: string } } };

export type ChangeUserRoleInTeamByAdminMutationVariables = Exact<{
  userUID: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
  newRole: TeamAccessRole;
}>;


export type ChangeUserRoleInTeamByAdminMutation = { __typename?: 'Mutation', changeUserRoleInTeamByAdmin: { __typename?: 'TeamMember', membershipID: string, role: TeamAccessRole } };

export type CreateInfraTokenMutationVariables = Exact<{
  label: Scalars['String']['input'];
  expiryInDays?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateInfraTokenMutation = { __typename?: 'Mutation', createInfraToken: { __typename?: 'CreateInfraTokenResponse', token: string, info: { __typename?: 'InfraToken', id: string, label: string, lastUsedOn: any, createdOn: any, expiresOn?: any | null } } };

export type CreateTeamMutationVariables = Exact<{
  userUid: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeamByAdmin: { __typename?: 'Team', id: string, name: string, ownersCount: number, editorsCount: number, viewersCount: number, members: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamAccessRole, user: { __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, photoURL?: string | null } }> } };

export type CreateTeamInvitationMutationVariables = Exact<{
  inviteeEmail: Scalars['String']['input'];
  inviteeRole: TeamAccessRole;
  teamID: Scalars['ID']['input'];
}>;


export type CreateTeamInvitationMutation = { __typename?: 'Mutation', createTeamInvitation: { __typename?: 'TeamInvitation', id: string, teamID: string, creatorUid: string, inviteeEmail: string, inviteeRole: TeamAccessRole } };

export type DemoteUsersByAdminMutationVariables = Exact<{
  userUIDs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type DemoteUsersByAdminMutation = { __typename?: 'Mutation', demoteUsersByAdmin: boolean };

export type EnableAndDisableSsoMutationVariables = Exact<{
  providerInfo: Array<EnableAndDisableSsoArgs> | EnableAndDisableSsoArgs;
}>;


export type EnableAndDisableSsoMutation = { __typename?: 'Mutation', enableAndDisableSSO: boolean };

export type InviteNewUserMutationVariables = Exact<{
  inviteeEmail: Scalars['String']['input'];
}>;


export type InviteNewUserMutation = { __typename?: 'Mutation', inviteNewUser: { __typename?: 'InvitedUser', inviteeEmail: string } };

export type MakeUsersAdminMutationVariables = Exact<{
  userUIDs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type MakeUsersAdminMutation = { __typename?: 'Mutation', makeUsersAdmin: boolean };

export type RemoveTeamMutationVariables = Exact<{
  uid: Scalars['ID']['input'];
}>;


export type RemoveTeamMutation = { __typename?: 'Mutation', deleteTeamByAdmin: boolean };

export type RemoveUserFromTeamByAdminMutationVariables = Exact<{
  userUid: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
}>;


export type RemoveUserFromTeamByAdminMutation = { __typename?: 'Mutation', removeUserFromTeamByAdmin: boolean };

export type RemoveUsersByAdminMutationVariables = Exact<{
  userUIDs: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type RemoveUsersByAdminMutation = { __typename?: 'Mutation', removeUsersByAdmin: Array<{ __typename?: 'UserDeletionResult', userUID: string, isDeleted: boolean, errorMessage?: string | null }> };

export type RenameTeamMutationVariables = Exact<{
  uid: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameTeamMutation = { __typename?: 'Mutation', renameTeamByAdmin: { __typename?: 'Team', id: string, name: string } };

export type ResetInfraConfigsMutationVariables = Exact<{ [key: string]: never; }>;


export type ResetInfraConfigsMutation = { __typename?: 'Mutation', resetInfraConfigs: boolean };

export type RevokeAllUserHistoryByAdminMutationVariables = Exact<{ [key: string]: never; }>;


export type RevokeAllUserHistoryByAdminMutation = { __typename?: 'Mutation', revokeAllUserHistoryByAdmin: boolean };

export type RevokeInfraTokenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RevokeInfraTokenMutation = { __typename?: 'Mutation', revokeInfraToken: boolean };

export type RevokeShortcodeByAdminMutationVariables = Exact<{
  codeID: Scalars['ID']['input'];
}>;


export type RevokeShortcodeByAdminMutation = { __typename?: 'Mutation', revokeShortcodeByAdmin: boolean };

export type RevokeTeamInvitationMutationVariables = Exact<{
  inviteID: Scalars['ID']['input'];
}>;


export type RevokeTeamInvitationMutation = { __typename?: 'Mutation', revokeTeamInviteByAdmin: boolean };

export type RevokeUserInvitationsByAdminMutationVariables = Exact<{
  inviteeEmails: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RevokeUserInvitationsByAdminMutation = { __typename?: 'Mutation', revokeUserInvitationsByAdmin: boolean };

export type TeamInvitationAddedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamInvitationAddedSubscription = { __typename?: 'Subscription', teamInvitationAdded: { __typename?: 'TeamInvitation', id: string } };

export type TeamInvitationRemovedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamInvitationRemovedSubscription = { __typename?: 'Subscription', teamInvitationRemoved: string };

export type ToggleAnalyticsCollectionMutationVariables = Exact<{
  status: ServiceStatus;
}>;


export type ToggleAnalyticsCollectionMutation = { __typename?: 'Mutation', toggleAnalyticsCollection: boolean };

export type ToggleSmtpMutationVariables = Exact<{
  status: ServiceStatus;
}>;


export type ToggleSmtpMutation = { __typename?: 'Mutation', toggleSMTP: boolean };

export type ToggleUserHistoryStoreMutationVariables = Exact<{
  status: ServiceStatus;
}>;


export type ToggleUserHistoryStoreMutation = { __typename?: 'Mutation', toggleUserHistoryStore: boolean };

export type UpdateInfraConfigsMutationVariables = Exact<{
  infraConfigs: Array<InfraConfigArgs> | InfraConfigArgs;
}>;


export type UpdateInfraConfigsMutation = { __typename?: 'Mutation', updateInfraConfigs: Array<{ __typename?: 'InfraConfig', name: string, value: string }> };

export type UpdateUserDisplayNameByAdminMutationVariables = Exact<{
  userUID: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateUserDisplayNameByAdminMutation = { __typename?: 'Mutation', updateUserDisplayNameByAdmin: boolean };

export type AllowedAuthProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllowedAuthProvidersQuery = { __typename?: 'Query', allowedAuthProviders: Array<string> };

export type InfraConfigsQueryVariables = Exact<{
  configNames: Array<InfraConfigEnum> | InfraConfigEnum;
}>;


export type InfraConfigsQuery = { __typename?: 'Query', infraConfigs: Array<{ __typename?: 'InfraConfig', name: string, value: string }> };

export type InfraTokensQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InfraTokensQuery = { __typename?: 'Query', infraTokens: Array<{ __typename?: 'InfraToken', id: string, label: string, createdOn: any, lastUsedOn: any, expiresOn?: any | null }> };

export type InvitedUsersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InvitedUsersQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', invitedUsers: Array<{ __typename?: 'InvitedUser', adminUid: string, adminEmail: string, inviteeEmail: string, invitedOn: any }> } };

export type IsSmtpEnabledQueryVariables = Exact<{ [key: string]: never; }>;


export type IsSmtpEnabledQuery = { __typename?: 'Query', isSMTPEnabled: boolean };

export type MetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type MetricsQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', usersCount: number, teamsCount: number, teamRequestsCount: number, teamCollectionsCount: number } };

export type SharedRequestsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type SharedRequestsQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', allShortcodes: Array<{ __typename?: 'ShortcodeWithUserEmail', id: string, request: string, properties?: string | null, createdOn: any, creator?: { __typename?: 'ShortcodeCreator', email: string } | null }> } };

export type TeamInfoQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamInfoQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', teamInfo: { __typename?: 'Team', id: string, name: string, ownersCount: number, editorsCount: number, viewersCount: number, teamMembers: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamAccessRole, user: { __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, photoURL?: string | null } }>, teamInvitations: Array<{ __typename?: 'TeamInvitation', id: string, inviteeEmail: string, inviteeRole: TeamAccessRole }>, teamEnvironments: Array<{ __typename?: 'TeamEnvironment', id: string, name: string }> } } };

export type TeamListQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TeamListQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', allTeams: Array<{ __typename?: 'Team', id: string, name: string, teamMembers: Array<{ __typename?: 'TeamMember', membershipID: string }> }> } };

export type UserInfoQueryVariables = Exact<{
  uid: Scalars['ID']['input'];
}>;


export type UserInfoQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', userInfo: { __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, isAdmin: boolean, photoURL?: string | null, createdOn: any, lastActiveOn?: any | null } } };

export type UsersListQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersListQuery = { __typename?: 'Query', infra: { __typename?: 'Infra', allUsers: Array<{ __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, isAdmin: boolean, photoURL?: string | null, createdOn: any }> } };

export type UsersListV2QueryVariables = Exact<{
  searchString?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersListV2Query = { __typename?: 'Query', infra: { __typename?: 'Infra', allUsersV2: Array<{ __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, isAdmin: boolean, photoURL?: string | null, createdOn: any, lastActiveOn?: any | null }> } };

export type GetPendingInvitesQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type GetPendingInvitesQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: string, teamInvitations: Array<{ __typename?: 'TeamInvitation', inviteeRole: TeamAccessRole, inviteeEmail: string, id: string }> } | null };


export const AcceptTeamInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptTeamInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptTeamInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<AcceptTeamInvitationMutation, AcceptTeamInvitationMutationVariables>;
export const AddUserToTeamByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserToTeamByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamAccessRole"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserToTeamByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserToTeamByAdminMutation, AddUserToTeamByAdminMutationVariables>;
export const ChangeUserRoleInTeamByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeUserRoleInTeamByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newRole"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamAccessRole"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeUserRoleInTeamByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUID"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}},{"kind":"Argument","name":{"kind":"Name","value":"newRole"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newRole"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<ChangeUserRoleInTeamByAdminMutation, ChangeUserRoleInTeamByAdminMutationVariables>;
export const CreateInfraTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInfraToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expiryInDays"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInfraToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"label"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label"}}},{"kind":"Argument","name":{"kind":"Name","value":"expiryInDays"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expiryInDays"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"lastUsedOn"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"expiresOn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateInfraTokenMutation, CreateInfraTokenMutationVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeamByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownersCount"}},{"kind":"Field","name":{"kind":"Name","value":"editorsCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewersCount"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const CreateTeamInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeamInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteeRole"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamAccessRole"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeamInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteeRole"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteeRole"}}},{"kind":"Argument","name":{"kind":"Name","value":"inviteeEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUid"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeRole"}}]}}]}}]} as unknown as DocumentNode<CreateTeamInvitationMutation, CreateTeamInvitationMutationVariables>;
export const DemoteUsersByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DemoteUsersByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUIDs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"demoteUsersByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUIDs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUIDs"}}}]}]}}]} as unknown as DocumentNode<DemoteUsersByAdminMutation, DemoteUsersByAdminMutationVariables>;
export const EnableAndDisableSsoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EnableAndDisableSSO"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerInfo"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnableAndDisableSSOArgs"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enableAndDisableSSO"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerInfo"}}}]}]}}]} as unknown as DocumentNode<EnableAndDisableSsoMutation, EnableAndDisableSsoMutationVariables>;
export const InviteNewUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InviteNewUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteNewUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteeEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmail"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}}]}}]}}]} as unknown as DocumentNode<InviteNewUserMutation, InviteNewUserMutationVariables>;
export const MakeUsersAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MakeUsersAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUIDs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"makeUsersAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUIDs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUIDs"}}}]}]}}]} as unknown as DocumentNode<MakeUsersAdminMutation, MakeUsersAdminMutationVariables>;
export const RemoveTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTeamByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}]}}]} as unknown as DocumentNode<RemoveTeamMutation, RemoveTeamMutationVariables>;
export const RemoveUserFromTeamByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUserFromTeamByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUserFromTeamByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<RemoveUserFromTeamByAdminMutation, RemoveUserFromTeamByAdminMutationVariables>;
export const RemoveUsersByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUsersByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUIDs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUsersByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUIDs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUIDs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUID"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}}]}}]}}]} as unknown as DocumentNode<RemoveUsersByAdminMutation, RemoveUsersByAdminMutationVariables>;
export const RenameTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RenameTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameTeamByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"Argument","name":{"kind":"Name","value":"newName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<RenameTeamMutation, RenameTeamMutationVariables>;
export const ResetInfraConfigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetInfraConfigs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetInfraConfigs"}}]}}]} as unknown as DocumentNode<ResetInfraConfigsMutation, ResetInfraConfigsMutationVariables>;
export const RevokeAllUserHistoryByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeAllUserHistoryByAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeAllUserHistoryByAdmin"}}]}}]} as unknown as DocumentNode<RevokeAllUserHistoryByAdminMutation, RevokeAllUserHistoryByAdminMutationVariables>;
export const RevokeInfraTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeInfraToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeInfraToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RevokeInfraTokenMutation, RevokeInfraTokenMutationVariables>;
export const RevokeShortcodeByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeShortcodeByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"codeID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeShortcodeByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"codeID"}}}]}]}}]} as unknown as DocumentNode<RevokeShortcodeByAdminMutation, RevokeShortcodeByAdminMutationVariables>;
export const RevokeTeamInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeTeamInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeTeamInviteByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}}}]}]}}]} as unknown as DocumentNode<RevokeTeamInvitationMutation, RevokeTeamInvitationMutationVariables>;
export const RevokeUserInvitationsByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeUserInvitationsByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmails"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeUserInvitationsByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteeEmails"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmails"}}}]}]}}]} as unknown as DocumentNode<RevokeUserInvitationsByAdminMutation, RevokeUserInvitationsByAdminMutationVariables>;
export const TeamInvitationAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamInvitationAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInvitationAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TeamInvitationAddedSubscription, TeamInvitationAddedSubscriptionVariables>;
export const TeamInvitationRemovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamInvitationRemoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInvitationRemoved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<TeamInvitationRemovedSubscription, TeamInvitationRemovedSubscriptionVariables>;
export const ToggleAnalyticsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleAnalyticsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleAnalyticsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}]}}]} as unknown as DocumentNode<ToggleAnalyticsCollectionMutation, ToggleAnalyticsCollectionMutationVariables>;
export const ToggleSmtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleSMTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleSMTP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}]}}]} as unknown as DocumentNode<ToggleSmtpMutation, ToggleSmtpMutationVariables>;
export const ToggleUserHistoryStoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleUserHistoryStore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleUserHistoryStore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}]}}]} as unknown as DocumentNode<ToggleUserHistoryStoreMutation, ToggleUserHistoryStoreMutationVariables>;
export const UpdateInfraConfigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInfraConfigs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"infraConfigs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InfraConfigArgs"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInfraConfigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"infraConfigs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"infraConfigs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UpdateInfraConfigsMutation, UpdateInfraConfigsMutationVariables>;
export const UpdateUserDisplayNameByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserDisplayNameByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserDisplayNameByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUID"}}},{"kind":"Argument","name":{"kind":"Name","value":"displayName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<UpdateUserDisplayNameByAdminMutation, UpdateUserDisplayNameByAdminMutationVariables>;
export const AllowedAuthProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllowedAuthProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowedAuthProviders"}}]}}]} as unknown as DocumentNode<AllowedAuthProvidersQuery, AllowedAuthProvidersQueryVariables>;
export const InfraConfigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InfraConfigs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"configNames"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InfraConfigEnum"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infraConfigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"configNames"},"value":{"kind":"Variable","name":{"kind":"Name","value":"configNames"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<InfraConfigsQuery, InfraConfigsQueryVariables>;
export const InfraTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InfraTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infraTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"lastUsedOn"}},{"kind":"Field","name":{"kind":"Name","value":"expiresOn"}}]}}]}}]} as unknown as DocumentNode<InfraTokensQuery, InfraTokensQueryVariables>;
export const InvitedUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvitedUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitedUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminUid"}},{"kind":"Field","name":{"kind":"Name","value":"adminEmail"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"invitedOn"}}]}}]}}]}}]} as unknown as DocumentNode<InvitedUsersQuery, InvitedUsersQueryVariables>;
export const IsSmtpEnabledDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsSMTPEnabled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSMTPEnabled"}}]}}]} as unknown as DocumentNode<IsSmtpEnabledQuery, IsSmtpEnabledQueryVariables>;
export const MetricsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersCount"}},{"kind":"Field","name":{"kind":"Name","value":"teamsCount"}},{"kind":"Field","name":{"kind":"Name","value":"teamRequestsCount"}},{"kind":"Field","name":{"kind":"Name","value":"teamCollectionsCount"}}]}}]}}]} as unknown as DocumentNode<MetricsQuery, MetricsQueryVariables>;
export const SharedRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SharedRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShortcodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SharedRequestsQuery, SharedRequestsQueryVariables>;
export const TeamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamInvitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeRole"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamEnvironments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownersCount"}},{"kind":"Field","name":{"kind":"Name","value":"editorsCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewersCount"}}]}}]}}]}}]} as unknown as DocumentNode<TeamInfoQuery, TeamInfoQueryVariables>;
export const TeamListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TeamListQuery, TeamListQueryVariables>;
export const UserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"lastActiveOn"}}]}}]}}]}}]} as unknown as DocumentNode<UserInfoQuery, UserInfoQueryVariables>;
export const UsersListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}}]}}]}}]}}]} as unknown as DocumentNode<UsersListQuery, UsersListQueryVariables>;
export const UsersListV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersListV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"infra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsersV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"lastActiveOn"}}]}}]}}]}}]} as unknown as DocumentNode<UsersListV2Query, UsersListV2QueryVariables>;
export const GetPendingInvitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPendingInvites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamInvitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteeRole"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPendingInvitesQuery, GetPendingInvitesQueryVariables>;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query",
      "kind": "OBJECT"
    },
    "mutationType": {
      "name": "Mutation",
      "kind": "OBJECT"
    },
    "subscriptionType": {
      "name": "Subscription",
      "kind": "OBJECT"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Admin",
        "fields": [
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "displayName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastActiveOn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastLoggedOn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "photoURL",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CollectionReorderData",
        "fields": [
          {
            "name": "collection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "nextCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TeamCollection",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateInfraTokenResponse",
        "fields": [
          {
            "name": "info",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InfraToken",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Infra",
        "fields": [
          {
            "name": "admins",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "allShortcodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ShortcodeWithUserEmail",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userEmail",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allTeams",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Team",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allUsers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allUsersV2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "searchString",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "collectionCountInTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "environmentCountInTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "executedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Admin",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "invitedUsers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InvitedUser",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "membersCountInTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "pendingInvitationCountInTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamInvitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "requestCountInTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamCollectionsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "teamInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamRequestsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "teamsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "usersCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InfraConfig",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InfraToken",
        "fields": [
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiresOn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastUsedOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InvitedUser",
        "fields": [
          {
            "name": "adminEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "adminUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "invitedOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "inviteeEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MockServer",
        "fields": [
          {
            "name": "collection",
            "type": {
              "kind": "OBJECT",
              "name": "MockServerCollection",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "creator",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "delayInMs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isPublic",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "serverUrlDomainBased",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "serverUrlPathBased",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "subdomain",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workspaceID",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "workspaceType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MockServerCollection",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MockServerLog",
        "fields": [
          {
            "name": "executedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "ipAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mockServerID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "requestBody",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "requestHeaders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "requestMethod",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "requestPath",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "requestQuery",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "responseBody",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "responseHeaders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "responseStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "responseTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userAgent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "acceptTeamInvitation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamMember",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "inviteID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "addUserToTeamByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamMember",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "role",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userEmail",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "changeUserRoleInTeamByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamMember",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "newRole",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "clearGlobalEnvironments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createChildCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "childTitle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "createDuplicateEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createGQLChildUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "parentUserCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createGQLRootUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createGQLUserRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "request",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createInfraToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreateInfraTokenResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "expiryInDays",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "label",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createMockServer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MockServer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createPublishedDoc",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PublishedDocs",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "args",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRESTChildUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "parentUserCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRESTRootUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRESTUserRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "request",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRequestInCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRootCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createShortcode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Shortcode",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "properties",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "request",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createTeamByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createTeamEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "variables",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createTeamInvitation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamInvitation",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "inviteeEmail",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "inviteeRole",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUserEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "variables",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUserGlobalEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "variables",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUserHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistory",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "reqData",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "reqType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "resMetadata",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUserSettings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserSettings",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "properties",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteAllUserHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistoryDeletedManyData",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "reqType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteAllVariablesFromTeamEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteMockServer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteMockServerLog",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "logID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePublishedDoc",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "requestID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteTeamByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteTeamEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "deleteUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUserEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteUserEnvironments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "deleteUserRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "demoteUsersByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userUIDs",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "duplicateTeamCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "duplicateUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "reqType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "enableAndDisableSSO",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "providerInfo",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "importCollectionsFromJSON",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "jsonString",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "parentCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "importUserCollectionsFromJSON",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionExportJSONData",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "jsonString",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "parentCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "reqType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "inviteNewUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InvitedUser",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "inviteeEmail",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "leaveTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "makeUserAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userUID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "makeUsersAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userUIDs",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "moveCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "parentCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "moveRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "destCollID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "nextRequestID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "requestID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "srcCollID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "moveUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "destCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "moveUserRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "destinationCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "nextRequestID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "requestID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "sourceCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeRequestFromHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistory",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeTeamMember",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeUserAsAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userUID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeUserByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userUID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeUserFromTeamByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeUsersByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserDeletionResult",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "userUIDs",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "renameCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "newTitle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "renameTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "newName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "renameTeamByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "newName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "renameUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "newTitle",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resetInfraConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "revokeAllUserHistoryByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "revokeInfraToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "revokeShortcode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "revokeShortcodeByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "revokeTeamInvitation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "inviteID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "revokeTeamInviteByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "inviteID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "revokeUserInvitationsByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "inviteeEmails",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "sortTeamCollections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "parentCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortOption",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sortUserCollections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "parentCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortOption",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "toggleAnalyticsCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "status",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "toggleHistoryStarStatus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistory",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "toggleSMTP",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "status",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "toggleUserHistoryStore",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "status",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCollectionOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "destCollID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateDisplayName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updatedDisplayName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateEmbedProperties",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Shortcode",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "properties",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateGQLUserRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "request",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateInfraConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InfraConfig",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "infraConfigs",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "updateLookUpRequestOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "nextRequestID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "requestID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateMockServer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MockServer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatePublishedDoc",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PublishedDocs",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "args",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateRESTUserRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "request",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "title",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "requestID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateTeamAccessRole",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamMember",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "newRole",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateTeamCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "newTitle",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateTeamEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "variables",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "newTitle",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserCollectionOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "nextCollectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateUserDisplayNameByAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "displayName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userUID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserEnvironment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "variables",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserSessions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "currentSession",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "sessionType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserSettings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserSettings",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "properties",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PublishedDocs",
        "fields": [
          {
            "name": "autoSync",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "collection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PublishedDocsCollection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "creator",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "documentTree",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "version",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workspaceID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workspaceType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PublishedDocsCollection",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "admin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Admin",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "allowedAuthProviders",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "collection",
            "type": {
              "kind": "OBJECT",
              "name": "TeamCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "exportCollectionToJSON",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "exportCollectionsToJSON",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "exportUserCollectionToJSON",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "exportUserCollectionsToJSON",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionExportJSONData",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "collectionType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "infra",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Infra",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "infraConfigs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InfraConfig",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "configNames",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "infraTokens",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InfraToken",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "isSMTPEnabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isUserHistoryEnabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InfraConfig",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "me",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "mockServer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MockServer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "mockServerLogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MockServerLog",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "mockServerID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "myMockServers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MockServer",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "myShortcodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Shortcode",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "myTeams",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Team",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "publishedDoc",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PublishedDocs",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "request",
            "type": {
              "kind": "OBJECT",
              "name": "TeamRequest",
              "ofType": null
            },
            "args": [
              {
                "name": "requestID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "requestsInCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamRequest",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "rootCollectionsOfTeam",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamCollection",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "rootGQLUserCollections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserCollection",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "rootRESTUserCollections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserCollection",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "searchForRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamRequest",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "searchTerm",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "shortcode",
            "type": {
              "kind": "OBJECT",
              "name": "Shortcode",
              "ofType": null
            },
            "args": [
              {
                "name": "code",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "team",
            "type": {
              "kind": "OBJECT",
              "name": "Team",
              "ofType": null
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamInvitation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamInvitation",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "inviteID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamMockServers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MockServer",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamPublishedDocsList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PublishedDocs",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userCollectionID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userGQLRequests",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserRequest",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "userPublishedDocsList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PublishedDocs",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "userRESTRequests",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserRequest",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "collectionID",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "userRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RequestReorderData",
        "fields": [
          {
            "name": "nextRequest",
            "type": {
              "kind": "OBJECT",
              "name": "TeamRequest",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Shortcode",
        "fields": [
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "properties",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShortcodeCreator",
        "fields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShortcodeWithUserEmail",
        "fields": [
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "creator",
            "type": {
              "kind": "OBJECT",
              "name": "ShortcodeCreator",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "properties",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Subscription",
        "fields": [
          {
            "name": "collectionOrderUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CollectionReorderData",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "infraConfigUpdate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "configName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "myShortcodesCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Shortcode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "myShortcodesRevoked",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Shortcode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "myShortcodesUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Shortcode",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "requestMoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "requestOrderUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RequestReorderData",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamChildCollectionsSorted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamCollectionAdded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamCollectionMoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamCollectionRemoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamCollectionUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamEnvironmentCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamEnvironmentDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamEnvironmentUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamEnvironment",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamInvitationAdded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamInvitation",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamInvitationRemoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamMemberAdded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamMember",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamMemberRemoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamMemberUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamMember",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamRequestAdded",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamRequestDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamRequestUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamRequest",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "teamRootCollectionsSorted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "teamID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userChildCollectionsSorted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionSortData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userCollectionCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userCollectionDuplicated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionDuplicatedData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userCollectionMoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userCollectionOrderUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionReorderData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userCollectionRemoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionRemovedData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userCollectionUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userEnvironmentCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userEnvironmentDeleteMany",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userEnvironmentDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userEnvironmentUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userHistoryAllDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userHistoryCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistory",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userHistoryDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistory",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userHistoryDeletedMany",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistoryDeletedManyData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userHistoryUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserHistory",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userInvited",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "InvitedUser",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userRequestCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userRequestDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userRequestMoved",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequestReorderData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userRequestUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userRootCollectionsSorted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollectionSortData",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userSettingsCreated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserSettings",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userSettingsUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserSettings",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userUpdated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Team",
        "fields": [
          {
            "name": "editorsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "members",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamMember",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "myRole",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "ownersCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "teamEnvironments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamEnvironment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "teamInvitations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamInvitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "teamMembers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamMember",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "viewersCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TeamCollection",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TeamCollection",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "TeamCollection",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "parentID",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "team",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TeamEnvironment",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "teamID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "variables",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TeamInvitation",
        "fields": [
          {
            "name": "creator",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "creatorUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "inviteeEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "inviteeRole",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "team",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "teamID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TeamMember",
        "fields": [
          {
            "name": "membershipID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TeamRequest",
        "fields": [
          {
            "name": "collection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TeamCollection",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "collectionID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "team",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Team",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "teamID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "GQLHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserHistory",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "RESTHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserHistory",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currentGQLSession",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currentRESTSession",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "displayName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "environments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserEnvironment",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "globalEnvironments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEnvironment",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "isAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastActiveOn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastLoggedOn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "photoURL",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "settings",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserSettings",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCollection",
        "fields": [
          {
            "name": "childrenGQL",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserCollection",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "childrenREST",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserCollection",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "UserCollection",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "requests",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserRequest",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCollectionDuplicatedData",
        "fields": [
          {
            "name": "childCollections",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "parentID",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "requests",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserRequest",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCollectionExportJSONData",
        "fields": [
          {
            "name": "collectionType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "exportedCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCollectionRemovedData",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCollectionReorderData",
        "fields": [
          {
            "name": "nextUserCollection",
            "type": {
              "kind": "OBJECT",
              "name": "UserCollection",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userCollection",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCollection",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCollectionSortData",
        "fields": [
          {
            "name": "parentCollectionID",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sortOption",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserDeletionResult",
        "fields": [
          {
            "name": "errorMessage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userUID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserEnvironment",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isGlobal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "variables",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserHistory",
        "fields": [
          {
            "name": "executedOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isStarred",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reqType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "responseMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserHistoryDeletedManyData",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reqType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserRequest",
        "fields": [
          {
            "name": "collectionID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserRequestReorderData",
        "fields": [
          {
            "name": "nextRequest",
            "type": {
              "kind": "OBJECT",
              "name": "UserRequest",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "request",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserRequest",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserSettings",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "properties",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedOn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userUid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;
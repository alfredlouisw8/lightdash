import { type SlackChannelProjectMapping } from './slack';

export type SlackSettings = {
    enabled: boolean;
    errorMessage?: string;
    organizationUuid: string;
    slackTeamName: string;
    createdAt: Date | undefined;
    token?: string;
    scopes: string[];
    notificationChannel: string | undefined;
    appProfilePhotoUrl: string | undefined;
    slackChannelProjectMappings?: SlackChannelProjectMapping[];
};

export const slackRequiredScopes = [
    'links:read',
    'links:write',
    'chat:write',
    'chat:write.customize',
    'channels:read',
    'channels:join',
    'groups:read',
    'users:read',
    'files:write',
    'files:read',
];

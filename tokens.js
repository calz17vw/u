// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1433402598806781952",
        serverId: "1383857733706584064",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];

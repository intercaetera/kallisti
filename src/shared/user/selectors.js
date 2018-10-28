export const currentUserSelector = state => state.currentUser.user
export const currentUserGuildsSelector = state => state.currentUser.guilds.map(guild => guild.name)

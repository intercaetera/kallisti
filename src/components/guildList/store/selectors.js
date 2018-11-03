export const selectedGuildIdSelector = state => state.selectedGuild.selectedGuildId
export const selectedGuildSelector = state => state.currentUser.guilds[state.selectedGuild.selectedGuildId]

export const addAdmin = (state, admin) => {
    state.admins = [admin, ...state.admins]
}
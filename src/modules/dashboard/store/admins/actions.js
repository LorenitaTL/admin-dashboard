
export const createAdmin = async ({ commit }, admin ) => {

    // dataToSave
    const {id, name, last_name, email, area, active, picture } = admin
    const dataToSave = {id, name, last_name, email, area, active, picture }

    commit('addAdmin', dataToSave )
}




export const getAdminsByTerm = ( state ) => ( term = '' ) => {

    if ( term.length === 0 ) return state.admins

    return state.admins.filter( admin => admin.name.toLowerCase().includes( term.toLocaleLowerCase() ) )
}

// id
export const getAdminById = ( state ) => ( id = '' ) => {

    const admin = state.admins.find( admin => admin.id === id )

    if ( !admin ) return

    return { ...admin } 
}




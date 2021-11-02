import { createStore } from 'vuex'

import admins from '../modules/dashboard/store/admins'


const store = createStore({
    modules: {
        admins,
    }
})




export default store
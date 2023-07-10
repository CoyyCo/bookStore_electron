import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => {
        return {
            userInfo: {
                useranme: "",
                email: "",
                token: ""
            }
        }
    },
    actions: {
        updateToken(token: string) {
            this.userInfo.token = token
            window.localStorage.setItem('token', token)
        }
    }
})
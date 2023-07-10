import * as fetchIntercept from 'fetch-intercept'
import {useStore} from "@/pinia";
const func = (router: any) => {
    // console.log(router)
    const unregister = fetchIntercept.register({
        request: (url: any, config: any) => {
            config["headers"] = {
                "Authorization": `Bearer ${window.localStorage.getItem('token') || ""}`
            }
            return [url, config]
        },
        requestError: (error: any) => {
            return Promise.reject(error)
        },
        response: (response: any) => {
            let res = response.json().then((res: any) => res)
            let url = response.url.split('/').pop()
            if (url == 'login') {
                const mainstore = useStore()
                res.then((r: any) => {
                    if(r.code == 200){
                        mainstore.updateToken(r.data.token)
                    }

                })
            } else {
                res.then((r: any) => {
                    if (r.code == 401) {
                        router.push({
                            path: "login"
                        })
                    }
                })
            }

            return res;
        },
        responseError: (error: any) => {
            return Promise.reject(error)
        }
    })
}
const http = new Proxy(window.fetch, {
    apply: (target, obj, args) => {
        return Reflect.apply(target, obj, args);
    }
})


export {http,func}
export function endpoints(host: string){
    return {
        login: `${host}` + '/authentication/login',
        getAllCustomers: `${host}` + '/api/customer/getAllCustomers'
    }
}

import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }






    setToken(token){
        this.token = token
    }




    async request({endpoint, method = `GET`, data = {}}) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }


        if(this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }



        try{
            const res = await axios({ url, method, data, headers })
            return {data: res.data, error: null}
        }
        catch (error) {
            console.error({errorResponse: error.response})
            const message = error?.response?.data?.error?.message
            return {data: null, error: message || String(error)}
        }

    }




    

    async loginUser(credentials) {
        return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }

    async signupUser(credentials) {
        return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
    }

    async fetchUserFromToken() {
        return await this.request({ endpoint: `auth/me`, method: `POST`})
    }

    async logoutUser() {
        this.setToken(null)
    }


    async createNutrition(nutrition) {
        return await this.request({endpoint: `nutrition`, method: `POST`, data: nutrition})
    }

    async fetchNutritionById(nutritionId) {
        return await this.request({endpoint: `nutrition/${nutritionId}`, method: `GET`})
    }
    async listNutritionForUser() {
        return await this.request({endpoint: `nutrition`, method: `GET`})
    }

} 




export default new ApiClient("http://localhost:3001")
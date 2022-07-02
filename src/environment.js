const BASEURL = {
    localhost: 'http://localhost:4000/api/',
    production: ''
}

const ENV = {
    dev: {
        API_GET_LISTOFCOURSES : `${BASEURL.localhost}courses/listofcourses`
    }
    
}

const getEnvVars = () => {




    return ENV.dev
}

export default getEnvVars
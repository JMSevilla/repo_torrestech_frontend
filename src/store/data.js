

class __constructor__ { 
    datamanagement(object) { 
        var data = new FormData()
        data.append("firstname", object.firstname)
        data.append("lastname", object.lastname)
        data.append("email", object.email)
        data.append("password", object.password)
        return data
    }
}

export default new __constructor__();
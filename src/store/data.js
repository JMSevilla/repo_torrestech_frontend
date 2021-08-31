

class __constructor__ { 
    datamanagement(object) { 
        var data = new FormData()
        data.append("firstname", object.firstname)
        data.append("lastname", object.lastname)
        data.append("email", object.email)
        data.append("password", object.password)
        return data
    }
    classcodechecker(obj) {
        var data = new FormData();
        data.append("classcode", obj.ccode);
        return data;
    }
    registrationstudent(obj) {
        var data = new FormData();
        data.append("firstname", obj.firstname);
        data.append("lastname", obj.lastname);
        data.append("birthdate", obj.bdate);
        data.append("age", obj.age);
        data.append("gender", obj.gender);
        data.append("contactnum", obj.mobile);
        data.append("province", obj.province);
        data.append("municipality", obj.municipality);
        data.append("zip_code", obj.zipcode);
        data.append("address", obj.house + obj.street);
        data.append("email", obj.email);
        data.append("password", obj.password);
        data.append("image_url", obj.imageurl);
        return data;
    }
    signindata(obj) { 
        var data = new FormData();
        data.append("email", obj.email)
        data.append("password", obj.password)
        return data
    }
    updateToken(email, token) {
        var markup = `?email=${email}&token=${token}`
        return markup
    }
    scanToken(token , email) {
        var markup = `?token=${token}&email=${email}`
        return markup
    }
}

export default new __constructor__();
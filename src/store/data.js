

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
    bugreport(obj) {
        var data = new FormData();
        data.append("email", obj.email);
        data.append("fullname", obj.fullName);
        data.append("bugTitle", obj.bug);
        data.append("bugdescription", obj.bugDescription);
        data.append("bugLocation", obj.bugLink);
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
    destroyToken(email){
        const markup = `?email=${email}`
        return markup
    }
    scanToken(token , email) {
        var markup = `?token=${token}&email=${email}`
        return markup
    }
    addTraining(obj){
        const data = new FormData();
        data.append("isonline", obj.types)
        data.append("trainingName", obj.trainingName)
        data.append("SD", obj.shortDescription)
        data.append("FD", obj.fullDescription)
        data.append("WYL", obj.whatyoulearn)
        data.append("imageurl", obj.imageurl)
        data.append("isstatus", obj.status)
        data.append("isforum", obj.forum)
        data.append("islivechat", obj.livechat)
        data.append("capacity", obj.capacity)
        data.append("ispayment", obj.payment)
        data.append("coursefee", obj.coursefee)
        data.append("effort", obj.effort)
        data.append("tLength", obj.length)
        data.append("categories", obj.categories)
        data.append("trainingStart", obj.startdate)
        data.append("trainingEnd", obj.enddate)
        data.append("assignee", obj.assignee)
        return data
    }
    addemployee(obj){
        const data = new FormData();
        data.append('firstname', obj.firstname);
        data.append('lastname', obj.lastname);
        data.append('email', obj.email);
        data.append('password', obj.password);
        data.append('platform', obj.platform);
        data.append('apikey', obj.apikey);
        return data;
    }
}

export default new __constructor__();
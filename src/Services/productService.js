import axios from "axios";
//const baseUrl = " http://localhost:3500/persons"
const baseUrl = "http://localhost:9500/routes/buyrequest"
let productServices ={}
const getAllData = () =>{
    const request = axios.get(baseUrl)
    return request.then(Response => Response.data)
}

const AddContact = (newContact) =>{
    const request = axios.post(baseUrl, newContact)
    return request.then(Response => Response.data)
}

const updateContact = (id, newContact) =>{
    const request = axios.put(`${baseUrl}/ ${id}`, newContact)
    return request.then(Response => Response.data)
}

const delContact = (id) =>{
    const request = axios.delete(`${baseUrl}/ ${id}`)
    return request.then(Response => Response.data)
}


export default productServices = {
    getAllData: getAllData,
    AddContact: AddContact,
    updateContact: updateContact,
    delContact: delContact
}
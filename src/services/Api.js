import axios from 'axios'

const URL ='http://localhost:3001';

export const SendData = async (productData)=>{
    try{
       return await axios.post(`${URL}/send` , productData);
       console.log("your poducts is sended successfully")
    }catch(error){
        console.log("Error in Product Sending", error)
    }
}


export const ReadData =async ()=>{
  try{
    let data = await axios.get(`${URL}/read`)
    return data; 
  }
catch(error){
console.log(error)
}
}

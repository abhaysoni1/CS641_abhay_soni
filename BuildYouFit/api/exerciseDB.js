import axios from  'axios';
import { bodyParts, rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';
const apiCall = async(url,params)=>{
try{
   const options = {
    method: 'GET',
    url,
    params,
    headers : {
            'x-rapidapi-key': 'da34b99c3fmshfc0eb6ed978b9cap12c62djsnb9a04d8336a8',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};
const response = await axios.request(options);
return response.data;
}catch(err){
    console.log('error:' ,err.message);
}
}

export const fetchExercisesByBodyParts = async (bodyPart)=>{
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
}
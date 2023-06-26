import axios from 'axios'

export const getLaunches = async () => {

    try{
        const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
        console.log(res.data);

        return res.data;
    }
    catch(error){
        return error
    }
    
};
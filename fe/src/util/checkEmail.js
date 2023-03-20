import axios from "axios";

const CheckEmail = async(email,setIsEmailValid) => {
    const response = await axios.post("http://localhost:3000/api/check/email",{
        email: email
    });
    console.log(response.data);
    if(response.data === "" && email.length >0){
        setIsEmailValid(true);

    }else{
        setIsEmailValid(false);
    }
}

export default CheckEmail;
import axios from "axios";

const checkUsername = async(userName,setIsUserNameValid) => {
    const response = await axios.post("http://localhost:3000/api/check/username",{
        userName: userName
    });
    console.log(response.data);
    if(response.data === "" && userName.length > 0){
        setIsUserNameValid(true);
    }else{
        setIsUserNameValid(false);
    }
}

export default checkUsername;
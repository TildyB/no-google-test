import axios from "axios";

const Buttons = ({loggedinUser}) => {
  const getPublic = async() => {
   const response = await axios.get("http://localhost:3000/api/public")
    console.log(response.data);
  };
  const getPrivate = async() => {
    const response = await axios.get("http://localhost:3000/api/private", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    });
    console.log(response.data);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={getPublic}>
        Public
      </button>
      {loggedinUser && 
      <button className="btn btn-secondary" onClick={getPrivate}>
        Private
      </button>
      }
    </>
  );
};

export default Buttons;

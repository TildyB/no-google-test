import axios from "axios";

const Buttons = () => {
  const getPublic = async() => {
   const response = await axios.get("http://localhost:3000/api/public")
    console.log(response.data);
  };
  const getPrivate = async() => {
    const response = await axios.get("http://localhost:3000/api/private");
    console.log(response.data);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={getPublic}>
        Public
      </button>
      <button className="btn btn-secondary" onClick={getPrivate}>
        Private
      </button>
    </>
  );
};

export default Buttons;

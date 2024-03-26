import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div style={{ width: "25px", height: "25px" }}>
      <ClipLoader color="#fff" size={25} />
    </div>
  );
}

export default Spinner;

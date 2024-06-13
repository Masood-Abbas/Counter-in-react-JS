import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function AllButton({addValue,deleteValue,resetValue}) {
  return (
    <>
      <div className="button">
        <Button className="btn" onClick={addValue}>
          <AddIcon />
        </Button>
        <Button className="btn" onClick={deleteValue}>
          <RemoveIcon />
        </Button>
        <Button className=" btn btn2" onClick={resetValue}>
          Reset
        </Button>
      </div>
    </>
  );
}
export default AllButton;

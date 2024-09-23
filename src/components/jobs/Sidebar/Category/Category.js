import Input from "../../filter/Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Job Types</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="intern"
          title="intern"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="full-time"
          title="full-time"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="remote"
          title="remote"
          name="test"
        />
        {/* <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        /> */}
      </div>
    </div>
  );
}

export default Category;

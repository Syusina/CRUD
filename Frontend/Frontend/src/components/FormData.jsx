import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/FormData.css";


function FormData() {
  const [result, setResult] = useState();
  const [dataToInsert, setDataToInsert] = useState({
    ProductName: "",
    SupplierID: "",
    CategoryID: "",
    Unit: "",
    Price: ""
  });
  const [redirected, setRedirected] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className='form_input'>
      <form onSubmit={handleSubmit}>
        <input
          className="form_input"
          type="text"
          value={dataToInsert.ProductName}
          name="ProductName"
          onChange={handleChange}
          placeholder="Product Name"
          required
          autoComplete="none"
        />
        <input
          className="form_input"
          type="number"
          value={dataToInsert.SupplierID}
          name="SupplierID" onChange={handleChange}
          placeholder="Supplier ID"
          required
          autoComplete="none"
        />
        <input
          className="form_input"
          type="number"
          value={dataToInsert.CategoryID}
          name="CategoryID"
          onChange={handleChange}
          placeholder="Category ID"
          required
          autoComplete="none"
        />
        <input
          className="form_input"
          type="text"
          value={dataToInsert.Unit}
          name="Unit"
          onChange={handleChange}
          placeholder="Unit"
          required
          autoComplete="none"
        />
        <input
          className="form_input"
          type="number"
          value={dataToInsert.Price}
          name="Price"
          onChange={handleChange}
          placeholder="Price"
          required
          autoComplete="none"
        />
        <button className='form_button'>Save</button>
      </form>
    </div>
  )
}

export default FormData;

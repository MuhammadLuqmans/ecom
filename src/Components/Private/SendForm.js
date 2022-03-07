import React , { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { SendData } from "../../services/Api";

const initialValue = {
  title: "",
  price: "",
  image: "",
};

const myStyles = makeStyles((theme)=>({
    product_Inputs:{
        padding:"10px",
        width:"40%",
        background:"#f6f6f6",
        margin:"auto"
    }
}))

function SendForm() {
    const classes = myStyles()
  const [productData, setProductData] = useState(initialValue);

  const handleChanges = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = ()=>{
    // console.log(productData);
    SendData(productData)
  }

  return (
    <div className={classes}>
    <h2 style={{marginTop:"150px"}}>Add Products</h2>
      <form>
        <input
          type="text"
          name="title"
          id="filled-basic"
          className={classes.product_Inputs}
          label="Product Title"
          variant="filled"
          onChange={(e)=>handleChanges(e)}
        /><br />
        <input
          type="number"
          name="price"
          id="filled-basic"
          label="Price"
          variant="filled"
          className={classes.product_Inputs}
          onChange={(e)=>handleChanges(e)}
        />
        <br />
        <input
          type="text"
          name="color"
          id="filled-basic"
          label="Image Url"
          variant="filled"
          className={classes.product_Inputs}
          onChange={(e)=>handleChanges(e)}
        />
        <br />
        <input
          type="file"
          name="file"
          id="filled-basic"
          label="Product Title"
          variant="filled"
          className={classes.product_Inputs}

          onChange={(e)=>handleChanges(e)}
        />
        <br />
        <input
          type="file"
          name="file"
          id="filled-basic"
          label="Product Title"
          variant="filled"
          className={classes.product_Inputs}

          onChange={(e)=>handleChanges(e)}
        />
        <br />
        <input
          type="file"
          name="file"
          id="filled-basic"
          label="Product Title"
          variant="filled"
          className={classes.product_Inputs}

          onChange={(e)=>handleChanges(e)}
        />
        <br />
        <Button variant="contained" type="button" onClick={handleSubmit} color="primary">
          Add Product
        </Button>
      </form>
    </div>
  );
}

export default SendForm;

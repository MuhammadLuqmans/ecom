import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { EditeDocs,SendData } from "../../services/Api";
import axios from "axios";
import { useParams } from "react-router-dom";


const initialValue = {
  title: "",
  price: "",
  colors: '',
  category: '',
  dispcription: '',
  sku: '',
};

const myStyles = makeStyles((theme) => ({
  product_Inputs: {
    padding: "10px",
    width: "80%",
    background: "#f6f6f6",
    margin: "auto"
  },
  Form_wrapper: {
    margin: 'auto',
    border: '2px solid gray',
    justifyContent: 'center'
  }
}))

function SendForm({ match }) {
  const classes = myStyles()
  const [productData, setProductData] = useState(initialValue);

  const params = useParams()

  useEffect(() => {
    const EditeProducts = async () => {
        let data = await EditeDocs(params.id);
        setProductData(data)
    }
    EditeProducts()
}, [])

// console.log(productData)

  const handleChanges = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    SendData(productData)
    console.log(productData)
  }

  return (
    <div >
      <Grid item container xs={12}>
        <Grid item xs={12} sm={12} md={8} lg={6} className={classes.Form_wrapper}>
          <h2 style={{ marginTop: "150px" }}>Add Products</h2>
          <form>
            <label>Product Title *</label><br />
            <input
              type="text"
              value={productData.title}
              name="title"
              id="filled-basic"
              className={classes.product_Inputs}
              label="Product Title"
              variant="filled"
              onChange={(e) => handleChanges(e)}
            /><br />
            <label>Product Price *</label><br />
            <input
              type="number"
              value={productData.price}
              name="price"
              id="filled-basic"
              label="Price"
              variant="filled"
              className={classes.product_Inputs}
              onChange={(e) => handleChanges(e)}
            />
            <br />
            <label>Product Colors *</label><br />
            <input
              type="text"
              value={productData.colors}
              name="colors"
              id="filled-basic"
              label="Image Url"
              variant="filled"
              className={classes.product_Inputs}
              onChange={(e) => handleChanges(e)}
            />
            <br />
            <label>Product Category *</label><br />
            <input
              type="text"
              name="category"
              value={productData.category}

              id="filled-basic"
              label="Product Title"
              variant="filled"
              className={classes.product_Inputs}

              onChange={(e) => handleChanges(e)}
            />
            <br />
            <label>Product Discreption *</label><br />
            <input
              type="text"
              value={productData.dispcription}
              name="dispcription"
              id="filled-basic"
              label="Product Title"
              variant="filled"
              className={classes.product_Inputs}

              onChange={(e) => handleChanges(e)}
            />
            <br />
            <label>Product SKU *</label><br />
            <input
              type="text"
              value={productData.sku}
              name="sku"
              id="filled-basic"
              label="Product Title"
              variant="filled"
              className={classes.product_Inputs}

              onChange={(e) => handleChanges(e)}
            />
            <br />
            <br />
            <Button variant="contained" type="button" onClick={handleSubmit} color="primary">
              Add Product
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default SendForm;

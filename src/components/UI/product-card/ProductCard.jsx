import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../features/shopping-cart/cartSlice";
import Snackbar from '@mui/material/Snackbar';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";




const ProductCard = (props) => {
  const { id, name, image, price } = props.item;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
    setOpen(true);
  };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="warning" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{name}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">{price}</span>
          <button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
        <Snackbar
            open={open}
            autoHideDuration={2000}
            message="Add to cart successfully"
            onClose={handleClose}
            action={action}
        />
    </div>
  );
};

export default ProductCard;

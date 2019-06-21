import React from "react";
import Header from "./Header";
import MainDisplay from "../components/MainDisplay";
import Footer from "../components/Footer";
import PurchaseModal from "./PurcasheModal";
import AddProduct from "./AddProduct";
import UserCatalog from "./UserCatalog";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage
});

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


//wire-up Router in here
function App({ onCheckoutPage }) {
  const classes = useStyles();
  return (
      <Router>
        <div>
          <Header />
          <div className="tabs">
            <Button component={ Link } to="/AddProduct" variant="contained" className={classes.button} className="addproduct">
              + Add Product
            </Button>
            <Link to="/myproducts" className="myproduct">My Products</Link>
          </div>
          {onCheckoutPage && <PurchaseModal />}
          <Route exact path="/" component={MainDisplay} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/myproducts" component={UserCatalog} />
        </div>
      </Router>
  );
}

export default connect(mapStateToProps)(App);

// <MainDisplay />
// <AddProduct />

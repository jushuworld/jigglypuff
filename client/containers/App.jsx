import React from 'react';
import Header from './Header';
import MainDisplay from '../components/MainDisplay'
import Footer from '../components/Footer'
import PurchaseModal from './PurcasheModal';
import AddProduct from './AddProduct';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage,
})

function App({ onCheckoutPage }) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <AddProduct />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
import React from 'react';
import Home from './Home'
import Product from './Product'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountHead from './components/AccountHead';
import AccountBox from './components/AccountBox';
import MyAddress from './components/MyAddress';
import MyAddressBody from './components/MyAddressBody';
import AddAddress from './components/AddAddress';
import { MyProfile } from './components/MyProfile';
import MyProfileHead from './components/MyProfileHead';
import EditAddress from './components/EditAddress';
import Orders from './components/Orders';
import OrdersBody from './components/OrdersBody';
import MyWallet from './components/MyWallet';
import MyWalletHead from './components/MyWalletHead';
import OrderInfo from './components/OrderInfo';
import OrderInfoHead from './components/OrderInfoHead';
import SleeveTshirtHead from './components/SleeveTshirtHead';
import SleeveTshirtBody from './components/SleeveTshirtBody';
import WishList from './components/WishList'
import Cart from './components/Cart'
import Card from './components/Card'
import QueryHead from './components/QueryHead'
import QueryBox from './components/QueryBox'
import OrdersrelatedHead from './components/OrdersrelatedHead';
import RefundsRelated from './components/RefundsRelated';
import WalletRelated from './components/WalletRelated';
import AccountRelated from './components/AccountRelated';
import AnotherRelated from './components/AnotherRelated';
import OrdersrelatedBody from './components/OrdersrelatedBody';
import DeliveryRelatedHead from './components/DeliveryRelatedHead';
import RefundsRelatedBody from './components/RefundsRelatedBody';
import WalletRelatedBody from './components/WalletRelatedBody';
import DeliverRelatedBody from './components/DeliverRelatedBody';
import AccountRelatedBody from './components/AccountRelatedBody';
import PaymentRelatedHead from './components/PaymentRelatedHead';
import AnotherRelatedBody from './components/AnotherRelatedBody';
import PaymentRelatedBody from './components/PaymentRelatedBody';
import ReturnRelatedHead from './components/ReturnRelatedHead';
import ReturnRelatedBody from './components/ReturnRelatedBody';

function App() {

  return (
    <div className="app">
      <div className="sticky-top">
      <Header/>
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/productView" exact component={Product}/>
          <Route path="/accounts" exact component={Account}/>
          <Route path="/accounts/addresses" exact component={addressestotal}></Route>
          <Route path="/accounts/orders" exact component={Orderstotal}></Route>
          <Route path="/accounts/addresses/addaddress" exact component={AddAddressTotal}></Route>
          <Route path="/accounts/addresses/editaddress"
          exact component={EditAddressTotal}></Route> 
          {/* <Route path="/address/editaddress/" component={AddressDetails}></Route> */}
          <Route path="/accounts/myprofile" exact component={MyProfileTotal}></Route>
          <Route path="/accounts/mywallet" exact component={Wallettotal}></Route>
          <Route path="/accounts/orders/ordersinfo" exact component={OrderInfototal}></Route>
          <Route path="/accounts/tshirtsleeve" exact component= {sleevetshirttotal}></Route>
          <Route path="/cart" exact component= {Cart}></Route>
          <Route path="/wishlist" exact component= {WishList}/>
          <Route path="/helpandsupport" exact component={Query}/>
          <Route path="/helpandsupport/ordersrelated" exact component={OrdersRelate} />
          <Route path="/helpandsupport/deliveryrelated" exact component={Delivery} />
          <Route path="/helpandsupport/paymentrelated" exact component={Payment} />
          <Route path="/helpandsupport/refundsandreturns" exact component={Refunds} />
          <Route path="/helpandsupport/related" exact component={Related} />
          <Route path="/helpandsupport/wallet" exact component={Wallet} />
          <Route path="/helpandsupport/account" exact component={AccountRelate} />
          <Route path="/helpandsupport/another" exact component={Another} />
          <Route path="/tshirtdesign" exact component={Card} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}
const Account =() =>(

  <div>
  <div>
  <div class="container "   id="scaled">
    <AccountHead></AccountHead>
 
    <AccountBox></AccountBox>
  </div>
  </div>
  </div>
  
);

const addressestotal = () =>(

<div>
  <div>
  <div class="container "  id="scaled">
    <MyAddress></MyAddress>
    <MyAddressBody></MyAddressBody>
  </div>
  </div>
  </div>


);

const AddAddressTotal =() =>(

<div>
  <div>
  <div class="container ">
    <MyAddress></MyAddress>
  
    <AddAddress></AddAddress>
  </div>
  </div>
  </div>

);
const MyProfileTotal =() =>(

<div>
    <div>
    <div class="container ">
      <MyProfileHead></MyProfileHead>
    
      <MyProfile></MyProfile>
    </div>
    </div>
    </div>

);
const EditAddressTotal = () =>(

  <div>
      <div>
      <div class="container "  id="scaled">
        <MyAddress></MyAddress>
        <EditAddress></EditAddress>
      </div>
      </div>
      </div>
  
  
  );
  const Orderstotal = () =>(

    <div id="orderscolor">
        <div>
        <div class="container ">
          <Orders></Orders>
          <OrdersBody></OrdersBody>
        </div>
        </div>
        </div>
    
    
    );
    const Wallettotal = () =>(

      <div>
    <div>
    <div class="container ">
    <MyWalletHead></MyWalletHead>
   <MyWallet></MyWallet>
     
    </div>
    </div>
    </div>
      
      
      );
const OrderInfototal =() =>(

<div id="orderscolor">
    <div class="container" >
      <OrderInfoHead></OrderInfoHead>
    
      <OrderInfo></OrderInfo>
    </div>
</div>

);
const sleevetshirttotal =() =>(

  <div >
      <div class="container-fluid" >
        <SleeveTshirtHead></SleeveTshirtHead>
        <SleeveTshirtBody></SleeveTshirtBody>
      </div>
  </div>
  
  );
  const Query =() => (
  <div class="container">
  <div class="row">
          <QueryHead></QueryHead>
  </div>
  <div class="">
          <QueryBox></QueryBox>
  </div>
</div>  
  );
  const OrdersRelate = () => (
  <div class="container">
  <div class="row">
          <OrdersrelatedHead></OrdersrelatedHead>
  </div>
  <div class="">
          <OrdersrelatedBody></OrdersrelatedBody>
  </div>
</div>  
  )

  const Delivery = () => (    
  <div class="container">
  <div class="row">
          <DeliveryRelatedHead></DeliveryRelatedHead>
  </div>
  <div class="">
          <DeliverRelatedBody></DeliverRelatedBody>
  </div>
</div>  
  )

  const Payment = () => (
  <div class="container">
  <div class="row">
          <PaymentRelatedHead></PaymentRelatedHead>
  </div>
  <div class="">
          <PaymentRelatedBody></PaymentRelatedBody>
  </div>
</div>  
  )
  
  const Refunds = () => (
  <div class="container">
  <div class="row">
          <RefundsRelated ></RefundsRelated>
  </div>
  <div class="">
          <RefundsRelatedBody ></RefundsRelatedBody>
  </div>
</div>  
  )

  const Related = () => (
    
  <div class="container">
  <div class="row">
          <ReturnRelatedHead>
          </ReturnRelatedHead>
  </div>
  <div class="">
          <ReturnRelatedBody>
          </ReturnRelatedBody>
  </div>
</div>  
  )
  
  const Wallet = () => (
  <div class="container">
  <div class="row">
        <WalletRelated ></WalletRelated>
  </div>
  <div class="">
        <WalletRelatedBody ></WalletRelatedBody>
  </div>
</div>  
  )
  
  const AccountRelate = () => (
    <div class="container">
      <div class="row">
        <AccountRelated ></AccountRelated>
      </div>
      <div class="">
        <AccountRelatedBody></AccountRelatedBody>
      </div>
    </div>  
  )
  
  const Another = () => (
    <div class="container">
      <div class="row">
        <AnotherRelated></AnotherRelated>
      </div>
      <div class="">
        <AnotherRelatedBody ></AnotherRelatedBody>
      </div>
    </div>  
  )

export default App;

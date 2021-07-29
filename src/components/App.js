import { Route, Switch } from 'react-router-dom';
import CartHistory from './CartHistory';
import Checkout from './Checkout';
import NavBar from './NavBar';
import Items from './Items';
import {useState} from 'react';
import '../index.css'


function App() {

  const [currentCart, setCurrentCart] = useState([])


  const addOrRemoveItemToCart = (item) => {

    if (currentCart.includes(item)) {
      let itemIndex = currentCart.indexOf(item)
      let newCart = [...currentCart]
      newCart.splice(itemIndex, 1)
      setCurrentCart(newCart)
    } else{
      setCurrentCart([...currentCart, item])
    }
  }


  let totalCartCost = 0
  currentCart.forEach((item) => {
    totalCartCost = totalCartCost + item.price
  })

  const handleCartSubmit = () => {
    setCurrentCart([])
  }

  return (
    <div className="App">
      <NavBar />

      <p>Current Cart Cost:</p>{totalCartCost}

      <Switch>
        <Route exact path='/checkout'>
          <Checkout handleCartSubmit={handleCartSubmit} currentCart={currentCart} totalPrice={totalCartCost}/>
        </Route>
        <Route exact path='/history'>
          <CartHistory />
        </Route>
        <Route exact path='/'>
          <Items currentCart={currentCart} handleButtonClick={addOrRemoveItemToCart}/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;

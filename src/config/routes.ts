import Home from '../pages/Home'
import Cart from '../pages/Cart'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Account from '../pages/Account'
import EditAccount from '../pages/EditAccount'
import Bike from '../pages/Bike'
import CheckOut from '../pages/CheckOut'
import Orders from '../pages/Orders'
import Category from '../pages/Category'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/categories/:category",
      component: Category,
      name: "Category",
    },
    {
      path: "/orders",
      component: Orders,
      name: "Orders",
    },
    {
      path: "/checkout",
      component: CheckOut,
      name: "CheckOut",
    },
    {
      path: "/bike/:model",
      component: Bike,
      name: "Bike",
    },
    {
      path: "/editaccount",
      component: EditAccount,
      name: "EditAccount",
    },
    {
      path: "/account",
      component: Account,
      name: "Account",
    },
    {
      path: "/signin",
      component: SignIn,
      name: "SignIn",
    },
    {
      path: "/signup",
      component: SignUp,
      name: "SignUp",
    },
    {
      path: "/cart",
      component: Cart,
      name: "Cart",
    },
];

export default routes
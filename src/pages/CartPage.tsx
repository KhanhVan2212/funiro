import { Link } from "react-router-dom";
import BannerWebsite from "../compoment/Website/BannerWebsite";
import RoleWebsite from "../compoment/Website/RoleWebsite";
import useCart from "../hooks/useCart/useCart";
import remove from "../img/removve.png";
import "../style/cart.scss";
const CartPage = () => {
  const {
    data,
    mutate,
    calculateTotal,
  } = useCart();

  

  return (
    <>
      <BannerWebsite />
      <section className="cart">
        <div className="container">
          <div className="cart_inner">
            <div className="cart_info">
              <table className="cart_table">
                <thead>
                  <tr className="cart_bg_nav">
                    <th className="theade_name">Product</th>
                    <th className="thead_price">Price</th>
                    <th className="thead_quantity">Quantity</th>
                    <th className="theade_subtotal">Subtotal</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {data?.products.map((product: any, index: number) => {
                    console.log(data);
                    
                    return (
                      <tr className="cart_body" key={index}>
                        <td className="tbody_name">
                          <img src={product.image} width={100} height={100} />
                          <span>{product.name}</span>
                        </td>
                        <td className="tbody_price">
                          <span>{product?.price - product?.price * (product.discount / 100)}$</span>
                        </td>
                        <td className="tbody_quantity">
                          <span className="quantity_table">
                          <button
                                       className="hihihihi pb-5 "
                                        onClick={() =>
                                            mutate({
                                                action: "DECREMENT",
                                                productId: product.productId, 
                                            })
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5 pr-2"
                                        >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                        </svg>
                                    </button>
                                    {product.quantity}  
                                    <button
                                        className="hihihihi  pb-5" 
                                        onClick={() =>
                                            mutate({
                                                action: "INCREMENT",
                                                productId: product.productId,
                                            })
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5 pr-2"
                                        >
                                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />   
                                        </svg>
                                    </button>
                       
                          </span>
                        </td>
                        <td className="tbody_subtotal">
                          {(product?.price - product?.price * (product.discount / 100)) * product.quantity}$
                        </td> 
                        <td
                          className="tbody_action"
                          onClick={() =>
                            mutate({
                              action: "REMOVE",
                              productId: product.productId,
                            })
                          }
                        >
                          {" "}
                          <img src={remove} />
                        </td>
                       
                      </tr>

                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="cart_action">
              <div className="cart_action_inner">
                <h4>Cart Totals</h4>
                <div className="cart_action_subtotal">
                  <span>Subtotal</span>
                  <span className="price">${calculateTotal()}</span>
                </div>
                <div className="cart_action_total">
                  <span>Total</span>
                  <span className="price">${calculateTotal()}</span>
                </div>
                <div className="cart_action_btn">
                  <Link to="/checkout">
                    <a>Check Out</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoleWebsite />
    </>
  );
};

export default CartPage;

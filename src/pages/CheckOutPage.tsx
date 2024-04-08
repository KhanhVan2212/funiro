import { useForm } from 'react-hook-form';
import BannerWebsite from '../compoment/Website/BannerWebsite'
import RoleWebsite from '../compoment/Website/RoleWebsite'
import useCart from '../hooks/useCart/useCart';
import { useLocalStorage } from '../hooks/useStorage';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ICheckout } from '../interface/checkuot';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
  const {register , handleSubmit} = useForm<ICheckout>();
  const navigate = useNavigate();
  const [user] = useLocalStorage("user",{});
  const userId = user?.user?._id;
  const {
    data,
    calculateTotal,
    isLoading,
    isError,
  } = useCart();
  const {mutate} = useMutation({
    mutationFn: async(order:{userId : string , items: [], totalPrice : number , customerInfo :{}}) =>{
      const {data} = await axios.post("http://localhost:8080/orders" , order) ;
      return data
    },
    onSuccess: () => {
      
      alert("Đặt hàng thành công");
      navigate("/");
    },
  })
  const onSubmit = (formData : object) =>{
    console.log(formData);
    
      mutate({
        userId,
        items: data?.products,
        totalPrice: calculateTotal(),
        customerInfo: formData,
      });
    
  }
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <>
    <BannerWebsite />
    <section className="checkout">
     
  <div className="container">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="checkout_inner">
      <div className="checkout_inner_detail">
        <h3>Billing Details</h3>
        <div className="checkout_inner_detail_company">
          <div className="inputType">
            <label >Name</label>
            <input type="text" {...register("customerName")}/>
          </div>
        </div>
        <div className="checkout_inner_detail_phone">
          <div className="inputType">
            <label >Phone</label>
            <input type="text"  {...register("customerPhone")} />
          </div>
        </div>
        <div className="checkout_inner_detail_email">
          <div className="inputType">
            <label >Email address</label>
            <input type="email"  {...register("customerEmail")} />
          </div>
        </div>
      
        {/* <div className="checkout_inner_detail_moreinfo">
          <div className="inputType">
            <input type="text" placeholder="Additional information" />
          </div>
        </div> */}
      </div>
      <div className="checkout_inner_order">
        <div className="checkout_inner_order__title">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        {data?.products.map((product: any, index: number) => {
                    return (
        <div className="checkout_inner_order__product" key={index}>
          <span className="title_product">{product.name} <b>x {product.quantity}</b></span>
          <span>{product.price * product.quantity}$</span>
        </div>
         );
        })}
        <div className="checkout_inner_order__product">
          <span>Subtotal</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="checkout_inner_order__product">
          <span>Product</span>
          <span>{data?.products ? data?.products.length : 0}</span>
        </div>
        <div className="checkout_inner_order__total">
          <span>Total</span>
          <span className="total_price">${calculateTotal()}</span>
        </div>
        <div className="checkout_inner_order__handle" />
        {/* <div className="checkout_inner_order__input">
          <div className="input_type">
            <input type="radio" defaultChecked />
            <span>Direct Bank Transfer</span>
          </div>
          <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not
            be shipped until the funds have cleared in our account. </p>
        </div>
        <div className="checkout_inner_order_direct">
          <div className="input_type">
            <input type="radio" />
            <span>Direct Bank Transfer</span>
          </div>
        </div>
        <div className="checkout_inner_order_direct">
          <div className="input_type">
            <input type="radio" />
            <span>Cash On Delivery</span>
          </div>
        </div>
        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account,
          and for other purposes described in our <b>privacy policy.</b></p> */}
        <div className="checkout_inner_order__action">
          <button>Place Order</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</section>

    <RoleWebsite />
    </>
  )
}

export default CheckOutPage

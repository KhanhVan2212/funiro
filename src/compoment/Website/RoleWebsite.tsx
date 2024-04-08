import trophy from "../../img/trophy.png"
import guarantee from "../../img/guarantee.png"
import shipping from "../../img/shipping.png"
import customer from "../../img/customer.png"
const RoleWebsite = () => {
  return (
    <section className="role">
    <div className="role_inner">
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src={trophy}  />
        </div>
        <div className="ole_inner__box__text">
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src={guarantee} />
        </div>
        <div className="ole_inner__box__text">
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src={shipping}  />
        </div>
        <div className="ole_inner__box__text">
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src={customer}  />
        </div>
        <div className="ole_inner__box__text">
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RoleWebsite

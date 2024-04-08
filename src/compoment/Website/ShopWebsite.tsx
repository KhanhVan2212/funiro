import shop1 from "../../img/shop1.png"
import shop2 from "../../img/shop2.png"
import shop3 from "../../img/shop3.png"
import shop4 from "../../img/shop4.png"
const ShopWebsite = () => {
  return (
    <section className="shop">
    <div className="container">
      <div className="handing">
        <h1 className="handing__title">Shop</h1>
      </div>
      <div className="shop-body">
        <div className="shop-product">
          <img src={shop1}  />
          <img src={shop2}  />
          <img src={shop3}  />
          <img src={shop4}  />
        </div>
      </div>
    </div>
  </section>
  )
}

export default ShopWebsite

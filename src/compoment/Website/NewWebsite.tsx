import { Link } from "react-router-dom"
import useProductQuery from "../../hooks/useProduct/useProductQuery"
import heartCard from "../../img/Heartcard.png"
import compare from "../../img/compare.png"
import share from "../../img/share.png"
import { IProduct } from "../../interface/product"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocalStorage } from "../../hooks/useStorage"
import axios from "axios"


const NewWebsite = () => {
  const {data:products , isLoading , isError} = useProductQuery();
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { mutate } = useMutation({
      mutationFn: async ({ productId, quantity ,image, discount }: { productId: any; quantity: number ,image:string ,discount:number}) => {
          const { data } = await axios.post(`http://localhost:8080/carts/add-to-cart`, {
              userId,
              productId,
              quantity,
              image,
              discount,
          });
          alert("Add to cart successfully");
          console.log(data);
          
          return data;
      },
      onSuccess: () => {
          queryClient.invalidateQueries({
              queryKey: ["cart", userId],
          });
      },
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;
  return (
    <section className="news">
    <div className="container">
      <div className="handing">
        <h1 className="handing__title">News</h1>
      </div>
      <div className="body">
        <div className="product-list">
          {products.data?.map((product:IProduct  ,index:number)=>{     
            console.log(products);
            
            return(
             
              <div className="product-item" key={index}>
            <div className="product-media">
              <img src={product?.image} className="product-media__img"  width={280} height={300} />
              <span className="product-media__label">-{product?.discount}%</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a >{product?.name}</a>
              </h3>
              <a className="product__category" >{product.description}</a>
              <div className="product-price">
                <span className="product-price__new">{product?.price - product?.price * (product.discount / 100)}$</span>
                <span className="product-price__old">{product?.price}$</span>
              </div>
            </div>
            <div className="product-actions">
             <Link  to="/cart">
             <a><button className="product-actions__addtocart"  onClick={() => mutate({ productId: product._id, quantity: 1 , image:product.image , discount:product.discount })}>
                  Add To Cart
                </button></a>
             </Link>
             <Link to={`detail/${product._id}`}>
             <a><button className="product-actions__addtocart">
             View Detail
                </button></a>
             </Link>
              <ul className="product-actions__more">
                <li>
                  <a ><img src={share}  />Share</a>
                </li>
                <li>
                  <a ><img src={compare}  />Compare</a>
                </li>
                <li>
                  <a ><img src={heartCard}/>Like</a>
                </li>
              </ul>
            </div>
          </div>
              
            )
          })}
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewWebsite

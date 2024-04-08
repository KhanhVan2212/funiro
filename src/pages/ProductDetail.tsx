import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import useProductQuery from '../hooks/useProduct/useProductQuery'
import { useLocalStorage } from '../hooks/useStorage'
import akaricon from "../img/akaricon.png"
import arrownav from "../img/arrownav.png"
import desimg1 from "../img/desimg1.png"
import desimg2 from "../img/desimg2.png"
import fbicon from "../img/fbicon.png"
import slide1 from "../img/slide1.png"
import slide2 from "../img/slide2.png"
import slide3 from "../img/slide3.png"
import slide4 from "../img/slide4.png"
import star from "../img/star.png"
import star_half from "../img/star_half.png"
import twicon from "../img/twicon.png"
import '../style/detail.scss'

const ProductDetail = () => {
  const {id} = useParams();
  const {data:product , isLoading , isError} = useProductQuery(id);
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { mutate } = useMutation({
      mutationFn: async ({ productId, quantity ,image }: { productId: any; quantity: number ,image:string }) => {
          const { data } = await axios.post(`http://localhost:8080/carts/add-to-cart`, {
              userId,
              productId,
              quantity,
              image,
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
    <div id="root">
    <div>
  <section className="action-bar">
    <div className="container">
      <div className="action-bar_inner">
        <div className="action-bar_inner_left">
          <div className="action-bar_inner_left_filter">
            <a ><span>Home</span></a>
            <div>
              <a ><img src={arrownav}  /></a>
            </div>
          </div>
          <div className="action-bar_inner_left_filter">
            <a ><span>Shop</span></a>
            <div>
              <a ><img src={arrownav}   /></a>
            </div>
          </div>
          <div className="action-bar_inner_left_showing">
            <span>{product?.name}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="detail">
    <div className="container">
      <div className="detail_inner">
        <div className="detail_media">
          <div className="detail_media_slide">
            <div>
              <img src={slide1}  />
            </div>
            <div>
              <img src={slide2} />
            </div>
            <div>
              <img src={slide3}  />
            </div>
            <div>
              <img src={slide4}  />
            </div>
          </div>
          <div className="detail_media_thumbnail">
            <div className="detail_media_thumbnail__bg">
              <img src={product?.image} width={440} height={500} />
            </div>
          </div>
        </div>
        <div className="detail_content">
          <div className="detail_content">
            <h2>{product?.name}</h2>
            <span>{product?.price}</span>
            <div className="detail_content__star">
              <div className="star_fill">
                <img src={star}  />
                <img src={star}  />
                <img src={star}  />
                <img src={star}  />
                <img src={star_half}  />
              </div>
              <div className="detail_content__star__view">
                <span>5 Customer Review</span>
              </div>
            </div>
            <p>
            {product?.description}
            </p>
            <div className="detail_content__size">
              <span>Size</span>
              <div className="detail_content__size__btn">
                <button>L</button>
                <button>XL</button>
                <button>XS</button>
              </div>
            </div>
            <div className="detail_content__color">
              <span>Color</span>
              <div className="detail_content__color__btn">
                <button className="violet" />
                <button className="black" />
                <button className="brown" />
              </div>
            </div>
            <div className="detail_content_action">
              <div className="detail_content_action__number">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="detail_content_action__addcart">
              <Link to="/cart">
              <a ><button  onClick={() => mutate({ productId: product._id, quantity: 1 , image:product.image  })}>  
                            Add To Cart</button></a>
              </Link>
                <button>+ Compare</button>
              </div>
            </div>
            <div className="handle" />
            <div className="detail_content_more">
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>SKU</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span>SS001</span>
              </div>
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>Category</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span>Sofas</span>
              </div>
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>Tags</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>Share</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span className="detail_content_more__share">
                  <img src={fbicon}  />
                  <img src={akaricon} />
                  <img src={twicon} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="description">
    <div className="container">
      <div className="description_inner">
        <div className="description_title">
          <h2 className="actived">Description</h2>
          <h2>Additional Information</h2>
          <h2>Reviews [5]</h2>
        </div>
        <div className="description_content">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable
            look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of
            the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
            a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to
            fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish
            travel.</p>
        </div>
        <div className="description_media">
          <img src={desimg1}  />
          <img src={desimg2}  />
        </div>
      </div>
    </div>
  </section>
  <div className="related">
    <div className="container">
      <div className="related_title">
        <span>Related Products</span>
      </div>
      <div className="related_products">
        <div className="product-list">
          <div className="product-item">
            <div className="product-media">
              <img src="https://picsum.photos/id/11/200/300" className="product-media__img" width={280} height={300}   />
              <span className="product-media__label">- 30%</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a >Syltherine</a>
              </h3>
              <a className="product__category" >Stylish cafe chair</a>
              <div className="product-price">
                <span className="product-price__new">2.500.000</span>
                <span className="product-price__old">3.500.000đ</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="product-actions__addtocart">Add To Cart</button>
              <button className="product-actions__addtocart">View Detail</button>
              <ul className="product-actions__more">
                <li><a ><img src="./img/share.png"  />Share</a></li>
                <li><a ><img src="./img/compare.png"  />Compare</a></li>
                <li><a ><img src="./img/Heartcard.png"  />Like</a></li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
      <div className="related_action">
        <button>Show More</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default ProductDetail

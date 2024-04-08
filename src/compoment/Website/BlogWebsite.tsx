import blog1 from "../../img/blog1.png"
import blog2 from "../../img/blog2.png"
import blog3 from "../../img/blog3.png"
import arrow from "../../img/arrow.png"
const BlogWebsite = () => {
  return (
    <section className="blog">
    <div className="container">
      <div className="handing">
        <h1 className="handing__title">Blog</h1>
      </div>
      <div className="blog_inner">
        <div className="blog_box">
          <img src={blog1} />
          <div className="blog_box__text">
            <div className="blog_box__text__desc">
              <h3>THE ULTIMATE SOFA BUYING GUIDE</h3>
              <p>
                The versatility of our living space is more crucial than
                ever. But buying a sofa might be a difficult undertaking.
                Your needs and the size of your living area will determine
                everything, However, don’t worry, were are here to help you
              </p>
            </div>
            <div className="blog_box__action">
              <a ><span>ABOUT</span><img src={arrow} /></a>
            </div>
          </div>
        </div>
        <div className="blog_box">
          <img src={blog2} />
          <div className="blog_box__text">
            <div className="blog_box__text__desc">
              <h3>A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
              <p>
                Your level of comfort when geting into and out of bed can be
                greatly influenced by the bed frame you choose. It may
                significantly affect how want your bedroom to feet and look
              </p>
            </div>
            <div className="blog_box__action">
              <a ><span>ABOUT</span><img  src={arrow}  /></a>
            </div>
          </div>
        </div>
        <div className="blog_box">
          <img src={blog3}  />
          <div className="blog_box__text">
            <div className="blog_box__text__desc">
              <h3>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</h3>
              <p>
                People do a lot of research to make sure they purchase the
                ideal televisoin. And like the rest of us, you want to keep
                that gorgeous flat srceen in your living or bedroom on a
                table or stand
              </p>
            </div>
            <div className="blog_box__action">
              <a ><span>ABOUT</span><img  src={arrow}   /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogWebsite

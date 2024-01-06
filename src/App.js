import React, { useState } from 'react';
import './App.css';
import { ImageWithName, ProductsImg, KarupattiImg, ImgProducts, Images } from './Page/Components/Components';
import IC_BAGE from './Icons/ic_bag.svg'
import profile from './Icons/profile.svg'
import search from './Icons/search.svg'
import upload from './Icons/upload.svg'
import facebook from './Icons/facebook.svg'
import instagram from './Icons/instagram.svg'
import whatsapp from './Icons/whatsapp.svg'

function App() {
  const [selectedSize, setSelectedSize] = useState('250g');

  const handleSizeButtonClick = (size) => {
    setSelectedSize(size);
  };

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="offer">
        <h5>Delivering Across India | Free Delivery across Tamilnadu | COD Available
          Onlykarupatti.com
        </h5>
      </div>

      <div className='header'>
        <div className='head-text'>
          <img src='https://onlykarupatti.com/cdn/shop/files/Onlykarupatti_Icon_Square_2048_x_512_px.png?v=1688227095&width=1100' width='200px' alt='' />
          <p>Home</p>
          <p>our Products</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>

        <div className='flex'>
          <img src={search}
            style={{ marginRight: '15px', cursor: 'pointer' }} width='22px' alt='' />

          <img src={profile}
            style={{ marginRight: '15px', cursor: 'pointer' }} width='22px' alt='' />

          <img src={IC_BAGE}
            style={{ cursor: 'pointer' }} width='22px' alt='' />
        </div>
      </div>

      <img src='https://onlykarupatti.com/cdn/shop/files/Sharing_World_s_Best_Karupatti_1920_x_960_px_2.png?v=1687101501&width=3840'
        width='100%' alt='' />

      <div className='flex-column' style={{ padding: '70px' }}>
        <div className='flex' style={{ justifyContent: 'space-between' }}>
          <ImageWithName name="Vegan & Natural Products" img="https://onlykarupatti.com/cdn/shop/files/12.png?v=1688501294&width=3200" />
          <ImageWithName name="From Local Farmers" img="https://onlykarupatti.com/cdn/shop/files/10.png?v=1688501294&width=3200" />
          <ImageWithName name="24/7 Customer Support" img="https://onlykarupatti.com/cdn/shop/files/11.png?v=1688501294&width=3200" />
          <ImageWithName name="Fast Delivery across India" img="https://onlykarupatti.com/cdn/shop/files/9.png?v=1688501294&width=3200" />
        </div>

        <div>
          <h1>Newly Launched</h1>
          <p>"Discover the Power of Tradition with Our Exquisite Karupatti Powders!"</p>
        </div>

        <div className='flex' style={{ justifyContent: 'space-evenly' }}>
          <ProductsImg img="https://onlykarupatti.com/cdn/shop/files/AJ705499_1.webp?v=1699355395&width=1946"
            name="Palm Karupatti Powder" price="RS.130.00" cprice="RS.150.00" discount="From" />
        </div>

        <div className='flex' style={{ marginTop: '20px' }}>
          <div className='flex-column' style={{ padding: '50px' }}>
            <img src='https://onlykarupatti.com/cdn/shop/files/About_us_Banner_a5c8bca4-ffbd-4b14-9066-0701258cce53.webp?v=1688491355&width=750'
              alt='' style={{ width: '750px' }} />
          </div>

          <div className='flex-column' style={{ padding: '70px' }}>
            <h1>About Us</h1>
            <p style={{ flexWrap: 'wrap', fontSize: '19px', margin: '0px', lineHeight: '28px' }}>"Welcome to OnlyKarupatti, We're on a mission to create a sugar-free society by offering a delicious, healthier alternative to refined sugar. Join us in our commitment to a healthier lifestyle and explore the goodness of natural palm jaggery today."</p>
            <button style={{ marginTop: '20px', width: '140px', height: '50px', borderRadius: '15px', border: '1px solid', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}>More</button>
          </div>
        </div>

        <div className='flex' style={{ columnGap: '80px' }}>
          <div className='flex-column'>
            <img src='https://onlykarupatti.com/cdn/shop/files/Karupatti.webp?v=1688581720&width=713' alt='' style={{ width: '600px' }} />
          </div>

          <div className='flex-column' style={{ marginTop: '50px', marginLeft: '40px' }}>
            <div>
              <div>ONLYKARUPATTI.COM</div>
              <div style={{ fontSize: '35px' }}>Karupatti</div>
              <div style={{ fontSize: '20px', marginTop: '15px' }}>Rs. 155.00</div>
              <div style={{ marginTop: '10px' }}>Tax included. Shipping calculated at checkout.</div>
              <div style={{ marginTop: '15px' }}>size</div>

              <div className='flex' style={{ marginTop: '15px' }}>
                <button
                  style={{
                    width: '80px', border: '1px solid', height: '40px', cursor: 'pointer', borderRadius: '20px',
                    backgroundColor: selectedSize === '250g' ? 'black' : '#fff', color: selectedSize === '250g' ? '#fff' : '#000',
                  }}
                  onClick={() => handleSizeButtonClick('250g')}
                >
                  250g
                </button>
                <button
                  style={{
                    width: '80px', border: '1px solid', height: '40px', cursor: 'pointer', borderRadius: '20px',
                    backgroundColor: selectedSize === '500g' ? 'black' : '#fff', color: selectedSize === '500g' ? '#fff' : '#000', marginLeft: '10px',
                  }}
                  onClick={() => handleSizeButtonClick('500g')}
                >
                  500g
                </button>
              </div>

              <div className="product-form__input product-form__quantity" style={{ marginTop: '20px', marginLeft: '10px' }}>
                <label className="quantity__label form__label" htmlFor="quantityInput">
                  Quantity
                </label>
                <div className="quantity-input" style={{ marginTop: '20px' }}>
                  <button
                    className="quantity__button"
                    name="minus"
                    type="button"
                    onClick={handleDecrement}
                    style={{ border: 'none', cursor: 'pointer' }}

                  >
                    -
                  </button>
                  <input
                    className="quantity__input"
                    type="number"
                    name="quantity"
                    id="quantityInput"
                    value={quantity}
                    min="1"
                    step="1"
                    readOnly
                    style={{ border: 'none', textAlign: 'center', width: '10%', cursor: 'pointer', marginLeft: '20px' }}

                  />
                  <button
                    className="quantity__button"
                    name="plus"
                    type="button"
                    onClick={handleIncrement}
                    style={{ border: 'none', cursor: 'pointer', marginLeft: '15px' }}
                  >
                    +
                  </button>
                </div>
                <div className="quantity__rules caption"></div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button style={{ width: '300px', height: '45px', borderRadius: '15px', border: '1px solid' }}>Add to cart</button>
                <button style={{ width: '300px', height: '45px', borderRadius: '15px', border: '1px solid', backgroundColor: '#a35f06', color: 'white', marginTop: '10px' }}>Add to cart</button>
              </div>

              <div className='flex' style={{ marginTop: '15px', columnGap: '10px', marginLeft: '5px' }}>
                <img src={upload} alt='' style={{ width: '20px' }} />
                <h5>share</h5>
              </div>

              <div class="rating" style={{ display: 'flex', marginRight: '120px', marginTop: '3px' }}>
                <input type="radio" id="star5" name="rating" value="5" />
                <label for="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1"></label>
              </div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}>view full details</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '50px' }}>
          <h1>Karupatti Sweets</h1>
          <p>"Indulge in the Rich Tradition of Our Karupatti Sweets!"</p>
        </div>

        <div className='flex' style={{ justifyContent: 'space-evenly' }}>
          <KarupattiImg img="https://onlykarupatti.com/cdn/shop/files/2_1.webp?v=1699624778&width=360"
            name="Karupatti Halwaa" price="RS.199.00" cprice="RS.245.00" />
        </div>

        <div style={{ marginTop: '30px' }}>
          <h1>Karupatti's</h1>
          <p>Choose from the Various collections of Karupatti.</p>
        </div>

        <div className='flex' style={{ justifyContent: 'space-evenly' }}>
          <ImgProducts img="https://onlykarupatti.com/cdn/shop/files/PuttuKarupatti.webp?v=1688582326&width=823"
            name="Puttu Karupatti" price="RS.199.00" discount="From" />
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Onlykarupatti since 2018</h1>
          <div>Sharing Authentic Palm-Products from Tiruchendur.
            <div style={{ marginTop: '20px', lineHeight: '25px' }}>Onlykarupatti offers Wide Variety of Palm Products made through the Traditional Methods - Directly from the Palm<br /> Farms of Tiruchendur</div>
            <div style={{ marginTop: '20px', lineHeight: '25px' }}>We take pride in delivering a product that is free from any additives, preservatives, or chemicals. We<br /> are on a Mission to create a Sugar-free Society</div>
          </div>
        </div>

        <div className='flex' style={{ justifyContent: 'space-evenly', flexWrap: 'wrap', height: 'fit-content', marginTop: '70PX' }}>
          <Images img="https://onlykarupatti.com/cdn/shop/files/4.webp?v=1692204677&width=300" />
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>What We Do:</h1>
          <div style={{ lineHeight: '25px' }}>
            We are a Group of Families Authentically Manufacturing Palm Products Along with the other Local<br /> Farmers.
          </div>

          <div style={{ lineHeight: '25px', marginTop: '15px' }}>
            Onlykarupatti.com is on a mission to Create a Sugar free Society, We are creating a Community of<br /> people to achieve our Vision. Join our Sugar-free community to get more quality products & free trial<br /> packs.
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <h1>How We Do:</h1>
          <div style={{ lineHeight: '25px' }}>
            Our Signature Product Karupatti (Palm jaggery) is made by extracting the sap preserving all the<br /> natural goodness and nutritional benefits of the palm tree sap.
          </div>
          <div style={{ lineHeight: '25px', marginTop: '15px' }}>
            Then it will be stored with a Traditional way of making it Dry. Then it will be shared to the Quality<br /> checker (Grandma) & then it will be delivered to you with all the Love from the Palm Farms of<br /> Tiruchendur.
          </div>
          <button style={{ width: '140px', height: '40px', borderRadius: '12px', backgroundColor: 'green', color: 'white', marginTop: '15px' }}>More About Us</button>
        </div>
      </div>
      <hr style={{ color: 'lightgray', border: '1px solid' }}></hr>
      <div className='footer'>
        <div className='flex-column'>
          <img src='https://onlykarupatti.com/cdn/shop/files/Onlykarupatti_Icon_Square_2048_x_512_px.png?v=1688227095&width=1100' width='200px' alt='' />
          <p>Sharing World's Best Palm<br /> Products from the Land of its<br /> Tradition.</p>
          <div className='flex' style={{ columnGap: '10px' }}>
            <img src={facebook} width='22px' alt='' />
            <img src={instagram} width='22px' alt='' />
          </div>
        </div>

        <div className='flex-column'>
          <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Karupatti</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Search</p>
          </div>
        </div>

        <div className='flex-column'>
          <div>
            <h3>Info Links</h3>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Visit Us</p>
          </div>
        </div>
        <h3> A Quality Product from EP<br /> Traders.</h3>
      </div>

      <div>
        <h3 style={{ marginLeft: '80px' }}>Subscribe to our emails</h3>
        <input type="email" id="email" name="email" placeholder='Email' />
      </div>

      <div className='flex' style={{ columnGap: '10px', marginLeft: '90%' }}>
        <img src={facebook} width='22px' alt='' />
        <img src={instagram} width='22px' alt='' />
      </div>
      <hr style={{ color: 'lightgray', border: '1px solid' }}></hr>

      <div className='flex' style={{ justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', cursor: 'pointer', marginTop: '30px', marginLeft: '60px' }}>
        <div className='flex' style={{ columnGap: '30px' }}>
          <p>© 2024, Onlykarupatti.com Powered by Shopify</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Shipping Policy</p>
          <p>Contact Information</p>
        </div>

        <div style={{ marginRight: '25px', cursor: 'pointer' }}>
          <img src={whatsapp} width='50px' alt='' />
        </div>
      </div>
    </>
  );
}

export default App;
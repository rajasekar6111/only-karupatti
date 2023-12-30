import React, { useState } from 'react';
import './App.css';
import { ImageWithName, ProductsImg, KarupattiImg, ImgProducts, Images } from './Page/Components/Components';

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
      <div className="header">
        <h5>Delivering Across India | Free Delivery across Tamilnadu | COD Available
          Onlykarupatti.com
        </h5>
      </div>

      <div className='header-text'>
        <div className='head'>
          <img src='https://onlykarupatti.com/cdn/shop/files/Onlykarupatti_Icon_Square_2048_x_512_px.png?v=1688227095&width=1100' width='20%' alt='' />
          <p>Home</p>
          <p>our Products</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', marginRight: '500px' }}>
        <img src='https://onlykarupatti.com/cdn/shop/files/Sharing_World_s_Best_Karupatti_1920_x_960_px_2.png?v=1687101501&width=3840'
          width='150%' alt='' />
      </div>

      <div className='flex'>
        <ImageWithName name="Vegan & Natural Products" img="https://onlykarupatti.com/cdn/shop/files/12.png?v=1688501294&width=3200" />
        <ImageWithName name="From Local Farmers" img="https://onlykarupatti.com/cdn/shop/files/10.png?v=1688501294&width=3200" />
        <ImageWithName name="24/7 Customer Support" img="https://onlykarupatti.com/cdn/shop/files/11.png?v=1688501294&width=3200" />
        <ImageWithName name="Fast Delivery across India" img="https://onlykarupatti.com/cdn/shop/files/9.png?v=1688501294&width=3200" />
      </div>

      <div className='flex-column' style={{ marginLeft: '5%' }}>
        <h1>Newly Launched</h1>
        <p style={{ margin: '0' }}>"Discover the Power of Tradition with Our Exquisite Karupatti Powders!"</p>
      </div>

      <div className=''>
        <div style={{ justifyContent: 'center', display: 'flex', columnGap: '45x', flexWrap: 'wrap', height: 'fit-content', marginTop: '5%', marginRight: '50px' }}>
          <ProductsImg img="https://onlykarupatti.com/cdn/shop/files/AJ705499_1.webp?v=1699355395&width=1946"
            name="Palm Karupatti Powder" price="RS.130.00" cprice="RS.150.00" discount="From" />
        </div>
      </div>

      <div className='flex'>
        <div className='flex-column' style={{ marginTop: '5%', marginLeft: '50px' }}>
          <img src='https://onlykarupatti.com/cdn/shop/files/About_us_Banner_a5c8bca4-ffbd-4b14-9066-0701258cce53.webp?v=1688491355&width=750'
            alt='' />
        </div>

        <div style={{ marginLeft: '80px', marginTop: '5%' }}>
          <h1 style={{ fontSize: '60px', fontFamily: 'arial' }}>About Us</h1>

          <p style={{ fontSize: '25px', lineHeight: 1.2, color: '#888 ', margin: '0', marginTop: '-25px' }}>"Welcome to OnlyKarupatti,<br />We're on a mission to create<br />a sugar-free society by<br />offering a delicious,<br />healthier alternative to<br />refined sugar. Join us in our<br />commitment to a healthier<br />lifestyle and explore the<br />goodness of natural palm<br />jaggery today."</p>
          <button className='btn'>More</button>
        </div>
      </div>

      <div className='flex'>
        <div className='flex-column' style={{ cursor: 'pointer' }}>
          <img src='https://onlykarupatti.com/cdn/shop/files/Karupatti.webp?v=1688581720&width=713' alt='' />
        </div>

        <div style={{ marginTop: '12%', marginLeft: '1%', fontFamily: 'arial' }}>
          <p>ONLYKARUPATTI.COM</p>
          <h1>Karupatti</h1>
          <p>Rs. 155.00</p>
          <p>Tax included. Shipping calculated at checkout.</p>
          <p>size</p>

          <div className='flex'>
            <button
              style={{
                width: '80px',
                border: '1px solid',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: selectedSize === '250g' ? 'black' : '#fff',
                color: selectedSize === '250g' ? '#fff' : '#000',
              }}
              onClick={() => handleSizeButtonClick('250g')}
            >
              250g
            </button>
            <button
              style={{
                width: '80px',
                border: '1px solid',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: selectedSize === '500g' ? 'black' : '#fff',
                color: selectedSize === '500g' ? '#fff' : '#000',
                marginLeft: '10px',
              }}
              onClick={() => handleSizeButtonClick('500g')}
            >
              500g
            </button>
          </div>

          <div className="product-form__input product-form__quantity" style={{ marginTop: '5%' }}>
            <label className="quantity__label form__label" htmlFor="quantityInput">
              Quantity
            </label>
            <div className="quantity-input" style={{ marginTop: '5%' }}>
              <button
                className="quantity__button"
                name="minus"
                type="button"
                onClick={handleDecrement}
                style={{ border: 'none' }}

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
                style={{ border: 'none', textAlign: 'center', width: '10%' }}

              />
              <button
                className="quantity__button"
                name="plus"
                type="button"
                onClick={handleIncrement}
                style={{ border: 'none' }}
              >
                +
              </button>
            </div>
            <div className="quantity__rules caption"></div>
          </div>

          <div style={{ marginTop: '10%' }}>
            <button style={{ width: '70%', height: '50px', borderRadius: '15px', border: '1px solid' }}>Add to cart</button>
            <button style={{ marginTop: '10px', width: '70%', height: '50px', borderRadius: '13px', backgroundColor: '#b36b0d', border: '1px solid' }}>Buy it now</button>
          </div>

          <div className='flex' style={{ marginTop: '25px' }}>
            <img src='https://static.vecteezy.com/system/resources/previews/011/413/688/original/icon-basic-user-interface-free-vector.jpg'
              width='10%' alt='' />
            <h5>share</h5>
          </div>

          <div class="rating" style={{ marginRight: '70%', marginTop: '3%' }}>
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
            <p style={{ marginRight: '15%' }}>view full details</p>
          </div>
        </div>
      </div>

      <div style={{ marginLeft: '3%', marginTop: '5%' }}>
        <h1>Karupatti Sweets</h1>
        <p>"Indulge in the Rich Tradition of Our Karupatti Sweets!"</p>
      </div>

      <div style={{ display: 'flex', columnGap: '15x', flexWrap: 'wrap', height: 'fit-content', marginTop: '5%', marginRight: '10px' }}>
        <KarupattiImg img="https://onlykarupatti.com/cdn/shop/files/2_1.webp?v=1699624778&width=360"
          name="Karupatti Halwaa" price="RS.199.00" cprice="RS.245.00" />
      </div>

      <div style={{ marginLeft: '3%', marginTop: '5%' }}>
        <h1>Karupatti's</h1>
        <p>Choose from the Various collections of Karupatti.</p>
      </div>

      <div style={{ display: 'flex', columnGap: '35 x', flexWrap: 'wrap', height: 'fit-content', marginTop: '5%', marginRight: '10px' }}>
        <ImgProducts img="https://karupatticoffeefranchise.in/karupatti.png"
          name="Puttu Karupatti" price="RS.199.00" discount="From" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1>Onlykarupatti since 2018</h1>
        <p>Sharing Authentic Palm-Products from Tiruchendur.</p>
        <p>Onlykarupatti offers Wide Variety of Palm Products made through the Traditional Methods - Directly<br /> from the Palm Farms of Tiruchendur
        </p>
        <p>We take pride in delivering a product that is free from any additives, preservatives, or chemicals. We<br /> are on a Mission to create a Sugar-free Society
        </p>
      </div>

      <div className=''>
        <div style={{ justifyContent: 'space-evenly', display: 'flex', columnGap: '45x', flexWrap: 'wrap', height: 'fit-content', marginTop: '5%', marginRight: '50px' }}>
          <Images img="https://onlykarupatti.com/cdn/shop/files/4.webp?v=1692204677&width=300" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '5%' }}>
        <h1>What We Do:</h1>
        <p>We are a Group of Families Authentically Manufacturing Palm Products Along with the other Local<br /> Farmers.
        </p>
        <p>Onlykarupatti.com is on a mission to Create a Sugar free Society, We are creating a Community of<br /> people to achieve our Vision. Join our Sugar-free community to get more quality products & free trial<br /> packs.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1%' }}>
        <h1>How We Do:</h1>
        <p>
          Our Signature Product Karupatti (Palm jaggery) is made by extracting the sap preserving all the<br /> natural goodness and nutritional benefits of the palm tree sap.
        </p>
        <p>
          Then it will be stored with a Traditional way of making it Dry. Then it will be shared to the Quality<br /> checker (Grandma) & then it will be delivered to you with all the Love from the Palm Farms of<br /> Tiruchendur.
        </p>
        <button style={{ width: '15%', height: '45px', borderRadius: '10px', backgroundColor: 'green', color: 'white' }} >
          More About Us
        </button>
      </div>
      <hr></hr>

      <div className='flex' style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: '-210px' }}>
        <div className='flex-column' style={{ marginLeft: '5%' }}>
          <img src='https://onlykarupatti.com/cdn/shop/files/Onlykarupatti_Icon_Square_2048_x_512_px.png?v=1688227095&width=1100' width='25%' alt='' />

          <h4 style={{ fontSize: '20px' }}>
            Sharing World's Best Palm<br /> Products from the Land of its<br /> Tradition.
          </h4>

          <div className='flex' style={{ columnGap: '10px' }}>
            <img src='https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png'
              width='40px' alt='' />
            <img src='https://cdn.freebiesupply.com/images/large/2x/instagram-icon-white-on-black.png' width='35px' alt='' />
          </div>

          <h4 style={{ fontSize: '20px' }}>Subscribe to our emails</h4>

          <input id="NewsletterForm--sections--19579168293162__footer" type="email" name="contact[email]" class="field__input" value="" aria-required="true" autocorrect="off" autocapitalize="off" autocomplete="email" placeholder="Email" required=""></input>

          <div className='flex-column' style={{ marginLeft: '30%', marginTop: '-30%' }}>
            <h3>Quick Links</h3>
            <div style={{ cursor: 'pointer' }}>
              <p>Home</p>
              <p>Karupatti</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Search</p>
            </div>
          </div>

          <div className='flex-column' style={{ marginLeft: '55%', marginTop: '-22%' }}>
            <h3>Info Links</h3>
            <div style={{ cursor: 'pointer' }}>
              <p>Refund Policy</p>
              <p>Privacy Policy</p>
              <p>Shipping Policy</p>
              <p>Terms of Service</p>
              <p>Visit Us</p>
            </div>
          </div>

          <div className='flex-column' style={{ marginLeft: '80%', marginTop: '-22%' }}>
            <h3>A Quality Product from EP <br />Traders.</h3>
          </div>
        </div>

        <div className='flex' style={{ marginTop: '40%', marginRight: '10%', columnGap: '10px', cursor: 'pointer' }}>
          <img src='https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png'
            width='40px' alt='' />
          <img src='https://cdn.freebiesupply.com/images/large/2x/instagram-icon-white-on-black.png' width='35px' alt='' />
        </div>
      </div>
    </>
  );
}

export default App;
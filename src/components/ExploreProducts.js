import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

const ExploreProducts = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    { id: 1, title: 'Serif Coffee Table', img: '/assets/images/product-1.png' },
    { id: 2, title: 'Serif Coffee Table', img: '/assets/images/product-2.png' },
    { id: 3, title: 'Serif Coffee Table', img: '/assets/images/product-3.png' },
    { id: 4, title: 'Serif Coffee Table', img: '/assets/images/product-4.png' },
    { id: 5, title: 'Serif Coffee Table', img: '/assets/images/product-1.png' },
  ];
  return (
    <div className='exploreProducts'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='title mb-5'>Explore our Products</div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <Slider {...settings}>
              {products.map((item) => (
                <div className='carousole-item' key={item.id}>
                  <div className='item-img'>
                    <img src={item.img} alt='product' />
                    <span className='off-sale'>20% OFF</span>
                  </div>
                  <div>
                    <h4 className='mt-4 text-dark font-w-500'>{item.title}</h4>
                    <h5 className='mt-3 text-dark'>
                      <span className='me-2 text-muted text-decoration-line-through'>
                        $30
                      </span>
                      $20
                    </h5>
                    <div className='colors d-flex align-items-center mt-3'>
                      <div className='color color__brown active me-3' />
                      <div className='color color__pink me-3' />
                      <div className='color color__yellow' />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;

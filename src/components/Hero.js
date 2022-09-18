import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';

const sidebarData = [
  {
    id: 1,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
    subMenu: true,
  },
  {
    id: 2,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 3,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 4,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 5,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 6,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 7,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 8,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 9,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 10,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 11,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
  {
    id: 12,
    title: 'Fashion',
    img: '/assets/images/sidebar-icons/briefcase.png',
  },
];

const Hero = () => {
  return (
    <div className='container heroSection my-4'>
      <div className='row g-4'>
        <div className='col-2 col-md-3'>
          <div className='sidebar-main'>
            <div class='sidebar'>
              <div className='text-white bg-primary font-16 sidebar-nav-head'>
                <span className='h4'>
                  {' '}
                  <FiAlignJustify />
                </span>
                <span class='text-dept ms-3'>DEPARTMENT</span>
              </div>
              <nav>
                <ul>
                  {sidebarData.map((item) => (
                    <li key={item.id}>
                      <Link to='/'>
                        <span class='text'>{item.title}</span>
                        <img src={item.img} alt='sidebar-icon' />
                      </Link>

                      {item.subMenu && (
                        <div class='sub-menu mega-menu'>
                          <div className='row'>
                            <div className='col-6 col-sm-6 col-md-2'>
                              <div class='list-item item1'>
                                <h5 class='title text-black'>Products</h5>
                                <ul>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                </ul>
                                <h5 class='title text-black mt-3'>Products</h5>
                                <ul>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className='col-6 col-sm-6 col-md-2'>
                              <div class='list-item item2'>
                                <h5 class='title text-black'>Products</h5>
                                <ul>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>

                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className='col-6 col-sm-6 col-md-2'>
                              <div class='list-item item3'>
                                <h5 class='title text-black'>Products</h5>
                                <ul>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                  <li>
                                    <a href='0'>Product List</a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* <div className='border-right' /> */}
                            <div className='col-12 col-sm-6 col-md-5'>
                              <div class='list-item  item4'>
                                <h5 class='title text-black mb-3'>Featured</h5>

                                <img
                                  src='/assets/images/megaMenu-img/mega1.png'
                                  alt='shop'
                                  className='item4-img1 mb-3'
                                />

                                <img
                                  src='/assets/images/megaMenu-img/mega2.png'
                                  alt='shop'
                                  className='item4-img2 mb-3'
                                />
                                <div>
                                  <img
                                    src='/assets/images/megaMenu-img/mega3.png'
                                    alt='shop'
                                    className='item4-img3 me-3'
                                  />

                                  <img
                                    src='/assets/images/megaMenu-img/mega4.png'
                                    alt='shop'
                                    className='item4-img4'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Section-right */}
        <div className='col-10 col-md-9'>
          <div className='row mb-0 mb-md-4'>
            <div className='col-12 col-md-8'>
              <div className='banner-img'>
                <img src='/assets/images/banner-1.png' alt='hero-img1' />
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='banner-img'>
                <img src='/assets/images/banner-2.png' alt='hero-img2' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='banner-img'>
                <img src='/assets/images/banner-3.png' alt='hero-img3' />
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='banner-img'>
                <img src='/assets/images/banner-4.png' alt='hero-img4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

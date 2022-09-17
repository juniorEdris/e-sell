import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { CgUserList } from 'react-icons/cg';

const Header = () => {
  return (
    <>
      <div className='container heaerSection py-4'>
        <div className='row align-items-center '>
          <div className='col-md-3'>
            <div className='logo'>
              <img src='/assets/images/logo.png' alt='logo' />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='search-bar text-secondary'>
              <input
                className='form-control rounded-pill font-16'
                type='text'
                placeholder='What are you looking for?'
              />
              <span className='search-icon h4'>
                <FiSearch />
              </span>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='icons d-flex align-items-center justify-content-end'>
              <span className='me-3 h4 text-black cursor-pointer'>
                <AiOutlineHeart />
              </span>
              <span
                className='me-3 h4 text-black cursor-pointer'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasRight'
                aria-controls='offcanvasRight'
              >
                <BiCart />
              </span>
              <span className='me-0 h4 text-black cursor-pointer'>
                <CgUserList />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class='offcanvas offcanvas-end'
        tabindex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div class='offcanvas-header'>
          <h5 id='offcanvasRightLabel'>Cart Review</h5>
          <button
            type='button'
            class='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='border-bottom'></div>
        <div class='offcanvas-body  d-flex flex-column justify-content-between'>
          <div>Body Starts here!</div>
          <div className='subtotal'>
            <div className='border-bottom'></div>
            <div className='d-flex justify-content-between pt-4'>
              <span className='text-black h4 font-w-500'>Subtotal</span>
              <span className='text-black h4 font-w-500'>$524.00</span>
            </div>

            <div className='buttons d-flex justify-content-between mt-4'>
              <button
                type='button'
                className='btn btn-primary btn-rounded btn-lg rounded-pill'
              >
                View Cart
              </button>
              <button
                type='button'
                className='btn btn-secondary btn-rounded btn-lg rounded-pill'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

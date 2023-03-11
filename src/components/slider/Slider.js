import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css"

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='container-fluid my-5'>
      <Carousel responsive={responsive}>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F423%2FCoffee_j6vccc.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>coffee</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F424%2FCookies_ggshwp.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>cookies</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F425%2FRound-Cake_rfsrkr.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Round Cake</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F426%2FPita-Bread_bvrwtn.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Pita Bread</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F427%2FChees-Cake_whi1yd.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Sliced Cake</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F428%2FMuffin_yiuqcf.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Muffin</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F429%2FDanish_ybcbuq.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Danish</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F430%2FCroissant_nqjflw.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Croissants</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F431%2FFeeter-pies_eidfxl.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Feeter & Pies</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F432%2FToast_ufzuwx.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Toast & Loaf</p>
        </div>
        <div className='item1'>
          <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F433%2FSoftBread_a85vlg.png&w=1920&q=75' alt='slider' width="100%" />
          <p className='item_name'>Soft Bread</p>
        </div>
        
      </Carousel>
    </div>
  )
}

export default Slider

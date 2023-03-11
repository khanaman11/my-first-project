import React from 'react'
import Products from '../../components/products/Products'
import Juice5eqrtuu from '../../image/Juice5eqrtuu.jpg'

const productsData = {
    data:[
     
        {id:1,image:Juice5eqrtuu,price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:2,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F490%2FJuice5_bz8od4.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},   
        {id:3,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F491%2FJuice4_1_xt54si.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:4,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F492%2FJuice-1_lx8xnf.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:5,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F493%2FJuice2_lnhqsp.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:6,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F494%2FJuice1_nc4tbk.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:7,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F495%2FCoffee_Tea_oo00oz.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:8,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F496%2FCoffee_Tea-5_ktc2il.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:9,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F497%2FCoffee_Tea-3_zlgz6x.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:10,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F498%2FCoffee_Tea-6_wlaqgp.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:11,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F499%2FCoffee_Tea-1_rnxxwg.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:12,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F500%2FCoffee_Tea-2_gblecp.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:13,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F501%2FCoffee_Tea-7_nijstz.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:14,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2FCookies-4_vmbpqm.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:15,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F503%2FCookies-3_x85w4w.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:16,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F504%2FCookies_lquuja.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:17,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F506%2FCookies-2_osbjsh.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:18,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F505%2FCookies-1_d8mfwp.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:19,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F507%2FCookies-5_oire6k.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:20,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F508%2FRound_Cake-8_rjbmjc.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:21,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F510%2FRound_Cake-7_ygffyu.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:22,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F511%2FRound_Cake-5_hpfbrl.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:23,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F512%2FRound_Cake-3_pigscm.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:24,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F513%2FRound_Cake-2_cczqay.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:25,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F514%2FRound_Cake_on61hh.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:26,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F515%2FPita_Bread-8_asbled.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:27,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F516%2FPita_Bread-6_whabjs.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:28,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F517%2FPita_Bread-2_daz412.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:29,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F518%2FPita_Bread_ovbpdz.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        {id:30,image:"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F519%2FPita_Bread-3_uzisgc.jpg&w=1920&q=75",price:"$ 1.20",discription:"Ritai Organic Orange Juice 500 ml",discount:"20%"},
        
    ]
}
const ProductsPage = () => {
  return (
    <div>
      <Products data = {productsData.data}/>
    </div>
  )
}

export default ProductsPage

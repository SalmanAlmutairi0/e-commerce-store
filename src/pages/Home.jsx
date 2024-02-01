import React, { useState } from 'react'
import FormSearch from '../components/FormSearch'
import ProductLists from '../components/ProductLists'
import Category from '../components/Category'

export default function Home({setCart}) {
  const [selectedCategory, setSelectedCategory] = useState('/')
  console.log(selectedCategory)
  return (
    <div className='flex flex-col items-center gap-16  my-5 w-full'>
        <FormSearch />
        <Category setSelected = {setSelectedCategory} selectedCategory = {selectedCategory} />
        <ProductLists selectedCategory = {selectedCategory} setCart = {setCart}/>
    </div>
  )
}

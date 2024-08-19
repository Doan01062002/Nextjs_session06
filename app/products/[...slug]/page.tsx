import React from 'react'

interface Product{
    slug:any
}

interface Props{
    params:Product
}

export default function Productdetail(props:Props) {
    console.log("giá trị của prop", props)

    const {params} = props
  return (
    <div>Trang chi tiết sản phẩm của sản phẩm: {params.slug}

    </div>
  )
}

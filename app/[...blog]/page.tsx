import React from 'react'

interface Blog{
  blog:any
}

interface Props{
  params:Blog
}

export default function Blog({ params }: Props) {
  const path = params.blog.join('/');

  return (
    <div>Bạn đang xem blog với đường dẫn: {path}</div>
  )
}

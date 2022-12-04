import React from 'react'
import Carousel from 'react-grid-carousel'
const Customer = () => {
  return (
    <Carousel cols={7} rows={1} gap={30} loop>
    <Carousel.Item>
      <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-1_gb73su.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-6_pzgpgz.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-2_t32y14.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-4_cueice.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-5_xrzpax.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-3_cuol31.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-1_gb73su.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-1_gb73su.png" />
    </Carousel.Item>
    <Carousel.Item>
    <img width="100%" src="https://res.cloudinary.com/dvgdnrwzc/image/upload/v1668533370/Watch/client-1_gb73su.png" />
    </Carousel.Item>
    <Carousel.Item>
      {/* anything you want to show in the grid */}
    </Carousel.Item>
    {/* ... */}
  </Carousel>
  )
}

export default Customer
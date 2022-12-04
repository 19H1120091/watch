import React from 'react'


const Section = (props) => {
  return (
    <div className= "section">
    {props.children}
    </div>
  )
}
// const SectionImage = (props) => {
//   return (
//     <div className= "section-image">
//     <section className="wrapper">
//   <div className="container">
    
//   <div className="row">
//  <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
//          <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
//         <div className="card-img-overlay d-flex flex-column">
//          <div className="card-body">
//             <small className="card-meta mb-2">Thought Leadership</small>
//             <h4 className="card-title mt-0 "><a className="text-white" herf="/">Goverment Lorem Ipsum Sit Amet Consectetur dipisi?</a></h4>
//            <small><i className="far fa-clock"></i> October 15, 2020</small>
//           </div>
//           <div className="card-footer">
//            <div className="media">
//   <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png" alt="Generic placeholder image" style="max-width:50px"/>
//   <div className="media-body">
//     <h6 className="my-0 text-white d-block">Oz Coruhlu</h6>
//      <small>Director of UI/UX</small>
//   </div>
// </div>
//           </div>
//         </div>
//       </div></div>
  
// </div>
  
// </div>
// </section>
//     </div>
//   )
// }
export const SectionTitle = (props) => {
    return (
      <div className= "section__title">
      Sản phẩm
       <span> {props.children}</span>
     
      </div>
    )
  }
  export const SectionCarousel = (props) => {
    return (
      <div className= "section__carousel">
      Chọn một
       
       <span> {props.children}</span>
       <p>Đây là chiếc mặt số đồng hồ phù hợp nhất trong phân khúc của thương hiệu </p>
       <p>Hãy lựa chọn.</p>
       
     
      </div>
    )
  }
  export const SectionReview = (props) => {
    return (
      <div className= "section__title">
     Khách hàng
       <span> {props.children}</span>
     
      </div>
    )
  }
  export const SectionBody = (props) => {
    return (
      <div className="container">
        <div className= "section__body">
      {props.children}
      </div>
      </div>
      
    )
  }
  

export default Section
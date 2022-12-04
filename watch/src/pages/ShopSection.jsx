import React from 'react'

const ShopSection = () => {
  return (
    <>
    <div className="shopsection"><div class="container">
    <input type="radio" name="dot" id="one" />
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
           <img src="images/img1.jpg" alt="" /> 
           </div>
           <div class="details">
             <div class="name">Andrew Neil</div>
             <div class="job">Web Designer</div>
           </div>
           <div class="media-icons">
             <a href="/"><i class="fab fa-facebook-f"></i></a>
             <a href="/"><i class="fab fa-twitter"></i></a>
             <a href="/"><i class="fab fa-instagram"></i></a>
             <a href="/"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/img2.jpg" alt="" />
           </div>
           <div class="details">
             <div class="name">Jasmine Carter</div>
             <div class="job">UI Designer</div>
           </div>
           <div class="media-icons">
             <a href="/"><i class="fab fa-facebook-f"></i></a>
             <a href="/"><i class="fab fa-twitter"></i></a>
             <a href="/"><i class="fab fa-instagram"></i></a>
             <a href="/"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
           <img src="images/img3.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Justin Chung</div>
             <div class="job">Web Devloper</div>
           </div>
           <div class="media-icons">
             <a href="/"><i class="fab fa-facebook-f"></i></a>
             <a href="/"><i class="fab fa-twitter"></i></a>
             <a href="/"><i class="fab fa-instagram"></i></a>
             <a href="/"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="images/img4.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Appolo Reef</div>
             <div class="job">Web Designer</div>
           </div>
           <div class="media-icons">
             <a href="/"><i class="fab fa-facebook-f"></i></a>
             <a href="/"><i class="fab fa-twitter"></i></a>
             <a href="/"><i class="fab fa-instagram"></i></a>
             <a href="/"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="images/img5.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Adrina Calvo</div>
             <div class="job">UI Designer</div>
           </div>
           <div class="media-icons">
             <a href="/"><i class="fab fa-facebook-f"></i></a>
             <a href="/"><i class="fab fa-twitter"></i></a>
             <a href="/"><i class="fab fa-instagram"></i></a>
             <a href="/"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/img6.jpeg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Nicole Lewis</div>
             <div class="job">Web Devloper</div>
           </div>
           <div class="media-icons">
             <a href="/"><i class="fab fa-facebook-f"></i></a>
             <a href="/"><i class="fab fa-twitter"></i></a>
             <a href="/"><i class="fab fa-instagram"></i></a>
             <a href="/"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div></div>
    </>
  )
}

export default ShopSection
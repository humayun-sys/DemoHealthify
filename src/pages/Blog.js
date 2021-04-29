import React from "react";



function Blog() {
  return (
    <>
      <section id="blog" class="our-blog-section ptb-100 gray-light-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="section-heading mb-5">
                            <span class="text-uppercase color-secondary sub-title">Blog</span>
                            <h2>Our Latest News</h2>
                            <p>
                                Enthusiastically drive revolutionary opportunities before emerging leadership. Distinctively transform tactical methods of empowerment via resource sucking core.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-blog-card card border-0 shadow-sm">
                            <span class="category position-absolute badge badge-pill badge-primary">Lifestyle</span>
                            <img src="img/blog/1.jpg" class="card-img-top position-relative" alt="blog"/>
                            <div class="card-body">
                                <div class="post-meta mb-2">
                                    <ul class="list-inline meta-list">
                                        <li class="list-inline-item">Jan 21, 2019</li>
                                        <li class="list-inline-item"><span>45</span> Comments</li>
                                        <li class="list-inline-item"><span>10</span> Share</li>
                                    </ul>
                                </div>
                                <h3 class="h5 card-title"><a href="#">Appropriately productize fully</a></h3>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk.</p>
                                <a href="#" class="detail-link">Read more <span class="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-blog-card card border-0 shadow-sm">
                            <span class="category position-absolute badge badge-pill badge-danger">Technology</span>
                            <img src="img/blog/2.jpg" class="card-img-top position-relative" alt="blog"/>
                            <div class="card-body">
                                <div class="post-meta mb-2">
                                    <ul class="list-inline meta-list">
                                        <li class="list-inline-item">May 26, 2019</li>
                                        <li class="list-inline-item"><span>30</span> Comments</li>
                                        <li class="list-inline-item"><span>5</span> Share</li>
                                    </ul>
                                </div>
                                <h3 class="h5 card-title"><a href="#">Quickly formulate backend</a></h3>
                                <p class="card-text">Synergistically engage effective ROI after customer directed partnerships.</p>
                                <a href="#" class="detail-link">Read more <span class="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-blog-card card border-0 shadow-sm">
                            <span class="category position-absolute badge badge-pill badge-info">Science</span>
                            <img src="img/blog/3.jpg" class="card-img-top" alt="blog"/>
                            <div class="card-body">
                                <div class="post-meta mb-2">
                                    <ul class="list-inline meta-list">
                                        <li class="list-inline-item">Apr 25, 2019</li>
                                        <li class="list-inline-item"><span>41</span> Comments</li>
                                        <li class="list-inline-item"><span>30</span> Share</li>
                                    </ul>
                                </div>
                                <h3 class="h5 card-title"><a href="#">Objectively extend extensive</a></h3>
                                <p class="card-text">Holisticly mesh open-source leadership rather than proactive users. </p>
                                <a href="#" class="detail-link">Read more <span class="ti-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
    </>
      );
}

export default Blog;
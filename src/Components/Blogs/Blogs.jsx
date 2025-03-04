import React,{useState} from 'react'
export default function Blogs() {
    const [color, setColor] = useState('red');
    return (
        <React.Fragment>
            <main>
            <div class="bg-light">
                    <div class="container py-4">
                        <div class="row">
                            <div class="col-sm">
                                <h4 class="mb-0">Blog {color}</h4>
                                <button onClick={() => setColor('red')}>Read</button>
                                <button onClick={() => setColor('green')}>Green</button>
                                <button onClick={() => setColor('blue')}>Blue</button>
                                <button onClick={() => setColor('orange')}>Orange</button>
                            </div>

                            <div class="col-sm-auto">
                                {/* <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb mb-0">
                                        <li class="breadcrumb-item">
                                            <a href="index.html">Shop</a>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <a href="products-grid.html">Products</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">Grid</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container content-space-2 content-space-lg-3">
                    <div class="row justify-content-lg-between">
                        <div class="col-lg-8 mb-10 mb-lg-0">
                            <div class="d-grid gap-7 mb-7">
                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img7.jpg" alt="Image Description" />
                                        </div>
                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Business</a>
                                                </div>
                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">Front becomes an official Instagram Marketing Partner</a>
                                                </h3>
                                                <p class="card-text">Great news we're eager to share.</p>
                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Aaron Larsson</a>
                                                            <p class="card-text small">Feb 15, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img5.jpg" alt="Image Description" />
                                        </div>

                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Announcements</a>
                                                </div>

                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">Announcing a free plan for small teams</a>
                                                </h3>

                                                <p class="card-text">At Wake, our mission has always been focused on bringing openness.</p>

                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Hanna Wolfe</a>
                                                            <p class="card-text small">Feb 4, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img4.jpg" alt="Image Description" />
                                        </div>

                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Business</a>
                                                </div>

                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">Enjoy $1,000 worth of perks with Front for Business</a>
                                                </h3>

                                                <p class="card-text">There are many reasons people choose to join Front for Business.</p>

                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Andrea Gard</a>
                                                            <p class="card-text small">Jan 27, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img8.jpg" alt="Image Description" />
                                        </div>

                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Business</a>
                                                </div>

                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">What CFR (Conversations, Feedback, Recognition) really is about</a>
                                                </h3>

                                                <p class="card-text">For a lot of people these days, Measure What Matters.</p>

                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Aaron Larsson</a>
                                                            <p class="card-text small">Jan 21, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img6.jpg" alt="Image Description" />
                                        </div>

                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Community</a>
                                                </div>

                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">Do millennials care about saving?</a>
                                                </h3>

                                                <p class="card-text">Over the last few years, numerous studies have appeared to confirm a troubling pattern – millennials don't save, they don't care about their financial futures.</p>

                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Hanna Wolfe</a>
                                                            <p class="card-text small">Jan 15, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a class="card card-transition align-items-start flex-wrap flex-row bg-img-start" href="./blog-article.html">

                                    <div class="card-header w-100">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0">
                                                <span class="avatar avatar-sm avatar-circle">
                                                    <img class="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                </span>
                                            </div>

                                            <div class="flex-grow-1 ms-3">
                                                <h4 class="card-title text-white mb-0">Aaron Larsson</h4>
                                                <p class="card-text text-white-70 small">Jan 09, 2020</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-footer mt-auto">
                                        <h3 class="h2 text-white">Facebook is creating a news section in Watch to feature breaking news</h3>
                                        <p class="text-white-70">Facebook launched the Watch platform in August</p>
                                    </div>
                                </a>

                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img21.jpg" alt="Image Description" />
                                        </div>

                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Business</a>
                                                </div>

                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">Front accounts - let's work together</a>
                                                </h3>

                                                <p class="card-text">Are you an accountant? Are you a company formation advisor? Would you like to partner with one of the world's most popular and fastest-growing Fintech startups?</p>

                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Hanna Wolfe</a>
                                                            <p class="card-text small">Jan 06, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-flush card-stretched-vertical">
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <img class="card-img" src="./assets/img/400x500/img3.jpg" alt="Image Description" />
                                        </div>

                                        <div class="col-sm-7">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="card-link" href="#">Community</a>
                                                </div>

                                                <h3 class="card-title">
                                                    <a class="text-dark" href="./blog-article.html">Let's revolutionise global payments. Together</a>
                                                </h3>

                                                <p class="card-text">Front is changing the way money moves around the world.</p>

                                                <div class="card-footer">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <a class="avatar avatar-circle" href="./blog-author-profile.html">
                                                                <img class="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                            </a>
                                                        </div>

                                                        <div class="flex-grow-1 ms-3">
                                                            <a class="card-link link-dark" href="./blog-author-profile.html">Andrea Gard</a>
                                                            <p class="card-text small">Jan 06, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="stickyBlockEndPoint"></div>

                            <nav aria-label="Page navigation">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">
                                                <i class="bi-chevron-double-left small"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">
                                                <i class="bi-chevron-double-right small"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="col-lg-3">
                            <div class="mb-7">
                                <div class="mb-3">
                                    <h3>Newsletter</h3>
                                </div>
                                <form>
                                    <div class="mb-2">
                                        <input type="text" class="form-control" placeholder="Enter email" aria-label="Enter email" />
                                    </div>
                                    <div class="d-grid">
                                        <button type="button" class="btn btn-primary">Subscribe</button>
                                    </div>
                                </form>
                                <p class="form-text">Get special offers on the latest developments from Front.</p>
                            </div>

                            <div class="mb-7">
                                <div class="mb-3">
                                    <h3>Productivity</h3>
                                </div>
                                <ul class="list-group list-group-lg">
                                    <li class="list-group-item">
                                        <a href="#">
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <h5 class="mb-1">Here's how to dodge distractions</h5>
                                                    <p class="text-body small mb-0">Feb 08, 2020</p>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="bi-chevron-right"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="list-group-item">
                                        <a href="#">
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <h5 class="mb-1">Ideas to stay productive</h5>
                                                    <p class="text-body small mb-0">Feb 09, 2020</p>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="bi-chevron-right"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="list-group-item">
                                        <a href="#">
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <h5 class="mb-1">Classic design principles</h5>
                                                    <p class="text-body small mb-0">Feb 10, 2020</p>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="bi-chevron-right"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div id="stickyBlockStartPoint"></div>

                            <div class="js-sticky-block" data-hs-sticky-block-options="{
                 &quot;parentSelector&quot;: &quot;#stickyBlockStartPoint&quot;,
                 &quot;targetSelector&quot;: &quot;#header&quot;,
                 &quot;breakpoint&quot;: &quot;md&quot;,
                 &quot;startPoint&quot;: &quot;#stickyBlockStartPoint&quot;,
                 &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;,
                 &quot;stickyOffsetTop&quot;: 80
               }" >
                                <div class="mb-7">
                                    <div class="mb-3">
                                        <h3>Front culture</h3>
                                    </div>

                                    <div class="d-grid gap-2">
                                        <a class="d-block" href="./blog-article.html">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar avatar-lg">
                                                        <img class="avatar-img" src="./assets/img/320x320/img1.jpg" alt="Image Description" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="text-inherit mb-0">Announcing a free plan for small teams</h5>
                                                </div>
                                            </div>
                                        </a>

                                        <a class="d-block" href="./blog-article.html">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar avatar-lg">
                                                        <img class="avatar-img" src="./assets/img/320x320/img10.jpg" alt="Image Description" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="text-inherit mb-0">Mapping the first family tree for Front office</h5>
                                                </div>
                                            </div>
                                        </a>

                                        <a class="d-block" href="./blog-article.html">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar avatar-lg">
                                                        <img class="avatar-img" src="./assets/img/320x320/img9.jpg" alt="Image Description" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="text-inherit mb-0">Felling eyeing first major Classic win in 2018</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="mb-7">
                                    <div class="mb-3">
                                        <h3>Tags</h3>
                                    </div>

                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Business</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Adventure</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Community</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Announcements</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Tutorials</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Resources</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Classic</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Photography</a>
                                    <a class="btn btn-soft-secondary btn-xs mb-1" href="#">Interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

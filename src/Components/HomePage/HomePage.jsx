import React from 'react'
// import Image from 'next/image';
import bgslide1 from '../../../src/assets/img/900x900/img3.jpg';
import bgslide2 from '../../../src/assets/img/900x900/img4.jpg';

import bslide5 from '../../../src/assets/img/mockups/img5.png';
import bslide6 from '../../../src/assets/img/mockups/img6.png';
import bslide1 from '../../../src/assets/img/mockups/img1.png';
import sslide1 from '../../../src/assets/img/160x160/img11.jpg';
import sslide2 from '../../../src/assets/img/160x160/img14.jpg';
import sslide3 from '../../../src/assets/img/160x160/img15.jpg';
import { Link } from 'react-router-dom';



export default function HomePage() {

    const bgcontentimg = {
        backgroundImage: `url(${bgslide1})`,
        minHeight: "30rem",
    };

    const bgnaktoimg = {
        backgroundImage: `url(${bgslide2})`,
        minHeight: "30rem",
    };

    return (
        <React.Fragment>
            <main id="content" role="main">
                <div class="position-relative">
                    <div class="js-swiper-shop-classic-hero swiper bg-light">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="container content-space-t-2 content-space-b-3">
                                    <div class="row align-items-lg-center">
                                        <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                                            <div class="mb-6">
                                                <h1 class="display-4 mb-4">Front original design cap</h1>
                                                <p>As well as being game-changers when it comes to technical innovation, Front has some of the bestselling cap in its locker.</p>
                                            </div>

                                            <div class="d-flex gap-2">
                                                <a class="btn btn-primary rounded-pill" href="#">$59 - Add to cart</a>
                                                <a class="btn btn-outline-primary btn-icon rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                                    <i class="bi-heart-fill"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 order-lg-1">
                                            <div class="w-75 mx-auto">
                                                <img class="img-fluid" src={bslide5} alt="Image Description" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="container content-space-t-2 content-space-b-3">
                                    <div class="row align-items-lg-center">
                                        <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                                            <div class="mb-6">
                                                <h2 class="display-4 mb-4">Apple iPad Pro</h2>
                                                <p>It's all new, all screen, and all powerful. Completely redesigned and packed with our most advanced technology, it will make you rethink what iPad is capable of.</p>
                                            </div>

                                            <div class="d-flex gap-2">
                                                <a class="btn btn-primary rounded-pill" href="#">$799 - Add to cart</a>
                                                <a class="btn btn-outline-primary btn-icon rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                                    <i class="bi-heart-fill"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 order-lg-1">
                                            <div class="w-75 mx-auto">
                                                <img class="img-fluid" src={bslide6} alt="Image Description" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="container content-space-t-2 content-space-b-3">
                                    <div class="row align-items-lg-center">
                                        <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                                            <div class="mb-6">
                                                <h3 class="display-4 mb-4">Celio hoodie</h3>
                                                <p>Founded in 1985, French label Celio channels 30 years of expertise into its contemporary menswear range. Expect fly style for a city or beach with its denim shorts, chinos and printed jersey.</p>
                                            </div>

                                            <div class="d-flex gap-2">
                                                <a class="btn btn-primary rounded-pill" href="#">$15 - Add to cart</a>
                                                <a class="btn btn-outline-primary btn-icon rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                                    <i class="bi-heart-fill"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 order-lg-1">
                                            <div class="w-75 mx-auto">
                                                <img class="img-fluid" src={bslide1} alt="Image Description" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="js-swiper-shop-classic-hero-button-next swiper-button-next"></div>
                        <div class="js-swiper-shop-classic-hero-button-prev swiper-button-prev"></div>
                    </div>

                    <div class="position-absolute bottom-0 start-0 end-0 mb-3">
                        <div class="js-swiper-shop-hero-thumbs swiper" style={{maxWidth: "13rem"}}>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <Link class="js-swiper-thumb-progress swiper-thumb-progress-avatar" href="javascript:;" tabindex="0">
                                        <img class="swiper-thumb-progress-avatar-img" src={sslide1} alt="Image Description" />
                                    </Link>
                                </div>
                                <div class="swiper-slide">
                                    <Link class="js-swiper-thumb-progress swiper-thumb-progress-avatar" href="javascript:;" tabindex="0">
                                        <img class="swiper-thumb-progress-avatar-img" src={sslide2} alt="Image Description" />
                                    </Link>
                                </div>

                                <div class="swiper-slide">
                                    <Link class="js-swiper-thumb-progress swiper-thumb-progress-avatar" href="javascript:;" tabindex="0">
                                        <img class="swiper-thumb-progress-avatar-img" src={sslide3} alt="Image Description" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-bottom">
                    <div class="container content-space-2">
                        <div class="row">
                            <div class="col-md-4 mb-7 mb-md-0">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <img class="avatar avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/oc-protected-card.svg" alt="Image Description" />
                                    </div>
                                    <div class="flex-grow-1 ms-4">
                                        <h4 class="mb-1">Secure checkout</h4>
                                        <p class="small mb-0">Guaranteed safe checkout</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4 mb-7 mb-md-0">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <img class="avatar avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/oc-return.svg" alt="Image Description" />
                                    </div>
                                    <div class="flex-grow-1 ms-4">
                                        <h4 class="mb-1">30 Days return</h4>
                                        <p class="small mb-0">We offer you a full refund within 30 days of purchase.</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <img class="avatar avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/oc-truck.svg" alt="Image Description" />
                                    </div>
                                    <div class="flex-grow-1 ms-4">
                                        <h4 class="mb-1">Free shipping</h4>
                                        <p class="small mb-0">Automatically receive free standard shipping on every order.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container content-space-2 content-space-lg-3">
                    <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                        <h2>The better way to shop with Front top-products</h2>
                    </div>

                    <div class="row mb-2">
                        <div class="col-sm-6 col-md-4 mb-4">
                            <div class="card card-bordered shadow-none overflow-hidden">
                                <div class="card-body d-flex align-items-center border-bottom p-0">
                                    <div class="w-65 border-end">
                                        <img class="img-fluid" src="../assets/img/380x400/img3.jpg" alt="Image Description" />
                                    </div>
                                    <div class="w-35">
                                        <div class="border-bottom">
                                            <img class="img-fluid" src="../assets/img/380x360/img8.jpg" alt="Image Description" />
                                        </div>
                                        <img class="img-fluid" src="../assets/img/380x360/img7.jpg" alt="Image Description" />
                                    </div>
                                </div>

                                <div class="card-footer text-center">
                                    <h3 class="card-title">T-shirts</h3>
                                    <p class="card-text text-muted small">Starting from $29.99</p>
                                    <a class="btn btn-outline-primary btn-sm btn-transition rounded-pill px-6" href="#">View all</a>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-6 col-md-4 mb-4">
                            <div class="card card-bordered shadow-none overflow-hidden">
                                <div class="card-body d-flex align-items-center border-bottom p-0">
                                    <div class="w-65 border-end">
                                        <img class="img-fluid" src="../assets/img/380x400/img4.jpg" alt="Image Description" />
                                    </div>
                                    <div class="w-35">
                                        <div class="border-bottom">
                                            <img class="img-fluid" src="../assets/img/380x360/img6.jpg" alt="Image Description" />
                                        </div>
                                        <img class="img-fluid" src="../assets/img/380x360/img5.jpg" alt="Image Description" />
                                    </div>
                                </div>

                                <div class="card-footer text-center">
                                    <h3 class="card-title">Tech covers</h3>
                                    <p class="card-text text-muted small">Starting from $399.99</p>
                                    <a class="btn btn-outline-primary btn-sm btn-transition rounded-pill px-6" href="#">View all</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4 mb-4">
                            <div class="card card-bordered shadow-none overflow-hidden">
                                <div class="card-body d-flex align-items-center border-bottom p-0">
                                    <div class="w-65 border-end">
                                        <img class="img-fluid" src="../assets/img/380x400/img2.jpg" alt="Image Description" />
                                    </div>
                                    <div class="w-35">
                                        <div class="border-bottom">
                                            <img class="img-fluid" src="../assets/img/380x360/img4.jpg" alt="Image Description" />
                                        </div>
                                        <img class="img-fluid" src="../assets/img/380x360/img3.jpg" alt="Image Description" />
                                    </div>
                                </div>

                                <div class="card-footer text-center">
                                    <h3 class="card-title">Caps</h3>
                                    <p class="card-text text-muted small">Starting from $13.99</p>
                                    <a class="btn btn-outline-primary btn-sm btn-transition rounded-pill px-6" href="#">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <p class="small">Limited time only, while stocks last.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-4 mb-md-0">
                            <div class="card card-lg bg-img-start" style={bgcontentimg}>
                                <div class="card-body">
                                    <span class="card-subtitle text-danger">Limited time only</span>
                                    <h2 class="card-title display-4">70% OFF</h2>

                                    <div class="w-md-65">
                                        <div class="js-countdown row mb-5">
                                            <div class="col-4 text-center">
                                                <div class="border border-dark rounded-2 p-2 mb-1">
                                                    <span class="js-cd-days h2"></span>
                                                </div>

                                                <h5 class="card-title">Days</h5>
                                            </div>

                                            <div class="col-4 text-center">
                                                <div class="border border-dark rounded-2 p-2 mb-1">
                                                    <span class="js-cd-hours h2"></span>
                                                </div>

                                                <h5 class="card-title">Hours</h5>
                                            </div>

                                            <div class="col-4 text-center">
                                                <div class="border border-dark rounded-2 p-2 mb-1">
                                                    <span class="js-cd-minutes h2"></span>
                                                </div>

                                                <h5 class="card-title">Mins</h5>
                                            </div>

                                            <div class="col-4 d-none text-center">
                                                <div class="border border-dark rounded-2 p-2 mb-1">
                                                    <span class="js-cd-seconds h2"></span>
                                                </div>

                                                <h5 class="card-title">Sec</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <a class="btn btn-light btn-sm btn-transition rounded-pill px-6" href="#">Shop</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card card-lg bg-img-start" style={bgnaktoimg}>
                                <div class="card-body">
                                    <div class="mb-4">
                                        <h2 class="card-title text-white">$109.99</h2>
                                        <h3 class="card-title text-white">Nakto 26 Bicycle</h3>
                                        <p class="card-text text-white">NAKTO bicycles to save the environment and bring fun to our friends!</p>
                                    </div>

                                    <a class="btn btn-light btn-sm btn-transition rounded-pill px-6" href="#">Shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container content-space-2 content-space-lg-3">
                    <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                        <h2>What's trending</h2>
                    </div>

                    <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-3">
                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img3.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-start">
                                        <span class="badge bg-success rounded-pill">New arrival</span>
                                    </div>

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Accessories</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Herschel backpack in dark blue</a>
                                    <p class="card-text text-dark">$56.99</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">0</span>
                                    </a>
                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img1.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Clothing</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Front hoodie</a>
                                    <p class="card-text text-dark">$91.88</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">40</span>
                                    </a>
                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img4.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-start">
                                        <span class="badge bg-danger rounded-pill">Out of stock</span>
                                    </div>

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Accessories</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Herschel backpack in gray</a>
                                    <p class="card-text text-dark">$29.99 <span class="text-body ms-1"><del>$33.99</del></span></p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">125</span>
                                    </a>

                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img6.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Clothing</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Front Originals adicolor t-shirt with trefoil logo</a>
                                    <p class="card-text text-dark">$38.00</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">9</span>
                                    </a>

                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img7.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Accessories</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Front mesh baseball cap with signature logo</a>
                                    <p class="card-text text-dark">$8.8</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">9</span>
                                    </a>

                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img2.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Clothing</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Front Originals adicolor t-shirt in gray</a>
                                    <p class="card-text text-dark">$24</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">0</span>
                                    </a>

                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img5.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Clothing</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">COLLUSION Unisex mechanic print t-shirt</a>
                                    <p class="card-text text-dark">$43.99</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">35</span>
                                    </a>
                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div class="col mb-4">
                            <div class="card card-bordered shadow-none text-center h-100">
                                <div class="card-pinned">
                                    <img class="card-img-top" src="../assets/img/300x180/img8.jpg" alt="Image Description" />

                                    <div class="card-pinned-top-end">
                                        <button type="button" class="btn btn-outline-secondary btn-xs btn-icon rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Save for later">
                                            <i class="bi-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="mb-1">
                                        <a class="link-sm link-secondary" href="#">Accessories</a>
                                    </div>
                                    <a class="text-body" href="product-overview.html">Billabong Walled snapback in green</a>
                                    <p class="card-text text-dark">$12.00</p>
                                </div>

                                <div class="card-footer pt-0">
                                    <a class="d-inline-flex align-items-center mb-3" href="#">
                                        <div class="d-flex gap-1 me-2">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>
                                        <span class="small">35</span>
                                    </a>

                                    <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <a class="btn btn-outline-primary btn-transition rounded-pill" href="#">View all products</a>
                    </div>
                </div>

                <div class="bg-light">
                    <div class="container content-space-2">
                        <div class="w-md-75 w-lg-50 text-center mx-md-auto">
                            <div class="row justify-content-lg-between">
                                <div class="mb-5">
                                    <span class="text-cap">Subscribe</span>
                                    <h2>Get the latest from Front</h2>
                                </div>

                                <form>
                                    <div class="input-card input-card-pill input-card-sm border mb-3">
                                        <div class="input-card-form">
                                            <label for="subscribeForm" class="form-label visually-hidden">Enter email</label>
                                            <input type="text" class="form-control form-control-lg" id="subscribeForm" placeholder="Enter email" aria-label="Enter email" />
                                        </div>
                                        <button type="button" class="btn btn-primary btn-lg rounded-pill">Subscribe</button>
                                    </div>
                                </form>

                                <p class="small">You can unsubscribe at any time. Read our <a href="#">privacy policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container content-space-2">
                    <div class="row">
                        <div class="col text-center py-3">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/hollister-dark.svg" alt="Logo" />
                        </div>

                        <div class="col text-center py-3">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/levis-dark.svg" alt="Logo" />
                        </div>

                        <div class="col text-center py-3">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/new-balance-dark.svg" alt="Logo" />
                        </div>

                        <div class="col text-center py-3">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/puma-dark.svg" alt="Logo" />
                        </div>

                        <div class="col text-center py-3">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/nike-dark.svg" alt="Logo" />
                        </div>

                        <div class="col text-center py-3">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/tnf-dark.svg" alt="Logo" />
                        </div>

                    </div>

                </div>
            </main>
        </React.Fragment>
    )
}

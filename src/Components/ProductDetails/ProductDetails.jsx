import React from 'react'

export default function ProductDetails() {
    return (
        <React.Fragment>
            <main id="content" role="main">
                <div class="container content-space-t-1 content-space-t-sm-2">
                    <div class="row">
                        <div class="col-md-7 mb-7 mb-md-0">
                            <div class="pe-md-4">
                                <div class="card-pinned">
                                    <div class="js-swiper-shop-product swiper">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="card card-bordered shadow-none">
                                                    <img class="card-img" src="../assets/img/600x600/img1.jpg" alt="Image Description" />
                                                </div>
                                            </div>

                                            <div class="swiper-slide">
                                                <div class="card card-bordered shadow-none">
                                                    <img class="card-img" src="../assets/img/600x600/img2.jpg" alt="Image Description" />
                                                </div>
                                            </div>

                                            <div class="swiper-slide">
                                                <div class="card card-bordered shadow-none">
                                                    <img class="card-img" src="../assets/img/600x600/img3.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="js-swiper-shop-product-button-next swiper-button-next"></div>
                                        <div class="js-swiper-shop-product-button-prev swiper-button-prev"></div>
                                    </div>

                                    <div class="position-absolute bottom-0 end-0 start-0 zi-1 p-4">
                                        <div class="js-swiper-shop-product-thumb swiper" style={{maxWidth:'15rem'}}>
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <a class="avatar avatar-circle" href="javascript:;">
                                                        <img class="avatar-img" src="../assets/img/160x160/img11.jpg" alt="Image Description" />
                                                    </a>
                                                </div>

                                                <div class="swiper-slide">
                                                    <a class="avatar avatar-circle" href="javascript:;">
                                                        <img class="avatar-img" src="../assets/img/160x160/img12.jpg" alt="Image Description" />
                                                    </a>
                                                </div>

                                                <div class="swiper-slide">
                                                    <a class="avatar avatar-circle" href="javascript:;">
                                                        <img class="avatar-img" src="../assets/img/160x160/img13.jpg" alt="Image Description" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <a class="d-flex gap-1 mb-4" href="#reviewSection">
                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                <span class="ms-1">287 reviews</span>
                            </a>

                            <div class="mb-5">
                                <h1 class="h2">New Era 9Forty LA Dodgers adjustable cap in black</h1>
                                <p>American label New Era manufacturing baseball hats for teams since the 1930s.</p>
                            </div>

                            <div class="mb-5">
                                <span class="d-block mb-2">Total price:</span>
                                <div class="d-flex align-items-center">
                                    <h3 class="mb-0">$159.99</h3>
                                    <span class="ms-2"><del>$179.99</del></span>
                                </div>
                            </div>

                            <div class="quantity-counter mb-3">
                                <div class="js-quantity-counter row align-items-center">
                                    <div class="col">
                                        <span class="d-block small">Select quantity</span>
                                        <input class="js-result form-control form-control-quantity-counter" type="text" value="1" />
                                    </div>

                                    <div class="col-auto">
                                        <a class="js-minus btn btn-outline-secondary btn-xs btn-icon rounded-circle" href="javascript:;">
                                            <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="js-plus btn btn-outline-secondary btn-xs btn-icon rounded-circle" href="javascript:;">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion mb-5" id="shopCartAccordion">
                                <div class="accordion-item">
                                    <a class="accordion-button collapsed" href="#" role="button" data-bs-toggle="collapse" data-bs-target="#shopCartAccordionCollapseOne" aria-expanded="false" aria-controls="shopCartAccordionCollapseOne">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0">
                                                <span class="svg-icon svg-icon-sm text-primary">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 8H16C15.4 8 15 8.4 15 9V16H10V17C10 17.6 10.4 18 11 18H16C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18H21C21.6 18 22 17.6 22 17V13L20 8Z" fill="#035A4B" />
                                                        <path opacity="0.3" d="M20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18ZM15 4C15 3.4 14.6 3 14 3H3C2.4 3 2 3.4 2 4V13C2 13.6 2.4 14 3 14H15V4ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill="#035A4B" />
                                                    </svg>

                                                </span>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                Free shipping
                                            </div>
                                        </div>
                                    </a>

                                    <div id="shopCartAccordionCollapseOne" class="accordion-collapse collapse" data-bs-parent="#shopCartAccordion">
                                        <div class="accordion-body">
                                            <p class="mb-0">We offer free shipping anywhere in the U.S. A skilled delivery team will bring the boxes into your office.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <a class="accordion-button collapsed" href="#" role="button" data-bs-toggle="collapse" data-bs-target="#shopCartAccordionCollapseTwo" aria-expanded="false" aria-controls="shopCartAccordionCollapseTwo">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0">
                                                <span class="svg-icon svg-icon-sm text-primary">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.3" x="3" y="3" width="18" height="18" rx="9" fill="#035A4B" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.42647 12H7.23529C7.23529 14.6315 9.36852 16.7647 12 16.7647C14.6315 16.7647 16.7647 14.6315 16.7647 12C16.7647 9.36853 14.6315 7.23529 12 7.23529C10.8231 7.23529 9.71618 7.66521 8.8607 8.4153L8.70962 8.30952C8.37305 8.07385 7.91166 8.3222 7.92302 8.73291L7.96298 10.178C7.97224 10.5127 8.30136 10.7439 8.61932 10.639L9.99538 10.1855C10.3863 10.0566 10.4628 9.53709 10.1256 9.30103L9.8755 9.12587C10.4798 8.6783 11.2189 8.42647 12 8.42647C13.9736 8.42647 15.5735 10.0264 15.5735 12C15.5735 13.9736 13.9736 15.5735 12 15.5735C10.0264 15.5735 8.42647 13.9736 8.42647 12Z" fill="#035A4B" />
                                                    </svg>

                                                </span>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                30 Days return
                                            </div>
                                        </div>
                                    </a>

                                    <div id="shopCartAccordionCollapseTwo" class="accordion-collapse collapse" data-bs-parent="#shopCartAccordion">
                                        <div class="accordion-body">
                                            <p class="mb-0">If you're not satisfied, return it for a full refund. We'll take care of disassembly and return shipping.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-grid mb-4">
                                <button type="button" class="btn btn-primary btntransition">Add to cart</button>
                            </div>

                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <div class="svg-icon svg-icon-sm text-primary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z" fill="#035A4B" />
                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z" fill="#035A4B" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="flex-grow-1 ms-2">
                                    <span class="small me-1">Need Help?</span>
                                    <a class="link small" href="#">Chat now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container content-space-t-2 content-space-md-3">
                    <div class="row">
                        <div class="col-md-6 mb-5 mb-md-0">
                            <div class="pe-lg-4">
                                <h3>Details</h3>
                                <p>As popular off field as they are on, New Era caps are standard issue amongst those with a passion for street culture, blending progressive styles with carefully crafted design. Known for their innovative use of colour, bold designs are added season upon season, referencing everything.</p>
                            </div>
                        </div>

                        <div class="col-md-6 mb-5 mb-md-0">
                            <h3>Material and care</h3>

                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-py-2 mb-0">
                                        <li>Main: 100% Cotton</li>
                                        <li>Soft twill</li>
                                        <li>Ribbed, diagonal pattern</li>
                                        <li>Slightly structured</li>
                                    </ul>
                                </div>

                                <div class="col-sm-6">
                                    <ul class="list-py-2 mb-0">
                                        <li>One size fits all</li>
                                        <li>Imported</li>
                                        <li>Product color: Dark greenish</li>
                                        <li>Product code: #1465791</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row justify-content-lg-between align-items-md-center">
                        <div class="col-md-6 col-lg-5 content-space-1 content-space-md-2">
                            <h2 class="mb-4">A casual cap with Front originals style</h2>
                            <p>This men's hat has low-key Trefoil style with an embroidered logo on the front.</p>
                            <p>Made of washed canvas, the hat has a crushable, packable design and an adjustable back strap so you can personalize the fit.</p>
                        </div>

                        <div class="col-md-6">
                            {/* <div class="bg-img-center h-100 rounded-2" style="background-image: url(../assets/img/750x750/img3.jpg); min-height: 30rem;"></div> */}
                        </div>
                    </div>

                    <div class="row justify-content-lg-between align-items-md-center content-space-t-1 content-space-t-lg-3">
                        <div class="col-md-6 col-lg-5 order-md-2 content-space-1 content-space-md-2">
                            <h2 class="mb-4">A casual cap with Front originals style</h2>
                            <p>This men's hat has low-key Trefoil style with an embroidered logo on the front.</p>
                            <p>Made of washed canvas, the hat has a crushable, packable design and an adjustable back strap so you can personalize the fit.</p>
                        </div>

                        <div class="col-md-6 order-md-1">
                            {/* <div class="bg-img-center h-100 rounded-2" style="background-image: url(../assets/img/750x750/img4.jpg); min-height: 30rem;"></div> */}
                        </div>
                    </div>
                </div>

                <div class="container content-space-2 content-space-lg-3">
                    <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                        <h2>Just for you</h2>
                    </div>

                    <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
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
                    </div>
                </div>
                <div id="reviewSection" class="container content-space-b-2 content-space-b-lg-3">
                    <div class="row">
                        <div class="col-md-4 mb-7 mb-md-0">
                            <div class="border-bottom pb-4 mb-4">
                                <div class="card bg-primary mb-3">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-center">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <span class="display-4 text-white">4.7</span>
                                                </div>

                                                <div class="flex-grow-1 ms-3">
                                                    <div class="d-flex gap-1 small">
                                                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                    </div>
                                                    <span class="text-white">287 reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3>Rating breakdown</h3>
                                <div class="d-grid gap-1">
                                    <a class="row align-items-center" href="#" style={{maxWidth:'25rem'}}>
                                        <div class="col-3">
                                            <span class="text-dark">5 stars</span>
                                        </div>

                                        <div class="col-7">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width:'100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div class="col-2 text-end">
                                            <span>205</span>
                                        </div>
                                    </a>

                                    <a class="row align-items-center" href="#" style={{maxWidth:'25rem'}}>
                                        <div class="col-3">
                                            <span class="text-dark">4 stars</span>
                                        </div>

                                        <div class="col-7">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width:'53%'}} aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-end">
                                            <span>55</span>
                                        </div>
                                    </a>

                                    <a class="row align-items-center" href="#" style={{maxWidth:'w5rem'}}>
                                        <div class="col-3">
                                            <span class="text-dark">3 stars</span>
                                        </div>

                                        <div class="col-7">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width:'20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div class="col-2 text-end">
                                            <span>23</span>
                                        </div>
                                    </a>

                                    <a class="row align-items-center" href="#" style={{maxWidth:'25rem'}}>
                                        <div class="col-3">
                                            <span class="text-dark">2 stars</span>
                                        </div>

                                        <div class="col-7">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width:'0%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div class="col-2 text-end">
                                            <span>0</span>
                                        </div>
                                    </a>

                                    <a class="row align-items-center" href="#" style={{maxWidth:'25rem'}}>
                                        <div class="col-3">
                                            <span class="text-dark">1 stars</span>
                                        </div>

                                        <div class="col-7">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width:'1%'}} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div class="col-2 text-end">
                                            <span>4</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <h4 class="display-4 text-primary">77%</h4>
                            <p class="small">of customers recommend this product</p>
                        </div>

                        <div class="col-md-8">
                            <div class="ps-md-4">
                                <div class="border-bottom pb-4 mb-4">
                                    <div class="row align-items-center">
                                        <div class="col-sm mb-2 mb-sm-0">
                                            <h4 class="mb-0">Sort on</h4>
                                        </div>

                                        <div class="col-sm-auto">
                                            <select class="form-select form-select-sm">
                                                <option value="mostRecent" selected>Most recent</option>
                                                <option value="relevant">Relevant</option>
                                                <option value="helpful">Helpful</option>
                                                <option value="newest">Newest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <ul class="list-comment list-comment-divider mb-5">
                                    <li class="list-comment-item">
                                        <div class="d-flex gap-1 mb-3">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>


                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <img class="avatar avatar-sm avatar-circle" src="../assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>

                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <h5 class="mb-0">Christina Kray</h5>
                                                    <span class="d-block small text-muted">April 3, 2019</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-5">
                                            <p>I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a “mens” hat.</p>
                                        </div>

                                        <div class="mb-2">
                                            <span class="text-dark fw-semibold">Christina</span>
                                            <span>- Verified Purchase</span>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <span class="small me-2">Was this helpful?</span>

                                            <div class="d-flex gap-2">
                                                <a class="btn btn-white btn-xs" href="javascript:;">
                                                    <i class="bi-hand-thumbs-up me-1"></i> Yes <span>(45)</span>
                                                </a>
                                                <a class="btn btn-white btn-xs" href="javascript:;">
                                                    <i class="bi-hand-thumbs-down me-1"></i> No <span>(21)</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="list-comment-item">
                                        <div class="d-flex gap-1 mb-3">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>

                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <img class="avatar avatar-sm avatar-circle" src="../assets/img/160x160/img1.jpg" alt="Image Description" />
                                            </div>

                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <h5 class="mb-0">Hailey</h5>
                                                    <span class="d-block small text-muted">January 19, 2019</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-5">
                                            <p>Material is great and the hat is comfortable and stylish.</p>
                                        </div>

                                        <div class="mb-2">
                                            <span class="text-dark fw-semibold">Hailey</span>
                                            <span>- Verified Purchase</span>
                                        </div>


                                        <div class="d-flex align-items-center">
                                            <span class="small me-2">Was this helpful?</span>

                                            <div class="d-flex gap-2">
                                                <a class="btn btn-white btn-xs" href="javascript:;">
                                                    <i class="bi-hand-thumbs-up me-1"></i> Yes <span>(2)</span>
                                                </a>
                                                <a class="btn btn-white btn-xs" href="javascript:;">
                                                    <i class="bi-hand-thumbs-down me-1"></i> No <span>(0)</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="list-comment-item">
                                        <div class="d-flex gap-1 mb-3">
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                        </div>


                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <img class="avatar avatar-sm avatar-circle" src="../assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </div>

                                            <div class="flex-grow-1 ms-3">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <h5 class="mb-0">Chrizelle</h5>
                                                    <span class="d-block small text-muted">December 21, 2018</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-5">
                                            <p>A really well built cap. It looks great and wears just as well. A great staple in ball caps.</p>
                                        </div>

                                        <div class="mb-2">
                                            <span class="text-dark fw-semibold">Chrizelle</span>
                                            <span>- Verified Purchase</span>
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <span class="small me-2">Was this helpful?</span>

                                            <div class="d-flex gap-2">
                                                <a class="btn btn-white btn-xs" href="javascript:;">
                                                    <i class="bi-hand-thumbs-up me-1"></i> Yes <span>(0)</span>
                                                </a>
                                                <a class="btn btn-white btn-xs" href="javascript:;">
                                                    <i class="bi-hand-thumbs-down me-1"></i> No <span>(0)</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div class="d-sm-flex justify-content-sm-end gap-2">
                                    <a class="btn btn-link" href="#">Read more <i class="bi-chevron-right small ms-1"></i></a>
                                    <button type="button" class="btn btn-primary btn-transition rounded-pill">Write a review</button>
                                </div>
                            </div>
                        </div>
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
            </main>
        </React.Fragment>
    )
}

import React from 'react'

export default function ProductList() {
    return (
        <React.Fragment>
            <main id="content" role="main">
                <div class="bg-light">
                    <div class="container py-4">
                        <div class="row">
                            <div class="col-sm">
                                <h4 class="mb-0">Products Grid</h4>
                            </div>

                            <div class="col-sm-auto">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb mb-0">
                                        <li class="breadcrumb-item">
                                            <a href="index.html">Shop</a>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <a href="products-grid.html">Products</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">Grid</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="navbar-expand-lg mb-5">
                                <div class="d-grid">
                                    <button type="button" class="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                                        <span class="d-flex justify-content-between align-items-center">
                                            <span class="text-dark">Filter</span>

                                            <span class="navbar-toggler-default">
                                                <i class="bi-list"></i>
                                            </span>

                                            <span class="navbar-toggler-toggled">
                                                <i class="bi-x"></i>
                                            </span>
                                        </span>
                                    </button>
                                </div>

                                <div id="navbarVerticalNavMenu" class="collapse navbar-collapse">
                                    <div class="w-100">
                                        <form>
                                            <div class="border-bottom pb-4 mb-4">
                                                <h5>Gender</h5>

                                                <div class="d-grid gap-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="menCheckbox" checked />
                                                        <label class="form-check-label" for="menCheckbox">Men (73)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="womenCheckbox" checked />
                                                        <label class="form-check-label" for="womenCheckbox">Women (51)</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border-bottom pb-4 mb-4">
                                                <h5>Brand</h5>

                                                <div class="d-grid gap-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="adidasCheckbox" />
                                                        <label class="form-check-label" for="adidasCheckbox">Adidas (16)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="newBalanceCheckbox" />
                                                        <label class="form-check-label" for="newBalanceCheckbox">New Balance (8)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="nikeCheckbox" />
                                                        <label class="form-check-label" for="nikeCheckbox">Nike (35)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="fredPerryCheckbox" />
                                                        <label class="form-check-label" for="fredPerryCheckbox">Fred Perry (5)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="tnfCheckbox" />
                                                        <label class="form-check-label" for="tnfCheckbox">The North Face (1)</label>
                                                    </div>
                                                </div>

                                                <div class="collapse" id="collapseBrand">
                                                    <div class="d-grid gap-2">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="gucciCheckbox" />
                                                            <label class="form-check-label" for="gucciCheckbox">Gucci (5)</label>
                                                        </div>

                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="mangoCheckbox" />
                                                            <label class="form-check-label" for="mangoCheckbox">Mango (1)</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a class="link-sm link-collapse" href="#collapseBrand" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseBrand">
                                                    <span class="link-collapse-default">View more</span>
                                                    <span class="link-collapse-active">View less</span>
                                                </a>
                                            </div>

                                            <div class="border-bottom pb-4 mb-4">
                                                <h5>Size</h5>

                                                <div class="d-grid gap-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="sizeSCheckbox" checked />
                                                        <label class="form-check-label" for="sizeSCheckbox">S (27)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="sizeMCheckbox" />
                                                        <label class="form-check-label" for="sizeMCheckbox">M (18)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="sizeLCheckbox" checked />
                                                        <label class="form-check-label" for="sizeLCheckbox">L (0)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="sizeXLCheckbox" />
                                                        <label class="form-check-label" for="sizeXLCheckbox">XL (1)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="sizeXXLCheckbox" />
                                                        <label class="form-check-label" for="sizeXXLCheckbox">XXL (2)</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border-bottom pb-4 mb-4">
                                                <h5>Category</h5>

                                                <div class="d-grid gap-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="tshirtCheckbox" checked />
                                                        <label class="form-check-label" for="tshirtCheckbox">T-shirt (73)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="shoesCheckbox" />
                                                        <label class="form-check-label" for="shoesCheckbox">Shoes (0)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="accessoriesCheckbox" checked />
                                                        <label class="form-check-label" for="accessoriesCheckbox">Accessories (51)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="topsCheckbox" checked />
                                                        <label class="form-check-label" for="topsCheckbox">Tops (5)</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="bottomCheckbox" />
                                                        <label class="form-check-label" for="bottomCheckbox">Bottom (11)</label>
                                                    </div>
                                                </div>


                                                <div class="collapse" id="collapseCategory">
                                                    <div class="d-grid gap-2">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="shortsCheckbox" />
                                                            <label class="form-check-label" for="shortsCheckbox">Shorts (6)</label>
                                                        </div>

                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="hatsCheckbox" />
                                                            <label class="form-check-label" for="hatsCheckbox">Hats (3)</label>
                                                        </div>

                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="socksCheckbox" />
                                                            <label class="form-check-label" for="socksCheckbox">Socks (8)</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a class="link-sm link-collapse" href="#collapseCategory" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseCategory">
                                                    <span class="link-collapse-default">View more</span>
                                                    <span class="link-collapse-active">View less</span>
                                                </a>
                                            </div>

                                            <div class="border-bottom pb-4 mb-4">
                                                <h5>Rating</h5>

                                                <div class="d-grid gap-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="1starCheckbox" />
                                                        <label class="form-check-label" for="1starCheckbox">
                                                            <span class="d-flex gap-1">
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                (3)
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="2starCheckbox" />
                                                        <label class="form-check-label" for="2starCheckbox">
                                                            <span class="d-flex gap-1">
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                (10)
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="3starCheckbox" />
                                                        <label class="form-check-label" for="3starCheckbox">
                                                            <span class="d-flex gap-1">
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                (3)
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="4starCheckbox" />
                                                        <label class="form-check-label" for="4starCheckbox">
                                                            <span class="d-flex gap-1">
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                                (34)
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="5starCheckbox" />
                                                        <label class="form-check-label" for="5starCheckbox">
                                                            <span class="d-flex gap-1">
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                                (120)
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="d-grid">
                                                <button type="button" class="btn btn-white btn-transition">Clear all</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-9">
                            <div class="row align-items-center mb-5">
                                <div class="col-sm mb-3 mb-sm-0">
                                    <h6 class="mb-0">110 products</h6>
                                </div>

                                <div class="col-sm-auto">
                                    <div class="d-sm-flex justify-content-sm-end align-items-center">
                                        <div class="mb-2 mb-sm-0 me-sm-2">
                                            <select class="form-select form-select-sm">
                                                <option value="Relevance" selected>Relevance</option>
                                                <option value="mostRecent">Most recent</option>
                                            </select>
                                        </div>

                                        <div class="mb-2 mb-sm-0 me-sm-2">
                                            <select class="form-select form-select-sm">
                                                <option value="alphabeticalOrderSelect1" selected>A-to-Z</option>
                                                <option value="alphabeticalOrderSelect2">Z-to-A</option>
                                            </select>
                                        </div>

                                        <ul class="nav nav-segment">
                                            <li class="nav-item">
                                                <a class="nav-link" href="products-grid.html">
                                                    <i class="bi-grid-fill"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" href="products-list.html">
                                                    <i class="bi-list"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="d-grid gap-3 mb-10">
                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img-top" src="../assets/img/300x180/img3.jpg" alt="Image Description" />
                                                <div class="card-pinned-top-start">
                                                    <span class="badge bg-success rounded-pill">New arrival</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Accessories</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Herschel backpack in dark blue</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$56.99</p>
                                                </div>


                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">0</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img1.jpg" alt="Image Description" />
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Clothing</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Front hoodie</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$91.88</p>
                                                </div>


                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">40</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img4.jpg" alt="Image Description" />
                                                <div class="card-pinned-top-start">
                                                    <span class="badge bg-danger rounded-pill">Out of stock</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Accessories</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Herschel backpack in gray</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$29.99 <span class="text-body ms-1"><del>$33.99</del></span></p>
                                                </div>

                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">125</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img6.jpg" alt="Image Description" />
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Clothing</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Front Originals adicolor t-shirt with trefoil logo</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$38.00</p>
                                                </div>


                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">9</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img7.jpg" alt="Image Description" />
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Accessories</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Front mesh baseball cap with signature logo</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$8.8</p>
                                                </div>

                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">9</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img2.jpg" alt="Image Description" />
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Accessories</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Front Originals adicolor t-shirt in gray</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$24</p>
                                                </div>

                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star-muted.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">0</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img5.jpg" alt="Image Description" />
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Clothing</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">COLLUSION Unisex mechanic print t-shirt</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$43.99</p>
                                                </div>

                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">35</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="card card-bordered card-stretched-vertical shadow-none">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card-pinned">
                                                <img class="card-img" src="../assets/img/300x180/img8.jpg" alt="Image Description" />
                                            </div>
                                        </div>

                                        <div class="col-sm-8">
                                            <div class="card-body">
                                                <div class="mb-2">
                                                    <a class="link-sm link-secondary" href="#">Accessories</a>
                                                </div>

                                                <div class="mb-2">
                                                    <h4 class="card-title">
                                                        <a class="text-dark" href="product-overview.html">Billabong Walled snapback in green</a>
                                                    </h4>
                                                    <p class="card-text text-dark">$12.00</p>
                                                </div>


                                                <div class="mb-3">
                                                    <a class="d-inline-flex align-items-center" href="#">
                                                        <div class="d-flex gap-1 me-2">
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                            <img src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                                        </div>
                                                        <span class="small">35</span>
                                                    </a>
                                                </div>

                                                <div class="card-footer">
                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add to cart</button>
                                                        <button type="button" class="btn btn-soft-secondary btn-sm btn-transition rounded-pill">
                                                            <i class="bi-heart me-1"></i> Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <nav aria-label="Page navigation">
                                <ul class="pagination justify-content-center">
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

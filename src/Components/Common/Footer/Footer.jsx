import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <footer class="border-top">
                <div class="container">
                    <div class="row justify-content-lg-between content-space-t-2 content-space-b-lg-2">
                        <div class="col-lg-3 mb-5">
                            <div class="d-flex align-items-start flex-column h-100">
                                <a class="w-100 mb-3 mb-lg-auto" href="index.html" aria-label="Front">
                                    <img class="brand" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/logos/logo.svg" alt="Logo" />
                                </a>

                                <p class="text-muted small mb-0">&copy; Front. 2021 Htmlstream.</p>
                            </div>
                        </div>

                        <div class="col-6 col-md-4 col-lg-3 ms-lg-auto mb-5 mb-lg-0">
                            <h5>Account</h5>
                            <ul class="list-unstyled list-py-1">
                                <li><a class="link-sm text-secondary" href="#">Placing an order</a></li>
                                <li><a class="link-sm text-secondary" href="#">Shipping options</a></li>
                                <li><a class="link-sm text-secondary" href="#">Tracking a package</a></li>
                                <li><a class="link-sm text-secondary" href="#">Country availability</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
                            <h5>Company</h5>
                            <ul class="list-unstyled list-py-1">
                                <li><a class="link-sm text-secondary" href="#">Financing</a></li>
                                <li><a class="link-sm text-secondary" href="#">Recycling</a></li>
                                <li><a class="link-sm text-secondary" href="#">Return policy</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 col-lg-2 mb-5 mb-lg-0">
                            <h5 class="mb-3">Resources</h5>

                            <ul class="list-unstyled list-py-1">
                                <li><a class="link-sm link-secondary" href="#"><i class="bi-question-circle-fill me-1"></i> Help</a></li>
                                <li><a class="link-sm link-secondary" href="#"><i class="bi-person-circle me-1"></i> Your Account</a></li>
                            </ul>

                            <div class="btn-group">
                                <button type="button" class="btn btn-white btn-sm dropdown-toggle" id="footerSelectLanguage" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                                    <span class="d-flex align-items-center">
                                        <img class="avatar avatar-xss avatar-circle me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width="16" />
                                        <span>English (US)</span>
                                    </span>
                                </button>

                                <div class="dropdown-menu" aria-labelledby="footerSelectLanguage">
                                    <a class="dropdown-item d-flex align-items-center active" href="#">
                                        <img class="avatar avatar-xss avatar-circle me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width="16" />
                                        <span>English</span>
                                    </a>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <img class="avatar avatar-xss avatar-circle me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width="16" />
                                        <span>Deutsch</span>
                                    </a>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <img class="avatar avatar-xss avatar-circle me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Image description" width="16" />
                                        <span>Español</span>
                                    </a>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <img class="avatar avatar-xss avatar-circle me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Image description" width="16" />
                                        <span>中文 (繁體)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="my-0" />

                    <div class="row align-items-sm-center content-space-1">
                        <div class="col-sm mb-4 mb-sm-0">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                        <i class="bi-facebook"></i>
                                    </a>
                                </li>

                                <li class="list-inline-item">
                                    <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                        <i class="bi-google"></i>
                                    </a>
                                </li>

                                <li class="list-inline-item">
                                    <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                        <i class="bi-twitter"></i>
                                    </a>
                                </li>

                                <li class="list-inline-item">
                                    <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                        <i class="bi-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-auto">
                            <ul class="list-inline list-separator">
                                <li class="list-inline-item">
                                    <a class="link-sm link-secondary" href="https://htmlstream.com/preview/front-v4.3.1/page-privacy.html">Privacy &amp; policy</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="link-sm link-secondary" href="https://htmlstream.com/preview/front-v4.3.1/page-terms.html">Terms &amp; conditions</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="link-sm link-secondary" href="https://htmlstream.com/preview/front-v4.3.1/page-careers.html">Careers</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>


            <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-close">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="signupModalFormLoginWithEmail">
                                <div class="text-center mb-7">
                                    <h2>Log in</h2>
                                    <p>Don't have an account yet?
                                        <a class="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options='{ "targetSelector": "#signupModalFormSignup",
                                        "groupName": "idForm" }'>Sign up</a>
                                    </p>
                                </div>
                                <form class="js-validate needs-validation" novalidate>
                                    <div class="mb-3">
                                        <label class="form-label" for="signupModalFormLoginEmail">Your email</label>
                                        <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="email@site.com" aria-label="email@site.com" required />
                                        <span class="invalid-feedback">Please enter a valid email address.</span>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label class="form-label" for="signupModalFormLoginPassword">Password</label>
                                        </div>

                                        <input type="password" class="form-control form-control-lg" name="password" id="signupModalFormLoginPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minlength="8" />
                                        <span class="invalid-feedback">Please enter a valid password.</span>
                                    </div>
                                    <div class="d-grid gap-3">
                                        <a class="btn btn-white btn-lg" href="#">
                                            <span class="d-flex justify-content-center align-items-center">
                                                <img class="avatar avatar-xss me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                Sign up with Google
                                            </span>
                                        </a>
                                        <a class="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options='{
                                    "targetSelector": "#signupModalFormSignupWithEmail", "groupName": "idForm" }'>Sign up with Email</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="signupModal09" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-close">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="signupModalFormLoginWithEmail">
                                <div class="text-center mb-7">
                                    <h2>Register</h2>
                                    <p>Don't have an account yet?
                                        <a class="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options='{ "targetSelector": "#signupModalFormSignup",
                                        "groupName": "idForm" }'>Sigin</a>
                                    </p>
                                </div>
                                <form class="row js-validate needs-validation" novalidate>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="signupModalFormLoginEmail">Your Name</label>
                                        <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="Your Name" aria-label="Your Name" required />
                                        <span class="invalid-feedback">Please enter a valid Name.</span>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="signupModalFormLoginEmail">Your Last Name</label>
                                        <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="Your Last Name" aria-label="Your Last Name" required />
                                        <span class="invalid-feedback">Please enter a valid Last Name.</span>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="signupModalFormLoginEmail">Your email</label>
                                        <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="email@site.com" aria-label="email@site.com" required />
                                        <span class="invalid-feedback">Please enter a valid email address.</span>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="signupModalFormLoginEmail">Your Mobile Number</label>
                                        <input type="email" class="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="Your Mobile Number" aria-label="Your Mobile Number" required />
                                        <span class="invalid-feedback">Please enter a valid Mobile Number.</span>
                                    </div>
                                    
                                    <div class="col-md-6 mb-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label class="form-label" for="signupModalFormLoginPassword">Password</label>
                                        </div>

                                        <input type="password" class="form-control form-control-lg" name="password" id="signupModalFormLoginPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minlength="8" />
                                        <span class="invalid-feedback">Please enter a valid password.</span>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label class="form-label" for="signupModalFormLoginPassword">Confirm Password</label>
                                        </div>
                                        <input type="password" class="form-control form-control-lg" name="password" id="signupModalFormLoginPassword" placeholder="Confirm Password" aria-label="Confirm Password required" required minlength="8" />
                                        <span class="invalid-feedback">Please enter a valid password.</span>
                                    </div>
                                    <div class="d-grid gap-3">
                                        <a class="btn btn-white btn-lg" href="#">
                                            <span class="d-flex justify-content-center align-items-center">
                                                <img class="avatar avatar-xss me-2" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                Sign up with Google
                                            </span>
                                        </a>
                                        <a class="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options='{
                                    "targetSelector": "#signupModalFormSignupWithEmail", "groupName": "idForm" }'>Sign up with Email</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-top offcanvas-navbar-search bg-light" tabindex="-1" id="offcanvasNavbarSearch">
                <div class="offcanvas-body">
                    <div class="container">
                        <div class="w-lg-75 mx-lg-auto">
                            <div class="d-flex justify-content-end mb-3">
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div class="mb-7">
                                <form>
                                    <div class="input-card">
                                        <div class="input-card-form">
                                            <input type="text" class="form-control form-control-lg" placeholder="Search Front" aria-label="Search Front" />
                                        </div>
                                        <button type="button" class="btn btn-primary btn-lg">Search</button>
                                    </div>
                                </form>
                            </div>

                            <div class="d-none d-md-block">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <h5>Quick Links</h5>
                                        </div>

                                        <div class="row">
                                            <div class="col-6">
                                                <ul class="list-pointer list-pointer-primary mb-0">
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Search Results List</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Search Results Grid</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">About</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Services</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Invoice</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-6">
                                                <ul class="list-pointer list-pointer-primary mb-0">
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Profile</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">User Contacts</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Reviews</a>
                                                    </li>
                                                    <li class="list-pointer-item">
                                                        <a class="link-sm link-secondary" href="#">Settings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <img class="img-fluid" src="../assets/img/mockups/img1.png" alt="Image Description" />
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="mb-4">
                                                            <h5>Featured Item</h5>
                                                            <p>Create astonishing web sites and pages.</p>
                                                        </div>
                                                        <a class="btn btn-outline-primary btn-xs btn-transition" href="#">Apply now <i class="bi-chevron-right small ms-1"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarEmptyShoppingCart">
                <div class="offcanvas-header justify-content-end border-0 pb-0">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <div class="text-center">
                        <div class="mb-5">
                            <img class="avatar avatar-xl avatar-4x3" src="https://htmlstream.com/preview/front-v4.3.1/assets/svg/illustrations/oc-empty-cart.svg" alt="SVG" />
                        </div>

                        <div class="mb-5">
                            <h3>Your cart is currently empty</h3>
                            <p>Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.</p>
                        </div>

                        <a class="btn btn-primary btn-transition rounded-pill px-6" href="index.html">Start shopping</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

let searchForm=document.querySelector('.search-form');
            let searchBtn=document.querySelector('#search-btn');
                searchBtn.addEventListener('click',() => {
                    searchForm.classList.toggle("active");
                    shopCart.classList.remove('active');
                    logForm.classList.remove('active');
                    menuBtn.classList.remove('active');
                });
                let shopCart=document.querySelector('.shopping');
                document.querySelector('#cart-btn').onclick=()=>{
                    shopCart.classList.toggle("active");
                    searchForm.classList.remove('active');
                    logForm.classList.remove('active');
                    menuBtn.classList.remove('active');
                }
                let logForm=document.querySelector('.login');
                document.querySelector('#login-btn').onclick=()=>{
                    logForm.classList.toggle('active');
                    searchForm.classList.remove('active');
                    shopCart.classList.remove('active');
                    menuBtn.classList.remove('active');

                }
                let menuBtn=document.querySelector('.navb');
                document.querySelector('#menu-btn').onclick=()=>{
                    menuBtn.classList.toggle("active");
                    searchForm.classList.remove('active');
                    shopCart.classList.remove('active');
                    logForm.classList.remove('active');
                }
                window.onscroll=()=>{
                    searchForm.classList.remove('active');
                    shopCart.classList.remove('active');
                    logForm.classList.remove('active');
                    menuBtn.classList.remove('active');
                }
                    var swiper = new Swiper(".product-slider", {
                        loop:true,
                        spaceBetween: 20,
                        autoplay:{
                            delay:7500,
                            disableOnInteraction:false,
                        },
                        breakpoints: {
                             0: {
                                slidesPerView: 1,
                                  },
                             768: {
                                slidesPerView: 2,
                                   },
                             1024: {
                                slidesPerView: 3,
                                   },
                                        },
                                });
            
                var swiper = new Swiper(".review-slider", {
                        loop:true,
                        spaceBetween: 20,
                        autoplay:{
                            delay:7500,
                            disableOnInteraction:false,
                        },
                        breakpoints: {
                             0: {
                                slidesPerView: 1,
                                  },
                             768: {
                                slidesPerView: 2,
                                   },
                             1024: {
                                slidesPerView: 3,
                                   },
                                        },
                                });
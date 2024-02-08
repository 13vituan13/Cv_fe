
<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

export default {
  mounted() {
    // init Swiper into mounted hook
    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        // autoHeight: true,
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
  }
}
</script>
<template>
    <section id="PROJECTS" class="elementor-section elementor-section-ptb invisible has-pad">
        <div class="elementor-title">
            <h2 class="heading">Dự Án</h2>
            <div class="heading__sub">Kỹ năng và kinh nghiệm
                <!-- Skilled & Experienced -->
            </div>
        </div>
        <div class="project-info">
            <div class="row">
                <div class="col-12 project-info__card">
                    <div class="blog-slider">
                        <div class="blog-slider__wrp swiper-wrapper">
                            <div class="blog-slider__item swiper-slide">
                                <div class="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                                        alt="">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">
                                        01/07/2021 ~ 01/09/2021</span>
                                    <div class="blog-slider__title">EDOGAWA
                                    </div>
                                    <div class="blog-slider__text">Quản lý
                                        công viên quận Edogawa</div>
                                    <div class="project-tag">
                                        <span style="background:#dc0530">Laravel</span>
                                        <span style="background: #ffc107">JS</span>
                                        <span style="background: #17a2b8">HTML</span>
                                        <span style="background:#dc0530">Laravel</span>
                                        <span style="background: #ffc107">JS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-slider__item swiper-slide">
                                <div class="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                                        alt="">
                                </div>
                                <div class="blog-slider__content">
                                    <div class="blog-slider__title">EDOGAWA
                                    </div>
                                    <div class="blog-slider__text">Lorem
                                        ipsum dolor sit amet consectetur,
                                        adipisicing elit. Recusandae
                                        voluptate repellendus magni illo ea
                                        animi?</div>

                                    <a href="#" class="blog-slider__button">READ
                                        MORE</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__pagination"></div>
                    </div>
                </div>
                <div class="col-12 project-info__card">
                    <div class="blog-slider">
                        <div class="blog-slider__wrp swiper-wrapper">
                            <div class="blog-slider__item swiper-slide">
                                <div class="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                                        alt="">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">
                                        01/07/2021 ~ 01/09/2021</span>
                                    <div class="blog-slider__title">EDOGAWA
                                    </div>
                                    <div class="blog-slider__text">Quản lý
                                        công viên quận Edogawa</div>
                                    <div class="project-tag">
                                        <span style="background:#dc0530">Laravel</span>
                                        <span style="background: #ffc107">JS</span>
                                        <span style="background: #17a2b8">HTML</span>
                                        <span style="background:#dc0530">Laravel</span>
                                        <span style="background: #ffc107">JS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-slider__item swiper-slide">
                                <div class="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                                        alt="">
                                </div>
                                <div class="blog-slider__content">
                                    <div class="blog-slider__title">EDOGAWA
                                    </div>
                                    <div class="blog-slider__text">Lorem
                                        ipsum dolor sit amet consectetur,
                                        adipisicing elit. Recusandae
                                        voluptate repellendus magni illo ea
                                        animi?</div>

                                    <a href="#" class="blog-slider__button">READ
                                        MORE</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__pagination"></div>
                    </div>
                </div>
                <div class="col-12 project-info__card">
                    <div class="blog-slider">
                        <div class="blog-slider__wrp swiper-wrapper">
                            <div class="blog-slider__item swiper-slide">
                                <div class="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                                        alt="">
                                </div>
                                <div class="blog-slider__content">
                                    <span class="blog-slider__code">
                                        01/07/2021 ~ 01/09/2021</span>
                                    <div class="blog-slider__title">EDOGAWA
                                    </div>
                                    <div class="blog-slider__text">Quản lý
                                        công viên quận Edogawa</div>
                                    <div class="project-tag">
                                        <span style="background:#dc0530">Laravel</span>
                                        <span style="background: #ffc107">JS</span>
                                        <span style="background: #17a2b8">HTML</span>
                                        <span style="background:#dc0530">Laravel</span>
                                        <span style="background: #ffc107">JS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-slider__item swiper-slide">
                                <div class="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                                        alt="">
                                </div>
                                <div class="blog-slider__content">
                                    <div class="blog-slider__title">EDOGAWA
                                    </div>
                                    <div class="blog-slider__text">Lorem
                                        ipsum dolor sit amet consectetur,
                                        adipisicing elit. Recusandae
                                        voluptate repellendus magni illo ea
                                        animi?</div>

                                    <a href="#" class="blog-slider__button">READ
                                        MORE</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-slider__pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
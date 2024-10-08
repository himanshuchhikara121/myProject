import React from 'react';
import css from './Testimonial.module.css';
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';


const Testimonials = () => {
    return (
        <div id='reviews' className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>
                    Elevate your skincare game with our top-rated picks, and see the difference for yourself!
                    </span>
                </div>

                <img src={Hero} alt="Testimonial Hero" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>
            <div className={css.reviews}>Reviews</div>
            <div className={css.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                >
                    {TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <div className={css.testimonial}>
                            <img src={testimonial.image} alt={testimonial.name} />
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;

import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import { motion } from 'framer-motion';

function Hero() {
    const transition = { duration: 3, type: "spring" };

    return (
        <div id='home' className={css.container}>
            {/* left section */}
            <div className={css.h_sides}>
                <div className={css.text1}>
                    <span>Skin protection cream</span>
                </div>
                <div className={css.text2}>
                    <span>Trendy collection</span>
                    <span> Elevate Your Wardrobe with the Hottest Trends</span>
                </div>
            </div>

            {/* middle or hero section */}
            <div className={css.wrapper}>
                <motion.div
                    initial={{ bottom: '3rem' }}
                    whileInView={{ bottom: '0rem' }}
                    transition={transition}
                    className={css.blueCircle}>
                </motion.div>
                <motion.img
                    src={HeroImg}
                    alt=""
                    width={600}
                    initial={{ bottom: '-3rem' }}
                    
                    whileInView={{ bottom: '0rem' }}
                    transition={transition}
                />
            </div>

            {/* right section */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;



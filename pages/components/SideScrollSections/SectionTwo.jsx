import React, {useRef, useLayoutEffect} from 'react';
import { useInView } from "react-intersection-observer";
import styles from '../../../styles/SideScroll.module.css';

import gsap from "gsap";


const SectionTwo = () => {
    const componentRef = useRef(null);
    const { ref, inView } = useInView({
      threshold: 0.5, // adjusted the threshold value as needed
      rootMargin: "0px 0px", // adjust the root margin value as needed
    });

    const animateOnScroll = () => {
        if (inView) {
          gsap.to(componentRef.current, {
            duration: 6,
            rotation: 1200,
            opacity: 1,
            x: 0,
            y: -150,
            ease: "power3.out",
            
            });
        }
      };
    
        

    return (
        <div className={styles.sectionOne} ref={ref}>

            <ul className={styles.links}>
                <li>
                <a ref={componentRef} style={{ opacity: 0, transform: "translateY(-50px)"}} className={styles.button}  id='button' ></a>
                    {animateOnScroll()}
                </li>
                <li>
                    <a className={styles.button} id='link'></a>
                </li>
            </ul>   
    </div>
    );
}
export default SectionTwo;
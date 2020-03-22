import React from 'react';
import './style.scss';
import styles from './style.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Parallax } from 'react-scroll-parallax';


class About extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            slides_info:
            [
                {
                    title:"WHAT WE DO",
                    text: "With end-to-end capabilities, we bring together textile form factor design, wearable sensor electronics inclusion, and manufacturing all under our roof. Backed by our powerhouse R&D department, we help guide you throughout the transformation journey and together create a future-ready solution - today. we are proud to keep adding more and more possibilities to our portfolio.Learn more about the solutions that are already available. "
                },
                {
                    title:"WHAT WE DO",
                    text: "With end-to-end capabilities, we bring together textile form factor design, wearable sensor electronics inclusion, and manufacturing all under our roof. Backed by our powerhouse R&D department, we help guide you throughout the transformation journey and together create a future-ready solution - today. we are proud to keep adding more and more possibilities to our portfolio.Learn more about the solutions that are already available. "
                },
                {
                    title:"WHAT WE DO",
                    text: "With end-to-end capabilities, we bring together textile form factor design, wearable sensor electronics inclusion, and manufacturing all under our roof. Backed by our powerhouse R&D department, we help guide you throughout the transformation journey and together create a future-ready solution - today. we are proud to keep adding more and more possibilities to our portfolio.Learn more about the solutions that are already available. "
                }
            ]
        }
    }
    

    render() {
        return (
            <div className="row  Margin-Bottom">
                <div className="column small-12 medium-3  large-6">
                    <div>
                    </div>
                </div>
                <div className="column small-12 medium-9 large-6">
                    <Carousel
                        partialVisible
                        minimumTouchDrag={80}
                        swipeable={true}
                        arrows={false} 
                        showDots={true}
                        containerClass={`${styles.Slider} SliderAboutUs`}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1023
                                },
                                items: 1,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1023,
                                    min: 464
                                },
                                items: 1,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                            }
                        }}
                    >

                        {this.state.slides_info.map((item, index) => ( 
                            <div key={index}>
                                <div className={styles.SlideCounts}>
                                </div>
                                <div className={styles.TitleContainer}>
                                    <div className={styles.Title}>
                                        {item.title}
                                    </div>
                                </div>
                                <div className={`${styles.Text} Text`}>
                                    {item.text}
                                </div>
                            </div>
                            ))
                        }
                        
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default About;
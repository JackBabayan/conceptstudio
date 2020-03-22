import React from 'react';
import styles from './style.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


class Industriels extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            slides_info:
            [
                {
                    text:"automotive & aerospace",
                    img:"https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                },
                {
                    text:"automotive & aerospace",
                    img:"https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                },
                {
                    text:"automotive & aerospace",
                    img:"https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                }
            ]
        }
    }
    

    render() {
        return (
            <div className={`${styles.Container}  Margin-Bottom`}>
                <div className="row">
                    <div className="column small-10 medium-9 large-7">
                        <div className={`${styles.Title} Title`}>
                            INDUSTRIES we
                            help
                        </div>
                    </div>
                </div>
                <Carousel
                    partialVisible
                    showDots={false}
                    centerMode={false}
                    minimumTouchDrag={80}
                    swipeable={true}
                    draggable={true}
                    arrows={false} 
                    containerClass={styles.Slider}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1440
                            },
                            items: 3,
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
                        <div className={styles.SliderItem}  key={index}>
                            <div>
                                <div className={styles.SliderItemImg}>
                                    <img src={item.img} alt="lol" />
                                </div>
                                <div className={styles.SliderItemInfo}>
                                    <div className={styles.SliderItemCount}>
                                    </div>
                                    <div className={styles.Text}>
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    
                </Carousel>
             
            </div>
        );
    }
}

export default Industriels;
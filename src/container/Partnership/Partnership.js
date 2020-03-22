import React from 'react';
import styles from './style.module.scss';

class Partnership extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            partner_info:
            [
                {
                    title:"LEVERAGE",
                    text: "We knit textiles embedded with sensors and actuators that you can integrate into your existing solutions, granting your product the transformative ability to sense and react to the human body. "
                },
                {
                    title:"INTEGRATE",
                    text: "Building an innovative system that taps into the human body is easy if you harness the power of the SKIIN Textile Computing™ Platform. The platform consists of the textile-based hardware interface, the software backend that transmits and processes the data streams, and the API that allows developers to make sense of data for the end-user. Building upon the SKIIN platform provides enterprises a shortcut to developing more complex solutions and unlocking untapped potential.  "
                },
                {
                    title:"CO-DESIGN",
                    text: "You bring the idea and Myant will bring the capability to design, engineer, prototype, and manufacture a Textile Computing™ solution.Let us work together to bring your innovation to the world.   "
                }
            ]
        }
    }

    render() {
        return (
            <div className={`${styles.PartnershipContainer} row Margin-Bottom `}>
                <div className="column small-12 large-6 xl-large-7">
                    <div className={styles.Information}>
                        <div className={`${styles.Title} Title`}>
                            HOW
                            PARTNERSHIP
                            WORKS
                        </div>
                        <div className="Text">
                            <p>
                                The digitization of everyday products continues to accelerate - With no end in sight. Traditional companies that failed to innovate are pushed out of their industries while doors opened for the industry disruptors. We can help you pivot wisely to e-textile technology and create new innovative solutions for your customers.
                            </p>
                            <p>
                                As your manufacturing solutions partner, Myant helps you create custom solutions that bring innovation to your industry, and provide your customers with the connectivity, tech, and new experiences they desire.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column small-12 medium-9 large-6 xl-large-3">
                    <div className={styles.Container}>
                        {this.state.partner_info.map((item, index) => (
                            <div className={styles.Item}  key={index}>
                                <div className={styles.Count}>
                                </div>
                                <div className={styles.Title}>
                                    {item.title}
                                </div>
                                <div className="LightText">
                                    {item.text}
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default Partnership;
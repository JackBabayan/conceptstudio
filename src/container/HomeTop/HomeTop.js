import React from 'react';
import styles from './style.module.scss';


class HomeTop extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            SubTitlePath:"CONNECTING HUMANITY".split(''),
            Title:"THROUGH TEXTILE COMPUTING".split(''),
            animation:""
        }
        
    }

    componentDidMount=()=>{
        setTimeout(function(){ 
            this.setState({
                animation:"active"
            })
         }.bind(this), 1000);
    }


    render(){
        return (
            <div className={`${styles.Container} Margin-Bottom`}>
                <div className="row align-right">
                    <div className="column small-12">
                        <div className={styles.Info}>
                            <div className={styles[this.state.animation]}>
                                <div className={styles.SubTitle}>
                                    {this.state.SubTitlePath.map((item, index) => (
                                        <span className={styles.active} key={index} style={{ "animation-duration": Math.random()+"s"}}>
                                            {item}
                                        </span>
                                    ))
                                    }
                                </div>
                                <div className={styles.Title}>
                                    {this.state.Title.map((item, index) => (
                                            <span className={styles.active} key={index} style={{ "animation-duration": Math.random()+"s"}}>
                                                {item}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column small-12 medium-9 large-6">
                        <div className="Text">
                            Discover how we are building a better
                            connection between you, your body, your
                            community and the world around you.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeTop;

import React from 'react';
import { run } from './viewport';

class Experience extends React.Component {
    items = document.querySelectorAll('#timeline li')
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    isInViewPort = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth ||
                document.documentElement.clientWidth)
        )
    };

    run = () => this.items.forEach(item => {
        if (this.isInViewPort(item)) {
            item.classList.add('show');
        }
    })

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('load', this.run);
        window.addEventListener('resize', this.run);
        window.addEventListener('scroll', this.run);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div className="main-content" >
                <div id="experience-header">
                    <div className="container">
                        <h1><i className="fas fa-brain">Experience timeline</i></h1>
                        <h3><i className="fas fa-user">Valerii Tarasov</i></h3>
                    </div>
                </div>
                <section id="timeline">
                    <ul>
                        <li>
                            <div>
                                <h3>
                                    <i className="fas fa-chevron-right">Lorem ipsum dolor sit. </i>
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                                    amet earum beatae debitis inventore aspernatur corrupti magni
                                    totam tempore illum.
                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    <i className="fas fa-chevron-right">Lorem ipsum dolor sit. </i>
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                                    amet earum beatae debitis inventore aspernatur corrupti magni
                                    totam tempore illum.
                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    <i className="fas fa-chevron-right">Lorem ipsum dolor sit. </i>
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                                    amet earum beatae debitis inventore aspernatur corrupti magni
                                    totam tempore illum.
                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    <i className="fas fa-chevron-right">Lorem ipsum dolor sit. </i>
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                                    amet earum beatae debitis inventore aspernatur corrupti magni
                                    totam tempore illum.
                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    <i className="fas fa-chevron-right">Lorem ipsum dolor sit. </i>
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                                    amet earum beatae debitis inventore aspernatur corrupti magni
                                    totam tempore illum.
                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Experience;

import React from 'react';
import './Home.css'
import bikeImage from '../../images/bike.png'
import carImage from '../../images/car.png'
import busImage from '../../images/bus.png'
import trainImage from '../../images/train.png'

const Home = () => {
    return (
        <div className='container'>
            <div class="row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col rounded">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fluid" src={bikeImage} alt="" />
                            <h3 className='text-center'>Bike</h3>
                        </div>
                    </div>
                </div>
                <div class="col rounded">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fluid" src={carImage} alt="" />
                            <h3 className='text-center'>Car</h3>
                        </div>
                    </div>
                </div>
                <div class="col rounded">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fluid" src={busImage} alt="" />
                            <h3 className='text-center'>Bus</h3>
                        </div>
                    </div>
                </div>
                <div class="col rounded">
                    <div class="card h-100">
                        <div class="card-body">
                            <img class="img-fluid" src={trainImage} alt="" />
                            <h3 className='text-center'>Train</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;
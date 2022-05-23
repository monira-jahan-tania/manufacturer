import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SummaryItem from './SummaryItem';
import users from '../../images/users.png';
import review from '../../images/review.png';
import revenue from '../../images/revenue.png';
import tools from '../../images/tools.png'

const BussinessSummary = () => {

    return (
        <div className='mb-10'>
            <h5 className='text-5xl mt-20  mb-10'>Our Business Summary</h5>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <SummaryItem cardTitle="Customers" bgClass="bg-gradient-to-r from-secondary to-primary" number='100+' img={users}></SummaryItem>

                <SummaryItem cardTitle="Annual revenue" bgClass="bg-gradient-to-r from-secondary to-primary" number='120M+' img={revenue}></SummaryItem>
                <SummaryItem cardTitle="Reviews" bgClass="bg-gradient-to-r from-secondary to-primary" number='33K+' img={review}></SummaryItem>
                <SummaryItem cardTitle="Tools" bgClass="bg-gradient-to-r from-secondary to-primary" number='50+' img={tools}></SummaryItem>
            </div>
        </div>
    );
};

export default BussinessSummary;
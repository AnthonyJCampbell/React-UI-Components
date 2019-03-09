import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className='inlineTitle'>
            <h2>Lambda School</h2>
            <h3>@LambdaSchool - {moment().format('LL')}</h3>
        </div>
    );
}

export default HeaderTitle;

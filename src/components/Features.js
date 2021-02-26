import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Features extends Component {
    render() {
        return (
            <div>
                features
            </div>
        )
    }
}

export default requireAuth(Features);
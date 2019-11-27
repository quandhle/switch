import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Gmail extends Component {
    handleClick = () => {
        // console.log('Button clicked')
    }

    render() {
        return (
            <div className="submit">
                <Button
                    variant="contained"
                    onClick={this.handleClick}
                >
                    Submit
                </Button>
            </div>
        )
    }
}

export default Gmail;

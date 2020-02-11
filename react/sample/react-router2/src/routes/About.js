import React from 'react';

const About = ( { match } ) => {
    return (
        <div>
            {match.params.id}'s profile
        </div>
    );
};

export default About;
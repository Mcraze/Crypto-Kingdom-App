import React from 'react';
import '../styles/components.scss';

const JoinDiscord = () => {
    return (
        <section id='join-discord'>
            <div>
                <h2 className='section-heading'>JOIN US VIA <span>DISCORD</span></h2>
                <p>Invest and manage all your crypto at one place.</p>
                <a href="https://discord.com/" target='_blank' rel='noreferrer'>
                    <button className='btn'>Join Discord</button>
                </a>
            </div>
        </section>
    )
}

export default JoinDiscord

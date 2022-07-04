import React from "react";
import './ProfileContainer.scss';
import Avatar from './assets/Avatar.jpg';

const ProfileContainer = () => {
    return(
        <div class="profileContainer">
            <div class="avatar">
                <img src={Avatar} alt="avatar"></img>
            </div>
            <div class="name">
                <p>Larry Ramjutton</p>
            </div>
            <div class="title">
                <p>Web Developer</p>
            </div>
            <div class="following">
                <p>Following:</p>
            </div>
            <div class="followers">
                <p>Followers:</p>
            </div>
        </div>
    );
};

export default ProfileContainer;
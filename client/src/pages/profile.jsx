import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="profile-container">Loading...</div>;
    }

    if (!user) {
        return <div className="profile-container">Please log in to view your profile.</div>;
    }

    const userName = user.name || 'Kshiti Ghelani';
    const profession = user.profession || 'Web Developer and Designer';
    const ranking = user.ranking || '8/10';
    const userId = user.userId || 'Kshiti123';
    const email = user.email || 'kshiti@example.com';
    const phone = user.phone || '123 456 7890';
    const skills = user.skills || ['Web Designer', 'Web Developer', 'WordPress', 'WooCommerce', 'PHP', '.Net'];
    
    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-info">
                    <div className="profile-details">
                        <div className="profile-name-and-edit">
                            <h1>{userName}</h1>
                            <button className="edit-btn">Edit Profile</button>
                        </div>
                        <p className="profile-profession">{profession}</p>
                        <p className="profile-ranking">RANKINGS : {ranking}</p>
                    </div>
                </div>
            </div>

            <div className="profile-body">
                <div className="left-sidebar">
                    <div className="sidebar-section">
                        <h3>SKILLS</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="main-content">
                    <div className="about-section">
                        <div className="info-row">
                            <span className="info-label">User Id: </span>
                            <span className="info-value">{userId}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Name: </span>
                            <span className="info-value">{userName}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Email: </span>
                            <span className="info-value">{email}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Phone: </span>
                            <span className="info-value">{phone}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Profession: </span>
                            <span className="info-value">{profession}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
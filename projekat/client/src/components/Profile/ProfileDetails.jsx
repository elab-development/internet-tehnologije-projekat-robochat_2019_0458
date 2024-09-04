import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import api from "../../api/posts";
import "./ProfileDetails.css";

export default function ProfileDetails() {
  const [profile, setProfile] = useState({ bio: "", avatar: "" });
  const [updatedProfile, setUpdatedProfile] = useState({ bio: "", avatar: "" });
  const [showModal, setShowModal] = useState(false); // Control the pop-up modal visibility
  const { user, token } = useAuth();

  const getProfile = async () => {
    try {
      const response = await api.get(`/profiles/${user.id}`, {
        headers: {
          "x-auth-token": token,
        },
      });
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleEditClick = () => {
    setUpdatedProfile({ ...profile });
    setShowModal(true); // Show the modal when editing
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleSave = async () => {
    try {
      await api.put(`/profiles/${user.id}`, updatedProfile, {
        headers: {
          "x-auth-token": token,
        },
      });
      setProfile(updatedProfile);
      setShowModal(false); // Close the modal after saving
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-avatar-container">
        <img
          src={profile.avatar || "default-avatar.png"}
          alt="Avatar"
          className="profile-avatar"
        />
      </div>

      <div className="profile-info">
        <div className="profile-name">{user.name}</div>

        <div className="profile-label">Bio</div>
        <p className="profile-bio">{profile.bio}</p>

        <div className="profile-label">Gender</div>
        <p className="profile-bio">{user.gender}</p>

        <div className="profile-label">Email</div>
        <p className="profile-email">{user.email}</p>

        <button className="edit-profile-info-button" onClick={handleEditClick}>
          Edit Profile Info
        </button>

        {/* Pop-up Modal */}
        {showModal && (
          <div className="modal-background">
            <div className="modal-content">
              <div className="modal-field">
                <label>Avatar URL:</label>
                <input
                  type="text"
                  name="avatar"
                  value={updatedProfile.avatar}
                  onChange={handleInputChange}
                  placeholder="Enter new avatar URL"
                  style={{width:'350px', height:'50px', fontSize:'18px'}}
                />
              </div>
              <div className="modal-field">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={updatedProfile.bio}
                  onChange={handleInputChange}
                  placeholder="Enter your bio"
                  style={{width:'350px', height:'200px', fontSize:'18px'}}
                />
              </div>
              <div className="modal-buttons">
                <button onClick={handleSave}>Save Changes</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

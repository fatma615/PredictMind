
import React, { useState, useRef } from "react";
import "./Profil.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

 const Profil = () => {
  const [editMode, setEditMode] = useState(false);

  const fileInputRef = useRef(null);
  const [showPw, setShowPw] = useState({
  current: false,
  new: false,
  confirm: false,
});
  const [user, setUser] = useState({
    nom: "Belhassen",
    prenom: "Ahmed",
    email: "ahmed.belhassen@example.com",
    telephone: "+216 98 765 432",
    dateNaissance: "14 mai 1990",
    role: "Administrateur",
    photo: null,
    password: "fder",
    newPassword: "",
    confirmPassword: "",
  });

  // ouvrir galerie
  const openFilePicker = () => {
    if (!editMode) return;
    fileInputRef.current.click();
  };

  // choisir image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setUser({
        ...user,
        photo: imageUrl,
      });
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
const togglePw = (field) => {
  setShowPw((prev) => ({
    ...prev,
    [field]: !prev[field],
  }));
};
const handleSave = () => {

  if (user.newPassword !== user.confirmPassword) {
    alert("Mot de passe incorrect");
    return;
  }

  console.log("Data:", user);

  setEditMode(false);
};
  return (
    <div className="profile-container">

      {/* HEADER */}
      <div className="profile-card header">

        {/* AVATAR */}
        <div
          className={`avatar ${editMode ? "editable" : ""}`}
          onClick={openFilePicker}
        >
          {user.photo ? (
            <img src={user.photo} alt="avatar" />
          ) : (
            <span>
              {user.prenom[0]}{user.nom[0]}
            </span>
          )}
        </div>

        <div className="info">
          <h2>{user.prenom} {user.nom}</h2>
          <p>{user.email}</p>
          <span className="badge">{user.role}</span>
        </div>
        <button
        className="btn-edit"
        onClick={() => {
        if (editMode) {
            handleSave();} // sauvegarde
            //  
        else {
            setEditMode(true); // entrer en mode édition
    }
  }}
>
  {editMode ? "Sauvegarder" : "Modifier"}
</button>
        

        {/* hidden input file */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>

      {/* DETAILS */}
      <div className="profile-card">
        <h3>Informations personnelles</h3>

        <div className="grid">

          {/* Nom */}
          <div>
            <label>Nom</label>
            {editMode ? (
              <input name="nom" value={user.nom} onChange={handleChange} />
            ) : (
              <p>{user.nom}</p>
            )}
          </div>

          {/* Prénom */}
          <div>
            <label>Prénom</label>
            {editMode ? (
              <input name="prenom" value={user.prenom} onChange={handleChange} />
            ) : (
              <p>{user.prenom}</p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label>Téléphone</label>
            {editMode ? (
              <input name="telephone" value={user.telephone} onChange={handleChange} />
            ) : (
              <p>{user.telephone}</p>
            )}
          </div>

          {/* Date naissance */}
          <div>
            <label>Date de naissance</label>
            {editMode ? (
              <input name="dateNaissance" value={user.dateNaissance} onChange={handleChange} />
            ) : (
              <p>{user.dateNaissance}</p>
            )}
          </div>

          {/* Email */}
          <div className="full">
            <label>Email</label>
            {editMode ? (
              <input name="email" value={user.email} onChange={handleChange} />
            ) : (
              <p>{user.email}</p>
            )}
          </div>
          {editMode && (
  <div className="password-grid">

    {/* Current */}
    <div className="pw-box">
      <label>Mot de passe actuel</label>
      <div className="pw-input">
        <input
          type={showPw.current ? "text" : "password"}
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="••••••••"
        />
        <span onClick={() => togglePw("current")} className="eye">
          {showPw.current ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>

    {/* New */}
    <div className="pw-box">
      <label>Nouveau mot de passe</label>
      <div className="pw-input">
        <input
          type={showPw.new ? "text" : "password"}
          name="newPassword"
          value={user.newPassword}
          onChange={handleChange}
          placeholder="••••••••"
        />
        <span onClick={() => togglePw("new")} className="eye">
          {showPw.new ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>

    {/* Confirm */}
    <div className="pw-box">
      <label>Confirmer</label>
      <div className="pw-input">
        <input
          type={showPw.confirm ? "text" : "password"}
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
        />
        <span onClick={() => togglePw("confirm")} className="eye">
          {showPw.confirm ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>

  </div>
)}

        </div>
      </div>

    </div>
  );
};

export default Profil; 
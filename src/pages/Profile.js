import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from '../utils/api';

import "../styles/pages/Profile.css";

const Profile = () => {
  const [himpunan, setHimpunan] = useState()
  const [visiMisi, setVisiMisi] = useState()

  async function getDataHimpunan() {
    const data = await api.getHimpunan()
    const data2 = await api.getVisiMisi()

    setHimpunan(data)
    setVisiMisi(data2)
  }

  useEffect(() => {
    getDataHimpunan()
  }, [])

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class='container'>
      <div class='heading'>
        <h1 className='himsi'>{himpunan?.nama_himpunan}</h1>
        <h2 className='namauniv'>{himpunan?.nama_universitas}</h2>
      </div>

      <div class='logo'>
        <img src={himpunan?.logo_himpunan.url} className="profile-logo" alt="Logo" />
      </div>


      {/* -------------------------- Bagian Visi ------------------------- */}
      <div class='visi'>
        <h1 className="visi-judul"> <span class="dot"></span> Visi <span class="dot"></span> </h1>
        <p className='visi-p'>
          {visiMisi?.visi}
        </p>
      </div>


      {/*---------------------------- Bagian Misi-------------------- */}
      <div class='misi'>
        <h1 className="misi-judul"> <span class="dot"></span> Misi <span class="dot"></span> </h1>
        <br></br>

        {visiMisi?.misi.map((item, index) => (
          <div class="flex-container">
            <div className='misi-number'>{index + 1}</div>
            <p className='misi-paragraf'>{item}</p>
          </div>
        ))}
      </div>

      {/*------------------------- Bagian Bidang dan Divisi------------------------- */}

      <div class='bidang'>
        <h1 className="bidang-judul"> Bidang & Divisi </h1>
      </div>

      {/*------------------------ Bagian Struktur Organisasi---------------------------- */}

      <div class='struktur'>
        <h1 className='struktur-judul'> <span class="dot"></span> Struktur Organisasi <span class="dot"></span> </h1>
      </div>

      <div class="logo">
        <img src={himpunan?.gambar_struktur.url} className="struktur-logo" alt="Logo" />
      </div>


      {/*-------------------------- Bagian Struktur Anggota ----------------------------*/}
      <div className="cta-box">
        <button className="btn-pengurus">
          <Link to={`/struktur-anggota`}>Pengurus HIMSI </Link>
        </button>
      </div>

    </div>
  );
};

export default Profile;

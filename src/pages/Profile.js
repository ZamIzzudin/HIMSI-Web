import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from '../utils/api';
import Loading from '../pages/Loading'

import DivisiSlider from "../components/DivisiSlider";

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
    <div class='container profile-page'>
      {himpunan?.nama_himpunan === undefined && (
        <Loading />
      )}

      <div class='heading'>
        <h1 className='himsi'>{himpunan?.nama_himpunan}</h1>
        <h3 className='namauniv'>{himpunan?.nama_universitas}</h3>
      </div>

      <div class='himsi-logo'>
        <img src={himpunan?.logo_himpunan.url} className="profile-logo" alt="Logo" id="visi" />
      </div>


      {/* -------------------------- Bagian Visi ------------------------- */}
      <div class='visi' >
        <h2 className="visi-judul"> <span class="dot"></span> Visi <span class="dot"></span> </h2>
        <p className='visi-p ' id="misi">
          {visiMisi?.visi}
        </p>
      </div>


      {/*---------------------------- Bagian Misi-------------------- */}
      <div class='misi' >
        <h2 className="misi-judul"> <span class="dot"></span> Misi <span class="dot"></span> </h2>
        <br></br>

        {visiMisi?.misi.map((item, index) => (
          <div class="flex-container">
            <div className='misi-number'>{index + 1}</div>
            <p className='misi-paragraf'>{item}</p>
          </div>
        ))}
      </div>

      {/*------------------------- Bagian Bidang dan Divisi------------------------- */}
      <div id="bidangdivisi">
        <DivisiSlider />
      </div>

      {/*------------------------ Bagian Struktur Organisasi---------------------------- */}

      <div class='struktur' id="strukturorganisasi">
        <h2 className='struktur-judul'><span class="dot"></span>Struktur Organisasi<span class="dot"></span></h2>
      </div>

      <div class="logo">
        <img src={himpunan?.gambar_struktur.url} className="struktur-logo" alt="Logo" id="pengurushimsi" />
      </div>


      {/*-------------------------- Bagian Struktur Anggota ----------------------------*/}
      <div className="cta-box" >
        <button className="btn-pengurus mb-5">
          <Link to={`/struktur-anggota`}>Pengurus HIMSI </Link>
        </button>
      </div>

    </div>
  );
};

export default Profile;

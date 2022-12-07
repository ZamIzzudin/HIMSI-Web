import React from 'react'
import '../styles/pages/Profile.css'

const Profile = () => {
    return (
        <div class='container'>

            <div class='heading'>
                <h1>HIMPUNAN MAHASISWA SISTEM INFORMASI</h1>   
                <h2>UIN JAKARTA</h2>
            </div>

            {/* Bagian Visi dan Misi */}

            <div class='visimisi'>
                <h1>VISI DAN MISI</h1>   

                <div class="row">
                    <div class="column">
                        <h1>VISI</h1>                    
                        <p> Mewujudkan HIMSI sebagai wadah pemersatu yang kolaboratif dan 
                            adaptif guna meningkatkan potensi, kemampuan, dan wawasan, serta kepribadian 
                            mahasiswa Sistem Informasi UIN Jakarta.</p>
                    </div>

                    <div class="column" >
                        <h1>MISI</h1>                    
                        <ol>
                            <li>Menjadikan kerjasama tim dan kolaborasi sebagai pondasi dalam menyelenggarakan maupun mengikuti segala kegiatan HIMSI maupun luar HIMSI.
                            </li>
                            <li>Mengoptimalkan potensi mahasiswa HIMSI dengan penyaluran minat bakat mahasiswa sesuai tujuan yang akan dicapai.</li>
                            <li>Meningkatkan rasa kepedulian anggota HIMSI untuk terjun langsung ke masyarakat</li>
                            <li>Aktif menerima, mengevaluasi, dan menyampaikan aspirasi kepada pihak terkait sesuai dengan kebutuhan.</li>
                            <li>Menjalin silaturahmi yang baik antar keluarga besar HIMSI, serta para individu dan organisasi yang terlibat di dalamnya. </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Bagian Bidang dan Divisi */}

            <div class='bidang'>
                <h1>BIDANG DAN DIVISI</h1>
                <h2>HIMPUNAN MAHASISWA SISTEM INFORMASI</h2>
            </div>


            {/* Bagian Struktur Organisasi */}

            <div class='struktur'>
                <h1>STRUKTUR ORGANISASI </h1>
                <h2>HIMPUNAN MAHASISWA SISTEM INFORMASI</h2>
            </div>
        </div>

    )
}

export default Profile
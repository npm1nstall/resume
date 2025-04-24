// Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-section-container">
      <div className="experience-section">
        <h2>PT Surya Raya Nusatama</h2>
        <div className="experience-item">
          <h3>Produksi</h3>
          <h4>Memproduksi kayu untuk piano</h4>
        </div>
      </div>

      <div className="experience-section">
        <h2>PT Bhirawa Steel</h2>
        <div className="experience-item">
          <h3>PLH (Pekerja Harian Lepas)</h3>
          <h4>Produksi bagian baja</h4>
        </div>
      </div>

      <div className="experience-section">
        <h2>Yayasan Pendidikan Manguni</h2>
        <div className="experience-item">
          <h3>Staff Tata Usaha</h3>
          <h4>Mengelola data siswa dan guru</h4>
        </div>
      </div>

      <div className="experience-section">
        <h2>Loe Lan Ing</h2>
        <div className="experience-item">
          <h3>Media</h3>
          <h4>Memfoto produk dan mengedit produk wingko, dodol dll</h4>
        </div>
      </div>
    </div>
  );
}

export default Experience;
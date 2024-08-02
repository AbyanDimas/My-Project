import React from 'react';
import {
  School, Star, BarChart, CheckCircle, People, Person, AccessTime, Male, Female, Phone, Email, LocationOn, Build, AssignmentTurnedIn
} from '@mui/icons-material';

const SchoolStatsWidget = () => {
  const schoolInfo = {
    name: "SMK 1 ADIWERNA",
    logo: "https://pbs.twimg.com/profile_images/553211976805908481/A_9YN2A6_400x400.png",
    accreditation: "A",
    averageScore: 85,
    graduationRate: "98%",
    numberOfStudents: 1200,
    numberOfFemaleStudents: 600,
    numberOfMaleStudents: 600,
    numberOfTeachers: 100,
    schoolHours: "07:00 - 15:00",
    contact: {
      phone: "123-456-7890",
      email: "info@smk1adiwerna.sch.id",
      address: "Jl. Raya No.1, Adiwerna, Tegal"
    },
    facilities: [
      "Laboratorium Komputer",
      "Perpustakaan",
      "Ruang Kelas AC",
      "Lapangan Olahraga"
    ],
    alumniSuccess: "85% alumni bekerja di perusahaan terkemuka"
  };

  const cardStyles = "bg-white shadow-md rounded-lg p-6 flex items-center space-x-4";
  const iconStyles = "text-blue-500";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={`${cardStyles} border-t-4 border-blue-500`}>
          <img src={schoolInfo.logo} alt="School Logo" className="h-16 w-16 rounded-full"/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">{schoolInfo.name}</h5>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-yellow-500`}>
          <Star className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Akreditasi</h5>
            <p className="text-gray-600">{schoolInfo.accreditation}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-green-500`}>
          <BarChart className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Rata-rata Nilai</h5>
            <p className="text-gray-600">{schoolInfo.averageScore}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-purple-500`}>
          <CheckCircle className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Tingkat Kelulusan</h5>
            <p className="text-gray-600">{schoolInfo.graduationRate}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-pink-500`}>
          <People className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Jumlah Siswa</h5>
            <p className="text-gray-600">{schoolInfo.numberOfStudents}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-indigo-500`}>
          <Male className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Jumlah Siswa Laki-laki</h5>
            <p className="text-gray-600">{schoolInfo.numberOfMaleStudents}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-red-500`}>
          <Female className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Jumlah Siswa Perempuan</h5>
            <p className="text-gray-600">{schoolInfo.numberOfFemaleStudents}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-teal-500`}>
          <Person className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Jumlah Guru</h5>
            <p className="text-gray-600">{schoolInfo.numberOfTeachers}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-orange-500`}>
          <AccessTime className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Jam Sekolah</h5>
            <p className="text-gray-600">{schoolInfo.schoolHours}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-cyan-500`}>
          <Phone className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Kontak</h5>
            <p className="text-gray-600">Telepon: {schoolInfo.contact.phone}</p>
            <p className="text-gray-600">Email: {schoolInfo.contact.email}</p>
            <p className="text-gray-600">Alamat: {schoolInfo.contact.address}</p>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-lime-500`}>
          <Build className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Fasilitas</h5>
            <ul className="text-gray-600 list-disc list-inside">
              {schoolInfo.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${cardStyles} border-t-4 border-amber-500`}>
          <AssignmentTurnedIn className={iconStyles}/>
          <div>
            <h5 className="text-lg font-bold text-gray-700">Data Keberhasilan Alumni</h5>
            <p className="text-gray-600">{schoolInfo.alumniSuccess}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolStatsWidget;

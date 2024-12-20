import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../pages/auth/login';
import NotFoundPage from '../pages/error/404';
import Dashboard from '../pages/backoffice/dashboard';
import RegistrasiDaftar from '../pages/backoffice/registrasi/daftar';
import RegistrasiDaftarCreate from '../pages/backoffice/registrasi/daftar/create';
import RegistrasiReguler from '../pages/backoffice/registrasi/reguler';
import RegistrasiInsidental from '../pages/backoffice/registrasi/insidental';
import RegistrasiArsip from '../pages/backoffice/registrasi/arsip';
import PerencanaanDaftar from '../pages/backoffice/perencanaan/daftar';
import PerencanaanReguler from '../pages/backoffice/perencanaan/reguler';
import PerencanaanInsidental from '../pages/backoffice/perencanaan/insidental';
import PerencanaanArsip from '../pages/backoffice/perencanaan/arsip';
import PerencanaanArsipDetail from '../pages/backoffice/perencanaan/arsip/detail';
import PengawasanDaftar from '../pages/backoffice/pengawasan/daftar';
import PengawasanAgenda from '../pages/backoffice/pengawasan/agenda';
import PerencanaanDaftarDetailA from '../pages/backoffice/perencanaan/daftar/detaila';
import PerencanaanDaftarDetail from '../pages/backoffice/perencanaan/daftar/detail';
import PengawasanDaftarCreate from '../pages/backoffice/pengawasan/daftar/create';
import RegistrasiDaftarDetail from '../pages/backoffice/registrasi/daftar/detail';
import RegistrasiArsipDetail from '../pages/backoffice/registrasi/arsip/detail';
import PengawasanAgendaTim from '../pages/backoffice/pengawasan/agenda_tim';
import PengawasanArsip from '../pages/backoffice/pengawasan/arsip';
import PascaPengawasanDaftar from '../pages/backoffice/pasca_pengawasan/daftar';
import PascaPengawasanDaftarCreate from '../pages/backoffice/pasca_pengawasan/daftar/create';
import PascaPengawasanAgenda from '../pages/backoffice/pasca_pengawasan/agenda';
import PascaPengawasanAgendaTim from '../pages/backoffice/pasca_pengawasan/agenda_tim';
import PascaPengawasanArsip from '../pages/backoffice/pasca_pengawasan/sanksi';
import Setting from '../pages/backoffice/setting';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register/daftar" element={<RegistrasiDaftar />} />
      <Route path="/register/daftar/tambah" element={<RegistrasiDaftarCreate />} />
      <Route path="/register/daftar/detail/:dataID" element={<RegistrasiDaftarDetail />} />
      <Route path="/register/reguler" element={<RegistrasiReguler />} />
      <Route path="/register/insidental" element={<RegistrasiInsidental />} />
      <Route path="/register/arsip" element={<RegistrasiArsip />} />
      <Route path="/register/arsip/detail/:dataID" element={<RegistrasiArsipDetail />} />

      <Route path="/perencanaan/daftar" element={<PerencanaanDaftar />} />
      <Route path="/perencanaan/daftar/detaila" element={<PerencanaanDaftarDetailA />} />
      <Route path="/perencanaan/daftar/detail/:dataID" element={<PerencanaanDaftarDetail />} />
      <Route path="/perencanaan/reguler" element={<PerencanaanReguler />} />
      <Route path="/perencanaan/insidental" element={<PerencanaanInsidental />} />
      <Route path="/perencanaan/arsip" element={<PerencanaanArsip />} />
      <Route path="/perencanaan/arsip/detail/:dataID" element={<PerencanaanArsipDetail />} />

      <Route path="/pengawasan/daftar" element={<PengawasanDaftar />} />
      <Route path="/pengawasan/daftar/tambah" element={<PengawasanDaftarCreate />} />
      <Route path="/pengawasan/agenda" element={<PengawasanAgenda />} />
      <Route path="/pengawasan/agenda-tim" element={<PengawasanAgendaTim />} />
      <Route path="/pengawasan/arsip" element={<PengawasanArsip />} />

      <Route path="/pasca-pengawasan/daftar" element={<PascaPengawasanDaftar />} />
      <Route path="/pasca-pengawasan/daftar/tambah" element={<PascaPengawasanDaftarCreate />} />
      <Route path="/pasca-pengawasan/agenda" element={<PascaPengawasanAgenda />} />
      <Route path="/pasca-pengawasan/agenda-tim" element={<PascaPengawasanAgendaTim />} />
      <Route path="/pasca-pengawasan/arsip" element={<PascaPengawasanArsip />} />

      <Route path="/pengaturan" element={<Setting />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

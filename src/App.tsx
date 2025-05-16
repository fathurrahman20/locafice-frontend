import { BrowserRouter, Route, Routes } from "react-router";
import Browse from "./pages/browse";
import CityDetails from "./pages/city-details";
import OfficeDetails from "./pages/office-details";
import BookOffice from "./pages/book-office";
import SuccessBooking from "./pages/success-booking";
import CheckBooking from "./pages/check-booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/office/:slug" element={<OfficeDetails />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

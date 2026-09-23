import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransaccionAprob from "./views/transaccionAprob";
import PagoRecibido from "./views/PagoRecibido";
import type { DatosTransaccion } from "./types/transaccion";

const datosFacturaSeleccionada: DatosTransaccion = {
  idFactura: "9868497",
  valor: "$125.632",
  empresa: "Alpina Productos Alimenticios S.A.",
  pagador: "Miscelanea Rin-Rin",
  medioPago: "Llave Bre-B",
  fechaHora: "13 Ago 2026 16:30"
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/transaccion"
          element={<TransaccionAprob datos={datosFacturaSeleccionada} />} 
        />

        <Route 
          path="/pago-recibido" 
          element={<PagoRecibido datos={datosFacturaSeleccionada} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
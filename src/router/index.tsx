import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            //definimos las rutas hijas aquí
            {
                index: true, //ruta por defecto
                element: <div>Inicio</div>,
            },
            {
                path: "celulares", //ruta para celulares
                element: <div>Celulares</div>,
            },
            {
                path: "nosotros", //ruta para nosotros
                element: <div>Sobre Nosotros</div>,
            },
        ],
    }
]
);

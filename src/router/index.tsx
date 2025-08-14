import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, CellPhonesPage, HomePage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            //definimos las rutas hijas aquí
            {
                index: true, //ruta por defecto
                element: <HomePage />,
            },
            {
                path: "celulares", //ruta para celulares
                element: <CellPhonesPage />,
            },
            {
                path: "nosotros", //ruta para nosotros
                element: <AboutPage />,
            },
        ],
    }
]
);

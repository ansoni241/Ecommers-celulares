import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            {/* IMAGEN DE FONDO */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/img/img-banner.jpg)" }}
            />
            {/* OVERLAY OSCURO */}
            <div className="absolute inset-0 bg-black opacity-50" />
            {/* CONTENIDO DEL BANNER */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
                <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
                    Los Mejores Celulares al Mejor Precio
                </h1>
                <p className="text-lg mb-8 lg:text-xl">
                    Encuentra ofertas exclusivas en smartphones de todas las marcas.
                </p>
                <Link
                    to="/celulares"
                    className="bg-gray-900 hover:bg-gray-950 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
                    >
                        Ver Celulares
                </Link>
            </div>
        </div>
    )
}

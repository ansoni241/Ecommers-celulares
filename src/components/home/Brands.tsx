const brans = [
    {
        image: "/img/brands/Apple-Logo.webp",
        alt: "Apple",
    },
    {
        image: "/img/brands/honor-logo.png",
        alt: "Honor",
    },
    {
        image: "/img/brands/huawei-logo.png",
        alt: "Huawei",
    },
    {
        image: "/img/brands/realme-logo.webp",
        alt: "Realme",
    },
    {
        image: "/img/brands/Samsung_Logo.webp",
        alt: "Samsung",
    },
    {
        image: "/img/brands/xiaomi-logo.webp",
        alt: "Xiomi",
    }
]
export const Brands = () => {
    return (
        <div className="flex flex-col items-center gap-3 pt-16 pb-12">
            <h2 className="font-bold text-2xl">Marcas que disponemos</h2>
            <p className="w-2/3 text-center text-sm md:text-base">
                Encuentra los mejores celulares de las marcas más reconocidas
            </p>
            <div className="grid grid-cols3 gap-6 mt-8 items-center md:grid-cols-6">
                {
                    brans.map((brand, index) => (
                        <div key={index}>
                            <img
                                src={brand.image}
                                alt={brand.alt}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import type { Color, Product, VariantProduct } from "../interfaces";

//Funcion para formatear los precios a dolares
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
}



//Funcion para preparar los productos - (CELULARES)
export const prepareProducts = (products: Product[]) => {
    return products.map(product => {
        //Agrupas las variantes por color
        const colors = product.variants.reduce((acc: Color[], variant: VariantProduct) => {
            const existingColor = acc.find(item => item.color === variant.color);

            if (existingColor) {
                //Si ya existe el color comparamos los precios
                existingColor.price = Math.min(existingColor.price, variant.price);
            }//Mantenemos el precio minimo
            else {
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }
            return acc;
        }, []);
        //Obtener el precio mas bajo de las variantes agrupadas
        const price = Math.min(...colors.map(item => item.price));

        //Devolver el producto formateado
        return {
            ...product,
            price,
            colors: colors.map(({name, color}) => ({name, color})),
            variants: product.variants,
        }
    });
}
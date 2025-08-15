export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-seminbold tracking-tighter mb-4">
        Nuestra empresa
      </h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1680553491336-644d5955ea50?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWRpZmljaW9zfGVufDB8fDB8fHww"
        alt="Imagen de fondo"
        className="h-[500px] w-full object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
          Somos una empresa dedicada a la venta de celulares de alta calidad.
          Nuestro objetivo es ofrecer a nuestros clientes los mejores productos
          y un servicio excepcional.
        </p>
        <p>
          Contamos con un equipo de profesionales apasionados por la tecnología
          y comprometidos con la satisfacción del cliente. Nos esforzamos por
          mantenernos actualizados con las últimas tendencias y novedades en el
          mundo de los celulares.
        </p>
        <p>
          En nuestra tienda, encontrarás una amplia variedad de marcas y modelos,
          todos seleccionados cuidadosamente para garantizar la mejor experiencia
          de compra.
        </p>
        <h2 className="text-3xl font-samibold tracking-tighh mt-8 mb-4">
          ¡No esperes más y compra tu celular con nosotros!
        </h2>
        <p>
          Si tienes alguna pregunta o necesitas ayuda para elegir el celular perfecto,
          no dudes en contactarnos. Estamos aquí para ayudarte a encontrar el dispositivo
          que mejor se adapte a tus necesidades.
          <a href="mailto:anthonyansoni24@gmail.com">anthonyansoni24@gmail.com</a> {''} o llamanos al
          <a href="tel:+59176537648">+59176537648</a>.
        </p>
      </div>
    </div>
  )
}

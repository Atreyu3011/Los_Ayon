import SiteHeader from '@/components/SiteHeader';
import LeadForm from '@/components/LeadForm';
import DynamicEffects from '@/components/DynamicEffects';

const amenities = [
  ['Fogatero', 'Un punto de encuentro para compartir tardes y noches al aire libre.', '✦'],
  ['Áreas verdes', 'Espacios para descansar, convivir y disfrutar el paisaje natural.', '⌁'],
  ['Gazebos', 'Zonas de sombra y reunión integradas al entorno del desarrollo.', '⌂'],
  ['Senderos', 'Recorridos para caminar y conectar con la vegetación del lugar.', '↝'],
  ['Área arbolada', 'Vegetación pensada para conservar el carácter natural del proyecto.', '♧'],
  ['Muelles', 'Acceso proyectado para contemplar y disfrutar la cercanía con el río.', '≈'],
  ['Juegos infantiles', 'Un espacio proyectado para la convivencia de las familias.', '◌']
];

const gallery = [
  ['/images/rio-panorama.jpeg', 'Vista panorámica del río y la vegetación'],
  ['/images/fauna.jpeg', 'Fauna observada en el entorno natural'],
  ['/images/rio-montana.jpeg', 'Paisaje del río con montaña al fondo'],
  ['/images/terreno-recorrido.jpeg', 'Recorrido por el terreno'],
  ['/images/rio-reflejo.jpeg', 'Agua y vegetación en la ribera'],
  ['/images/terreno.jpeg', 'Estado actual del terreno']
];

export default function Home() {
  return (
    <main>
      <DynamicEffects />
      <SiteHeader />

      <section className="hero" id="inicio">
        <img className="hero-image" src="/images/rio-panorama.jpeg" alt="Río rodeado de vegetación en El Fuerte, Sinaloa" />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-content shell reveal hero-reveal">
          <p className="eyebrow light">El Fuerte · Sinaloa</p>
          <h1>Tu historia frente al río comienza aquí.</h1>
          <p className="hero-copy">
            Un desarrollo ecoturístico en etapa de preventa para construir patrimonio, disfrutar la naturaleza y crear momentos en familia.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contacto">Consultar disponibilidad</a>
            <a className="button ghost" href="#galeria">Conocer el entorno</a>
          </div>
        </div>
        <div className="hero-facts stagger-children" aria-label="Datos principales del proyecto">
          <div><span>Desde</span><strong>127 m²</strong></div>
          <div><span>200 m²</span><strong>$400,000</strong></div>
          <div><span>Apartado</span><strong>$20,000</strong></div>
          <div><span>Disponibles</span><strong>20 lotes</strong></div>
        </div>
      </section>

      <section className="intro section reveal" id="proyecto">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">Terrenos Frente al Río</p>
            <h2>Un lugar pensado para vivir y convivir.</h2>
          </div>
          <div className="intro-copy">
            <p>
              A pocos pasos de un paisaje natural privilegiado, Terrenos Frente al Río reúne espacios de distintas superficies dentro de un proyecto de baja escala: solo 26 lotes en total.
            </p>
            <p>
              La propuesta combina privacidad, contacto con la naturaleza y áreas de convivencia proyectadas para que cada propietario pueda imaginar su propio escape en El Fuerte.
            </p>
            <div className="micro-note"><span /> Fotografías reales del entorno del proyecto.</div>
          </div>
        </div>
      </section>

      <section className="feature-story section">
        <div className="shell story-grid">
          <figure className="story-image tall reveal tilt-card">
            <img src="/images/rio-vegetacion.jpeg" alt="Paisaje del río cubierto de vegetación" />
            <figcaption>Entorno natural · El Fuerte</figcaption>
          </figure>
          <div className="story-panel reveal">
            <span className="section-number">01</span>
            <p className="eyebrow">Una inversión con sentido</p>
            <h2>Patrimonio, naturaleza y una ubicación para disfrutar.</h2>
            <p>
              El proyecto está orientado a familias, inversionistas y personas que buscan un espacio para una casa de descanso, retiro o proyecto personal cerca del río.
            </p>
            <a className="text-link" href="#ubicacion">Explorar la ubicación <span>→</span></a>
          </div>
          <figure className="story-image small reveal tilt-card">
            <img src="/images/fauna.jpeg" alt="Ave entre los árboles del entorno" />
          </figure>
        </div>
      </section>

      <section className="lots section" id="lotes">
        <div className="shell">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow">Elige tu espacio</p>
              <h2>Superficies para distintos proyectos de vida.</h2>
            </div>
            <p>
              Lotes desde 127 m² hasta 294 m². La disponibilidad y el precio final dependen de la superficie y ubicación de cada lote.
            </p>
          </div>

          <div className="lot-showcase reveal">
            <div className="lot-visual reference-map tilt-card">
              <img
                src="/images/mapa-de-referencia.png"
                alt="Mapa de referencia del desarrollo Terrenos Frente al Río"
              />
            </div>

            <div className="lot-details reveal">
              <span className="pill">Preventa</span>
              <h3>Terreno de 200 m² por solo:</h3>
              <div className="price">$400,000 <small>MXN</small></div>
              <div className="detail-list">
                <div><span>Superficies disponibles</span><strong>127 a 294 m²</strong></div>
                <div><span>Apartado</span><strong>$20,000 MXN</strong></div>
                <div><span>Inventario</span><strong>20 de 26 lotes</strong></div>
                <div><span>Condiciones de pago</span><strong>Consultar con asesor</strong></div>
              </div>
              <a className="button dark" href="#contacto">Solicitar cotización</a>
              <p className="fine-print">Superficies, precios y disponibilidad sujetos a confirmación.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-strip">
        <div className="shell services-grid stagger-children">
          <div>
            <span>Servicios proyectados</span>
            <strong>Agua</strong>
          </div>
          <div><strong>Energía eléctrica</strong></div>
          <div><strong>Acceso privado</strong></div>
          <div className="service-note">Desarrollo en etapa de preventa.</div>
        </div>
      </section>

      <section className="amenities section" id="amenidades">
        <div className="shell">
          <div className="section-heading centered reveal">
            <p className="eyebrow">Amenidades proyectadas</p>
            <h2>Espacios que invitan a permanecer.</h2>
            <p>Una visión de convivencia sencilla, familiar y conectada con el paisaje.</p>
          </div>
          <div className="amenity-grid stagger-children">
            {amenities.map(([title, description, icon], index) => (
              <article className="amenity-card tilt-card" key={title}>
                <span className="amenity-index">0{index + 1}</span>
                <span className="amenity-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legal section">
        <div className="shell legal-card reveal tilt-card">
          <span className="legal-mark">§</span>
          <div>
            <p className="eyebrow">Seguridad jurídica</p>
            <h2>La documentación correspondiente podrá revisarse durante el proceso de asesoría y compra.</h2>
          </div>
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <div className="shell">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow">Galería</p>
              <h2>Conoce el entorno real.</h2>
            </div>
            <p>Imágenes tomadas en el terreno y sus alrededores.</p>
          </div>
          <div className="gallery-grid stagger-children">
            {gallery.map(([src, alt], index) => (
              <figure className={`gallery-item item-${index + 1} tilt-card`} key={src}>
                <img src={src} alt={alt} loading="lazy" />
                <figcaption>{index < 3 ? 'Río y entorno' : 'Terreno actual'}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="location section" id="ubicacion">
        <div className="shell location-grid">
          <div className="location-copy reveal">
            <p className="eyebrow">Ubicación</p>
            <h2>El Fuerte, Sinaloa.</h2>
            <p>
              Visita el lugar, recorre el entorno y conoce personalmente los lotes disponibles. Agenda una cita antes de acudir para recibir atención personalizada.
            </p>
            <a
              className="button dark"
              href="https://maps.app.goo.gl/1EsKeYFa2zRpTgrV7"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="map-wrap reveal tilt-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2563.739714224435!2d-108.6358056!3d26.4100556!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m2!1m1!2zMjbCsDI0JzM2LjIiTiAxMDjCsDM4JzA4LjkiVw!5e1!3m2!1ses!2smx!4v1783743083891!5m2!1ses!2smx"
              title="Ubicación de Terrenos Frente al Río"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="contact section" id="contacto">
        <img className="contact-bg" src="/images/rio-cercano.jpeg" alt="" />
        <div className="contact-overlay" />
        <div className="shell contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow light">Da el siguiente paso</p>
            <h2>Agenda una visita y conoce tu próximo espacio.</h2>
            <p>Recibe información actualizada sobre lotes, superficies, disponibilidad y condiciones de pago.</p>
            <div className="contact-links">
              <a href="tel:+526684195973">668 419 5973</a>
              <a href="mailto:terrenosfrentealrioelfuertesin@gmail.com">terrenosfrentealrioelfuertesin@gmail.com</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src="/brand/mark.svg" alt="" width="56" height="56" />
            <div><strong>Terrenos Frente al Río</strong><span>El Fuerte, Sinaloa</span></div>
          </div>
          <div className="footer-links">
            <a href="https://www.facebook.com/profile.php?id=61590456660318" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://maps.app.goo.gl/1EsKeYFa2zRpTgrV7" target="_blank" rel="noreferrer">Google Maps</a>
            <a href="mailto:terrenosfrentealrioelfuertesin@gmail.com">Correo</a>
          </div>
          <p className="footer-disclaimer">
            Las imágenes muestran el entorno real. Las representaciones de distribución y amenidades son conceptuales. Precios, superficies y disponibilidad pueden cambiar sin previo aviso.
          </p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/526684195973?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Terrenos%20Frente%20al%20R%C3%ADo."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span>WhatsApp</span>
        <b>↗</b>
      </a>
    </main>
  );
}

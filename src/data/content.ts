export const tools = [
  {
    icon: 'book',
    title: 'Generador de catálogos',
    desc: 'Convierte tus productos en catálogos profesionales listos para compartir con clientes y canales de venta.',
    tag: 'Disponible',
    size: 'lg',
  },
  {
    icon: 'label',
    title: 'Generador de etiquetas',
    desc: 'Etiquetas con código de barras, precio y datos clave, listas para imprimir en el formato que necesites.',
    tag: 'Disponible',
    size: 'md',
  },
  {
    icon: 'barcode',
    title: 'Generador de SKU',
    desc: 'Crea códigos únicos y consistentes con reglas propias. Adiós a los duplicados y al caos de inventario.',
    tag: 'Disponible',
    size: 'md',
  },
  {
    icon: 'layers',
    title: 'Y más herramientas',
    desc: 'Estamos construyendo un set completo para sellers: plantillas, exportaciones masivas y utilidades del día a día.',
    tag: 'En camino',
    size: 'sm',
  },
] as const

export const steps = [
  {
    n: '01',
    title: 'Carga tus productos',
    desc: 'Sube un Excel/CSV o agrégalos a mano. Sin configuraciones largas.',
  },
  {
    n: '02',
    title: 'Elige la herramienta',
    desc: 'Catálogo, etiquetas o SKU. Cada una con plantillas listas para usar.',
  },
  {
    n: '03',
    title: 'Descarga y vende',
    desc: 'Obtén tus archivos en segundos y úsalos en cualquier marketplace.',
  },
] as const

export const benefits = [
  {
    icon: 'clock',
    title: 'Ahorra tiempo',
    desc: 'Automatiza tareas repetitivas',
  },
  { icon: 'shield', title: 'Reduce errores', desc: 'Precisión y exactitud' },
  { icon: 'rocket', title: 'Escala sin límites', desc: 'Crece sin fricción' },
  { icon: 'gauge', title: 'Control total', desc: 'Todo ordenado en un lugar' },
  {
    icon: 'coin',
    title: 'Más rentabilidad',
    desc: 'Enfócate en lo que importa',
  },
] as const

export const faqs = [
  {
    q: '¿Qué es FazSeller?',
    a: 'Es una plataforma de herramientas para vendedores de e-commerce: generador de catálogos, de etiquetas, de SKU y más, pensada para ahorrarte horas de trabajo manual.',
  },
  {
    q: '¿Necesito experiencia previa para usarlo?',
    a: 'No. Si recién empiezas a vender, las plantillas te guían paso a paso. Si ya tienes experiencia, puedes personalizar reglas, formatos y trabajar en lote.',
  },
  {
    q: '¿Con qué marketplaces funciona?',
    a: 'Los archivos que generas son compatibles con los principales marketplaces. Estamos ampliando integraciones progresivamente.',
  },
  {
    q: '¿Qué es la actualización de stock y precio?',
    a: 'Será la próxima gran función: mantener tu inventario y precios sincronizados entre tus canales de venta. Únete a la lista de espera para acceso anticipado.',
  },
  {
    q: '¿Tiene costo?',
    a: 'Puedes empezar gratis con hasta 50 productos. Todos los planes incluyen todas las funcionalidades; solo cambia la cantidad de productos que gestionas.',
  },
  {
    q: '¿Qué pasa si mi catálogo crece?',
    a: 'Puedes subir de plan en cualquier momento. Tus datos y configuraciones se conservan.',
  },
] as const

export const currency = '$'

export const plans = [
  {
    name: 'Free',
    products: '50',
    desc: 'Descubre FazSeller y arranca tu negocio sin costos.',
    monthly: 0,
    yearly: 0,
    cta: 'Empezar gratis',
    featured: false,
  },
  {
    name: 'Starter',
    products: '500',
    desc: 'Controla tus ventas y dale estructura a tu negocio.',
    monthly: 9,
    yearly: 7,
    cta: 'Elegir Starter',
    featured: false,
  },
  {
    name: 'Pro',
    products: '5,000',
    desc: 'Lleva tu negocio al siguiente nivel sin complicaciones.',
    monthly: 29,
    yearly: 23,
    cta: 'Elegir Pro',
    featured: true,
  },
  {
    name: 'Business',
    products: '12,000',
    desc: 'Sincroniza tus operaciones masivas y conecta a tu equipo.',
    monthly: 79,
    yearly: 63,
    cta: 'Elegir Business',
    featured: false,
  },
] as const

export const allPlansInclude = [
  'Generador de catálogos',
  'Generador de etiquetas',
  'Generador de SKU',
  'Exportaciones sin marca de agua',
  'Futuras herramientas incluidas',
  'Actualización de stock y precio (cuando se lance)',
] as const

export const planFaq = {
  q: '¿Cómo funcionan los planes?',
  a: 'Todos los planes incluyen todas las funcionalidades. Lo único que cambia es la cantidad de productos que puedes gestionar. Puedes cambiar de plan cuando tu catálogo crezca.',
}

# GELD — Marketplace PoC

Demo de catálogo y cotización para Industrias WRX S.A.S., basada en el portafolio GELD 2026 aportado por el solicitante. Proyecto para un tercero. No representa una tienda oficial ni procesa pagos, órdenes o datos personales.

## Experiencia

24 productos, cuatro líneas, filtros por espacio y categoría, búsqueda sin tildes, orden por precio o nombre, selección de presentación y aromas, detalle de producto, carrito persistente local y resumen de cotización descargable. Diseño adaptable a móvil, navegación por teclado y diálogos accesibles.

Precios en COP antes de IVA. No se presume una tarifa de IVA ni un costo de envío. Envases SVG conceptuales, sin fotografías de empaques reales. El peróxido tiene una discrepancia entre el título (5,5%) y la descripción (7,5%) de la fuente; no se afirma una concentración definitiva.

## Desarrollo

Requiere Node 22 y Python 3. Servir estáticos: `python3 -m http.server 8080 --directory dist`.

Para CI: `npm ci`, `npm run check`, `npx playwright install --with-deps chromium` y `npm test`. Las pruebas cubren catálogo, búsqueda, filtros, presentaciones, aromas, cantidades, persistencia, descarga y desbordamiento en escritorio y móvil.

## Publicación

Repositorio esperado: `geld`, rama `main`. En Settings → Pages → Build and deployment, seleccionar GitHub Actions. El workflow verifica cada PR; los pushes a main publican solamente después de pasar las verificaciones. No requiere secretos ni credenciales en el código.

## Contenido editable

`dist/products.js`: productos, precios, presentaciones, usos y aromas. `dist/styles.css`: identidad visual. `dist/app.js`: interacción. `dist/index.html`: contenido comercial. Todos los recursos usan rutas relativas compatibles con GitHub Pages bajo /geld/.

## Antes de operar comercialmente

Confirmar con la empresa referencias, precios, impuestos, inventario, formulaciones, fichas de seguridad, imágenes y permisos de marca. Conectar luego el flujo comercial aprobado y los servicios de pedidos/pagos. La demo no envía información a un proveedor ni simula confirmaciones de compra.

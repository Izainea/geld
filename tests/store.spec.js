const {test,expect}=require('@playwright/test');
test.beforeEach(async({page})=>{await page.goto('/')});
test('catálogo completo, búsqueda sin tildes y estado vacío',async({page})=>{
 await expect(page.locator('.product')).toHaveCount(24);
 await page.getByLabel('Buscar productos').fill('acido acetico');await expect(page.locator('.product')).toHaveCount(1);
 await page.getByLabel('Buscar productos').fill('sin coincidencias 123');await expect(page.locator('#empty')).toBeVisible();
 await page.getByRole('button',{name:'Ver todo el catálogo'}).click();await expect(page.locator('.product')).toHaveCount(24);
});
test('filtros de línea y espacio',async({page})=>{
 await page.locator('[data-cat="1"]').click();await expect(page.locator('.product')).toHaveCount(2);
 await page.locator('[data-use="Pisos"]').click();await expect(page.locator('.product')).toHaveCount(6);
});
test('presentación, cantidades, persistencia y descarga',async({page})=>{
 await page.getByLabel('Presentación de Detergente textil industrial',{exact:true}).selectOption('1');
 await page.getByRole('button',{name:'Agregar Detergente textil industrial',exact:true}).click();
 await page.locator('#openCart').click();await expect(page.locator('#cartTotals')).toContainText('25.000');
 await page.getByRole('button',{name:'Aumentar Detergente textil industrial',exact:true}).click();await expect(page.locator('#cartTotals')).toContainText('50.000');
 await page.reload();await expect(page.locator('#cartCount')).toHaveText('2');await page.locator('#openCart').click();
 const downloaded=page.waitForEvent('download');await page.locator('#download').click();expect((await downloaded).suggestedFilename()).toBe('GELD-cotizacion-demo.txt');
 await page.getByRole('button',{name:'Quitar',exact:true}).click();await expect(page.locator('#download')).toBeDisabled();
});
test('aroma y formato permanecen diferenciados',async({page})=>{
 await page.getByRole('button',{name:'Ver Jabón líquido para manos',exact:true}).click();
 await page.locator('#detailAroma').selectOption({label:'Avena'});await page.locator('#detailVariant').selectOption('2');await page.locator('#detailAdd').click();
 await page.locator('#openCart').click();await expect(page.locator('#cartLines')).toContainText('Avena');await expect(page.locator('#cartLines')).toContainText('20 litros');await expect(page.locator('#cartTotals')).toContainText('73.000');
 await page.getByRole('button',{name:'Cerrar cotización'}).press('Escape');await expect(page.locator('#cart')).not.toBeVisible();
});
test('sin desbordamiento horizontal ni errores de ejecución',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.reload();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();expect(errors).toEqual([]);
});

test('correo de pedido con destinatario y presentación correctos sin enviarlo',async({page})=>{
 await page.locator('#openCart').click();await expect(page.locator('#emailOrder')).not.toHaveAttribute('href');
 await page.getByRole('button',{name:'Cerrar cotización'}).click();
 await page.getByLabel('Presentación de Detergente textil industrial',{exact:true}).selectOption('1');
 await page.getByRole('button',{name:'Agregar Detergente textil industrial',exact:true}).click();await page.locator('#openCart').click();
 const href=await page.locator('#emailOrder').getAttribute('href');const url=new URL(href);
 expect(url.protocol).toBe('mailto:');expect(url.pathname).toBe('Productosgel@gmail.com');
 const body=url.searchParams.get('body');expect(body).toContain('1 galón');expect(body).toContain('25.000');expect(body).toContain('Cantidad: 1');expect(body).toContain('USO EXCLUSIVO INDUSTRIAL');
 await page.getByRole('button',{name:'Quitar',exact:true}).click();await expect(page.locator('#emailOrder')).not.toHaveAttribute('href');
});

test('pago manual con titular, llave y condiciones antes de transferir',async({page})=>{
 await page.locator('#openCart').click();await expect(page.locator('.paymentInfo')).toContainText('INDUSTRIAS WRX SAS');await expect(page.locator('.paymentKey code')).toHaveText('@901247877');await expect(page.locator('.paymentInfo')).toContainText('total con IVA y envío');await expect(page.getByRole('button',{name:'Copiar llave',exact:true})).toBeVisible();
});

const categories = ['Limpiadores','Desengrasantes','Desinfectantes','Selladores'];
const rows = [
['DTI1','Detergente textil industrial',0,[8000,25000,110000],'Lavado textil para lavanderías, hoteles y operación institucional.','Ropa',1],
['DVI1','Lavavajillas industrial',0,[7500,22000,100000],'Limpieza manual de vajilla, utensilios y superficies de cocina.','Cocina',1],
['DMI1','Detergente multiusos industrial',0,[7000,21000,90000],'Limpieza profunda de superficies lavables, talleres y áreas de producción.','Superficies',2],
['JMI1','Jabón líquido para manos',0,[5000,15000,73000],'Limpieza de manos con opciones de aroma.','Manos',2,'Frutos Rojos|Fresa Polar|Avena|Kiwi'],
['LVI1','Limpiavidrios industrial',0,[4500,6000,12000,48000],'Cristales, espejos, vitrinas y superficies brillantes.','Vidrios',3],
['SRI1','Suavizante para ropa industrial',0,[8000,22000,100000],'Cuidado de prendas con aroma floral.','Ropa',3,'Brisa Floral'],
['LME1','Lustramuebles extra',0,[10000,32000,140000],'Limpieza y abrillantamiento de madera, cuero y cuerina.','Superficies',4],
['RCI1','Limpiador de ropa color industrial',0,[6500,18000,80000],'Limpieza de prendas de color con agradable aroma.','Ropa',4],
['DVI2','Lavavajillas neutro sin aroma',0,[7500,22000,100000],'Limpieza de vajilla y utensilios sin fragancia.','Cocina',5],
['ACI0','Ácido acético grado industrial 10%',0,[5500,15000,65000],'Vinagre industrial para limpieza y remoción de óxidos.','Superficies',5],
['SCI1','Silicona multiusos 15%',0,[7000,11000,19500,66000,280000],'Brillo y protección para cueros y materiales sintéticos.','Superficies',6,'Tutty Frutty'],
['DI1','Desengrasante industrial',1,[7000,18000,80000],'Para superficies y utensilios de cocinas industriales contaminados con grasa.','Cocina',7],
['DRX1','Desengrasante de alto rendimiento',1,[8000,23000,105000],'Limpieza de grasa en operaciones de trabajo pesado.','Cocina',7],
['AE70','Alcohol etílico 70%',2,[9000,28000,125000],'Solución alcohólica para desinfección de superficies y prendas.','Superficies',8],
['HC5','Hipoclorito de sodio 5,5%',2,[4500,10000,45000],'Limpieza y desinfección de materiales, superficies y utensilios.','Superficies',8],
['LMI1','Limpiador desinfectante aromatizante',2,[5000,14500,72000],'Limpieza, desinfección y aromatización de pisos lavables.','Pisos',9,'Brisa Marina|Lavanda|Citronela|Talco Bebé'],
['LMI','Limpiador desinfectante sin olor',2,[4500,13000,60000],'Limpieza de pisos a base de amonio cuaternario de quinta generación.','Pisos',9],
['EO1','Eliminador de olores',2,[6000,18000,48000],'Para eliminar malos olores en recintos y materiales.','Ambientes',10,'Dragón Fresh|Coco-Limón|Maracuyá|Talco Bebé|Koaj'],
['DA1','Desinfectante de amonio cuaternario 1%',2,[6000,17000,70000],'Solución lista para aplicar en la limpieza de pisos.','Pisos',10],
['AEIND','Alcohol industrial',2,[10000,33000,155000],'Solución alcohólica de uso industrial. Producto inflamable.','Superficies',11],
['PH5','Peróxido de hidrógeno',2,[5000,15000,70000],'Desinfección de superficies y materiales. Concentración por confirmar con el proveedor: el título y la descripción del PDF difieren.','Superficies',11],
['SP1','Sellador para pisos',3,[21000,63000,300000],'Acabado de alto brillo para pisos sintéticos y minerales.','Pisos',12],
['CA1','Cera autobrillante',3,[14500,40000,160000],'Brillo para el mantenimiento de pisos sintéticos y minerales.','Pisos',12],
['RM1','Removedor de ceras y sellantes',3,[5500,15000,70000],'Remueve capas de cera para preparar un nuevo acabado.','Pisos',13]
];
const products=rows.map(([id,name,cat,prices,description,use,page,aromas])=>({id,name,cat,description,use,page,aromas:aromas?.split('|')||[],variants:prices.map((price,i)=>({price,label:(id==='LVI1'?['500 ml · spray','1 litro','1 galón · 3.785 ml','20 litros']:id==='SCI1'?['220 ml · spray','500 ml','1 litro','1 galón · 3.785 ml','20 litros']:id==='EO1'?['250 ml · spray','1 litro','1 galón · 3.785 ml']:['1 litro','1 galón · 3.785 ml','20 litros'])[i]}))}));

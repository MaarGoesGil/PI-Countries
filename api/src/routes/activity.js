const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db');
const { v4: uuidv4 } = require('uuid');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/*
[ ] POST /activity:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos
*/
router.post('/', async (req, res, next) => {
    const { nombre, dificultad, duracion, temporada, idCountry } = req.body;
    try {
        const newActivity = await Activity.create({
            id: uuidv4(),
            nombre: 'buceo',             // 'buceo'
            dificultad:5,         // 1,2,3,4,5 --> type of Num
            duracion:'6hs',           // '2hs'
            temporada:'Verano',        // 'verano'
        });
        const country = await Country.findOne({
            where: {
                id: 'ATA',
            }
        })
         await country.addActivity(newActivity)
        res.status(201).send(`Actividad {/* nombre.toUpperCase()} */} creada`)
    }
    catch (error) { next(error) }
})

module.exports = router;
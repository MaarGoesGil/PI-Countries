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
    const { nombre, dificultad, duracion, temporada, paises } = req.body;
    try {
        const newActivity = await Activity.create({
            id: uuidv4(),
            nombre: nombre,             // 'buceo'
            dificultad: dificultad,         // 1,2,3,4,5 --> type of Num
            duracion:duracion,           // '2hs'
            temporada: temporada,        // 'verano'
        });

        for (let index = 0; index < paises.length; index++) {            
         await newActivity.addCountry(paises[index])       
        }
        res.status(201).send(`Actividad creada`)
    }
    catch (error) { next(error) }
})
 router.get('/', async (req, res, next) => {
    try{
        const actividades = await Activity.findAll({
            include: [{
                model: Country,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        res.json(actividades);
    }
    catch (error) { next(error) }
 })

module.exports = router;
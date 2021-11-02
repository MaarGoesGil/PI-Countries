const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");

const router = Router();

/*[  ] GET /countries:
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
Obtener un listado de los paises.*/



router.get('/countries', async (req, res, next) => {

// --------------- Query ------------

    if (req.query.name) {
        const { name } = req.query
        try {
            const paises = await Country.findAll({
                include: [{
                model: Activity,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                through: {
                    attributes: []
                }
                 }],
                 attributes: {
                     exclude: ['createdAt', 'updatedAt']
                 },
                where: {
                    nombre: { [Op.substring]: `%${name}%` },
                }
            }
            );
            paises ? res.send(paises) : res.status(404).send('Error pais no encontrado');
        }
        catch (error) { next(error) }
    } 
// ------------------------ Llamado a la API Countries ------------

    else {
        try {
            const api = await axios.get(`https://restcountries.com/v3/all`);
            const countries = api.data;
            for (let i = 0; i < countries.length; i++) {
                if (!await Country.findOne({
                    where: {
                        id: countries[i].cca3,
                    }
                })) {
                    await Country.create({
                        id: countries[i].cca3,
                        nombre: countries[i].name.common.toLowerCase(),
                        img: countries[i].flags[1],
                        continente: countries[i].continents[0],
                        capital: countries[i].capital ? countries[i].capital[0] : 'no tiene',
                        subregion: countries[i].subregion || 'no tiene',
                        area: countries[i].area,
                        poblacion: countries[i].population
                    })
                };
            }
            var paises = await Country.findAll({
                include: [{
                    model: Activity,
                    exclude: ['createdAt', 'updatedAt']                    
                }],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
            });
            res.send(paises);
        }
        catch (err) { next(err) }
    }
})


router.get('/countries/:idPais', async (req, res, next) => {
    try {
        const { idPais } = req.params;
        const pais = await Country.findAll({
            include: [{
                model: Activity,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                through: {
                    attributes: []
                }
            }],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                id: idPais.toUpperCase()
            }
        });
        pais ? res.send(pais) : res.status(404).send('Error pais no encontrado');
    }
    catch (error) { next(error) }
})
module.exports = router;

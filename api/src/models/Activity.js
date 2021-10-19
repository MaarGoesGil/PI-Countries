const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
    
  //-----------------------------
  //         Actividades
  //-----------------------------

  const Activity = sequelize.define('activity', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
      },
      dificultad: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
      },
      duracion: {
        type: DataTypes.STRING
      },
      temporada: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
      }
    });
    return Activity
};
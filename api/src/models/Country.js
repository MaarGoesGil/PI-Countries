const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
    
  //-----------------------------
  //         Paises
  //-----------------------------

  const Country = sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      unique: true,      
      allowNull: false,      
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,         
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.REAL,
    },
    poblacion:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
      return Country;
}
 
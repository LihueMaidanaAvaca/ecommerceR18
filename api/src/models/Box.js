import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js'

export const Box = sequelize.define('boxes', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.TEXT)  
    },
    size:{
      type: DataTypes.STRING  
    },
    dimention:{
      type: DataTypes.STRING  
    },
    color:{
      type: DataTypes.STRING  
    },
    price:{
      type: DataTypes.INTEGER  
    },
    description:{
      type: DataTypes.TEXT  
    }
})
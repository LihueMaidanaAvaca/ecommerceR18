import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'lamanik',
    'postgres',
    '12345',
    {
      host: 'localhost',
      dialect: 'postgres'  
    }
);
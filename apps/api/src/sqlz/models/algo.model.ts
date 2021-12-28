import {IAlgo} from '@mintit/model-spec'
import {DataTypes} from 'sequelize'
import {Table, Model} from 'sequelize-typescript'

@Table
export class Algo extends Model<IAlgo, IAlgo> {}

export const AlgoAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    richText: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
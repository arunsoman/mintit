import{ IAppUser } from '@mintit/model-spec'
import {Optional, ModelAttributes , STRING, UUID, DataTypes } from 'sequelize'
import { Table, Model } from 'sequelize-typescript'


export type Attribs = Required<IAppUser>
export type OptionalAttribs = Optional<IAppUser, 'id'>

@Table
class AppUser extends Model<Attribs, OptionalAttribs> {
    public pwd!: string
}

export const AppUserAttributes = {
    id: {
        type: UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        primaryKey: true,
        type: STRING,
        allowNull: false
    },
    pwd: {
        type: STRING,
        allowNull: false
    },
    algos: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}

console.log("+++++++++//++++", typeof AppUser)
export  default AppUser
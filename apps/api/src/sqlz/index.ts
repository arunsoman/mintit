import { Sequelize } from 'sequelize-typescript'
import AppUser, { AppUserAttributes} from './models/appuser.model'
import {Algo, AlgoAttributes} from './models/algo.model'

const sequelize = new Sequelize({
  // database: 'some_db',
  // dialect: 'sqlite',
  // username: 'root',
  // password: '',
  // storage: ':memory:',
  host: '127.0.0.1',
  dialect: 'postgres',
  username: 'unicorn_user',
  password: 'magical_password',
  database: 'rainbow_database',

})
sequelize.addModels([AppUser, Algo])

Algo.init(AlgoAttributes, {sequelize})
Algo.sync({force: true})

AppUser.init(AppUserAttributes, {sequelize})
AppUser.sync({ force: true })

console.log(sequelize.models)
export default sequelize
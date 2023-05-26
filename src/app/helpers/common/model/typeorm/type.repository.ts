import {getConnection, Repository} from 'typeorm';


//get the table name : getManager().getRepository(User).metadata.tableName

export default class TypeRepository {
    MySQLModel:any
    MongoModel:any
    constructor() {
    }

    getRepository(entities:any,entityName:any){
        return {
            repositorySQL:(name:string) =>{
                //console.log('Get repository ',entities[entityName+'MySQL'])
                return {
                    db:getConnection(name).getRepository(entities[entityName+'MySQL']),
                    model:entities[entityName+'MySQL'].options.target
                }
            },
            repositoryMongo:(name:string)=>{
                return {
                    db:getConnection(name).getRepository(entities[entityName+'MongoDB']),
                    model:entities[entityName+'MongoDB'].options.target
                }
            }
        }
    }
}
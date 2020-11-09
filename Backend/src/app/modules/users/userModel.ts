import { Matches, IsDefined } from "class-validator";
import { Expose } from "class-transformer";
import { IModificationNote } from "../shared/models/modificationNote";

export interface IUserResponse {
    _id?: String;
    username: String;
    password: String;
    email: String;
    is_deleted?: Boolean;
    modification_notes: IModificationNote[]
}

export class AddUserDto {
    _id?: String;

    @IsDefined()
    @Expose()
    username: String;

    @IsDefined()
    @Expose()
    password: String;
    
    @IsDefined()
    @Expose()
    @Matches(RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    email: String;

    is_deleted?: Boolean;

    modification_notes: IModificationNote[]

    constructor(){
        this.modification_notes = [{
            modified_on: new Date(Date.now()),
            modified_by: null,
            modification_note: 'New user created'
        }]
    }
}
export class UpdateUserDto{    
    username: String;
    password: String;
    email: String;
    modification_notes: IModificationNote[]

    public mapUserFromDb(dbUser: IUserResponse){

        dbUser.modification_notes.push({
            modified_on: new Date(Date.now()),
            modified_by: null,
            modification_note: 'User data updated'
        });
        this.modification_notes = dbUser.modification_notes;

        return this;
    }
}
import { UpdateUserDto, AddUserDto, IUserResponse } from './userModel';
import users from './userSchema';

export default class UserService {
    
    public createUser(user: AddUserDto, callback: (err: string, user: any) => void) {
        const _session = new users(user);
        _session.save(callback);
    }

    public filterUser(_id: String, callback: (err: string, user: IUserResponse) => void) {
        const query = { _id: _id };
        users.findOne(query, callback);
    }

    public updateUser(_id: string, user: UpdateUserDto, callback: (error: string) => void) {
        this.filterUser(_id, (error: string, dbUser: IUserResponse)=>{
            if(error)
                callback(error);
            else if(!dbUser)
                callback('User not found');
            else
            {
                const query = { _id: _id };
                const updatedUser = user.mapUserFromDb(dbUser);
                users.findOneAndUpdate(query, updatedUser, callback);
            }
        });        
    }
    
    public deleteUser(_id: String, callback: (error: string) => void) {
        const query = { _id: _id };
        users.deleteOne(query, callback);
    }
}
export class UserModel{
    constructor(
        public _id: string,
        public user_name: string,
        public user_email: string,
        public user_password: String,
        public user_createdon: Date,
        public user_role: String
    ){}
}
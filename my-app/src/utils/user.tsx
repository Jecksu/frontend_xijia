import  {Md5} from 'ts-md5';
class user{
    id: string;
    username: string;
    avatar: string;
    gender: string;
    slogan: string;
    age: number;
    joinDate: Date;
    birthday: Date;
    performance_date:Array<Date>;
    email: string;
    likes: number;

    constructor(username: string, avatar: string,  gender: string, slogan: string, email: string, joinDate: Date, birthday: Date, performance_date:Array<Date>) {
      this.id = Md5.hashStr(username+email);
      this.username = username;
      this.avatar = avatar;
      this.gender = gender;
      this.email = email;
      this.slogan = slogan;
      this.joinDate = joinDate;
      this.birthday = birthday;
      this.performance_date = performance_date;
      this.likes=0;
      //calculate age
      this.age = new Date().getFullYear() - this.birthday.getFullYear();
    }
}

export default user;
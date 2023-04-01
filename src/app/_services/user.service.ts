import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //it will hold any API endpoints and services

  baseURL = "http://localhost:9092";

  //this implies that this particular authenticate path/endpoint dont require any authentication 
  requestHeader = new HttpHeaders({ "No-Auth": "True"});
  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }

  public register(registerData: any)
  {
    return this.http.post(this.baseURL + '/registerNewUser', registerData)
  }

  public login(loginData: any) {
    return this.http.post(this.baseURL + '/authenticate', loginData, {headers: this.requestHeader});
  }

  public forUser()
  {
    return this.http.get(this.baseURL + '/forUser', { responseType: 'text'});
  }

  public forAdmin()
  {
    return this.http.get(this.baseURL + '/forAdmin', { responseType: 'text'});
  }

  //it will check whether the currently loggedin user and passing user role is same or not 
  //checking allowedRoles and actualroles if same or not
  public roleMatch(allowedRoles: any): boolean
  {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();   //taking roles data from localStorage

    if(userRoles != null && userRoles)
    {
      for(let i=0;i<userRoles.length;i++)
      {
        for(let j=0;j<allowedRoles.length;j++)
        {
          if(userRoles[i].roleName === allowedRoles[j])
          {
            isMatch=true;
            return isMatch;
          }
          else
          {
            return isMatch;
          } 
        } 
      }
    }
    return isMatch;
  }
}

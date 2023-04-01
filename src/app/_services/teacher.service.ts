import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../entities/teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

    //baseURL for our REST endpoints
    private baseURL = "http://localhost:9092/teacher";
  
    constructor(private http: HttpClient) { }
  
    //here "get" method of httpClient is used to fetch Teacher list
    listAllTeachers(): Observable<Teacher[]>{
      return this.http.get<Teacher[]>(`${this.baseURL}/listTeachers`);
    }
  
    addTeacher(teacher:Teacher): Observable<Object>{
      return this.http.post(`${this.baseURL}/addTeacher`,Teacher);
    }
  
    getTeacherById(id: number): Observable<Teacher> {
      return this.http.get<Teacher>(`${this.baseURL}/${id}`);
    }
  
    updateTeacher(id: number,teacher: Teacher): Observable<Object>{
      return this.http.put(`${this.baseURL}/${id}`,Teacher);
    }
  
    deleteTeacher(id: number): Observable<Object> {
      return this.http.delete(`${this.baseURL}/${id}`,{ responseType: 'text'});
    }
  
    countTeacher(): Observable<any>{
      return this.http.get(`${this.baseURL}/countTeacher`, {responseType: 'text'});
    }
}

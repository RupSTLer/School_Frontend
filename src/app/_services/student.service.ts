import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //baseURL for our REST endpoints
  private baseURL = "http://localhost:9092/student";
  
  constructor(private httpClient: HttpClient) { }

  //here "get" method of httpClient is used to fetch employee list
  listAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}/listStudents`);
  }

  addStudent(student:Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addStudent`,student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number,student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,student);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType: 'text'});
  }

  countStudent(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/countStudent`, {responseType: 'text'});
  }

  // to get session object
  
  setSession(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: string): any {
    if(typeof window !== 'undefined')
    {
      let retrievedObject = localStorage.getItem(key) as string;
      return retrievedObject;
    }
  }

  clearSession(): void {
    localStorage.clear();
  }

  
}


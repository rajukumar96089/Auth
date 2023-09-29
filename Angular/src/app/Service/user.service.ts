import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  shareid:any;
  sharedepartmentid:any
  constructor(private http:HttpClient) { }
  proceedLogin(data:any)
  {
    return this.http.post("https://localhost:7183/api/Authentication/GenerateToken",data ,{responseType: 'text'})

  }
 GetStudent()
 {
 
  return this.http.get("https://localhost:7183/api/Student/GetallEmployeeData")

 }
 postStudent(data:any)
 {
  return this.http.post("https://localhost:7183/api/Student/Addemployee",data)
 }
 deleteStudent(id:number)
 {
  return this.http.delete("https://localhost:7183/api/Student/DeleteEmployee?id="+id)
 }
 GetdepartmentList()
 {
  return this.http.get("https://localhost:7183/api/Department/geatAllDepartment")
 }
 adddepartment(data:any)
 {
  return this.http.post("https://localhost:7183/api/Department/Addemployee",data)
 }
 UpdateDepartment(data:any)
 {
  return this.http.put("https://localhost:7183/api/Department/UpdateDepartmentdata",data)
 }
 deleteDepartment(id:number)
 {
  return this.http.delete("https://localhost:7183/api/Department/DeleteDepartment?id="+id)
 }
 updatestudent(data:any)
 {
  return this.http.put("https://localhost:7183/api/Student/UpdateEmployeeData",data)
 }
 getbyidStudent(id:number)
 {
  debugger
  return this.http.get("https://localhost:7183/api/Student/GetEmployeebyid?id="+id)
 }

 
 setData(id: number) {
  this.shareid = id;
}

getData() {
  
  return this.shareid;
}

setDepartmentData(id: number) {
  this.sharedepartmentid = id;
}

getdepartmentdata() {
  
  return this.sharedepartmentid;
}
getbyiddeparment(id:any)
{
  return this.http.get("https://localhost:7183/api/Department/GetDepartmentid?id="+id)
}
getFormData(data:any)
{
  return this.http.post('https://localhost:7219/api/Data/Dats',data);
}

generateotp(data:any)
{
  return this.http.post('https://localhost:7183/api/Authentication/GenerateToken',data)
}
generateToken(data:any)
{
  return this.http.post('https://localhost:7183/api/OtpVerification',data)
}
sendFax(data:any)
{debugger
  const headers = new HttpHeaders({
    'Content-Type': 'application/pdf'
  });
  return this.http.post('https://localhost:7183/api/mFax/SendFax',data,{headers,responseType:'text'})
}

}

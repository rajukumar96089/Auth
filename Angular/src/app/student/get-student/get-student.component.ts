import { Component,OnInit, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/Service/core.service';
import { UserService } from 'src/app/Service/user.service';


@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'dob','city','phone','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:UserService, private route:Router, private snackbar:CoreService){}
  ngOnInit(): void {
    this.GetStudentList();
    
  }

  GetStudentList()
    {
      this.service.GetStudent().subscribe({
        next:(res:any) => {
          console.log(res.view);
          this.dataSource = new  MatTableDataSource(res.view);   
        }
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    OpenAddeditComponent()
      {
        this.route.navigate(['/Student/studentaddedit']);
      
      }
      OpenupdateeditComponent(id:any)
      {
        this.service.shareid=id
        this.route.navigate(['/Student/studentaddedit']);
      
      }

      // deleteStudentByid(id:any)
      // {
      //   debugger
      //    this.service.deleteStudent(id).subscribe((res)=>
      //   {
      //     alert('sure u want to Delete')
      //     alert('Patient Deleted Successfully');
      //     this.GetStudentList();
      //   })
      // }
      deleteStudentByid(id: any) {
        // Use a JavaScript confirmation dialog
        const isConfirmed = window.confirm('Are you sure you want to delete this student?');
      
        if (isConfirmed) {
          this.service.deleteStudent(id).subscribe((res) => {
            alert('Student Deleted Successfully');
            this.snackbar.openSnackBar('Student Deleted Successfully', 'Done')
            this.GetStudentList();
          });
        }
      }
      
      openDepartment()
      {
        this.route.navigate(['/department/getDepartment'])
      }

      setData(id:any) {
       debugger
        this.service.setData(id); // Set the data through the service
        this.route.navigate(['/Student/studentaddedit']);
      }
      logout()
      {
        localStorage.clear();
        this.route.navigate([''])
      }
      OpenEditor()
      {
        this.route.navigate(['editor'])
      }
}

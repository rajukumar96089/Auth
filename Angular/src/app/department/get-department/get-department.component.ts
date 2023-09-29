import { Component, ViewChild,OnInit, } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-get-department',
  templateUrl: './get-department.component.html',
  styleUrls: ['./get-department.component.css'],
  standalone:true,
  imports: [MatTableModule,MatIconModule],
  
})
export class GetDepartmentComponent implements OnInit{
  data:any;
  
  constructor(private SERVICE:UserService, private route:Router){}
  ngOnInit(): void {
    this.getDepartment();
  }
  displayedColumns=['did', 'name', 'email', 'phone','Action'];
  dataSource= new MatTableDataSource<any>;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getDepartment()
  {
    this.SERVICE.GetdepartmentList().subscribe(
      (res:any)=>
      {
        
        console.log(res.viewDepartment);
        this.data=res.viewDepartment;
        this.dataSource = this.data
        console.log("After data source",this.dataSource)
      })
  }
  OpenAddeditComponent()
      {
        this.route.navigate(['./department/Saveeditdepartment']);
      }
      deleteDepartmentid(id:any)
      {
        this.SERVICE.deleteDepartment(id).subscribe((res)=>
        {
          alert('sure u want to Delete')
          alert('Patient Deleted Successfully');
          this.getDepartment();
        })
      }
      editcomponent(id:any)
      {
        this.SERVICE.setDepartmentData(id); // Set the data through the service
        this.route.navigate(['./department/Saveeditdepartment']);
      }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {
  excelFile: File;
  label = 'No file chosen';
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  upload(f: File) {
    if (f) {
      this.excelFile = f;
      this.label = f.name;
    }
  }

  onUploadClick() {
    const excelData = new FormData();
    excelData.append('file', this.excelFile);
    this.http.post('/api/users/uploads/customer', excelData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error', err);
      }
    );
  }
}

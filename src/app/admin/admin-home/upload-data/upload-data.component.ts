import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoShareService } from 'src/app/shared/info-share.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {
  excelFile: File;
  label = 'No file chosen';
  msg: any;
  err: string;
  showProgressBar = false;
  constructor(private http: HttpClient, private infoSvc: InfoShareService) {}

  ngOnInit() {}

  upload(f: File) {
    this.err = '';
    this.msg = '';
    if (f) {
      this.excelFile = f;
      this.label = f.name;
    }
  }

  onUploadClick() {
    const format =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    if (!this.excelFile || !this.excelFile.type.match(format)) {
      return (this.err = 'Please select a valid file');
    }
    this.infoSvc.showProgressBar();
    this.showProgressBar = true;
    const excelData = new FormData();
    excelData.append('file', this.excelFile);
    this.http.post('/api/users/uploads/customer', excelData).subscribe(
      res => {
        this.excelFile = undefined;
        this.label = 'No file chosen';
        this.msg = res;
        this.infoSvc.hideProgressBar();
        this.showProgressBar = false;
      },
      err => {
        console.log('Error', err);
        this.infoSvc.hideProgressBar();
        this.showProgressBar = false;
        if (err.status > 500) {
          return (this.err = 'Error uploading file');
        }
        if (err.status === 500 && err.error.errors) {
          const keys = Object.keys(err.error.errors);
          return (this.err = err.error.errors[keys[0]].message);
        }
        this.err = err.error;
      }
    );
  }
}

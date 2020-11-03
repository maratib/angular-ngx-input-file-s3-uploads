import { Component } from '@angular/core';
import { S3Service } from './s3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gallery: any = null;
  public single: any = null;

  constructor(private s3: S3Service) { }

  uploadFiles() {
    this.gallery.forEach(async (file) => {
      console.log(file.file);
      await this.s3.uploadFile(file.file);
    })

    this.single.forEach(async (file) => {
      console.log(file.file);
      await this.s3.uploadFile(file.file);
    })

  }

}

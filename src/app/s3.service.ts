import { Injectable } from '@angular/core';
// import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  private bucket: any;

  constructor() {
    this.bucket = new S3(
      {
        accessKeyId: environment.accessKeyId,
        secretAccessKey: environment.secretAccessKey,
        region: environment.region
      }
    )
  }

  public async uploadFile(file) {
    const contentType = file.type
    // alert(contentType);
    const params = {
      Bucket: environment.bucketName,
      Key: environment.baseFolder + 'new-' + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    }
    return await this.bucket.upload(params, function (err, data) {
      if (err) {
        alert(err)
        return false;
      }
      console.log(data.Key);
      return true;
    })
  }



}

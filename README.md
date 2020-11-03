# Angular 10+ Ngx Input File S3 Uploads (ngx-input-file)

Create app
```bash
ng new ngx-input-file-s3-uploads
cd ngx-input-file-s3-uploads
ng add @angular/material
yarn add ngx-input-file aws-sdk
```
add to polyfills.ts
```javascript
if (typeof (window as any).global === 'undefined') { (window as any).global = window; }
```
add to tsconfig.app.json
```javascript
"compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": [
      "node"
    ]
``` 
## import required modules to app.modules
```javascript
# Refer to app.modules.ts

const config: InputFileConfig = {
  fileAccept: '*',
  fileLimit: 1
};

imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    InputFileModule.forRoot(config),
  ],

```

Update your environment.ts file as follows:
```javascript
export const environment = {
  production: false,
  accessKeyId: "YourAccessKeyId",
  secretAccessKey: "YourSecretAccessKey",
  region: "us-east-1",
  bucketName: "YourBucketName",
  baseFolder: "images/", 
};
```
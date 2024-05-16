import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
declare var tinymce: any;

@Component({
  selector: 'app-page-create',
  standalone: true,
  imports: [EditorModule, CommonModule, FormsModule],
  templateUrl: './page-create.component.html',
  styleUrl: './page-create.component.sass',
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class PageCreateComponent {
  editor: any;
  imageData: string = ''

  constructor( 
    private http: HttpClient,
    private _configService: ApiService
  ) { }

  config: EditorComponent['init'];
  ngOnInit() {
    this.config = {
      plugins: 'lists link image table code help wordcount',
      base_url: '/tinymce',
      file_picker_types: 'file image media',
      images_upload_url: '',
      toolbar: 'image',
      images_file_types: 'jpg,svg,webp,png',
      automatic_uploads: true,
      images_reuse_filename: true,
      suffix: '.min',
      paste_data_images: true,
      images_upload_credentials: true,
      images_upload_base_path: '',
      file_picker_callback: this.filePickerCallback.bind(this),
      images_upload_handler: this.uploadImage.bind(this)
    };
  }

  uploadImage(blobInfo: any): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!blobInfo || typeof blobInfo.blob !== 'function' || typeof blobInfo.filename !== 'function') {
        reject('Invalid blobInfo object');
        return;
      }
      
      const formData = new FormData();
      formData.append('image', blobInfo.blob(), blobInfo.filename());
      const uploadUrl = `${this._configService.UPLOAD_IMAGE_API}`;
      this.http.post(uploadUrl, formData).subscribe(
        (data: any) => {
          if (data && data.imagePath) {
            const imageUrl = `${this._configService.PATH_IMAGE}${data.imagePath}`;
            resolve(imageUrl);
          } else {
            reject(`Failed to upload image: Unexpected response format - ${JSON.stringify(data)}`);
          }
        },
        (error) => {
          if (error.status === 0) {
            reject('Failed to upload image: Network error');
          } else if (error.error && error.error.message) {
            reject(`Failed to upload image: ${error.error.message}`);
          } else {
            reject('Failed to upload image: Unknown error');
          }
        }
      );
    });
  }

  filePickerCallback(callback: any) {
    const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.addEventListener('change', (e: any) => {
          const file = e.target.files[0];

          const reader = new FileReader();
          reader.addEventListener('load', () => {
            if (typeof reader.result === 'string') { 
              const id = '' + (new Date()).getTime();
              const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
              const base64 = (reader.result as string).split(',')[1]; 
              const blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);

              callback(blobInfo.blobUri(), { title: file.name });
            }
          });
          reader.readAsDataURL(file);
        });

        input.click();
  }


  html = '';
  retrieveHtml() {
    console.log(this.html);
  }

}

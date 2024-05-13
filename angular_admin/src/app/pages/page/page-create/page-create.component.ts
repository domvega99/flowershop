import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor( private http: HttpClient) { }

  config: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    base_url: '/tinymce', 
    file_picker_types: 'file image media',
    images_upload_url: 'http://localhost:3000/upload/image', 
    toolbar: 'image',
    images_file_types: 'jpg,svg,webp,png',
    automatic_uploads: true, 
    images_reuse_filename: true,
    suffix: '.min',
    paste_data_images: true,
    file_picker_callback: this.filePickerCallback,
    images_upload_handler: this.uploadImage,
  }

  uploadImage(blobInfo: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', blobInfo.blob(), blobInfo.filename());
      this.http.post('http://localhost:3000/upload/image', formData).subscribe(
        (data: any) => {
          // Assuming the server responds with the URL of the uploaded image
          const imageUrl = data.imageUrl;
          resolve(imageUrl);
        },
        (error) => {
          reject('Failed to upload image');
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
            if (typeof reader.result === 'string') { // Check if result is a string
              /*
                Note: Now we need to register the blob in TinyMCEs image blob
                registry. In the next release this part hopefully won't be
                necessary, as we are looking to handle it internally.
              */
              const id = 'blobid' + (new Date()).getTime();
              const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
              const base64 = (reader.result as string).split(',')[1]; // Cast result to string
              const blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);

              /* call the callback and populate the Title field with the file name */
              callback(blobInfo.blobUri(), { title: file.name });

            }
          });
          reader.readAsDataURL(file);
        });

        input.click();
  }


  html = '<p>Hi, TinyMCE!</p>';
  retrieveHtml() {
    console.log(this.html);
  }

}

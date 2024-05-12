import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgModule } from '@angular/core';

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

  // retrieveHtml() {
  //   const htmlContent = this.editor.getContent();
  //   console.log(htmlContent);
  // }

  html = '<p>Hi, TinyMCE!</p>';
retrieveHtml() {
  // Do something here.
  console.log(this.html);
}
}

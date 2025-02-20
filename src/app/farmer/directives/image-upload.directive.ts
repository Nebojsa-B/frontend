import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[imageUpload]',
})
export class ImageUploadDirective {

  @Output() fileDropped = new EventEmitter<File>();

  constructor() {}

  // HostListener to capture 'change' event from file input
  @HostListener('change', ['$event.target'])
  onFileInput(fileInput: HTMLInputElement) {
    const file = fileInput.files?.[0];  // Get the first selected file
    if (file) {
      this.fileDropped.emit(file);  // Emit the file to parent component
    }
  }

}

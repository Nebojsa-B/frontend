import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment';
import { Observable } from 'rxjs';
import { IFileUpload } from '../models/file-upload/FileUpload';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<IFileUpload> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<IFileUpload>(`${environment.url}shared/upload-file-to-aws`, formData);
  }

}
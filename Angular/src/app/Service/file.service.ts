import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  downloadAndSavePDF(): void {
    this.http.get('', { responseType: 'blob' }).subscribe((blob: Blob) => {
      saveAs(blob, 'downloaded.pdf');
    });
  }
}


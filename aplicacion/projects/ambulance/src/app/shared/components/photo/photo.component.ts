import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo!: ElementRef;
  statusHover = false;

  constructor() {}

  ngOnInit(): void {}

  fileUpload(file: File) {
    if (!file.type.startsWith('image/')) {
      return;
    }

    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.photo.nativeElement.style.backgroundImage = `url(${dataBase64})`;
    };

    fr.readAsDataURL(file);
  }
}

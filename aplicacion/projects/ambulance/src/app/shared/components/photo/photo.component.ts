import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') file!: ElementRef;
  @Input() photoByDefault: string = '';
  statusHover = false;
  isUsingWebCam = false;
  checkedWebCam = false;
  value!: File;
  isDisabled = false;

  onChange = (_: any) => {};
  onTouch = () => {};

  triggerSnapshot = new Subject<void>();

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: File): void {
    if (value) {
      this.value = value;
    }
  } // const ctrl = new FormControl("abc")

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  fileUpload(file: File) {
    if (!file.type.startsWith('image/')) {
      return;
    }

    this.onTouch();
    this.onChange(file);

    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.photo.nativeElement.style.backgroundImage = `url(${dataBase64})`;
    };

    fr.readAsDataURL(file);
  }

  selectImage(evt: any) {
    const file: File = evt.target.files[0];
    this.fileUpload(file);
  }

  executeLoadImage() {
    this.file.nativeElement.click();
    return false;
  }

  changeOriginPhoto(evt: MatSlideToggleChange) {
    this.isUsingWebCam = !this.isUsingWebCam;
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  triggerAsObservable(): Observable<void> {
    return this.triggerSnapshot.asObservable();
  }

  capturePhotoFromWebCam(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => new File([buffer], 'avatar', { type: 'image/jpg' }))
      .then((file) => {
        this.fileUpload(file);
        this.isUsingWebCam = false;
      });
  }

  loadingPhoto(image: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${image})`;
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      this.loadingPhoto(
        `https://api-cursoangular.cursos-dev.com/photos/${this.photoByDefault}`
      );
    }
  }
}

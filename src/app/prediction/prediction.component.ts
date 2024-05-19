import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generate } from 'rxjs';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.sass'],
})
export class PredictionComponent implements AfterViewInit {
  response = 'Form Submission Waiting...';
  formData: FormDataObject = {
    name: '',
    age: 18,
    gender: '',
    history: '',
    matlab_file: new File(['file content'], 'filename.txt', {
      type: 'text/plain',
    }),
  };

  constructor(private elementRef: ElementRef, private httpClient: HttpClient) {}

  ngAfterViewInit(): void {}
  onFileSelected(event: any) {
    this.formData.matlab_file = event.target.files[0];
    console.log(this.formData.matlab_file);
    const label = this.elementRef.nativeElement.querySelector(
      "[for='file-picker-1']"
    );
    if (label) {
      label.innerText = event.target.files[0].name;
    }
  }

  onsubmit(event: Event) {
    event.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(this.formData).forEach((key) => {
      formDataToSend.append(key, (this.formData as any)[key]);
    });
    this.response = 'Waiting...';
    this.httpClient
      .post<any>('https://99ca0a1e-84ee-45f7-9ba4-51c1979aca54-00-3flf7c3vpg1hr.sisko.replit.dev:8080/predict', formDataToSend)
      .subscribe((response) => {
        this.response = response;
      });
  }
}

interface FormDataObject {
  name: string;
  age: number;
  gender: string;
  history: string;
  matlab_file: File;
}

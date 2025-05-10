import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.page.html',
  styleUrls: ['./payment-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonButton]
})
export class PaymentFormPage implements OnInit {
  paymentForm!: FormGroup;
  submitting: boolean = false;
  resultMessage: string = '';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.minLength(10)]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      reference: ['']
    });
  }

  submitForm() {
    if (this.paymentForm.invalid) return;

    this.submitting = true;

  }
}

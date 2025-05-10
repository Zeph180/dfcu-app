import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel, IonSelect, IonSelectOption, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {PaymentService} from "../../services/payment.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.page.html',
  styleUrls: ['./payment-form.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonText,
  ],
})
export class PaymentFormPage implements OnInit {
  paymentForm!: FormGroup;
  submitting: boolean = false;
  resultMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      payer: ['', [Validators.required, Validators.minLength(10)]],
      payee: ['', [Validators.required, Validators.minLength(10)]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      currency: ['', [Validators.required, Validators.maxLength(3)]],
      payerReference: [''],
    });
  }

  async submitForm() {
    if (this.paymentForm.invalid) return;

    this.submitting = true;
    this.paymentService.postData(this.paymentForm.value, 'initiate').subscribe({
      next: res => {
        const code = res.statusCode;
        switch (code) {
          case 200:
            this.paymentForm.reset();
            this.presentAlert('SUCCESS!', `Payment successfully processed with referenceID ${res.transactionReference}`);
            break;
            case 100:
              this.paymentForm.reset();
              this.presentAlert('SUCCESS!', `Payment submitted and pending processing with referenceID ${res.transactionReference}`);
              break;
          case 400:
            this.presentAlert('FAILURE!', `Payment failed`);
            break;
        }
      },
      error: err => {
        this.presentAlert('FAILURE!', `Payment failed`);
        this.submitting = false;
      },
      complete: () => (this.submitting = false)
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
      cssClass: 'dfcu-alert'
    });
    await alert.present();
  }

  goToStatusPage() {
    this.router.navigate(['/check-status']);
  }
}

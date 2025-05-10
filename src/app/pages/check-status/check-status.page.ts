import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {PaymentService} from "../../services/payment.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.page.html',
  styleUrls: ['./check-status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInput, IonButton]
})
export class CheckStatusPage implements OnInit {
  checkStatusForm!: FormGroup;
  submitting: boolean = false;
  resultMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.checkStatusForm = this.fb.group({
      transactionId: [null, [Validators.required, Validators.minLength(10)]],
    })
  }

  async submitForm() {
    if (this.checkStatusForm.invalid) return;

    this.submitting = true;
    const tranID = this.checkStatusForm.controls['transactionId'].value;
    this.paymentService.getData(tranID).subscribe({
      next: res => {
        const status = res.status;
        switch (status) {
          case 'SUCCESS':
            this.checkStatusForm.reset();
            this.presentAlert('SUCCESS!', `Payment successfully processed`);
            break;
          case 'PENDING':
            this.checkStatusForm.reset();
            this.presentAlert('SUCCESS!', `Payment pending`);
            break;
          case 'FAILED':
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

}

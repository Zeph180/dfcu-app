import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/payment-form/payment-form.page').then( m => m.PaymentFormPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'payment-form',
    loadComponent: () => import('./pages/payment-form/payment-form.page').then( m => m.PaymentFormPage)
  },
  {
    path: 'check-status',
    loadComponent: () => import('./pages/check-status/check-status.page').then( m => m.CheckStatusPage)
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
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
];

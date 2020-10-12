import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {AdminOrdersComponent} from '../admin/orders/admin-orders.component';
import {ProductsComponent} from '../products/products.component';
import {CheckoutComponent} from '../checkout/checkout.component';
import {OrderSuccessComponent} from '../order-success/order-success.component';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {AdminProductsComponent} from '../admin/products/admin-products.component';
import {MyOrdersComponent} from '../my-orders/my-orders.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {AdminProductFormComponent} from '../admin/product-form/admin-product-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
  {path: 'admin/products/new', component: AdminProductFormComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SmartRoutesModule { }

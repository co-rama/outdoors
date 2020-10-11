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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
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

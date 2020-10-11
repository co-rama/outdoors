import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

const importExport = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatInputModule,
  MatMenuModule,
  MatStepperModule,
  MatCardModule,
  MatRadioModule,
  MatPaginatorModule,
  MatTableModule
];

@NgModule({
  imports: [ importExport ],
  exports: [ importExport ]
})
export class MaterialModule{}

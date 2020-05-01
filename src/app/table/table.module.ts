import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { CellDirective } from './cell.directive';
import { TableHaderDirective } from './table-hader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TableComponent,CellDirective,TableHaderDirective],
  declarations: [TableComponent,CellDirective, TableHaderDirective]
})
export class TableModule { }
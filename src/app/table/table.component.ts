import {
  Component,
  Input,
  ContentChild,
  OnInit,
  TemplateRef
} from "@angular/core";
import { CellDirective } from "./cell.directive";
import { TableHaderDirective } from "./table-hader.directive";

@Component({
  selector: "app-table",
  template: `
    <table>
      <tr>
        <td *ngFor="let col of colums">
          <ng-container
            *ngTemplateOutlet="tableHead; context: { $implicit: col, index: i }"
          >
          </ng-container>
        </td>
      </tr>
      <tr *ngFor="let item of items; let i = index">
        <td *ngFor="let cols of colums">
          <ng-container
            *ngTemplateOutlet="
              tableCell;
              context: { $implicit: item[cols], index: i }
            "
          >
          </ng-container>
        </td>
      </tr>
    </table>
  `
})
export class TableComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() colums: string[] = [];
  @ContentChild(CellDirective, { read: TemplateRef }) tableCell;
  @ContentChild(TableHaderDirective, { read: TemplateRef }) tableHead;

  ngOnInit(): void {
    console.log("items", this.items);
    //console.warn(this.colums);
    //console.log(this.tableCell)
  }
}

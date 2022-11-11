import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bill-products',
  templateUrl: './view-bill-products.component.html',
  styleUrls: ['./view-bill-products.component.scss']
})
export class ViewBillProductsComponent implements OnInit {
  displayedColumns: string[]= ['name','category', 'price','quantity','total'];
  dataSource:any;
  data:any;
  productDetails:any
  

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  public dialogRef: MatDialogRef<ViewBillProductsComponent>,
   private billService:BillService,
    private ngxService:NgxUiLoaderService,
    private router:Router,
    private dialog:MatDialog,
    private snackbarService:SnackbarService,) { }

  ngOnInit() {
    

    this.data=this.dialogData.data;
    this.dataSource= JSON.parse(this.dialogData.data.productDetails);
    
  }

  
}

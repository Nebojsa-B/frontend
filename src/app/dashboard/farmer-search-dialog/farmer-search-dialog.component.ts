import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchQueryParams } from '../../shared/data-access/models/farmer/Search';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'farmer-search-dialog',
  templateUrl: './farmer-search-dialog.component.html',
  styleUrl: './farmer-search-dialog.component.scss'
})
export class FarmerSearchDialogComponent {

  searchQueryParams = this.route.snapshot.queryParams as SearchQueryParams;

  constructor(private route: ActivatedRoute, 
    private matDialogRef: MatDialogRef<FarmerSearchDialogComponent>) {}

  closeDialog(){
    this.matDialogRef.close();
  }
}

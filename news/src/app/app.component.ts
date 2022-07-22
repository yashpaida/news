import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  topHeadlines: any = [];
  query = "";

  constructor(private service: appService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.service.getTopHeadlines().subscribe(data => {
      this.topHeadlines = data['articles'];
    })
  }

  getEverything() {
    if (this.query) {
      this.service.getEverything(this.query).subscribe(data => {
        this.topHeadlines = data['articles'];
      })
    }
    else {
      this.getTopHeadlines();
    }
  }

  openDetails(headline) {
    const dialogRef = this.dialog.open(OpenDetailsComponent, {
      width: "500px",
      data: headline
    })
  }
}


@Component({
  selector: 'app-open-details',
  templateUrl: './openDetails.component.html',
})
export class OpenDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<OpenDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}


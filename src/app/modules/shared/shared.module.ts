import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TreeViewComponent } from 'src/app/components/tree-view/tree-view.component';
import { ListViewComponent } from 'src/app/components/list-view/list-view.component';
import { DetailViewComponent } from 'src/app/components/detail-view/detail-view.component';
import { CardViewComponent } from 'src/app/components/card-view/card-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ColumnResizeDirective } from 'src/app/directives/column-resize.directive';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    TreeViewComponent,
    ListViewComponent,
    DetailViewComponent,
    CardViewComponent,
    ColumnResizeDirective
  ],
  imports: [
    CommonModule,
    ResizableModule,
    FormsModule,
    RouterModule,
    ResizableModule,

   
  ],
  exports:[
    CommonModule,
    ResizableModule,
    LoginComponent,
    HeaderComponent,
    TreeViewComponent,
    ListViewComponent,
    DetailViewComponent,
    CardViewComponent,
    RouterModule,
    ResizableModule,
    ColumnResizeDirective
  ]
})
export class SharedModule { }

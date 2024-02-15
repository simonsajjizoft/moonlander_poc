import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  layoutDropdown:boolean = false;
  layouts = [
    {id:1,view:'card',selected:false,name:'Large Icons'},
    {id:2,view:'list',selected:true,name:'List'},
    {id:3,view:'detail',selected:false,name:'Detail'},
  ];
  layoutView = this.layouts[1];
  items = [
    {name:'Grocery'},
    {name:'Food Service'},
    {name:'GDSN FoodService'},
    {name:'General Merch.'},
    {name:'Healthcare System'},
    {name:'Pharmacy'},
    {name:'Pharmaceutical Compounding - Chemicals'},
    {name:'Pharmaceutical Compounding - Bases'}
  ];
  sidebarWidth:Number|any;
  @ViewChild('layoutModal') layoutModal:ElementRef| any;
  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const clickedInside = this.layoutModal.nativeElement.contains(target);
    if (!clickedInside) {
      this.layoutDropdown = false;
    }
  }

  constructor(){}

  selectLayout(layoutId:any){
    // Unselect every item
    this.layouts.map((item:any)=>{
      item.selected = false;
    });
    // select the required item
    this.layouts.map((item:any)=>{
      if(item?.id === layoutId ){
        item.selected = true;
        this.layoutView = item;
      } 
    });
    this.layoutDropdown = false;
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    // You can handle the resize event here, e.g., update sidebar width in your component
    // For example:
    this.sidebarWidth = event.rectangle.width;
  }

}

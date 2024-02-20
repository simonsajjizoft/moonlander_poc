import {ChangeDetectorRef, Component, Injectable} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {merge} from 'rxjs';
import {map} from 'rxjs';

/**
 * Node for game
 */
export class GameNode {
  children: BehaviorSubject<GameNode[]>;
  constructor(public item: any, children?: GameNode[], public parent?: GameNode) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
  }
}

const TREE_DATA = [
  new GameNode({name:'Alcohol Information Module',id:124}, [
    new GameNode({name:'Alcohol Beverage Container',id:324}),
    new GameNode({name:'Alcohol Other Informationetc',id:624}),
  ]),
  new GameNode({name:'Allergen Information Module',id:784}, [
    new GameNode({name:'Allergen Container Module',id:6}, [
      new GameNode({name:'Process Type',id:7}),
      new GameNode({name:'Shape',id:33}),
      new GameNode({name:'Material',id:89})
    ]),
    new GameNode({name:'Terratial',id:894}),
    new GameNode({name:'Uiif Information Module',id:899}),
    new GameNode({name:'Iioqf Information Module',id:901})
  ]),
  new GameNode({name:'Ppow Information Module',id:1009}, [
    new GameNode({name:'Overcooked',id:1010})
  ]),
  new GameNode({name:'Strategy',id:500}, [
    new GameNode({name:'Stragey egwg Module',id:524})
  ]),
  new GameNode({name:'Battery Information Module',id:724}, [
    new GameNode({name:'Battery Capacity Module',id:788}, [
      new GameNode({name:'Size  Module',id:86}),
    ])
  ]),
  new GameNode({name:'Certificate  Module',id:200}, [
    new GameNode({name:'Compliance Module',id:201}, [
      new GameNode({name:'Policy Module',id:202}),
      new GameNode({name:'Terms Module',id:205})
    ])
  ]),
  new GameNode({name:'Chemical Information Module',id:404}, [
    new GameNode({name:'Chemical Regulation Module',id:405}, [
      new GameNode({name:'Substances Mix Module',id:406}),
    ])
  ]),
  new GameNode({name:'Consumer Information Module',id:670}, [
    new GameNode({name:'Consumer Information Module',id:671}, [
      new GameNode({name:'Consumer Instruction Module',id:678}),
      new GameNode({name:'Steps Information Module',id:679})
    ])
  ]),
];

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  recursive: boolean = false;
  levels = new Map<GameNode, number>();
  treeControl: NestedTreeControl<GameNode>;
  activeNode:any;
  dataSource: MatTreeNestedDataSource<GameNode>;
  prevExpansionModel:any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.treeControl = new NestedTreeControl<GameNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = TREE_DATA;
  }

  getChildren = (node: GameNode) => {
    return node.children;
  };

  hasChildren = (index: number, node: GameNode) => {
    return node.children.value.length > 0;
  }

  clickNode(node:any){
    this.activeNode = node;
    console.log(this.activeNode);
    console.log(this.treeControl.expansionModel.selected);
    this.prevExpansionModel = this.treeControl.expansionModel.selected;

  }

  resetTree(){
    this.initTree();
  }

  initTree(){
    this.treeControl = new NestedTreeControl<GameNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = TREE_DATA;
  }

  getPrevExpansionModel(){
    this.prevExpansionModel.forEach((object:any) => this.treeControl.expand(object));
  }

}

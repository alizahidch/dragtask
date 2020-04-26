import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { splitAtColon } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragTask';
  firstTask = [
    'Div 1 ',
    'Div 2 '
  
  ];




  secondTask=[
    'Div 1 ',
    'Div 2 ',
    'Div 3 ',
    'Div 4 '

  ]

  drop(event: CdkDragDrop<string[]>) {

    moveItemInArray(this.firstTask, event.previousIndex, event.currentIndex);
    let initialIndex=event.previousIndex;
    let divName='Div '+initialIndex.toString();
    this.firstTask.splice(event.previousIndex,0,divName)
   
  }



  dropSecond(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.secondTask, event.previousIndex, event.currentIndex);
    // this.secondTask.splice(event.currentIndex,0,this.secondTask[event.previousIndex])
    let initialIndex=event.previousIndex;
    let finalIndex=event.currentIndex;
console.log(initialIndex)
console.log(finalIndex)
  }
}

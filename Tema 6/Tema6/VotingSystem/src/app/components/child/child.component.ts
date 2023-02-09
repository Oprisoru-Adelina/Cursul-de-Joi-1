import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Person } from '../modele/Person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input() name ="";
   @Output() voted  = new EventEmitter<boolean>();
  personVoted = false;

  voteClicked(agree:boolean){
    this.voted.emit(agree)
    this.personVoted = true
  }
}

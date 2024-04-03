import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstname : string = ''
  lastname : string = ''
  country : string = ''
  isSubmitted : boolean = false;

  onSubmit(){
    console.log('we are submitting');
    
    this.isSubmitted = true;
  }

  canExit(){
    if((this.firstname || this.lastname  || this.country) && !this.isSubmitted){
      console.log('Here we are again');
      return confirm('yours details are unsaved,you still wanna proceed');
    }else{
      return true;
    }
  }

}

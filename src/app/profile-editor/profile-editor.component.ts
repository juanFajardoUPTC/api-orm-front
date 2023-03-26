import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent  {

  profileForm = new FormGroup({
    code: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    doctype: new FormControl(''),
    docnum: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl(''),


  });

  onSubmit(){
    console.warn(this.profileForm.value);
  }



}

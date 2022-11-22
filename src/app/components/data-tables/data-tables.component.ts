import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

  saveForm: FormGroup;
  updateVar: any;

  updater: number = -1;
  updateVal:any;

  // data:any = this._state.data;
  entries:number = 10;

  addData(){
    this.updateVal = this.saveForm.value;
    this.updateVal.checks = false;
    this.updateVal.visible = true;
    this._state.data.push(this.updateVal);
    this.saveForm.reset();
  }

  resetUpdater(){
    this.updater = -1;
  }

  invertVisible(ids:any){
    this._state.data[ids].visible = !this._state.data[ids].visible;
    // alert(ids);
  }

  deletess(ids:any){
    this._state.data.splice(ids, 1);
    // alert(this._state.data);
  }

  updateData(ids:any){
    this.updateVal = this.saveForm.value;
    this.updateVal.checks = this._state.data[ids].checks;
    this.updateVal.visible = this._state.data[ids].visible;
    this._state.data[ids] = this.updateVal;
    this.updater = -1;
    this.saveForm.reset();
  }

  getDataForUpdate(ids:any){
    this.updater = ids;
    this.updateVar = this._state.data[ids];
    console.log(this.updateVar)
    this.saveForm = new FormGroup({
      name: new FormControl(
        `${this.updateVar.name}`,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      leadId: new FormControl(
        this.updateVar.leadId,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      location: new FormControl(
        `${this.updateVar.location}`,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      eventDate: new FormControl(
        `${this.updateVar.eventDate}`,
        [
          Validators.required,
          Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$')
        ]
        ),
      status: new FormControl(
        `${this.updateVar.status}`,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        )
    })
  }

  // addData(){
  //   alert('hello')
  // }

  constructor(public _state: StateService) { 
    this.saveForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      leadId: new FormControl(
        0,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      location: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      eventDate: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$')
        ]
        ),
      status: new FormControl(
        0,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        )
    })
   }

  ngOnInit(): void {
  }

}

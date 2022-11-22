import { Injectable } from '@angular/core';
import { raceWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  data: any[] = [
    {
      name: "Akash Kumar",
      leadId: 4,
      location: "Hydrabad",
      eventDate: "2yrs",
      status: "New",
      checks: false,
      visible: true
    },
    {
      name: "Akash Kumar",
      leadId: 8,
      location: "Pune",
      eventDate: "4yrs",
      status: "Pipeline",
      checks: true,
      visible: false
    },

  ]

  mainConstructionData:any = [
    {
      name: "Main Entry Gate",
      udm: "NOS",
      qty: 2,
      rate: 1200,
      amount: 1200,
    },
    {
      name: "Passage",
      udm: "NOS",
      qty: 2,
      rate: 1200,
      amount: 1200,
    },
  ]

  constructor() { }
}

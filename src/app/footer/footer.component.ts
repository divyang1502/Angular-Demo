import { Component } from '@angular/core';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private addressService: AddressService) {
    console.log(addressService.address());    
  }
}

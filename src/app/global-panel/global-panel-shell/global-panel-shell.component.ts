import { Component } from '@angular/core';
import { UserListFacade } from '../../shared/data-access/store/user/facade/user-list.facade';
import { UserDetails } from '../../shared/data-access/models/user/UserDetails';
import { Observable } from 'rxjs';
import { Farmer } from '../../shared/data-access/models/farmer/Farmer';
import { FarmerListFacade } from '../../shared/data-access/store/farmer/facade/farmer-list.facade';

@Component({
  selector: 'global-panel-shell',
  templateUrl: './global-panel-shell.component.html',
  styleUrl: './global-panel-shell.component.scss'
})
export class GlobalPanelShellComponent {

  users$: Observable<UserDetails[] | null>;
  farmers$: Observable<Farmer[] | null>;

  constructor(
    private userListFacade: UserListFacade, private farmerListFacade: FarmerListFacade) {
    this.users$ = this.userListFacade.selectData$;
    this.farmers$ = this.farmerListFacade.selectFarmerList$;
  }

  ngOnInit() {
    this.userListFacade.getUserDetails();
    this.farmerListFacade.getFarmers();

    this.users$.subscribe(data =>console.log('Users: ', data));

  }

}

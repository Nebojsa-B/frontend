import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import { UserDetails } from '../../shared/data-access/models/user/UserDetails';
import { Farmer } from '../../shared/data-access/models/farmer/Farmer';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'global-panel-charts',
  templateUrl: './global-panel-charts.component.html',
  styleUrl: './global-panel-charts.component.scss'
})
export class GlobalPanelChartsComponent {
  @Input() set users(value: UserDetails[] | null) {
      if(!value || value === undefined) return;
      this._users = value;

      this.userCountryCount = Object.values(
        value.reduce((acc, user) => {
          const countryId = user.location.countryId;
          console.log('CountryId: ', countryId);

          acc[countryId] = (acc[countryId] || 0) + 1;
          return acc;
      }, {})
      );

      this.farmerCountryCount = Object.values(
        value.filter(value => value.farmer).reduce((acc, user) => {
          const countryId = user.location.countryId;
          acc[countryId] = (acc[countryId] || 0) + 1;
          return acc;
      }, {})
      );

      const productCountByCountry = {};

      value.filter(value => value.farmer).forEach(user => {
        const countryId = user.location.countryId;
        const products = user.farmer.products;
      
        if (!productCountByCountry[countryId]) {
          productCountByCountry[countryId] = 0;
        }
        productCountByCountry[countryId] += products.length;
      });

      this.productsCountryCount = Object.values(
        productCountByCountry
      );

  };
 
  get users() {
    return this._users;
  }
  private _users!: UserDetails[];

  get farmers() {
    if(!this.users) return null;

    return this.users.filter(value => value.farmer);
  }

  get products() {

    const total: number = this.productsCountryCount.reduce((sum, current) => sum + current, 0);

    return total;
  }

  userCountryCount!: number[];
  farmerCountryCount!: number[];
  productsCountryCount!: number[];


  farmerChart: ChartOptions;
  userChart: ChartOptions;
  productChart: ChartOptions;

  constructor() {

  //   const userCountryCount = this.users.reduce((acc, user) => {
  //     const countryId = user.location.countryId;
  //     acc[countryId] = (acc[countryId] || 0) + 1;
  //     return acc;
  // }, {});
  
    this.farmerChart = {
      series: [10,10,10],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Serbia", "Romania", "Macedonia"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.userChart = {
      series: this.userCountryCount,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Serbia", "Romania", "Macedonia"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.productChart = {
      series: [44, 55, 13],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Serbia", "Romania", "Macedonia"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}

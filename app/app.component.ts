///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../scripts/definition/wijmo.d.ts"/>
///<reference path="../scripts/definition/wijmo.angular2.d.ts"/>
'use strict';
// Import Core modules and Core Ng2 Directives - Angular2 Beta 15 
import {Component} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

// Wijmo Input and FlexGrid controls 
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
// MetaData and Decorators 
@Component({
	selector: 'my-app',
	templateUrl: '/app/app.html',
	directives: [wjNg2Input.WjInputNumber, wjNg2Input.WjComboBox, wjNg2Input.WjInputDate, // wjNg2Input
            wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, CORE_DIRECTIVES]
    })
    export class AppComponent { 
  
        // the URL to our OData service
        private _svcUrl: string = 'http://services.odata.org/Northwind/Northwind.svc';
 
        // collections exposed to the view
        customers: wijmo.collections.CollectionView;
        orders: wijmo.collections.CollectionView;
        details: wijmo.collections.CollectionView;
		// define query and currentItem as any to assist with migration path 
        queryResources: any;
        currentItem : any;
        // create the application object and default constructor 
        constructor() {
            // initialize the wijmo collections
            this.customers = new wijmo.collections.CollectionView();
            this.orders = new wijmo.collections.CollectionView();
            this.details = new wijmo.collections.CollectionView();
            this.currentItem = {};
           
            //this.customers.canSort = true;
            
            
            // initialize the query history as empty array 
            this.queryResources = [];
 
            // when the current customer changes, get their orders
            this.customers.currentChanged.addHandler(() => {
                this.orders.sourceCollection = [];
                //this.details.sourceCollection = [];
               
                var customer = this.customers.currentItem;
                if (customer) {
                    this.loadData(this._svcUrl, this.orders, 'Customers(\'' + customer.CustomerID + '\')/Orders', {
                        OrderDate: wijmo.DataType.Date,
                        RequiredDate: wijmo.DataType.Date,
                        ShippedDate: wijmo.DataType.Date,
                        Freight: wijmo.DataType.Number
                    });
                }
            });
 
            // when the current order changes, get the order details
            this.orders.currentChanged.addHandler(() => {
                this.details.sourceCollection = [];
             
                var order = this.orders.currentItem;
                if (order) {
                    this.loadData(this._svcUrl, this.details, 'Orders(' + order.OrderID + ')/Order_Details', {
                        UnitPrice: wijmo.DataType.Number
                    });
                }
    
                // Here we need to update Current item and the values of our Current Freight, ShipDate, and OrderDate so the View is aware.
                this.currentItem = this.orders.currentItem ;
            });
        }
 
        // start loading the data
        startButton_Click(): void {
            this.queryResources = [];
            this.loadData(this._svcUrl, this.customers, 'Customers');
        }
 
        // private utility to load OData into a CollectionView
        public loadData(baseUrl: string, view: wijmo.collections.CollectionView, table: string, types?: Object): void {
       
            // build url
            var url = baseUrl + '/' + table;
            url += (url.indexOf('?') < 0) ? '?' : '&';
            url += '$format=json';
 
            // update query history
            this.queryResources.push({
                table: table.indexOf('/') > -1 ? table.split('/')[1] : table.split('?')[0],
                url: url
            });
 
            // go get the data
            wijmo.httpRequest(url, {
                success: (xhr) => {
 
                    // append new items
                    var data = JSON.parse(xhr.response);
                    for (var i = 0; i < data.value.length; i++) {
 
                        // convert data types (JSON doesn't do dates...)
                        var item = data.value[i];
                        if (types) {
                            for (var key in types) {
                                if (item[key]) {
                                    item[key] = wijmo.changeType(item[key], types[key], null);
                                }
                            }
                        }
 
                        // add item to collection
                        view.sourceCollection.push(item);
                    }
               
                    // continue loading more data or finish
                    if (data['odata.nextLink']) {
                        this.loadData(baseUrl, view, data['odata.nextLink']);
                    } else {
                        view.refresh();
                        view.moveCurrentToFirst();
                    }
                }
            });
        }	  
}


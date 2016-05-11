System.register(['angular2/core', 'angular2/common', 'wijmo/wijmo.angular2.input', 'wijmo/wijmo.angular2.grid'], function(exports_1, context_1) {
    ///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
    ///<reference path="../scripts/definition/wijmo.d.ts"/>
    ///<reference path="../scripts/definition/wijmo.angular2.d.ts"/>
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, wjNg2Input, wjNg2Grid;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            },
            function (wjNg2Grid_1) {
                wjNg2Grid = wjNg2Grid_1;
            }],
        execute: function() {
            // MetaData and Decorators 
            AppComponent = (function () {
                // create the application object and default constructor 
                function AppComponent() {
                    var _this = this;
                    // the URL to our OData service
                    this._svcUrl = 'http://services.odata.org/Northwind/Northwind.svc';
                    // initialize the wijmo collections
                    this.customers = new wijmo.collections.CollectionView();
                    this.orders = new wijmo.collections.CollectionView();
                    this.details = new wijmo.collections.CollectionView();
                    this.currentItem = {};
                    //this.customers.canSort = true;
                    // initialize the query history as empty array 
                    this.queryResources = [];
                    // when the current customer changes, get their orders
                    this.customers.currentChanged.addHandler(function () {
                        _this.orders.sourceCollection = [];
                        //this.details.sourceCollection = [];
                        var customer = _this.customers.currentItem;
                        if (customer) {
                            _this.loadData(_this._svcUrl, _this.orders, 'Customers(\'' + customer.CustomerID + '\')/Orders', {
                                OrderDate: wijmo.DataType.Date,
                                RequiredDate: wijmo.DataType.Date,
                                ShippedDate: wijmo.DataType.Date,
                                Freight: wijmo.DataType.Number
                            });
                        }
                    });
                    // when the current order changes, get the order details
                    this.orders.currentChanged.addHandler(function () {
                        _this.details.sourceCollection = [];
                        var order = _this.orders.currentItem;
                        if (order) {
                            _this.loadData(_this._svcUrl, _this.details, 'Orders(' + order.OrderID + ')/Order_Details', {
                                UnitPrice: wijmo.DataType.Number
                            });
                        }
                        // Here we need to update Current item and the values of our Current Freight, ShipDate, and OrderDate so the View is aware.
                        _this.currentItem = _this.orders.currentItem;
                    });
                }
                // start loading the data
                AppComponent.prototype.startButton_Click = function () {
                    this.queryResources = [];
                    this.loadData(this._svcUrl, this.customers, 'Customers');
                };
                // private utility to load OData into a CollectionView
                AppComponent.prototype.loadData = function (baseUrl, view, table, types) {
                    var _this = this;
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
                        success: function (xhr) {
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
                                _this.loadData(baseUrl, view, data['odata.nextLink']);
                            }
                            else {
                                view.refresh();
                                view.moveCurrentToFirst();
                            }
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.html',
                        directives: [wjNg2Input.WjInputNumber, wjNg2Input.WjComboBox, wjNg2Input.WjInputDate,
                            wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
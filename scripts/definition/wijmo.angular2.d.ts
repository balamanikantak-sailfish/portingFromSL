/*
    *
    * Wijmo Library 5.20161.143
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
declare module wj {
    module interop {
        class ControlMetaFactory {
            static CreateProp(propertyName: string, propertyType: PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number): PropDescBase;
            static CreateEvent(eventName: string, isPropChanged?: boolean): EventDescBase;
            static CreateComplexProp(propertyName: string, isArray: boolean, ownsObject?: boolean): ComplexPropDescBase;
            static findProp(propName: string, props: PropDescBase[]): PropDescBase;
            static findEvent(eventName: string, events: EventDescBase[]): EventDescBase;
            static findComplexProp(propName: string, props: ComplexPropDescBase[]): ComplexPropDescBase;
            static getMetaData(metaDataId: any): MetaDataBase;
            static getClassName(classRef: any): string;
            static toCamelCase(s: any): any;
            private static findInArr(arr, propName, value);
        }
        class PropDescBase {
            private _propertyName;
            private _propertyType;
            private _changeEvent;
            private _enumType;
            private _isNativeControlProperty;
            private _priority;
            constructor(propertyName: string, propertyType: PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number);
            propertyName: string;
            propertyType: PropertyType;
            changeEvent: string;
            enumType: any;
            bindingMode: BindingMode;
            isNativeControlProperty: boolean;
            priority: number;
            shouldUpdateSource: boolean;
            initialize(options: any): void;
            castValueToType(value: any): any;
            private _parseDate(value);
        }
        enum PropertyType {
            Boolean = 0,
            Number = 1,
            Date = 2,
            String = 3,
            AnyPrimitive = 4,
            Enum = 5,
            Function = 6,
            EventHandler = 7,
            Any = 8,
        }
        function isSimpleType(type: PropertyType): boolean;
        enum BindingMode {
            OneWay = 0,
            TwoWay = 1,
        }
        class EventDescBase {
            private _eventName;
            private _isPropChanged;
            constructor(eventName: string, isPropChanged?: boolean);
            eventName: string;
            isPropChanged: boolean;
        }
        class ComplexPropDescBase {
            propertyName: string;
            isArray: boolean;
            private _ownsObject;
            constructor(propertyName: string, isArray: boolean, ownsObject?: boolean);
            ownsObject: boolean;
        }
        class MetaDataBase {
            private _props;
            private _events;
            private _complexProps;
            parentProperty: string;
            isParentPropertyArray: boolean;
            ownsObject: boolean;
            parentReferenceProperty: string;
            ngModelProperty: string;
            constructor(props: PropDescBase[], events?: EventDescBase[], complexProps?: ComplexPropDescBase[], parentProperty?: string, isParentPropertyArray?: boolean, ownsObject?: boolean, parentReferenceProperty?: string, ngModelProperty?: string);
            props: PropDescBase[];
            events: EventDescBase[];
            complexProps: ComplexPropDescBase[];
            add(props: PropDescBase[], events?: EventDescBase[], complexProps?: ComplexPropDescBase[], parentProperty?: string, isParentPropertyArray?: boolean, ownsObject?: boolean, parentReferenceProperty?: string, ngModelProperty?: string): MetaDataBase;
            addOptions(options: any): this;
            prepare(): void;
        }
    }
}
export { wj as wjMetaBase };

import { wjMetaBase } from "wijmo/wijmo.metaFactory";
export declare class MetaFactory extends wjMetaBase.interop.ControlMetaFactory {
    static CreateProp(propertyName: string, propertyType: wjMetaBase.interop.PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number): PropDesc;
    static CreateEvent(eventName: string, isPropChanged?: boolean): EventDesc;
    static CreateComplexProp(propertyName: string, isArray: boolean, ownsObject?: boolean): ComplexPropDesc;
    static findProp(propName: string, props: PropDesc[]): PropDesc;
    static findEvent(eventName: string, events: EventDesc[]): EventDesc;
    static findComplexProp(propName: string, props: ComplexPropDesc[]): ComplexPropDesc;
}
export declare class PropDesc extends wjMetaBase.interop.PropDescBase {
}
export declare class EventDesc extends wjMetaBase.interop.EventDescBase {
}
export declare class ComplexPropDesc extends wjMetaBase.interop.ComplexPropDescBase {
}

import * as ng2 from 'angular2/core';
import { ChangeDetectionStrategy, Type, ViewEncapsulation } from 'angular2/core';
import { wjMetaBase } from "wijmo/wijmo.metaFactory";
export declare var WjComponent: (options: {
    wjIsDirective?: boolean;
    wjMetadataId?: any;
    wjParentDirectives?: any[];
    wjSiblingDirectiveId?: string;
    wjOverride?: any;
    selector?: string;
    inputs?: string[];
    outputs?: string[];
    properties?: string[];
    events?: string[];
    host?: {
        [key: string]: string;
    };
    bindings?: any[];
    providers?: any[];
    exportAs?: string;
    moduleId?: string;
    queries?: {
        [key: string]: any;
    };
    viewBindings?: any[];
    viewProviders?: any[];
    changeDetection?: ChangeDetectionStrategy;
    templateUrl?: string;
    template?: string;
    styleUrls?: string[];
    styles?: string[];
    directives?: (Type | any[])[];
    pipes?: (Type | any[])[];
    encapsulation?: ViewEncapsulation;
}) => any;
export declare type ChangePropertyEvents = {
    prop: string;
    evExposed: string;
    evImpl: string;
};
export declare type EventPropertiesItem = {
    event: string;
    eventImpl: string;
    props?: ChangePropertyEvents[];
};
export declare type EventProperties = EventPropertiesItem[];
export declare class DirectiveTypeData {
    private _fwdResolved;
    private static _siblingIdCounter;
    metaData: wjMetaBase.interop.MetaDataBase;
    changeEventMap: EventProperties;
    parentDirectives: any[];
    siblingId: string;
    constructor(metaData: wjMetaBase.interop.MetaDataBase, changeEventMap: EventProperties, parentDirectives: any[], siblingId: string);
    resolveForwardDeclarations(): void;
}
export declare class WjDirectiveBehavior {
    static BehaviourRefProp: string;
    static parPropAttr: string;
    static siblingDirIdAttr: string;
    private static _pathBinding;
    private _parentPropDesc;
    private _siblingInsertedEH;
    directive: Object;
    typeData: DirectiveTypeData;
    elementRef: ng2.ElementRef;
    injector: ng2.Injector;
    parentBehavior: WjDirectiveBehavior;
    isDestroyed: boolean;
    static getHostElement(directive: Object, ngHostElRef: ng2.ElementRef): HTMLElement;
    static attach(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector): WjDirectiveBehavior;
    constructor(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector);
    dirOnInit(originalMethod: Function): void;
    dirOnDestroy(originalMethod: Function): void;
    dirOnChanges(originalMethod: Function, changes: any): void;
    static instantiateTemplate(parent: HTMLElement, viewContainerRef: ng2.ViewContainerRef, templateRef: ng2.TemplateRef, domRenderer: ng2.Renderer): {
        viewRef: ng2.EmbeddedViewRef;
        rootElement: Element;
    };
    private createEvents();
    private subscribeToEvents();
    private addHandlers(eventMap);
    private _setupAsChild();
    private _isChild();
    private _isParentInitializer();
    private _isParentReferencer();
    private _getParentProp();
    private _getParentReferenceProperty();
    private _useParentObj();
    private _isParentArray();
    private _parentInCtor();
    private _initParent();
    _getSiblingIndex(): number;
    private _siblingInserted(e);
    private _isHostElement();
    private static evaluatePath(obj, path);
    static getBehavior(directive: any): WjDirectiveBehavior;
    static containsDirective(parentDirective: Object, childDirective: Object): boolean;
    static resolveForwardDecl(array: any[]): void;
    static findParentBehavior(injector: ng2.Injector, directiveTypes: any[], upToBehavior?: WjDirectiveBehavior): WjDirectiveBehavior;
}
export declare class Ng2Utils {
    static directiveTypeDataProp: string;
    static initEvents(directiveType: any, changeEvents: EventProperties): string[];
    private static getChangeEventNameImplemented(propertyName);
    private static getChangeEventNameExposed(propertyName);
    private static getWjEventNameImplemented(eventName);
    static getChangeEventMap(metaData: wjMetaBase.interop.MetaDataBase): {
        event: string;
        eventImpl: string;
        props?: {
            prop: string;
            evExposed: string;
            evImpl: string;
        }[];
    }[];
    static getBaseType(type: Type): Type;
    static getAnnotations(type: Type): any[];
    static getAnnotation(annotations: any[], annotationType: Type): any;
    static getTypeAnnotation(type: Type, annotationType: Type, own?: boolean): any;
    static _copy(dst: any, src: any, override?: boolean, includePrivate?: boolean, filter?: (name: string, value: any) => boolean): void;
}

/**
* Contains Angular 2 components for the <b>wijmo</b> module.
*
* <b>wijmo.angular2.core</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjCore from 'wijmo/wijmo.angular2.core';
* &nbsp;
* &#64;Component({
*     directives: [wjCore.WjTooltip],
*     template: '&lt;span [wjTooltip]="'Greeting'"&gt;Hello&lt;/span&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
import { ElementRef, Injector, DynamicComponentLoader, EventEmitter, OnInit } from 'angular2/core';
import * as ngCore from 'angular2/core';
/**
 * Angular 2 directive for the @see:Tooltip class.
 *
 * Use the <b>wjTooltip</b> directive to add tooltips to elements on the page.
 * The wjTooltip directive supports HTML content, smart positioning, and touch.
 *
 * The wjTooltip directive is specified as a parameter added to the
 * element that the tooltip applies to. The parameter value is the tooltip
 * text or the id of an element that contains the text. For example:
 *
 * <pre>&lt;p [wjTooltip]="'#fineprint'" &gt;
 *     Regular paragraph content...&lt;/p&gt;
 * ...
 * &lt;div id="fineprint" style="display:none"&gt;
 *   &lt;h3&gt;Important Note&lt;/h3&gt;
 *   &lt;p&gt;
 *     Data for the current quarter is estimated
 *     by pro-rating etc.&lt;/p&gt;
 * &lt;/div&gt;</pre>
 */
export declare class WjTooltip implements ngCore.OnDestroy {
    private elRef;
    private static _toolTip;
    private _toolTipText;
    constructor(elRef: ElementRef, injector: Injector);
    wjTooltip: string;
    ngOnDestroy(): void;
}
/**
 * TBD
 */
export declare class WjComponentLoader {
    private _dcl;
    private _elementRef;
    private _component;
    private _properties;
    private _cmpRef;
    propertiesChange: EventEmitter<{}>;
    constructor(_dcl: DynamicComponentLoader, _elementRef: ElementRef);
    component: any;
    properties: Object;
    private _updateProperties();
    private _addPropListener(component, propName, propChange);
}
/**
 * TBD: ngBindHtml analogue
 */
export declare class WjHtmlLoader implements OnInit {
    private _dcl;
    private _elementRef;
    private _components;
    private _bindingContext;
    private _bindings;
    private _cmpRef;
    html: string;
    constructor(_dcl: DynamicComponentLoader, _elementRef: ElementRef);
    components: any[];
    bindingContext: Object;
    ngOnInit(): void;
    private _createComponent();
}

import { ElementRef, Injector, ViewContainerRef, TemplateRef, Renderer, AppViewManager } from 'angular2/core';
import * as ngCore from 'angular2/core';
import { NgModel, NgControlName } from 'angular2/common';
/**
 * Angular 2 component for the @see:ComboBox control.
 *
 * Use the <b>wj-combo-box</b> component to add <b>ComboBox</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjComboBox</b> component is derived from the <b>ComboBox</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjComboBox extends wijmo.input.ComboBox {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:AutoComplete control.
 *
 * Use the <b>wj-auto-complete</b> component to add <b>AutoComplete</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjAutoComplete</b> component is derived from the <b>AutoComplete</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjAutoComplete extends wijmo.input.AutoComplete {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:Calendar control.
 *
 * Use the <b>wj-calendar</b> component to add <b>Calendar</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjCalendar</b> component is derived from the <b>Calendar</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjCalendar extends wijmo.input.Calendar {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:ColorPicker control.
 *
 * Use the <b>wj-color-picker</b> component to add <b>ColorPicker</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjColorPicker</b> component is derived from the <b>ColorPicker</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjColorPicker extends wijmo.input.ColorPicker {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:InputMask control.
 *
 * Use the <b>wj-input-mask</b> component to add <b>InputMask</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjInputMask</b> component is derived from the <b>InputMask</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputMask extends wijmo.input.InputMask {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:InputColor control.
 *
 * Use the <b>wj-input-color</b> component to add <b>InputColor</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjInputColor</b> component is derived from the <b>InputColor</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputColor extends wijmo.input.InputColor {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:MultiSelect control.
 *
 * Use the <b>wj-multi-select</b> component to add <b>MultiSelect</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjMultiSelect</b> component is derived from the <b>MultiSelect</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjMultiSelect extends wijmo.input.MultiSelect {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:InputNumber control.
 *
 * Use the <b>wj-input-number</b> component to add <b>InputNumber</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjInputNumber</b> component is derived from the <b>InputNumber</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputNumber extends wijmo.input.InputNumber {
    constructor(elRef: ElementRef, injector: Injector, ngModelDir: NgModel, ngControlNameDir: NgControlName);
}
/**
 * Angular 2 component for the @see:InputDate control.
 *
 * Use the <b>wj-input-date</b> component to add <b>InputDate</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjInputDate</b> component is derived from the <b>InputDate</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputDate extends wijmo.input.InputDate {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:InputTime control.
 *
 * Use the <b>wj-input-time</b> component to add <b>InputTime</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjInputTime</b> component is derived from the <b>InputTime</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputTime extends wijmo.input.InputTime {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:InputDateTime control.
 *
 * Use the <b>wj-input-date-time</b> component to add <b>InputDateTime</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjInputDateTime</b> component is derived from the <b>InputDateTime</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjInputDateTime extends wijmo.input.InputDateTime {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:ListBox control.
 *
 * Use the <b>wj-list-box</b> component to add <b>ListBox</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjListBox</b> component is derived from the <b>ListBox</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-list-box</b> component may contain @see:wijmo/wijmo.angular2.input.WjItemTemplate
 * child directive.
*/
export declare class WjListBox extends wijmo.input.ListBox {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:Menu control.
 *
 * Use the <b>wj-menu</b> component to add <b>Menu</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjMenu</b> component is derived from the <b>Menu</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-menu</b> component may contain the following child components and directives:
 * @see:wijmo/wijmo.angular2.input.WjMenuItem,
 * @see:wijmo/wijmo.angular2.input.WjMenuSeparator and
 * @see:wijmo/wijmo.angular2.input.WjItemTemplate (in case of data-bound Menu control).
*/
export declare class WjMenu extends wijmo.input.Menu implements ngCore.OnInit, ngCore.OnDestroy, ngCore.OnChanges, ngCore.AfterContentInit {
    private _value;
    private _definedHeader;
    private _appRef;
    private _cdRef;
    constructor(elRef: ElementRef, injector: Injector, appRef: ngCore.ApplicationRef, cdRef: ngCore.ChangeDetectorRef);
    value: any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: {
        [key: string]: ngCore.SimpleChange;
    }): void;
    ngAfterContentInit(): void;
    refresh(fullUpdate?: boolean): void;
    private _attachToControl();
    private _loadingItems(s);
    private _fmtItem(s, e);
    private _updateHeader();
}
/**
 * Angular 2 directive for menu items.
 *
 * The <b>wj-menu-item</b> component must be contained in a @see:wijmo/wijmo.angular2.input.WjMenu directive.
 * It supports the following attributes:
 *
 * <dl class="dl-horizontal">
 *   <dt>[cmd]</dt>       <dd>The function to execute in the controller
 *                      when the item is clicked.</dd>
 *   <dt>[cmdParam]</dt>  <dd>The parameter passed to the <b>cmd</b> function
 *                      when the item is clicked.</dd>
 *   <dt>[(value)]</dt>     <dd>The value to select when the item is clicked
 *                      (use either this or <b>cmd</b>).</dd>
 * </dl>
 *
 * The content displayed by the item may contain an arbitrary HTML fragment with Angular 2 bindings,
 * components and directives.
 * You can also use <b>ngFor</b> and <b>ngIf</b> directives to populate the items in the Menu control.
 * The local <b>item</b>,
 * <b>itemIndex</b> and <b>control</b> template variables can be used in Angular 2 bindings
 * that refer to the data item, its index, and the owner control.
 */
export declare class WjMenuItem implements ngCore.OnInit, ngCore.AfterContentInit {
    elRef: ElementRef;
    private viewContainerRef;
    private appViewManager;
    private domRenderer;
    value: string;
    cmd: string;
    cmdParam: string;
    header: string;
    _ownerMenu: wijmo.input.Menu;
    templateDir: WjMenuItemTemplateDir;
    contentRoot: HTMLElement;
    constructor(elRef: ElementRef, injector: Injector, viewContainerRef: ViewContainerRef, appViewManager: AppViewManager, domRenderer: Renderer);
    ngOnInit(): void;
    wjAfterParentInit(): void;
    ngAfterContentInit(): void;
}
/**
 * Angular 2 component for menu separators.
 *
 * The <b>wj-menu-item-separator</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.input.WjMenu directive.
 * It adds a non-selectable separator to the menu, and has no attributes.
 */
export declare class WjMenuSeparator extends WjMenuItem implements ngCore.OnInit {
    constructor(elRef: ElementRef, injector: Injector, viewContainerRef: ViewContainerRef, appViewManager: AppViewManager, domRenderer: Renderer);
    ngOnInit(): void;
}
export declare class WjMenuItemTemplateDir implements ngCore.OnInit, ngCore.AfterContentInit {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef;
    elRef: ElementRef;
    private domRenderer;
    wjMenuItemTemplateDir: any;
    ownerItem: WjMenuItem;
    contentRoot: HTMLElement;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef, elRef: ElementRef, injector: Injector, domRenderer: Renderer, menuItem: WjMenuItem, menuSeparator: WjMenuSeparator);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
/**
 * TBD
 */
export declare class WjItemTemplate implements ngCore.OnInit, ngCore.OnDestroy {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef;
    elRef: ElementRef;
    private domRenderer;
    wjItemTemplate: any;
    ownerControl: wijmo.Control;
    listBox: wijmo.input.ListBox;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef, elRef: ElementRef, injector: Injector, domRenderer: Renderer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _attachToControl();
    private _loadingItems(s);
    private _fmtItem(s, e);
    private _instantiateTemplate(parent);
    private static _getListBox(ownerControl);
}
/**
 * Angular 2 component for the @see:Popup control.
 *
 * Use the <b>wj-popup</b> component to add <b>Popup</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The popup content may be specified inside the <b>wj-popup</b> tag, and can
 * contain an arbitrary HTML fragment with Angular 2 bindings, components
 * and directives.
 *
 * The <b>WjPopup</b> component is derived from the <b>Popup</b> control and
 * inherits all its properties, events and methods.
*/
export declare class WjPopup extends wijmo.input.Popup implements ngCore.OnChanges {
    private _elRef;
    constructor(elRef: ElementRef, injector: Injector);
    ngOnChanges(changes: {
        [key: string]: ngCore.SimpleChange;
    }): void;
    dispose(): void;
}
/**
 * Angular 2 directive for context menus.
 *
 * Use the <b>wjContextMenu</b> directive to add context menus to elements
 * on the page. The wjContextMenu directive is based on the <b>wj-menu</b>
 * component; it displays a popup menu when the user performs a context menu
 * request on an element (usually a right-click).
 *
 * The wjContextMenu directive is specified as a parameter added to the
 * element that the context menu applies to. The parameter value is a
 * reference to the <b>wj-menu</b> component. For example:
 *
 * <pre>&lt;!-- paragraph with a context menu --&gt;
 *&lt;p [wjContextMenu]="menu" &gt;
 *  This paragraph has a context menu.&lt;/p&gt;
 *
 *&lt;!-- define the context menu (hidden and with an id) --&gt;
 *&lt;wj-menu #menu style="display:none"&gt;
 *  &lt;wj-menu-item [cmd]="cmdOpen" [cmdParam] ="1"&gt;Open...&lt;/wj-menu-item&gt;
 *  &lt;wj-menu-item [cmd]="cmdSave" [cmdParam]="2"&gt;Save &lt;/wj-menu-item&gt;
 *  &lt;wj-menu-item [cmd]="cmdSave" [cmdParam]="3"&gt;Save As...&lt;/wj-menu-item&gt;
 *  &lt;wj-menu-item [cmd]="cmdNew" [cmdParam] ="4"&gt;New...&lt;/wj-menu-item&gt;
 *  &lt;wj-menu-separator&gt;&lt;/wj-menu-separator&gt;
 *  &lt;wj-menu-item [cmd]="cmdExit" [cmdParam]="5"&gt;Exit&lt;/wj-menu-item&gt;
 *&lt;/wj-menu &gt;</pre>
 */
export declare class WjContextMenu {
    private elRef;
    wjContextMenu: wijmo.input.Menu;
    constructor(elRef: ElementRef);
    onContextMenu(e: MouseEvent): void;
}
/**
 * Angular 2 component for an @see:ICollectionView navigator element.
 *
 * Use the <b>wj-collection-view-navigator</b> component to add an element that allows users to
 * navigate through the items in an @see:ICollectionView. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>. For example:
 *
 * &lt;wj-collection-view-navigator
 *   [cv]="myCollectionView"&gt;
 * &lt;/wj-collection-view-navigator&gt;</pre>
 */
export declare class WjCollectionViewNavigator {
    cv: wijmo.collections.CollectionView;
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for an @see:ICollectionView pager element.
 *
 * Use the <b>wj-collection-view-pager</b> component to add an element that allows users to
 * navigate through the pages in a paged @see:ICollectionView. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>. For example:
 *
 * &lt;wj-collection-view-pager
 *   [cv]="myCollectionView"&gt;
 * &lt;/wj-collection-view-pager&gt;</pre>
 */
export declare class WjCollectionViewPager {
    cv: wijmo.collections.CollectionView;
    constructor(elRef: ElementRef, injector: Injector);
}

import { ElementRef, ViewContainerRef, TemplateRef } from 'angular2/core';
import { QueryList, Injector, Renderer } from 'angular2/core';
import * as ngCore from 'angular2/core';
/**
 * Angular 2 component for the @see:FlexGrid control.
 *
 * Use the <b>wj-flex-grid</b> component to add <b>FlexGrid</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>. For example:
 *
 * <pre>&lt;p&gt;Here is a data bound FlexGrid control with four columns:&lt;/p&gt;
 * &lt;wj-flex-grid [itemsSource]="data"&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Country'"
 *     [binding]="'country'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Sales'"
 *     [binding]="'sales'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Expenses'"
 *     [binding]="'expenses'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Downloads'"
 *     [binding]="'downloads'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 * &lt;/wj-flex-grid&gt;</pre>
 *
 * The <b>WjFlexGrid</b> component is derived from the <b>FlexGrid</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-grid</b> component may contain @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn,
 * @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate,
 * @see:wijmo/wijmo.angular2.grid.detail.WjFlexGridDetail and
 * @see:wijmo/wijmo.angular2.grid.filter.WjFlexGridFilter child components.
*/
export declare class WjFlexGrid extends wijmo.grid.FlexGrid {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:FlexGrid @see:Column control.
 *
 * The <b>wj-flex-grid-column</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
 *
 * Use the <b>wj-flex-grid-column</b> component to add <b>Column</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexGridColumn</b> component is derived from the <b>Column</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-grid-column</b> component may contain
 * @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate child directives.
*/
export declare class WjFlexGridColumn extends wijmo.grid.Column {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Defines the type of cell to which to apply the template. This value is specified in the <b>cell-type</b> attribute
* of the @see:WjFlexGridCellTemplate directive.
*/
export declare enum CellTemplateType {
    /** Defines a regular (data) cell. */
    Cell = 0,
    /** Defines a cell in edit mode. */
    CellEdit = 1,
    /** Defines a column header cell. */
    ColumnHeader = 2,
    /** Defines a row header cell. */
    RowHeader = 3,
    /** Defines a row header cell in edit mode. */
    RowHeaderEdit = 4,
    /** Defines a top left cell. */
    TopLeft = 5,
    /** Defines a group header cell in a group row. */
    GroupHeader = 6,
    /** Defines a regular cell in a group row. */
    Group = 7,
    /** Defines a cell in a new row template. */
    NewCellTemplate = 8,
}
/**
 * TBD
 */
export declare class WjFlexGridCellTemplate implements ngCore.OnInit, ngCore.OnDestroy {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef;
    elRef: ElementRef;
    private domRenderer;
    wjFlexGridCellTemplate: any;
    cellTypeStr: string;
    cellOverflow: string;
    cellType: CellTemplateType;
    valuePaths: Object;
    grid: WjFlexGrid;
    column: WjFlexGridColumn;
    ownerControl: any;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef, elRef: ElementRef, domRenderer: Renderer, injector: Injector);
    static _getTemplContextProp(templateType: CellTemplateType): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    _instantiateTemplate(parent: HTMLElement): {
        viewRef: ngCore.EmbeddedViewRef;
        rootElement: Element;
    };
    private _attachToControl();
}
export declare class WjTemplateCmp {
    private viewContainerRef;
    private templateRef;
    private templates;
    contentChildren: QueryList<TemplateRef>;
    viewChildren: QueryList<TemplateRef>;
    constructor(elRef: ElementRef, injector: Injector, viewContainerRef: ViewContainerRef, templateRef: TemplateRef, templates: QueryList<TemplateRef>);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
}

/**
* Contains Angular 2 components for the <b>wijmo.grid.filter</b> module.
*
* <b>wijmo.angular2.grid.filter</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjFilter from 'wijmo/wijmo.angular2.grid.filter';
* import * as wjGrid from 'wijmo/wijmo.angular2.grid';
* &nbsp;
* &#64;Component({
*     directives: [wjGrid.WjFlexGrid, wjFilter.WjFlexGridFilter],
*     template: `
*       &lt;wj-flex-grid [itemsSource]="data"&gt;
*           &lt;wj-flex-grid-filter [filterColumns]="['country', 'expenses']"&gt;&lt;/wj-flex-grid-filter&gt;
*       &lt;/wj-flex-grid&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
/**
    * Angular 2 component for the @see:FlexGrid @see:FlexGridFilter object.
    *
    * The <b>wj-flex-grid-filter</b> component must be contained in a
    * @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
    *
    * Use the <b>wj-flex-grid-filter</b> component to add <b>FlexGridFilter</b> objects to your
    * Angular 2 applications. For details about Angular 2 markup syntax, see
    * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
    *
    * The <b>WjFlexGridFilter</b> component is derived from the <b>FlexGridFilter</b> class and
    * inherits all its properties, events and methods.
*/
export declare class WjFlexGridFilter extends wijmo.grid.filter.FlexGridFilter {
    constructor(elRef: ElementRef, injector: Injector, flexGrid: WjFlexGrid);
}

/**
* Contains Angular 2 components for the <b>wijmo.grid.grouppanel</b> module.
*
* <b>wijmo.angular2.grid.grouppanel</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjPanel from 'wijmo/wijmo.angular2.grid.grouppanel';
* import * as wjGrid from 'wijmo/wijmo.angular2.grid';
* &nbsp;
* &#64;Component({
*     directives: [wjGrid.WjFlexGrid, wjPanel.WjGroupPanel],
*     template: `
*       &lt;wj-group-panel
*           [grid]="flex"
*           [placeholder]="'Drag columns here to create groups.'"&gt;
*       &lt;/wj-group-panel&gt;
*       &lt;wj-flex-grid #flex [itemsSource]="data"&gt;
*       &lt;/wj-flex-grid&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:GroupPanel control.
*
* Use the <b>wj-group-panel</b> component to add <b>GroupPanel</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjGroupPanel</b> component is derived from the <b>GroupPanel</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjGroupPanel extends wijmo.grid.grouppanel.GroupPanel {
    constructor(elRef: ElementRef, injector: Injector);
}

import { Injector, ElementRef, ViewContainerRef, TemplateRef, Renderer } from 'angular2/core';
import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
/**
 * Angular 2 directive for @see:FlexGrid @see:DetailRow templates.
 *
 * The <b>wj-flex-grid-detail</b> directive must be specified on a <b>&lt;template&gt;</b>
 * template element contained in a <b>wj-flex-grid</b> component.
 *
 * The <b>wj-flex-grid-detail</b> directive is derived from the @see:FlexGridDetailProvider
 * class that maintains detail rows visibility, with detail rows content defined as
 * an arbitrary HTML fragment within the directive tag. The fragment may contain
 * Angular 2 bindings, components and directives.
 * The <b>row</b> and
 * <b>item</b> template variables can be used in Angular 2 bindings that refer to
 * the detail row's parent @see:Row and <b>Row.dataItem</b> objects.
 *
 */
export declare class WjFlexGridDetail extends wijmo.grid.detail.FlexGridDetailProvider {
    private _viewContainerRef;
    private _templateRef;
    private _domRenderer;
    flexGrid: WjFlexGrid;
    private static _viewRefProp;
    wjFlexGridDetail: any;
    constructor(_viewContainerRef: ViewContainerRef, _templateRef: TemplateRef, _domRenderer: Renderer, elRef: ElementRef, injector: Injector, flexGrid: WjFlexGrid);
    private _init();
}

/**
* Contains Angular 2 components for the <b>wijmo.grid.sheet</b> module.
*
* <b>wijmo.angular2.grid.sheet</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjSheet from 'wijmo/wijmo.angular2.grid.sheet';
* &nbsp;
* &#64;Component({
*     directives: [wjSheet.WjFlexSheet],
*     template: `&lt;wj-flex-sheet&gt;&lt;/wj-flex-sheet&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
* }</pre>
*
*/
import { Injector, ElementRef, OnInit, OnChanges, SimpleChange } from 'angular2/core';
/**
* Angular 2 component for the @see:FlexSheet control.
*
* Use the <b>wj-flex-sheet</b> component to add <b>FlexSheet</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexSheet</b> component is derived from the <b>FlexSheet</b> control and
* inherits all its properties, events and methods.
*
* The <b>wj-flex-sheet</b> component may contain @see:wijmo/wijmo.angular2.grid.sheet.Sheet
* child component.
*/
export declare class WjFlexSheet extends wijmo.grid.sheet.FlexSheet {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexSheet @see:Sheet object.
*
* The <b>wj-sheet</b> component must be contained in a
* @see:wijmo/wijmo.angular2.grid.sheet.WjFlexSheet component.
*
* Use the <b>wj-sheet</b> component to add <b>Sheet</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjSheet</b> component is derived from the <b>Sheet</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjSheet extends wijmo.grid.sheet.Sheet implements OnInit, OnChanges {
    private _flexSheet;
    boundRowCount: number;
    boundColumnCount: number;
    constructor(elRef: ElementRef, injector: Injector, _flexSheet: WjFlexSheet);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): any;
    ngOnInit(): wijmo.grid.sheet.Sheet;
}

import { ElementRef, Injector } from 'angular2/core';
/**
 * Angular 2 component for the @see:FlexChart control.
 *
 * Use the <b>wj-flex-chart</b> component to add <b>FlexChart</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChart</b> component is derived from the <b>FlexChart</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-chart</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartAxis,
 * @see:wijmo/wijmo.angular2.chart.WjFlexChartSeries, @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend
 * and @see:wijmo/wijmo.angular2.chart.WjFlexChartDataLabel child components.
*/
export declare class WjFlexChart extends wijmo.chart.FlexChart {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
 * Angular 2 component for the @see:FlexPie control.
 *
 * Use the <b>wj-flex-pie</b> component to add <b>FlexPie</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexPie</b> component is derived from the <b>FlexPie</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-pie</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend
 * and @see:wijmo/wijmo.angular2.chart.WjFlexPieDataLabel child components.
*/
export declare class WjFlexPie extends wijmo.chart.FlexPie {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Axis control.
 *
 * The <b>wj-flex-chart-axis</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-axis</b> component to add <b>Axis</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAxis</b> component is derived from the <b>Axis</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAxis extends wijmo.chart.Axis {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Legend control.
 *
 * The <b>wj-flex-chart-legend</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-legend</b> component to add <b>Legend</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartLegend</b> component is derived from the <b>Legend</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartLegend extends wijmo.chart.Legend {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:DataLabel control.
 *
 * The <b>wj-flex-chart-data-label</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-data-label</b> component to add <b>DataLabel</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartDataLabel</b> component is derived from the <b>DataLabel</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartDataLabel extends wijmo.chart.DataLabel {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexPie @see:PieDataLabel control.
 *
 * The <b>wj-flex-pie-data-label</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexPie component.
 *
 * Use the <b>wj-flex-pie-data-label</b> component to add <b>PieDataLabel</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexPieDataLabel</b> component is derived from the <b>PieDataLabel</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexPieDataLabel extends wijmo.chart.PieDataLabel {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Series object.
 *
 * The <b>wj-flex-chart-series</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-series</b> component to add <b>Series</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartSeries</b> component is derived from the <b>Series</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartSeries extends wijmo.chart.Series {
    static SiblingId: string;
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:LineMarker control.
 *
 * The <b>wj-flex-line-marker</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-line-marker</b> component to add <b>LineMarker</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartLineMarker</b> component is derived from the <b>LineMarker</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartLineMarker extends wijmo.chart.LineMarker {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:DataPoint objects.
 *
 * The <b>wj-flex-chart-data-point</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-data-point</b> component to add <b>DataPoint</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartDataPoint</b> component is derived from the <b>DataPoint</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartDataPoint extends wijmo.chart.DataPoint {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:PlotArea objects.
 *
 * The <b>wj-flex-chart-plot-area</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
 *
 * Use the <b>wj-flex-chart-plot-area</b> component to add <b>PlotArea</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartPlotArea</b> component is derived from the <b>PlotArea</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartPlotArea extends wijmo.chart.PlotArea {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.chart.interaction</b> module.
*
* <b>wijmo.angular2.chart.interaction</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjInteraction from 'wijmo/wijmo.angular2.chart.interaction';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjInteraction.WjFlexChartRangeSelector, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-range-selector&gt;&lt;/wj-flex-chart-range-selector&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*       &lt;/wj-flex-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:WjFlexChart @see:RangeSelector object.
*
* The <b>wj-flex-chart-range-selector</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
*
* Use the <b>wj-flex-chart-range-selector</b> component to add <b>RangeSelector</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartRangeSelector</b> component is derived from the <b>RangeSelector</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartRangeSelector extends wijmo.chart.interaction.RangeSelector {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexChart @see:ChartGestures object.
*
* The <b>wj-flex-chart-gestures</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
*
* Use the <b>wj-flex-chart-gestures</b> component to add <b>ChartGestures</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartGestures</b> component is derived from the <b>ChartGestures</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartGestures extends wijmo.chart.interaction.ChartGestures {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.chart.animation</b> module.
*
* <b>wijmo.angular2.chart.animation</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnimation from 'wijmo/wijmo.angular2.chart.animation';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjAnimation.WjFlexChartAnimation, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-animation [animationMode]="'Point'"&gt;&lt;/wj-flex-chart-animation&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*       &lt;/wj-flex-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:WjFlexChart @see:ChartAnimation object.
*
* The <b>wj-flex-chart-animation</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart or @see:wijmo/wijmo.angular2.chart.WjFlexPie component.
*
* Use the <b>wj-flex-chart-animation</b> component to add <b>ChartAnimation</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartAnimation</b> component is derived from the <b>ChartAnimation</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnimation extends wijmo.chart.animation.ChartAnimation {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.chart.analytics</b> module.
*
* <b>wijmo.angular2.chart.analytics</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnalitics from 'wijmo/wijmo.angular2.chart.analytics';</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:WjFlexChart @see:TrendLine object.
*
* The <b>wj-flex-chart-trend-line</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.analytics.WjFlexChart component.
*
* Use the <b>wj-flex-chart-trend-line</b> component to add <b>TrendLine</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartTrendLine</b> component is derived from the <b>TrendLine</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartTrendLine extends wijmo.chart.analytics.TrendLine {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexChart @see:MovingAverage object.
*
* The <b>wj-flex-chart-moving-average</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.analytics.WjFlexChart component.
*
* Use the <b>wj-flex-chart-moving-average</b> component to add <b>MovingAverage</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartMovingAverage</b> component is derived from the <b>MovingAverage</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartMovingAverage extends wijmo.chart.analytics.MovingAverage {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexChart @see:YFunctionSeries object.
*
* The <b>wj-flex-chart-y-function-series</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.analytics.WjFlexChart component.
*
* Use the <b>wj-flex-chart-y-function-series</b> component to add <b>YFunctionSeries</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartYFunctionSeries</b> component is derived from the <b>YFunctionSeries</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartYFunctionSeries extends wijmo.chart.analytics.YFunctionSeries {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexChart @see:ParametricFunctionSeries object.
*
* The <b>wj-flex-chart-parametric-function-series</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.analytics.WjFlexChart component.
*
* Use the <b>wj-flex-chart-parametric-function-series</b> component to add <b>ParametricFunctionSeries</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartParametricFunctionSeries</b> component is derived from the <b>ParametricFunctionSeries</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartParametricFunctionSeries extends wijmo.chart.analytics.ParametricFunctionSeries {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.chart.annotation</b> module.
*
* <b>wijmo.angular2.chart.annotation</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnnotation from 'wijmo/wijmo.angular2.chart.annotation';
* import * as wjChart from 'wijmo/wijmo.angular2.chart';
* &nbsp;
* &#64;Component({
*     directives: [wjChart.WjFlexChart, wjAnnotation.WjFlexChartAnnotationLayer,
*            wjAnnotation.WjFlexChartAnnotationCircle, wjChart.WjFlexChartSeries],
*     template: `
*       &lt;wj-flex-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-chart-series [binding]="'y'"&gt;&lt;/wj-flex-chart-series&gt;
*           &lt;wj-flex-chart-annotation-layer&gt;&lt;/wj-flex-chart-annotation-layer&gt;
*               &lt;wj-flex-chart-annotation-circle [radius]="40" [point]="{x: 250, y: 150}"&gt;&lt;/wj-flex-chart-annotation-circle&gt;
*           &lt;/wj-flex-chart-annotation-layer&gt;
*       &lt;/wj-flex-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:WjFlexChart @see:AnnotationLayer object.
*
* The <b>wj-flex-chart-annotation-layer</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.WjFlexChart component.
*
* Use the <b>wj-flex-chart-annotation-layer</b> component to add <b>AnnotationLayer</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartAnnotationLayer</b> component is derived from the <b>AnnotationLayer</b> class and
* inherits all its properties, events and methods.
*
* The <b>wj-flex-chart-annotation-layer</b> component may contain child components derived from the
* @see:AnnotationBase class.
*/
export declare class WjFlexChartAnnotationLayer extends wijmo.chart.annotation.AnnotationLayer {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Text annotation objects.
 *
 * The <b>wj-flex-chart-annotation-text</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-text</b> component to add <b>Text</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationText</b> component is derived from the <b>Text</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationText extends wijmo.chart.annotation.Text {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Ellipse annotation objects.
 *
 * The <b>wj-flex-chart-annotation-ellipse</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-ellipse</b> component to add <b>Ellipse</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationEllipse</b> component is derived from the <b>Ellipse</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationEllipse extends wijmo.chart.annotation.Ellipse {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Rectangle annotation objects.
 *
 * The <b>wj-flex-chart-annotation-rectangle</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-rectangle</b> component to add <b>Rectangle</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationRectangle</b> component is derived from the <b>Rectangle</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationRectangle extends wijmo.chart.annotation.Rectangle {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Line annotation objects.
 *
 * The <b>wj-flex-chart-annotation-line</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-line</b> component to add <b>Line</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationLine</b> component is derived from the <b>Line</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationLine extends wijmo.chart.annotation.Line {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Polygon annotation objects.
 *
 * The <b>wj-flex-chart-annotation-polygon</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-polygon</b> component to add <b>Polygon</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationPolygon</b> component is derived from the <b>Polygon</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationPolygon extends wijmo.chart.annotation.Polygon {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Circle annotation objects.
 *
 * The <b>wj-flex-chart-annotation-circle</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-circle</b> component to add <b>Circle</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationCircle</b> component is derived from the <b>Circle</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationCircle extends wijmo.chart.annotation.Circle {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Square annotation objects.
 *
 * The <b>wj-flex-chart-annotation-square</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-square</b> component to add <b>Square</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationSquare</b> component is derived from the <b>Square</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationSquare extends wijmo.chart.annotation.Square {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Image annotation objects.
 *
 * The <b>wj-flex-chart-annotation-image</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.chart.annotation.WjFlexChartAnnotationLayer component.
 *
 * Use the <b>wj-flex-chart-annotation-image</b> component to add <b>Image</b> annotation objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexChartAnnotationImage</b> component is derived from the <b>Image</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjFlexChartAnnotationImage extends wijmo.chart.annotation.Image {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.chart.finance</b> module.
*
* <b>wijmo.angular2.chart.finance</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjFinance from 'wijmo/wijmo.angular2.chart.finance';
* &nbsp;
* &#64;Component({
*     directives: [wjFinance.WjFinancialChart, wjFinance.WjFinancialChartSeries],
*     template: `
*       &lt;wj-financial-chart [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-financial-chart-series [binding]="'y'"&gt;&lt;/wj-financial-chart-series&gt;
*       &lt;/wj-financial-chart&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:FinancialChart control.
*
* Use the <b>wj-financial-chart</b> component to add <b>FinancialChart</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFinancialChart</b> component is derived from the <b>FinancialChart</b> control and
* inherits all its properties, events and methods.
*
* The <b>wj-financial-chart</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartAxis,
* @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend, @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChartSeries
* child components, as well as all the components from the <b>wijmo.angular2.chart.finance.analytics</b> module.
*/
export declare class WjFinancialChart extends wijmo.chart.finance.FinancialChart {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:FinancialSeries object.
*
* The <b>wj-financial-chart-series</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-financial-chart-series</b> component to add <b>FinancialSeries</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFinancialChartSeries</b> component is derived from the <b>FinancialSeries</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFinancialChartSeries extends wijmo.chart.finance.FinancialSeries {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.chart.finance.analytics</b> module.
*
* <b>wijmo.angular2.chart.finance.analytics</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnalitics from 'wijmo/wijmo.angular2.chart.finance.analytics';</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:WjFinancialChart @see:Fibonacci object.
*
* The <b>wj-flex-chart-fibonacci</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-fibonacci</b> component to add <b>Fibonacci</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartFibonacci</b> component is derived from the <b>Fibonacci</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartFibonacci extends wijmo.chart.finance.analytics.Fibonacci {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:FibonacciArcs object.
*
* The <b>wj-flex-chart-fibonacci-arcs</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-fibonacci-arcs</b> component to add <b>FibonacciArcs</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartFibonacciArcs</b> component is derived from the <b>FibonacciArcs</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartFibonacciArcs extends wijmo.chart.finance.analytics.FibonacciArcs {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:FibonacciFans object.
*
* The <b>wj-flex-chart-fibonacci-fans</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-fibonacci-fans</b> component to add <b>FibonacciFans</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartFibonacciFans</b> component is derived from the <b>FibonacciFans</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartFibonacciFans extends wijmo.chart.finance.analytics.FibonacciFans {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:FibonacciTimeZones object.
*
* The <b>wj-flex-chart-fibonacci-time-zones</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-fibonacci-time-zones</b> component to add <b>FibonacciTimeZones</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartFibonacciTimeZones</b> component is derived from the <b>FibonacciTimeZones</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartFibonacciTimeZones extends wijmo.chart.finance.analytics.FibonacciTimeZones {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:ATR object.
*
* The <b>wj-flex-chart-atr</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-atr</b> component to add <b>ATR</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartAtr</b> component is derived from the <b>ATR</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartAtr extends wijmo.chart.finance.analytics.ATR {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:CCI object.
*
* The <b>wj-flex-chart-cci</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-cci</b> component to add <b>CCI</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartCci</b> component is derived from the <b>CCI</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartCci extends wijmo.chart.finance.analytics.CCI {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:RSI object.
*
* The <b>wj-flex-chart-rsi</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-rsi</b> component to add <b>RSI</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartRsi</b> component is derived from the <b>RSI</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartRsi extends wijmo.chart.finance.analytics.RSI {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:WilliamsR object.
*
* The <b>wj-flex-chart-williams-r</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-williams-r</b> component to add <b>WilliamsR</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartWilliamsR</b> component is derived from the <b>WilliamsR</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartWilliamsR extends wijmo.chart.finance.analytics.WilliamsR {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:Macd object.
*
* The <b>wj-flex-chart-macd</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-macd</b> component to add <b>Macd</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartMacd</b> component is derived from the <b>Macd</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartMacd extends wijmo.chart.finance.analytics.Macd {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:MacdHistogram object.
*
* The <b>wj-flex-chart-macd-histogram</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-macd-histogram</b> component to add <b>MacdHistogram</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartMacdHistogram</b> component is derived from the <b>MacdHistogram</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartMacdHistogram extends wijmo.chart.finance.analytics.MacdHistogram {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:Stochastic object.
*
* The <b>wj-flex-chart-stochastic</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-stochastic</b> component to add <b>Stochastic</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartStochastic</b> component is derived from the <b>Stochastic</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartStochastic extends wijmo.chart.finance.analytics.Stochastic {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:BollingerBands object.
*
* The <b>wj-flex-chart-bollinger-bands</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-bollinger-bands</b> component to add <b>BollingerBands</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartBollingerBands</b> component is derived from the <b>BollingerBands</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartBollingerBands extends wijmo.chart.finance.analytics.BollingerBands {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFinancialChart @see:Envelopes object.
*
* The <b>wj-flex-chart-envelopes</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.finance.WjFinancialChart component.
*
* Use the <b>wj-flex-chart-envelopes</b> component to add <b>Envelopes</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartEnvelopes</b> component is derived from the <b>Envelopes</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartEnvelopes extends wijmo.chart.finance.analytics.Envelopes {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.gauge</b> module.
*
* <b>wijmo.angular2.gauge</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjGauge from 'wijmo/wijmo.angular2.gauge';
* &nbsp;
* &#64;Component({
*     directives: [wjGauge.WjLinearGauge],
*     template: '&lt;wj-linear-gauge [(value)]="amount" [isReadOnly]="false"&gt;&lt;/wj-linear-gauge&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     amount = 0;
* }</pre>
*
*/
import { ElementRef, Injector } from 'angular2/core';
/**
 * Angular 2 component for the @see:LinearGauge control.
 *
 * Use the <b>wj-linear-gauge</b> component to add <b>LinearGauge</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjLinearGauge</b> component is derived from the <b>LinearGauge</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-linear-gauge</b> component may contain @see:wijmo/wijmo.angular2.gauge.WjRange
 * child directive.
*/
export declare class WjLinearGauge extends wijmo.gauge.LinearGauge {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:BulletGraph control.
 *
 * Use the <b>wj-bullet-graph</b> component to add <b>BulletGraph</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjBulletGraph</b> component is derived from the <b>BulletGraph</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-bullet-graph</b> component may contain @see:wijmo/wijmo.angular2.gauge.WjRange
 * child directive.
*/
export declare class WjBulletGraph extends wijmo.gauge.BulletGraph {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:RadialGauge control.
 *
 * Use the <b>wj-radial-gauge</b> component to add <b>RadialGauge</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjRadialGauge</b> component is derived from the <b>RadialGauge</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-radial-gauge</b> component may contain @see:wijmo/wijmo.angular2.gauge.WjRange
 * child directive.
*/
export declare class WjRadialGauge extends wijmo.gauge.RadialGauge {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:WjFlexChart @see:Range object.
 *
 * The <b>wj-range</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.gauge.WjLinearGauge, @see:wijmo/wijmo.angular2.gauge.WjRadialGauge
 * or @see:wijmo/wijmo.angular2.gauge.WjBulletGraph component.
 *
 * Use the <b>wj-range</b> component to add <b>Range</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjRange</b> component is derived from the <b>Range</b> class and
 * inherits all its properties, events and methods.
*/
export declare class WjRange extends wijmo.gauge.Range {
    constructor(elRef: ElementRef, injector: Injector);
}

/**
* Contains Angular 2 components for the <b>wijmo.olap</b> module.
*
* <b>wijmo.angular2.olap</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjOlap from 'wijmo/wijmo.angular2.olap';
* &nbsp;
* &#64;Component({
*     directives: [wjOlap.WjPivotGrid],
*     template: '&lt;wj-pivot-grid [itemsSource]="data"&gt;&lt;/wj-pivot-grid&gt;',
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:PivotGrid control.
*
* Use the <b>wj-pivot-grid</b> component to add <b>PivotGrid</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjPivotGrid</b> component is derived from the <b>PivotGrid</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjPivotGrid extends wijmo.olap.PivotGrid {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:PivotChart control.
*
* Use the <b>wj-pivot-chart</b> component to add <b>PivotChart</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjPivotChart</b> component is derived from the <b>PivotChart</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjPivotChart extends wijmo.olap.PivotChart {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:PivotPanel control.
*
* Use the <b>wj-pivot-panel</b> component to add <b>PivotPanel</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjPivotPanel</b> component is derived from the <b>PivotPanel</b> control and
* inherits all its properties, events and methods.
*/
export declare class WjPivotPanel extends wijmo.olap.PivotPanel {
    constructor(elRef: ElementRef, injector: Injector);
}

import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
export { wjNg2Input };
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
export { wjNg2Grid };
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
export { wjNg2Chart };
import * as wjNg2Gauge from 'wijmo/wijmo.angular2.gauge';
export { wjNg2Gauge };
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
export { wjNg2Core };


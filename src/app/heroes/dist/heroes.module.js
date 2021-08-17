"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroesModule = void 0;
// Componentes
var agregar_component_1 = require("./pages/agregar/agregar.component");
var buscar_component_1 = require("./pages/buscar/buscar.component");
var heroe_component_1 = require("./pages/heroe/heroe.component");
var home_component_1 = require("./pages/home/home.component");
var listado_component_1 = require("./pages/listado/listado.component");
// Módulos
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var heroes_routing_module_1 = require("./heroes-routing.module");
var flex_layout_1 = require("@angular/flex-layout");
var material_module_1 = require("../material/material.module");
var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        core_1.NgModule({
            declarations: [
                agregar_component_1.AgregarComponent,
                buscar_component_1.BuscarComponent,
                heroe_component_1.HeroeComponent,
                home_component_1.HomeComponent,
                listado_component_1.ListadoComponent,
            ],
            imports: [
                common_1.CommonModule,
                heroes_routing_module_1.HeroesRoutingModule,
                flex_layout_1.FlexLayoutModule,
                material_module_1.MaterialModule,
            ]
        })
    ], HeroesModule);
    return HeroesModule;
}());
exports.HeroesModule = HeroesModule;

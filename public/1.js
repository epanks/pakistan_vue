(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Paket.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Paket.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "paket",
  data: function data() {
    return {
      paketData: {
        nmpaket: "",
        pagurmp: "",
        trgoutput: "",
        satoutput: "",
        trgoutcome: "",
        satourcome: ""
      }
    };
  },
  methods: {
    hideNewPaketModal: function hideNewPaketModal() {
      this.$refs.newPaketModal.hide();
    },
    showNewPaketModal: function showNewPaketModal() {
      this.$refs.newPaketModal.show();
    },
    createPaket: function createPaket() {
      console.log("form submitted");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Paket.vue?vue&type=template&id=fa5ece8c&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Paket.vue?vue&type=template&id=fa5ece8c& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Dashboard")])],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Paket")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              on: { click: _vm.showNewPaketModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }, [
                _vm._v("Create Paket")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer small text-muted" }, [
          _vm._v("\n            Updated yesterday at 11:59 PM\n        ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newPaketModal",
          attrs: { "hide-footer": "", title: "Create New Paket" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createPaket($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nmpaket" } }, [
                    _vm._v("Nama Paket")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paketData.nmpaket,
                        expression: "paketData.nmpaket"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nmpaket",
                      placeholder: "Nama Paket"
                    },
                    domProps: { value: _vm.paketData.nmpaket },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.paketData, "nmpaket", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "pagurmp" } }, [
                    _vm._v("Pagu Paket")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paketData.pagurmp,
                        expression: "paketData.pagurmp"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "pagurmp",
                      placeholder: "Pagu Paket"
                    },
                    domProps: { value: _vm.paketData.pagurmp },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.paketData, "pagurmp", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "trgoutput" } }, [
                    _vm._v("Output")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paketData.trgoutput,
                        expression: "paketData.trgoutput"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "trgoutput",
                      placeholder: "Output"
                    },
                    domProps: { value: _vm.paketData.trgoutput },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.paketData,
                          "trgoutput",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "satoutput" } }, [
                    _vm._v("Satuan Output")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paketData.satoutput,
                        expression: "paketData.satoutput"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "satoutput",
                      placeholder: "Satuan Output"
                    },
                    domProps: { value: _vm.paketData.satoutput },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.paketData,
                          "satoutput",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "trgoutcome" } }, [
                    _vm._v("Outcome")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paketData.trgoutcome,
                        expression: "paketData.trgoutcome"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      id: "trgoutcome",
                      placeholder: "Outcome"
                    },
                    domProps: { value: _vm.paketData.trgoutcome },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.paketData,
                          "trgoutcome",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "trgoutcome" } }, [
                    _vm._v("Satuan Outcome")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paketData.trgoutcome,
                        expression: "paketData.trgoutcome"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "trgoutcome",
                      placeholder: "Satuan Outcome"
                    },
                    domProps: { value: _vm.paketData.trgoutcome },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.paketData,
                          "trgoutcome",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewPaketModal }
                    },
                    [
                      _vm._v(
                        "\n                        Cancel\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save\n                    ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n                Daftar Paket\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "table-responsive" }, [
        _c(
          "table",
          {
            staticClass: "table table-bordered",
            attrs: { id: "dataTable", width: "100%", cellspacing: "0" }
          },
          [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("No")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nama Paket")]),
                _vm._v(" "),
                _c("th", [_vm._v("Pagu")]),
                _vm._v(" "),
                _c("th", [_vm._v("Output")]),
                _vm._v(" "),
                _c("th", [_vm._v("Satuan Output")]),
                _vm._v(" "),
                _c("th", [_vm._v("Outcome")]),
                _vm._v(" "),
                _c("th", [_vm._v("Satuan Outcome")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _c("th", [_vm._v("No")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nama Paket")]),
                _vm._v(" "),
                _c("th", [_vm._v("Pagu")]),
                _vm._v(" "),
                _c("th", [_vm._v("Output")]),
                _vm._v(" "),
                _c("th", [_vm._v("Satuan Output")]),
                _vm._v(" "),
                _c("th", [_vm._v("Outcome")]),
                _vm._v(" "),
                _c("th", [_vm._v("Satuan Outcome")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("1")]),
                _vm._v(" "),
                _c("td", [_vm._v("Customer Support")]),
                _vm._v(" "),
                _c("td", [_vm._v("New York")]),
                _vm._v(" "),
                _c("td", [_vm._v("27")]),
                _vm._v(" "),
                _c("td", [_vm._v("2011/01/25")]),
                _vm._v(" "),
                _c("td", [_vm._v("$112,000")]),
                _vm._v(" "),
                _c("td", [_vm._v("$112,000")]),
                _vm._v(" "),
                _c("td", [
                  _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                    _c("span", { staticClass: "fa fa-edit" })
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-danger btn-sm" }, [
                    _c("span", { staticClass: "fa fa-trash" })
                  ])
                ])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Paket.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Paket.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paket_vue_vue_type_template_id_fa5ece8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paket.vue?vue&type=template&id=fa5ece8c& */ "./resources/js/views/Paket.vue?vue&type=template&id=fa5ece8c&");
/* harmony import */ var _Paket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paket.vue?vue&type=script&lang=js& */ "./resources/js/views/Paket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paket_vue_vue_type_template_id_fa5ece8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paket_vue_vue_type_template_id_fa5ece8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Paket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Paket.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Paket.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Paket.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Paket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Paket.vue?vue&type=template&id=fa5ece8c&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Paket.vue?vue&type=template&id=fa5ece8c& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paket_vue_vue_type_template_id_fa5ece8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Paket.vue?vue&type=template&id=fa5ece8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Paket.vue?vue&type=template&id=fa5ece8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paket_vue_vue_type_template_id_fa5ece8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paket_vue_vue_type_template_id_fa5ece8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
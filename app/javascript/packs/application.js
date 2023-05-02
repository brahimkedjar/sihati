import $ from 'jquery';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import toastr from 'toastr'

import './index.css';
window.jQuery = $;
window.$ = $;

require('turbolinks').start()
require('@rails/activestorage').start()

toastr.options = {
  closeButton: false,
  debug: false,
  positionClass: "toast-bottom-full-width",
  positionClass: "toast-top-right",
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
}

global.toastr = toastr

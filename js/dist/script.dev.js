"use strict";

// ?? animation (wowjs) adding classes to sections [using jQuery]
//  wow  animate__animated animate__fadeIn   data-wow-delay="0.4s"
var $section = $(".page-body section");
var $sectionTitle = $(".section-title");
var $banner = $(".page-body section.banner");
var $card = $(".page-body .card");
var $cardTitle = $(".page-body .card a.text-dark");
var $feature = $(".page-body .feature-item");
var $featureIcon = $(".page-body .feature-icon");
var $featureTitle = $(".page-body .feature-details h3");
var $featureText = $(".page-body .feature-details p");
var $pricingRow = $(".page-body .pricing-table .pricing-item");
var $pricingBtn = $(".page-body .pricing-table .pricing-compare");
var $downloadBtn = $("section.download .banner .layer .btn-container .btn");
var $footer = $("footer.page-footer");
var $footerSocialIcon = $("footer.page-footer section.social-media a i");
$section.addClass("wow  animate__animated animate__fadeIn");
$section.attr("data-wow-delay", "0.2s");
$sectionTitle.addClass("wow  animate__animated animate__fadeIn");
$sectionTitle.attr("data-wow-delay", "0.17s");
$card.addClass("wow  animate__animated animate__fadeIn");
$card.attr("data-wow-delay", "0.3s");
$cardTitle.addClass("wow  animate__animated animate__fadeInUp");
$cardTitle.attr("data-wow-delay", "0.3s");
$feature.addClass("wow  animate__animated animate__fadeIn");
$feature.attr("data-wow-delay", "0.3s");
$featureIcon.addClass("wow  animate__animated animate__fadeInUp");
$featureIcon.attr("data-wow-delay", "0.4s");
$featureTitle.addClass("wow  animate__animated animate__fadeInUp");
$featureTitle.attr("data-wow-delay", "0.1s");
$featureText.addClass("wow  animate__animated animate__fadeInUp");
$featureText.attr("data-wow-delay", "0.1s"); // $pricingRow.addClass("wow  animate__animated animate__fadeInUp");

$pricingBtn.addClass("wow  animate__animated animate__fadeIn");
$downloadBtn.addClass("wow  animate__animated animate__fadeInUp");
$downloadBtn.attr("data-wow-delay", "0.1s");
$footer.addClass("wow  animate__animated animate__fadeIn");
$footer.attr("data-wow-delay", "0.2s");
$footerSocialIcon.addClass("wow  animate__animated animate__fadeIn");
$footerSocialIcon.attr("data-wow-delay", "0.1s"); // ?? allow english only to store link (register)

$('.allow-english-only').keypress(function (e) {
  // Accept only alpha numerics, no special characters
  var regex = new RegExp("^[a-zA-Z0-9._-]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);

  if (regex.test(str)) {
    return true;
  }

  e.preventDefault();
  return false;
}); // ?? add padding to avoid footer

var notFooter = document.querySelector('.not-footer');
var foooter = document.querySelector("footer.page-footer");
notFooter.style.paddingBottom = foooter.offsetHeight + 50; // ?? editing error messege in arabic version

$("html:lang(ar) form .form-group input").attr("oninvalid", "this.setCustomValidity('إملأ هذا الحقل رجاءًا');"); // setting error to null after typing

$("form .form-group input").attr("onchange", "this.setCustomValidity('');"); // ?? FAQ

$(document).ready(function () {
  $(".question").click(function () {
    $(this).next().slideToggle(); // toggleClass()

    $('.answer').not($(this).next()).slideUp();
  });
}); // ?? popover using Bootstrap

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
}); // !! loader (will be removed)

var body = document.querySelector('body');
window.addEventListener('load', function () {
  setTimeout(function () {
    body.classList.add("loaded");
  }, 2500);
}); // ?? notifaction

var notification = document.querySelector(".notification-container");
var closeButton = document.querySelector(".notification-container .close-btn");
closeButton.addEventListener("click", function () {
  notification.classList.add("closed");
});
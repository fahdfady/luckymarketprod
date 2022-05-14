// ?? animation (wowjs) adding classes to sections [using jQuery]

//  wow  animate__animated animate__fadeIn   data-wow-delay="0.4s"

let $section = $(".page-body section");
let $sectionTitle = $(".section-title");
let $banner = $(".page-body section.banner");
let $card = $(".page-body .card");
let $cardTitle = $(".page-body .card a.text-dark");
let $feature = $(".page-body .feature-item");
let $featureIcon = $(".page-body .feature-icon");
let $featureTitle = $(".page-body .feature-details h3");
let $featureText = $(".page-body .feature-details p");
let $pricingRow = $(".page-body .pricing-table .pricing-item");
let $pricingBtn = $(".page-body .pricing-table .pricing-compare");
let $downloadBtn = $("section.download .banner .layer .btn-container .btn");
let $footer = $("footer.page-footer");
let $footerSocialIcon = $("footer.page-footer section.social-media a i");

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
$featureText.attr("data-wow-delay", "0.1s");
// $pricingRow.addClass("wow  animate__animated animate__fadeInUp");
$pricingBtn.addClass("wow  animate__animated animate__fadeIn");
$downloadBtn.addClass("wow  animate__animated animate__fadeInUp");
$downloadBtn.attr("data-wow-delay", "0.1s");
$footer.addClass("wow  animate__animated animate__fadeIn");
$footer.attr("data-wow-delay", "0.2s");
$footerSocialIcon.addClass("wow  animate__animated animate__fadeIn");
$footerSocialIcon.attr("data-wow-delay", "0.1s");


// ?? allow english only to store link (register)
$('.allow-english-only').keypress(function (e) {  // Accept only alpha numerics, no special characters
    let regex = new RegExp("^[a-zA-Z0-9._-]+$");
    let str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }

    e.preventDefault();
    return false;
});

// ?? add padding to avoid footer
let notFooter = document.querySelector('.not-footer');
let foooter = document.querySelector("footer.page-footer");

notFooter.style.paddingBottom = foooter.offsetHeight + 50;

// ?? editing error messege in arabic version
$("html:lang(ar) form .form-group input").attr("oninvalid", "this.setCustomValidity('إملأ هذا الحقل رجاءًا');");
// setting error to null after typing
$("form .form-group input").attr("onchange", "this.setCustomValidity('');");

// ?? FAQ
$(document).ready(function () {
    $(".question").click(function () {

        $(this).next().slideToggle();

        // toggleClass()
        $('.answer').not(

            $(this).next()).slideUp();

    })
});

// ?? popover using Bootstrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
})

// !! loader (will be removed)
let body = document.querySelector('body');

window.addEventListener('load', function () {
    setTimeout(function () { body.classList.add("loaded") }, 2500);
});

// ?? notifaction
const notification = document.querySelector(".notification-container")
const closeButton = document.querySelector(".notification-container .close-btn");

closeButton.addEventListener("click", function () {
    notification.classList.add("closed");
});